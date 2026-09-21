"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import { faq } from "@/data/faq";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id ?? null);

  return (
    <section id="faq" className="relative overflow-hidden bg-paper pb-14 pt-24 md:pb-16 md:pt-32">
      <GradientMesh variant="light" fadeBottom />
      <div className="relative mx-auto max-w-[900px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">FAQ</span>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-2xl">
          <h2 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
            A few things people ask first.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-lineDark">
          {faq.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={0.03 * i}>
                <div
                  className={`rounded-lg border-b border-lineDark px-5 transition-all duration-300 ${
                    isOpen ? "glass-light" : ""
                  }`}
                >
                  <button
                    type="button"
                    data-cursor-hover
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sora text-lg font-700 text-inkText md:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lineDark text-inkText transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-7 text-sm leading-relaxed text-inkTextDim md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
