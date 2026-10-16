import Link from "next/link";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import Icon from "./Icon";
import { services } from "@/data/services";

const trust = [
  { title: `${services.length}`, detail: "Services" },
  { title: "Full-stack", detail: "Strategy to deployment" },
  { title: "One team", detail: "No subcontractors" },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-paper pb-14 pt-24 md:pb-16 md:pt-32">
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-visible"
          >
            <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl md:-right-16 md:-top-20 md:h-[26rem] md:w-[26rem]" />
            <div className="absolute right-[18%] top-[22%] h-56 w-56 rounded-full bg-accent2/15 blur-3xl md:h-80 md:w-80" />
            <div className="absolute -left-16 bottom-[-10%] h-48 w-48 rounded-full bg-accent2/10 blur-3xl md:h-64 md:w-64" />
          </div>

          <Reveal>
            <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-semibold text-accent md:text-sm">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4 max-w-2xl">
            <h1 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
              <span className="block">Full-stack digital</span>
              <span className="mt-1.5 block bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                engineering.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-xl">
            <p className="text-lg leading-relaxed text-inkTextDim">
              From a single marketing site to a multi-tenant platform — pick a
              service or bring us the whole problem.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
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

        <div className="mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const isBlue = i % 2 === 0;
            return (
              <Reveal key={service.number} delay={0.03 * i}>
                <Link
                  href={"/services/" + service.slug}
                  data-cursor-hover
                  className="glass-light group flex h-full flex-col rounded-lg p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${
                      isBlue ? "bg-accent2/12 text-accent2" : "bg-accent/12 text-accent"
                    }`}
                  >
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-sora text-lg font-700 text-inkText">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-inkTextDim">
                    {service.description}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-700 ${
                      isBlue ? "text-accent2" : "text-accent"
                    }`}
                  >
                    Explore service
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
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
