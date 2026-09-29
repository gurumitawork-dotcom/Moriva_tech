"use client";

import { useState } from "react";
import { company } from "@/data/company";
import Icon, { type IconName } from "./Icon";

/**
 * Visitors say what they are planning rather than naming one of our projects;
 * we then pick the closest live builds to walk through on the call.
 */
const PLANS: { label: string; icon: IconName }[] = [
  { label: "Business website", icon: "code" },
  { label: "Web application", icon: "gear" },
  { label: "Mobile app", icon: "phone" },
  { label: "Portal & dashboard", icon: "team" },
  { label: "AI chatbot", icon: "bot" },
  { label: "Not sure yet", icon: "bulb" },
];
const MODES = ["Video call", "Phone call"];

/**
 * A lighter alternative to the chat for visitors who want to see work before
 * describing their own: pick what to see and how, and it opens a prefilled
 * WhatsApp message.
 */
export default function RequestDemo() {
  const [plan, setPlan] = useState(PLANS[0].label);
  const [mode, setMode] = useState(MODES[0]);

  const text = [
    "*Demo request — Moriva website*",
    "",
    `Planning: ${plan}`,
    "I would like to see similar work you have built.",
    `Preferred: ${mode}`,
  ].join("\n");

  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  const mailHref = `mailto:${company.email}?subject=${encodeURIComponent("Demo request")}&body=${encodeURIComponent(text.replace(/\*/g, ""))}`;

  const chip = (on: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
      on
        ? "border-accent bg-accent text-white shadow-[0_6px_16px_rgba(245,146,30,0.3)]"
        : "border-lineDark bg-white text-inkText hover:border-accent/50"
    }`;

  return (
    <div className="relative overflow-hidden rounded-lg border border-lineDark bg-surface p-5 shadow-[0_30px_80px_-30px_rgba(11,35,71,0.3)] md:p-6">
      {/* warm corner glow so the card reads as the "see it live" moment */}
      <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative space-y-5">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-3 w-3">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
            Live walkthrough
          </span>
          <h2 className="mt-2 font-sora text-xl font-800 leading-tight tracking-tight text-inkText">
            Request a demo
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-inkTextDim">
            See real products we have shipped. We share our screen and talk through how each one was designed and built.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-inkText">
            {["Free, no obligation", "With the people who built it", "Questions welcome"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-2.5 w-2.5">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-semibold text-inkText">What are you planning?</p>
          <div className="mt-2 grid grid-cols-2 gap-2" role="radiogroup" aria-label="What are you planning?">
            {PLANS.map(({ label, icon }) => {
              const on = plan === label;
              return (
                <button
                  key={label}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  data-cursor-hover
                  onClick={() => setPlan(label)}
                  className={`group flex flex-col items-center gap-1.5 rounded-md border p-2 text-center transition-all duration-200 ${
                    on
                      ? "border-accent bg-accent/[0.07]"
                      : "border-lineDark bg-white hover:border-accent/40"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors ${
                      on ? "bg-accent text-white" : "bg-paper2 text-inkText group-hover:text-accent"
                    }`}
                  >
                    <Icon name={icon} className="h-3 w-3" />
                  </span>
                  <span className="text-[0.65rem] font-semibold leading-tight text-inkText">{label}</span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-xs font-semibold text-inkText">How should we meet?</p>
          <div className="mt-2 flex flex-wrap gap-1.5" role="radiogroup" aria-label="How should we meet?">
            {MODES.map((m) => (
              <button key={m} type="button" role="radio" aria-checked={mode === m} data-cursor-hover onClick={() => setMode(m)} className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-all ${
                mode === m
                  ? "border-accent bg-accent text-white shadow-[0_6px_16px_rgba(245,146,30,0.3)]"
                  : "border-lineDark bg-white text-inkText hover:border-accent/50"
              }`}>
                {m}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDim px-5 text-xs font-700 text-white shadow-[0_10px_28px_rgba(245,146,30,0.35)] transition-all hover:brightness-105"
            >
              Request demo on WhatsApp
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href={mailHref}
              data-cursor-hover
              className="text-center text-xs font-medium text-inkTextDim underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              or by email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
