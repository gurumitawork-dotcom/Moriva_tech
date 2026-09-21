import Link from "next/link";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import Icon from "./Icon";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-paper pb-14 pt-24 md:pb-16 md:pt-32">
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Services</span>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-2xl">
          <h2 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
            Full-stack digital engineering.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-inkTextDim">
            From a single marketing site to a multi-tenant platform — pick a
            service or bring us the whole problem.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                  <h3 className="mt-6 font-sora text-lg font-700 text-inkText">
                    {service.title}
                  </h3>
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
