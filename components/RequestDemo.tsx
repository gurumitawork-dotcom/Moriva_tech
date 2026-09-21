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
    <div className="relative h-full overflow-hidden rounded-lg border border-lineDark bg-surface p-6 shadow-[0_30px_80px_-30px_rgba(11,35,71,0.3)] md:p-8">
      {/* warm corner glow so the card reads as the "see it live" moment */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative grid grid-cols-1 gap-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-3.5 w-3.5">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
            Live walkthrough
          </span>
          <h2 className="mt-4 font-sora text-2xl font-800 leading-tight tracking-tight text-inkText md:text-[1.75rem]">
            Request a demo
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-inkTextDim">
            See real products we have shipped, running live — we share our
            screen and talk through how each one was designed and built.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-inkText">
            {["Free, no obligation", "With the people who built it", "Questions welcome throughout"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3 w-3">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-semibold text-inkText">What are you planning?</p>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3" role="radiogroup" aria-label="What are you planning?">
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
                  className={`group flex flex-col items-start gap-2.5 rounded-md border p-3 text-left transition-all duration-200 ${
                    on
                      ? "border-accent bg-accent/[0.07] shadow-[0_0_0_3px_rgba(245,146,30,0.15)]"
                      : "border-lineDark bg-white hover:-translate-y-0.5 hover:border-accent/40"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
                      on ? "bg-accent text-white" : "bg-paper2 text-inkText group-hover:text-accent"
                    }`}
                  >
                    <Icon name={icon} className="h-4 w-4" />
                  </span>
                  <span className="text-[0.8125rem] font-semibold leading-tight text-inkText">{label}</span>
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-sm font-semibold text-inkText">How should we meet?</p>
          <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="How should we meet?">
            {MODES.map((m) => (
              <button key={m} type="button" role="radio" aria-checked={mode === m} data-cursor-hover onClick={() => setMode(m)} className={chip(mode === m)}>
                {m}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDim px-7 text-sm font-700 text-white shadow-[0_10px_28px_rgba(245,146,30,0.35)] transition-all hover:brightness-105"
            >
              Request demo on WhatsApp
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href={mailHref}
              data-cursor-hover
              className="text-center text-sm font-medium text-inkTextDim underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              or by email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
