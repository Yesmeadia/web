"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";
import {
  extractReelId,
  INSTAGRAM_HANDLE,
  INSTAGRAM_REELS_URL,
  instagramReels as fallbackReels,
  type InstagramReelItem,
} from "@/utils/instagramReels";
import "./InstagramReels.scss";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const InstagramReels = () => {
  const [reels, setReels] = useState<InstagramReelItem[]>(
    fallbackReels.slice(0, 6)
  );
  const [activeReel, setActiveReel] = useState<InstagramReelItem | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/instagram-reels")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { reels?: InstagramReelItem[] } | null) => {
        if (active && data?.reels?.length) {
          setReels(data.reels.slice(0, 6));
        }
      })
      .catch(() => {
        // Keep fallback reels
      });

    return () => {
      active = false;
    };
  }, []);

  const activeReelId = activeReel ? extractReelId(activeReel.url) : null;

  return (
    <section className="instagram_reels_section" aria-label="Instagram Reels">
      <div className="reels_header">
        <div className="reels_heading_group">
          <h2>Instagram Reels</h2>
          <p>Latest moments and stories from {INSTAGRAM_HANDLE}</p>
        </div>

        <Link
          href={INSTAGRAM_REELS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reels_profile_link"
        >
          <InstagramIcon size={18} />
          <span>Follow {INSTAGRAM_HANDLE}</span>
        </Link>
      </div>

      <div className="reels_row">
        <div
          className={`reels_track ${activeReel ? "reels_track--paused" : ""}`}
        >
          {[...reels, ...reels].map((reel, index) => {
            const reelIndex = index % reels.length;
            const isClone = index >= reels.length;
            const reelId = extractReelId(reel.url);

            return (
              <div
                key={`${reel.id}-${isClone ? "clone" : "orig"}`}
                className={`reel_card ${isClone ? "reel_card_clone" : ""}`}
                aria-hidden={isClone || undefined}
              >
                {reel.thumbnailUrl ? (
                  <button
                    type="button"
                    className="reel_thumb_button"
                    onClick={() => setActiveReel(reel)}
                    tabIndex={isClone ? -1 : undefined}
                    aria-label={`Play Instagram Reel ${reelIndex + 1}`}
                  >
                    <img
                      src={reel.thumbnailUrl}
                      alt={`Instagram Reel ${reelIndex + 1}`}
                      className="reel_thumb_img"
                      loading="lazy"
                    />
                    <span className="reel_play_overlay">
                      <Play size={26} fill="currentColor" />
                    </span>
                  </button>
                ) : reelId ? (
                  <button
                    type="button"
                    className="reel_thumb_button reel_loading_card"
                    onClick={() => setActiveReel(reel)}
                    tabIndex={isClone ? -1 : undefined}
                    aria-label={`Play Instagram Reel ${reelIndex + 1}`}
                  >
                    <span className="reel_play_overlay">
                      <Play size={26} fill="currentColor" />
                    </span>
                  </button>
                ) : (
                  <Link
                    href={INSTAGRAM_REELS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isClone ? -1 : undefined}
                    className="reel_placeholder_card"
                  >
                    <span className="reel_badge">
                      <InstagramIcon size={13} />
                      Reel
                    </span>

                    <div className="reel_play_center">
                      <Play size={24} fill="currentColor" />
                    </div>

                    <div className="reel_card_footer">
                      <span className="reel_handle">{INSTAGRAM_HANDLE}</span>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {activeReel && (
        <div
          className="reel_modal_backdrop"
          onClick={() => setActiveReel(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Instagram Reel Player"
        >
          <div
            className="reel_modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="reel_modal_close"
              onClick={() => setActiveReel(null)}
              aria-label="Close reel player"
            >
              <X size={20} />
            </button>

            {activeReel.videoUrl ? (
              <video
                src={activeReel.videoUrl}
                poster={activeReel.thumbnailUrl}
                className="reel_modal_video"
                controls
                autoPlay
                playsInline
              />
            ) : activeReelId ? (
              <iframe
                src={`https://www.instagram.com/reel/${activeReelId}/embed/`}
                title="Instagram Reel Player"
                className="reel_modal_iframe"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramReels;
