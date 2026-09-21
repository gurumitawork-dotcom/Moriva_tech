import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import Icon from "./Icon";
import { buildProcess } from "@/data/buildProcess";

export default function PortfolioProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-b from-paper via-paper2/50 to-paper2/60 py-20 md:py-24">
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Our process</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-3xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
              <span>From discovery to</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                a product you can run.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
              The same eight stages behind every build on this page — scaled up
              or down to fit the project, so you always know what comes next.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {buildProcess.map((item, i) => (
            <Reveal key={item.step} delay={0.03 * i} className="h-full">
              <article
                data-cursor-hover
                className="flex h-full gap-4 rounded-lg border border-lineDark bg-surface p-6 shadow-[0_2px_16px_rgba(14,42,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_50px_rgba(14,42,92,0.13)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accentDim px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-white">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2.5 font-sora text-base font-700 tracking-tight text-inkText md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-inkTextDim">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
