import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function PortfolioProjectCard({ project }: { project: Project }) {
  const cover = project.shots[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-lineDark bg-surface shadow-[0_2px_16px_rgba(14,42,92,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_50px_rgba(14,42,92,0.16)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink2">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 1024px) 88vw, 430px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 20% 0%, #1C6FD8 0%, #123566 45%, #0B2347 100%)",
            }}
          >
            <div className="flex h-full flex-col justify-center gap-1.5 p-6">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-white/50">
                {project.privateCover?.label}
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {project.privateCover?.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-md border border-white/12 bg-white/[0.06] px-2 py-1 text-[0.6875rem] font-medium text-white/75"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0B2347 0%, rgba(11,35,71,0.40) 45%, transparent 100%)",
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="rounded-full border border-accent/40 bg-ink2/50 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-accent backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-sora text-lg font-700 tracking-tight text-inkText md:text-xl">
          {project.name}
        </h3>
        <p className="mt-1 text-xs font-semibold text-accent2">{project.client}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-lineDark bg-paper px-2.5 py-1 text-[0.6875rem] font-semibold text-inkText/65"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold text-accent">{project.goal}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-inkTextDim">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.services.map((service) => (
            <Link
              key={service}
              href="/services"
              className="text-xs font-semibold text-inkText/70 underline decoration-inkText/20 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent/40"
            >
              {service}
            </Link>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          {project.liveHref ? (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group/link inline-flex min-h-10 items-center gap-1.5 rounded-md border border-lineDark bg-surface px-3.5 text-[0.8125rem] font-semibold text-inkText transition-colors hover:border-accent/40 hover:text-accent"
            >
              Visit {project.liveLabel}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex min-h-10 items-center rounded-md border border-dashed border-lineDark px-3.5 text-[0.8125rem] font-semibold text-inkTextDim">
              Private build
            </span>
          )}
          <Link
            href="/contact"
            data-cursor-hover
            className="group/ask inline-flex min-h-10 items-center gap-1.5 text-[0.8125rem] font-semibold text-accent"
          >
            Ask about this build
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5 transition-transform duration-300 group-hover/ask:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
