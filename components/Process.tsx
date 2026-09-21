import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-paper pb-14 pt-24 md:pb-16 md:pt-32">
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Process</span>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-2xl">
          <h2 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
            From discovery to a product you can run.
          </h2>
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
                <h3 className="font-sora text-2xl font-700 text-inkText md:w-[240px] md:text-3xl">
                  {step.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-inkTextDim md:text-base">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
