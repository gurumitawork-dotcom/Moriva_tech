"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import type { Service } from "@/data/services";

export default function ServiceDeck({ services }: { services: Service[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [spread, setSpread] = useState(176);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const center = (services.length - 1) / 2;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      setAtStart(track.scrollLeft <= 8);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
    };

    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  /* The fan must never overflow its column: cards are 260px wide, so the
     outermost pair sits at 1.5 * spread and needs 40px of rotation overhang. */
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const measure = () => {
      const usable = deck.clientWidth - 260 - 80;
      const steps = services.length - 1;
      setSpread(Math.max(96, Math.min(176, usable / steps)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(deck);
    return () => observer.disconnect();
  }, [services.length]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <>
      {/* Fanned deck — desktop */}
      <div
        ref={deckRef}
        className="relative mx-auto hidden h-[24rem] w-full items-center justify-center lg:flex"
      >
        {services.map((service, i) => {
          const offset = i - center;
          const isHovered = hovered === i;
          const transform = isHovered
            ? `translateX(${offset * spread}px) translateY(-20px) rotate(0deg) scale(1.06)`
            : `translateX(${offset * spread}px) translateY(${Math.abs(offset) * 14}px) rotate(${
                offset * 6
              }deg)`;

          return (
            <div
              key={service.number}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="absolute transition-transform duration-500 ease-out"
              style={{
                transform,
                zIndex: isHovered ? 50 : 10 - Math.round(Math.abs(offset) * 2),
              }}
            >
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>

      {/* Carousel — mobile and tablet */}
      <div className="lg:hidden">
        <div className="mb-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous service"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-lineDark bg-surface text-inkText transition-colors hover:border-accent/40 hover:text-accent disabled:pointer-events-none disabled:opacity-35"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Next service"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-lineDark bg-surface text-inkText transition-colors hover:border-accent/40 hover:text-accent disabled:pointer-events-none disabled:opacity-35"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {services.map((service) => (
            <div key={service.number} className="snap-start">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
