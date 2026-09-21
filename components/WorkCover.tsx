"use client";

import { useState } from "react";
import WorkCoverCanvas from "./WorkCoverCanvas";
import RotatingBadge from "./RotatingBadge";
import { work } from "@/data/work";

export default function WorkCover() {
  const [playing, setPlaying] = useState(true);
  const featured = work[0];

  const toggle = () => {
    const next = !playing;
    setPlaying(next);
    window.dispatchEvent(
      new CustomEvent("moriva:videostate", { detail: { playing: next } })
    );
  };

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-4 md:px-6">
      <div
        data-cursor-play
        onClick={toggle}
        role="button"
        aria-label={playing ? "Pause featured case study" : "Play featured case study"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className="group relative h-[70vh] w-full overflow-hidden rounded-lg border border-white/15"
      >
        <WorkCoverCanvas playing={playing} />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,35,71,0.55) 0%, rgba(11,35,71,0) 35%, rgba(11,35,71,0.35) 100%)",
          }}
        />

        <div className="glass absolute left-6 top-6 rounded-lg px-5 py-4 md:left-10 md:top-10 md:px-7 md:py-5">
          <span className="eyebrow">Featured case study</span>
          <h3 className="mt-2 font-sora text-xl font-800 text-white md:text-3xl">
            {featured.name} — {featured.category}
          </h3>
        </div>

        <RotatingBadge
          text="Watch reel"
          size={92}
          className="absolute bottom-6 right-6 text-white/80 md:bottom-10 md:right-10"
          icon={
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 1.5L14 8L3 14.5V1.5Z" fill="white" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
