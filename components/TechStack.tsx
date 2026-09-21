import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import Icon from "./Icon";
import { stack } from "@/data/stack";

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-paper py-16 md:py-20">
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Technologies we work with</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-3xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
              <span>Modern stacks,</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                chosen per product.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
              We are not tied to one framework. These are the tools behind the
              builds on this page, picked for maintainability and long-term
              ownership.
            </p>
          </Reveal>
        </div>

        {/*
          Two columns on a phone leave each card ~150px, too narrow for the icon
          and the text side by side, so below sm the icon sits above the text.
        */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {stack.map((item, i) => (
            <Reveal key={item.name} delay={0.03 * i} className="h-full">
              <div
                data-cursor-hover
                className="flex h-full flex-col items-start gap-3 rounded-lg border border-lineDark bg-surface p-4 shadow-[0_2px_16px_rgba(14,42,92,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_12px_32px_rgba(14,42,92,0.10)] sm:flex-row"
              >
                <span className="flex h-10 w-10 shrink-0 sm:h-11 sm:w-11 items-center justify-center rounded-md bg-accent text-white shadow-[0_0_24px_rgba(245,146,30,0.32)]">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="break-words font-sora text-sm font-700 tracking-tight text-inkText md:text-base">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[0.8125rem] leading-snug text-inkTextDim">
                    {item.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
