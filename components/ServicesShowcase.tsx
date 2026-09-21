import Link from "next/link";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import ServiceCard from "./ServiceCard";
import ServiceDeck from "./ServiceDeck";
import { flagshipServices, moreServices } from "@/data/services";

const engagements = [
  { title: "Fixed-price project", detail: "Defined scope, agreed date, one price." },
  { title: "Dedicated team", detail: "Monthly, for products that keep evolving." },
  { title: "Retainer & support", detail: "Ongoing care once you are live." },
];

export default function ServicesShowcase() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-lineDark bg-gradient-to-b from-paper via-paper2/50 to-paper2/60 pb-20 pt-14 md:pb-24 md:pt-16"
    >
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Services</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-4xl font-800 leading-[1.1] tracking-tight text-inkText md:text-6xl">
              <span>One team,</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                the whole stack.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
              Strategy, interface design and production code from the same
              people — pick one service, or hand us the whole problem.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mt-8 md:mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[min(100%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2/10 blur-3xl"
          />
          <div className="relative flex items-center justify-center gap-6">
            <aside className="hidden w-52 shrink-0 xl:block">
              <div className="glass-light rounded-lg p-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-inkTextDim">
                  How we engage
                </p>
                <ul className="mt-4 space-y-3.5">
                  {engagements.map((item) => (
                    <li key={item.title} className="flex gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <span className="block text-sm font-700 text-inkText">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-inkTextDim">
                          {item.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="relative min-w-0 flex-1">
              <ServiceDeck services={flagshipServices} />
            </div>

            <aside className="hidden w-52 shrink-0 xl:block">
              <div className="glass-light flex flex-col rounded-lg p-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-inkTextDim">
                  Not sure which?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-inkText">
                  Tell us the problem rather than the spec. We&apos;ll scope it
                  and tell you what it actually needs.
                </p>
                <Link
                  href="/contact"
                  data-cursor-hover
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-700 text-accent"
                >
                  Start a project
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <p className="mt-4 border-t border-lineDark pt-3 text-xs leading-relaxed text-inkTextDim">
                  Every engagement starts with a discovery call — no cost, no
                  obligation.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-2 hidden justify-center lg:flex">
            <p className="glass-light inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium text-inkTextDim">
              Hover to explore · Click a card to learn more
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-6xl lg:mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-lineDark" />
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-inkTextDim">
                More capabilities
              </p>
              <div className="h-px flex-1 bg-lineDark" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {moreServices.map((service, i) => (
              <Reveal key={service.number} delay={0.04 * i}>
                <ServiceCard service={service} size="short" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
