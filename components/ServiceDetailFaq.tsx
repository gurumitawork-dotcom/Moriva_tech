"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";

export default function ServiceDetailFaq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-paper py-16 md:py-20"
    >
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[900px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-3xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
              <span>Questions people</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                ask first.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <Reveal key={item.question} delay={0.03 * i}>
                <div className="overflow-hidden rounded-lg border border-lineDark bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : i)}
                    aria-expanded={expanded}
                    data-cursor-hover
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-sora text-base font-700 text-inkText md:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lineDark text-accent transition-transform duration-300 " +
                        (expanded ? "rotate-45" : "")
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {expanded && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-inkTextDim">
                      {item.answer}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
