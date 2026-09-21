"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type HeroShowcaseProps = {
  images: string[];
  /**
   * Describes the artwork for screen readers and search engines. Required in
   * practice for the single-image branch, where the composition carries real
   * content; the collage cards stay decorative.
   */
  alt?: string;
  /**
   * Responsive sizes hint for the single-image branch. Pass one that matches
   * where the caller actually shows the artwork — if it is hidden at some
   * widths, say so here so those viewports do not download it for nothing.
   */
  sizes?: string;
};

/** Offsets/rotations for the stacked collage, back-most card first. */
const LAYOUT = [
  {
    className: "left-[4%] top-[6%] h-[46%] w-[52%]",
    rotate: -5,
    depth: 0.35,
    priority: false,
  },
  {
    className: "right-[3%] top-[20%] h-[42%] w-[48%]",
    rotate: 4,
    depth: 0.7,
    priority: false,
  },
  {
    className: "left-[14%] bottom-[6%] h-[48%] w-[62%]",
    rotate: -2,
    depth: 1,
    priority: true,
  },
];

export default function HeroShowcase({
  images,
  alt = "",
  sizes = "(min-width: 1024px) 96vw, 100vw",
}: HeroShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [interactive, setInteractive] = useState(false);
  const single = images.length === 1;

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setInteractive(fine.matches && !motion.matches);
    sync();
    fine.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!interactive || single) return;
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      target.x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      target.y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        // A single composed image is never tilted — only collage cards are.
        const d = single ? 0.5 : LAYOUT[i]?.depth ?? 0.5;
        const rot = single ? 0 : LAYOUT[i]?.rotate ?? 0;
        card.style.transform = `translate3d(${current.x * 14 * d}px, ${
          current.y * 10 * d
        }px, 0) rotate(${rot}deg)`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [interactive, single]);

  const slots = LAYOUT.map((slot, i) => ({ slot, src: images[i] }));

  // A single file is treated as one composed piece of artwork (e.g. a designed
  // banner) rather than a collage card: shown whole, uncropped, unframed.
  if (images.length === 1) {
    return (
      <div ref={containerRef} className="relative h-full w-full">
        {/*
          No edge feather here: this artwork carries its own background plus
          content in every corner (logo, service icons), so a mask would fade
          real content rather than a flat ground.
        */}
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes={sizes}
          quality={95}
          className="object-contain object-center"
          priority
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {slots.map(({ slot, src }, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className={`absolute overflow-hidden rounded-lg border border-white/10 bg-ink2 shadow-[0_24px_60px_rgba(4,14,35,0.5)] ${slot.className}`}
          style={{ transform: `rotate(${slot.rotate}deg)` }}
        >
          {src ? (
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover"
              priority={slot.priority}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink3/80 to-ink2">
              <span className="px-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-textDim/70">
                Add image
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
