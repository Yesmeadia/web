export interface InstagramReelItem {
  id: string;
  /** Paste full Instagram Reel URL, e.g. "https://www.instagram.com/reel/ABC123xyz/" */
  url: string;
  thumbnailUrl?: string;
  videoUrl?: string;
}

export const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/yes_india_foundation_/";
export const INSTAGRAM_REELS_URL =
  "https://www.instagram.com/yes_india_foundation_/reels/";
export const INSTAGRAM_HANDLE = "@yes_india_foundation_";

export function extractReelId(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /instagram\.com\/(?:[^/]+\/)?(?:reel|reels|p)\/([A-Za-z0-9_-]+)/i
  );
  return match ? match[1] : null;
}

/**
 * Configure up to 6 Instagram Reel URLs from @yes_india_foundation_.
 * Alternatively, set INSTAGRAM_ACCESS_TOKEN in .env.local to auto-fetch the latest 6 reels.
 */
export const instagramReels: InstagramReelItem[] = [
  {
    id: "reel-1",
    url: "https://www.instagram.com/yes_india_foundation_/reel/DB9EhckSOgW/",
  },
  {
    id: "reel-2",
    url: "https://www.instagram.com/yes_india_foundation_/reel/DgIE4RbTG6T/",
  },
  {
    id: "reel-3",
    url: "https://www.instagram.com/yes_india_foundation_/reel/DgH-moJKugG/",
  },
  {
    id: "reel-4",
    url: "https://www.instagram.com/yes_india_foundation_/reel/DgDGymKyuiy/",
  },
  {
    id: "reel-5",
    url: "https://www.instagram.com/yes_india_foundation_/reel/DgC8i2aS7ZJ/",
  },
  {
    id: "reel-6",
    url: "https://www.instagram.com/yes_india_foundation_/reel/DgCrd7lNZrJ/",
  },
];
