"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioProject } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  const [active, setActive] = useState(0);
  const shots = project.shots;
  const shot = shots[active];

  /* The link follows the screenshot on show, so a Rohini shot never points at NVK. */
  const liveHref = shot?.href ?? project.liveHref;
  const liveLabel = shot
    ? shot.linkLabel ?? shot.label.split("/")[0]
    : project.liveLabel ?? "the live site";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-lineDark bg-surface shadow-[0_2px_16px_rgba(14,42,92,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_50px_rgba(14,42,92,0.16)]">
      {/* Browser chrome */}
      <div className="overflow-hidden border-b border-lineDark bg-ink2">
        <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-2 truncate rounded-full bg-white/[0.07] px-3 py-1 text-[0.625rem] font-medium tracking-wide text-white/50">
            {shot ? shot.label : project.privatePanel?.note}
          </div>
        </div>

        <div className="relative aspect-[16/10] bg-ink2">
          {shot ? (
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 1024px) 88vw, 430px"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full flex-col justify-center gap-2 p-6">
              <div className="grid grid-cols-2 gap-2">
                {project.privatePanel?.roles.map((role) => (
                  <span
                    key={role}
                    className="truncate rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-2 text-[0.6875rem] font-medium text-white/70"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink2/60 to-transparent" />
        </div>
      </div>

      {/* Meta bar — always rendered so every card's body starts at the same height */}
      <div className="flex h-9 items-center justify-center gap-0.5 border-b border-lineDark bg-surface px-2">
        {shots.length > 1 ? (
          <>
            {shots.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show screenshot ${i + 1} of ${shots.length}`}
                className="inline-flex min-h-8 min-w-6 items-center justify-center"
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "h-1.5 w-6 bg-accent" : "h-1.5 w-1.5 bg-inkText/15"
                  }`}
                />
              </button>
            ))}
            <span className="ml-1.5 text-[0.625rem] font-bold tabular-nums tracking-wider text-inkTextDim">
              {String(active + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
            </span>
          </>
        ) : (
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-inkTextDim">
            {shots.length === 1 ? "Live build" : "Private build"}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <span className="self-start rounded-full border border-accent/25 bg-accent/[0.07] px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {project.category}
        </span>
        <h3 className="mt-3 line-clamp-2 min-h-[3.5rem] font-sora text-lg font-700 leading-[1.35] tracking-tight text-inkText md:text-xl">
          {project.title}
        </h3>
        <p className="mt-1 truncate text-xs font-semibold text-accent2">
          {project.client}
        </p>
        <p className="mt-3 line-clamp-4 min-h-[5.5rem] text-sm leading-relaxed text-inkTextDim">
          {project.description}
        </p>

        <div className="mt-4 flex min-h-[4rem] flex-wrap content-start gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-lineDark bg-paper px-2.5 py-1 text-[0.6875rem] font-semibold text-inkText/65"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-auto pt-4 line-clamp-2 min-h-[2.75rem] text-sm font-semibold leading-relaxed text-accent">
          {project.outcome}
        </p>

        <div className="flex h-10 items-center border-t border-lineDark">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group/link inline-flex items-center gap-1.5 text-sm font-700 text-inkText transition-colors hover:text-accent"
            >
              Visit {liveLabel}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          ) : (
            <span className="text-sm font-semibold text-inkTextDim">
              Screenshots on request
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
