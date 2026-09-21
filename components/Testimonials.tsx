"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-lineDark bg-paper py-24 md:py-32">
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">What clients say</span>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-2xl">
          <h2 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
            Hover to read the rest.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col items-stretch gap-10 md:mt-28 md:h-[420px] md:flex-row md:items-center md:justify-center md:gap-0">
          {testimonials.map((t, i) => {
            const isHovered = hovered === t.id;
            const isDimmed = hovered !== null && !isHovered;

            return (
              <div
                key={t.id}
                data-cursor-hover
                onMouseEnter={() => setHovered(t.id)}
                onMouseLeave={() => setHovered(null)}
                className={`w-full cursor-pointer rounded-md p-8 transition-all duration-300 ease-out md:w-[340px] md:shrink-0 ${
                  i === 0 ? "" : "md:-ml-12"
                }`}
                style={{
                  backgroundColor: t.bg,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(14,42,92,0.10)",
                  transform: isHovered
                    ? "rotate(0deg) scale(1.06) translateY(-10px)"
                    : isDesktop
                    ? `rotate(${t.rotate})`
                    : "rotate(0deg)",
                  zIndex: isHovered ? 30 : 10 + i,
                  opacity: isDesktop && isDimmed ? 0.55 : 1,
                  boxShadow: isHovered
                    ? "0 30px 60px rgba(14,42,92,0.28)"
                    : "0 10px 24px rgba(14,42,92,0.14)",
                }}
              >
                <span
                  className="font-sora text-6xl leading-none text-inkText/15"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-inkText">
                  {t.quote}
                </p>
                <div className="mt-8 border-t border-inkText/10 pt-4">
                  <div className="font-sora text-sm font-700 text-inkText">
                    {t.company}
                  </div>
                  <div className="text-xs text-inkTextDim">{t.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
