"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import WorkCover from "./WorkCover";
import RotatingBadge from "./RotatingBadge";
import { work } from "@/data/work";

export default function WorkCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      setDragging(true);
      startX.current = e.pageX - track.offsetLeft;
      scrollStart.current = track.scrollLeft;
    };

    const onMouseLeaveOrUp = () => {
      isDown.current = false;
      setDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX.current) * 1.2;
      track.scrollLeft = scrollStart.current - walk;
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseLeaveOrUp);
    track.addEventListener("mouseleave", onMouseLeaveOrUp);
    track.addEventListener("mousemove", onMouseMove);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseLeaveOrUp);
      track.removeEventListener("mouseleave", onMouseLeaveOrUp);
      track.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section id="work" className="relative overflow-hidden bg-paper pb-14 pt-24 md:pb-16 md:pt-32">
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Selected work</span>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-2xl">
          <h2 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
            Products and platforms we&apos;ve engineered.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-inkTextDim">
            A look at recent work across fintech, healthcare, logistics and
            retail.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-16">
        <WorkCover />
      </Reveal>

      <Reveal delay={0.2} className="mt-16">
        <div
          ref={trackRef}
          data-cursor-drag
          className={`no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:px-10 ${
            dragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          {work.map((item) => (
            <div
              key={item.id}
              data-cursor-hover
              className="group relative h-[420px] w-[82vw] shrink-0 snap-start overflow-hidden rounded-md md:h-[520px] md:w-[420px]"
              style={{ background: item.gradient }}
            >
              <div
                className="absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,35,71,0.85) 0%, rgba(11,35,71,0) 100%)",
                }}
              />
              <RotatingBadge
                text="View project"
                size={104}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
              <div className="glass absolute bottom-5 left-5 right-5 rounded-lg px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {item.category}
                </span>
                <h3 className="mt-1 font-sora text-xl font-700 text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
