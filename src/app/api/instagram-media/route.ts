import { NextRequest, NextResponse } from "next/server";

function isAllowedInstagramCdn(rawUrl: string): boolean {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== "https:") return false;
    const host = parsed.hostname.toLowerCase();
    return (
      host.endsWith(".cdninstagram.com") ||
      host.endsWith(".fbcdn.net") ||
      host === "scontent.cdninstagram.com"
    );
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const targetUrl = request.nextUrl.searchParams.get("url") || "";
  if (!isAllowedInstagramCdn(targetUrl)) {
    return NextResponse.json({ error: "Invalid media URL" }, { status: 400 });
  }

  try {
    const headers: HeadersInit = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    };

    const range = request.headers.get("range");
    if (range) {
      headers["Range"] = range;
    }

    const upstream = await fetch(targetUrl, { headers });
    if (!upstream.ok && upstream.status !== 206) {
      return NextResponse.json(
        { error: "Upstream media fetch failed" },
        { status: upstream.status }
      );
    }

    const responseHeaders = new Headers();
    const contentType = upstream.headers.get("content-type");
    const contentLength = upstream.headers.get("content-length");
    const contentRange = upstream.headers.get("content-range");
    const acceptRanges = upstream.headers.get("accept-ranges");

    if (contentType) responseHeaders.set("Content-Type", contentType);
    if (contentLength) responseHeaders.set("Content-Length", contentLength);
    if (contentRange) responseHeaders.set("Content-Range", contentRange);
    if (acceptRanges) responseHeaders.set("Accept-Ranges", acceptRanges);
    responseHeaders.set("Cache-Control", "public, max-age=3600");

    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to proxy media" },
      { status: 502 }
    );
  }
}
