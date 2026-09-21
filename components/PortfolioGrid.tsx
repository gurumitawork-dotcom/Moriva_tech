"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PortfolioProjectCard from "./PortfolioProjectCard";
import { allProjects, projectFilters, type ProjectFilter } from "@/data/projects";

type Filter = "All Projects" | ProjectFilter;

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All Projects");
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const filters: Filter[] = ["All Projects", ...projectFilters];

  const visible = useMemo(
    () =>
      filter === "All Projects"
        ? allProjects
        : allProjects.filter((p) => p.filters.includes(filter)),
    [filter]
  );

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
  }, [visible.length]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Project filters"
        className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {filters.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(item)}
              data-cursor-hover
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-[0.8125rem] font-semibold transition-all duration-200 sm:min-h-12 sm:text-sm ${
                selected
                  ? "border-accent/40 bg-gradient-to-r from-accent to-accentDim text-white shadow-[0_0_28px_rgba(245,146,30,0.35)]"
                  : "border-lineDark bg-surface text-inkText hover:border-accent/30 hover:text-accent"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Grid — desktop */}
      <div className="mt-8 hidden gap-6 lg:grid lg:grid-cols-3 lg:gap-7">
        {visible.map((project) => (
          <PortfolioProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Carousel — mobile and tablet */}
      <div className="mt-8 lg:hidden">
        <div className="mb-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous project"
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
            aria-label="Next project"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-lineDark bg-surface text-inkText transition-colors hover:border-accent/40 hover:text-accent disabled:pointer-events-none disabled:opacity-35"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-label="Projects"
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {visible.map((project) => (
            <div key={project.id} className="w-[min(22rem,86vw)] shrink-0 snap-start">
              <PortfolioProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
