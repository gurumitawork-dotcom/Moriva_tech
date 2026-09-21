"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import ProjectCard from "./ProjectCard";
import { portfolio } from "@/data/portfolio";

export default function PortfolioSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-paper pb-14 pt-20 md:pb-16 md:pt-24"
    >
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-4xl font-800 leading-[1.1] tracking-tight text-inkText md:text-6xl">
              <span>Featured</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                projects.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
              Websites, platforms and applications we have designed, built and
              shipped — with real screenshots from the live builds.
            </p>
          </Reveal>
        </div>

        {/* Grid — desktop */}
        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3 lg:gap-7">
          {portfolio.map((project, i) => (
            <Reveal key={project.id} delay={0.05 * i} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Full portfolio */}
        <Reveal delay={0.1} className="mt-10 hidden justify-center lg:flex">
          <Link
            href="/portfolio"
            data-cursor-hover
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-6 text-sm font-700 text-accent transition-colors hover:border-accent/60 hover:bg-accent hover:text-white"
          >
            View full portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>

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
            aria-label="Featured projects"
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {portfolio.map((project) => (
              <div
                key={project.id}
                className="w-[min(22rem,86vw)] shrink-0 snap-start"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <Link
            href="/portfolio"
            data-cursor-hover
            className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-6 text-sm font-700 text-accent transition-colors hover:border-accent/60 hover:bg-accent hover:text-white"
          >
            View full portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
