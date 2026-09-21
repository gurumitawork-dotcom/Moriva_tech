import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import Icon from "./Icon";
import { outcomes } from "@/data/stack";

export default function BusinessResults() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-paper via-paper2/50 to-paper2/60 py-20 md:py-24">
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Business results</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-3xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
              <span>What these projects</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                deliver for clients.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
              Outcomes engineered into the product rather than bolted on after
              launch.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {outcomes.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i} className="h-full">
              <article
                data-cursor-hover
                className="flex h-full flex-col rounded-lg border border-lineDark bg-surface p-6 shadow-[0_2px_16px_rgba(14,42,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_50px_rgba(14,42,92,0.13)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-white shadow-[0_0_24px_rgba(245,146,30,0.35)]">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-sora text-base font-700 tracking-tight text-inkText md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inkTextDim">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
