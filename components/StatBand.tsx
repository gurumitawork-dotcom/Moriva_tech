import Reveal from "./Reveal";
import { bandStats } from "@/data/stats";

export default function StatBand() {
  return (
    <section className="border-b border-lineDark bg-accent py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
        {bandStats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.05 * i}>
            <div className="text-inkText">
              <div className="font-sora text-4xl font-800 tracking-tight md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-inkTextDim">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
