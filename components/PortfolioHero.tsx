import Link from "next/link";
import PortfolioHeroArt from "./PortfolioHeroArt";
import ProposalButton from "./ProposalButton";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import { allProjects } from "@/data/projects";

const trust = [
  { title: "Production", detail: "Live client systems" },
  { title: "Full-stack", detail: "Design through deployment" },
  { title: "Outcomes", detail: "Enquiries, ops, scale" },
];

export default function PortfolioHero() {
  const liveCount = allProjects.filter((p) => p.liveHref).length;

  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-14 md:pb-20 md:pt-16">
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm md:mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-inkTextDim">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-inkTextDim/50">
                /
              </li>
              <li className="font-medium text-inkText" aria-current="page">
                Portfolio
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <Reveal>
              <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent md:text-sm">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-bold text-inkText">Moriva</span>
                <span aria-hidden className="h-3 w-px shrink-0 bg-accent/30" />
                <span className="truncate">
                  {liveCount} live builds · portfolio
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 font-sora text-4xl font-800 leading-[1.08] tracking-tight text-inkText md:mt-6 md:text-6xl">
                <span className="block">Work you can</span>
                <span className="mt-1.5 block">
                  <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                    open in a browser.
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-lg font-semibold tracking-tight text-transparent md:text-xl">
                Websites. Web apps. Member portals. Mobile.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-inkTextDim">
                Nursery catalogues built to sell through search, an analysis
                suite for impedance labs, and a members&apos; portal serving a
                whole healthcare network — designed, built and shipped by the
                same small team.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/contact"
                  data-cursor-hover
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-accent to-accentDim px-8 text-base font-700 text-white shadow-[0_0_28px_rgba(245,146,30,0.35)] transition-all duration-300 hover:brightness-105"
                >
                  Start your project
                </Link>
                <ProposalButton
                  label="Request proposal"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-lineDark bg-surface px-8 text-base font-700 text-inkText transition-colors hover:border-accent/40 hover:text-accent"
                />
                <a
                  href="#portfolio-grid"
                  data-cursor-hover
                  className="group inline-flex h-12 items-center justify-center gap-1.5 text-sm font-700 text-accent sm:px-2"
                >
                  View featured work
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <dl className="mt-8 grid w-full max-w-xl grid-cols-1 gap-4 border-t border-lineDark pt-6 xs:grid-cols-3 xs:gap-2.5 sm:gap-0">
                {trust.map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex min-w-0 flex-col xs:pr-1.5 sm:pr-5 ${
                      i > 0 ? "sm:border-l sm:border-lineDark sm:pl-5" : ""
                    }`}
                  >
                    <dt className="font-sora text-sm font-700 tracking-tight text-inkText md:text-base">
                      {item.title}
                    </dt>
                    <dd className="mt-1 text-[0.625rem] font-semibold uppercase leading-snug tracking-[0.1em] text-inkTextDim md:text-[0.6875rem]">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[2.5rem] blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(28,111,216,0.22), transparent 65%)",
                }}
              />
              <div className="relative" style={{ perspective: "1400px" }}>
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-ink2 shadow-[0_40px_80px_-24px_rgba(11,35,71,0.5)] lg:[transform:rotateY(-6deg)_rotateX(4deg)]">
                  <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <div className="ml-2 flex-1 truncate rounded-full bg-white/[0.07] px-3 py-1 text-[0.625rem] font-medium tracking-wide text-white/50">
                      moriva.tech
                    </div>
                  </div>
                  <div className="relative aspect-[16/10]">
                    <PortfolioHeroArt />
                  </div>

                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
