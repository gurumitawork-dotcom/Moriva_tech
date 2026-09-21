import Reveal from "./Reveal";
import Icon from "./Icon";
import { whyChoose } from "@/data/whyChoose";

export default function WhyChooseStrip() {
  return (
    <div className="glass-light overflow-hidden rounded-lg">
      <Reveal>
        <div className="flex items-baseline justify-between gap-4 border-b border-lineDark px-6 py-5 md:px-8">
          <h3 className="font-sora text-lg font-700 text-inkText md:text-xl">
            Why Choose Moriva?
          </h3>
          <span className="hidden text-xs font-medium uppercase tracking-[0.08em] text-inkTextDim/70 sm:inline">
            Five reasons
          </span>
        </div>
      </Reveal>

      <ul className="divide-y divide-lineDark">
        {whyChoose.map((item, i) => (
          <li key={item.label}>
            <Reveal delay={0.04 * i}>
              <div
                data-cursor-hover
                className="group relative flex items-start gap-4 px-6 py-5 transition-colors duration-300 hover:bg-white/70 md:px-8"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[2px] scale-y-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-y-100"
                />
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/5 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon name={item.icon} className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <div className="font-sora text-sm font-700 text-inkText md:text-base">
                    {item.label}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-inkTextDim">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
