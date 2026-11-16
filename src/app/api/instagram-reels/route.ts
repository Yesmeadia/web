import { NextResponse } from "next/server";
import {
  extractReelId,
  instagramReels,
  type InstagramReelItem,
} from "@/utils/instagramReels";

interface GraphMediaItem {
  id: string;
  media_type?: string;
  media_product_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
}

function unescapeEmbedUrl(raw: string): string {
  return raw
    .replace(/\\\\\//g, "/")
    .replace(/\\\//g, "/")
    .replace(/\\u0025/g, "%")
    .replace(/\\u0026/g, "&");
}

function toProxiedUrl(cdnUrl?: string): string | undefined {
  if (!cdnUrl) return undefined;
  return `/api/instagram-media?url=${encodeURIComponent(cdnUrl)}`;
}

async function fetchReelMediaFromEmbed(
  reel: InstagramReelItem
): Promise<InstagramReelItem> {
  const reelId = extractReelId(reel.url);
  if (!reelId) return reel;

  try {
    const res = await fetch(`https://www.instagram.com/reel/${reelId}/embed/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return reel;
    const html = await res.text();

    const thumbMatch =
      html.match(/\\"display_url\\":\\"([^"]+)\\"/) ||
      html.match(/"display_url":"([^"]+)"/);
    const videoMatch =
      html.match(/\\"video_url\\":\\"([^"]+)\\"/) ||
      html.match(/"video_url":"([^"]+)"/);

    const rawThumb = thumbMatch ? unescapeEmbedUrl(thumbMatch[1]) : undefined;
    const rawVideo = videoMatch ? unescapeEmbedUrl(videoMatch[1]) : undefined;

    return {
      ...reel,
      thumbnailUrl: toProxiedUrl(rawThumb) || reel.thumbnailUrl,
      videoUrl: toProxiedUrl(rawVideo) || reel.videoUrl,
    };
  } catch {
    return reel;
  }
}

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (token) {
    try {
      const endpoint = new URL("https://graph.instagram.com/me/media");
      endpoint.searchParams.set(
        "fields",
        "id,media_type,media_product_type,media_url,thumbnail_url,permalink"
      );
      endpoint.searchParams.set("limit", "20");
      endpoint.searchParams.set("access_token", token);

      const res = await fetch(endpoint.toString(), {
        next: { revalidate: 3600 },
      });

      if (res.ok) {
        const data = (await res.json()) as { data?: GraphMediaItem[] };
        const reels: InstagramReelItem[] = (data.data || [])
          .filter(
            (item) =>
              item.media_product_type === "REELS" ||
              item.media_type === "VIDEO" ||
              item.permalink?.includes("/reel/")
          )
          .slice(0, 6)
          .map((item) => ({
            id: item.id,
            url: item.permalink || "",
            thumbnailUrl: toProxiedUrl(item.thumbnail_url),
            videoUrl: toProxiedUrl(item.media_url),
          }));

        if (reels.length > 0) {
          return NextResponse.json({ source: "instagram", reels });
        }
      }
    } catch (error) {
      console.error("Failed to fetch Instagram Graph API reels:", error);
    }
  }

  const enriched = await Promise.all(
    instagramReels.slice(0, 6).map(fetchReelMediaFromEmbed)
  );

  return NextResponse.json({
    source: "embed",
    reels: enriched,
  });
}
