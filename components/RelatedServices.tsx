import Link from "next/link";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import Icon from "./Icon";
import { services } from "@/data/services";

export default function RelatedServices() {
  return (
    <section className="relative overflow-hidden bg-paper pb-14 pt-20 md:pb-16 md:pt-24">
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Related services</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-3xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
              <span>Explore the</span>{" "}
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                capabilities behind it.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
              Every build on this page draws on the same set of services, kept
              inside one small team rather than spread across vendors.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={0.03 * i} className="h-full">
              <Link
                href={"/services/" + service.slug}
                data-cursor-hover
                className="group flex h-full flex-col rounded-lg border border-lineDark bg-surface p-6 shadow-[0_2px_16px_rgba(14,42,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_50px_rgba(14,42,92,0.13)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lineDark text-inkTextDim transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>

                <h3 className="mt-4 font-sora text-base font-700 tracking-tight text-inkText md:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-inkTextDim">
                  {service.short}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-accent">
                  Explore service
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
