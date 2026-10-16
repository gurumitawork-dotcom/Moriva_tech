import Link from "next/link";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-paper pb-14 pt-24 md:pb-16 md:pt-32">
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-semibold text-accent md:text-sm">
            Process
          </span>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-2xl">
          <h1 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
            From discovery to a product you can run.
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-inkTextDim">
            The same five stages on every engagement — scaled up or down to
            fit the project.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-lineDark">
          {process.map((step, i) => (
            <Reveal key={step.number} delay={0.03 * i}>
              <div className="hover-glass flex flex-col gap-2 rounded-lg border-b border-lineDark px-4 py-8 transition-all duration-300 md:flex-row md:items-center md:gap-8 md:py-10">
                <span
                  className={`font-sora text-sm font-700 md:w-12 ${
                    i % 2 === 0 ? "text-accent" : "text-accent2"
                  }`}
                >
                  {step.number}
                </span>
                <h2 className="font-sora text-2xl font-700 text-inkText md:w-[240px] md:text-3xl">
                  {step.title}
                </h2>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-inkTextDim md:text-base">
                    {step.description}
                  </p>
                  {step.relatedLink && (
                    <Link
                      href={step.relatedLink.href}
                      data-cursor-hover
                      className="group/link mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.06] px-3.5 py-1.5 text-xs font-semibold text-accent transition-colors hover:border-accent/50 hover:bg-accent/10"
                    >
                      {step.relatedLink.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center border-t border-lineDark pt-10">
          <Link
            href="/portfolio/"
            data-cursor-hover
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-6 text-sm font-700 text-accent transition-colors hover:border-accent/60 hover:bg-accent hover:text-white"
          >
            See this process in the portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
