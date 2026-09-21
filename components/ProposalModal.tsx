"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { company } from "@/data/company";
import GradientMesh from "./GradientMesh";

const nextSteps = [
  {
    title: "Discovery call",
    detail:
      "We reply on WhatsApp within a working day to understand the goal and the constraints.",
  },
  {
    title: "Scope & approach",
    detail:
      "We draft the technical approach, what is in scope and roughly how long it takes.",
  },
  {
    title: "Proposal",
    detail:
      "A written scope and price — fixed for defined projects, monthly for evolving ones.",
  },
];

/** Matches the mobile menu's reveal so both overlays open the same way. */
const REVEAL_MS = 700;
const REVEAL_EASE = "cubic-bezier(0.7,0,0.2,1)";

export default function ProposalModal({
  open,
  onClose,
  origin = null,
}: {
  open: boolean;
  onClose: () => void;
  /** Viewport point the circular reveal grows from; defaults to the centre. */
  origin?: { x: number; y: number } | null;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [brief, setBrief] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  // `rendered` keeps the dialog in the DOM through the closing animation;
  // `revealed` drives the clip-path, one frame after mounting so it animates.
  const [rendered, setRendered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [circle, setCircle] = useState({ x: 0, y: 0, r: 0 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = origin?.x ?? w / 2;
      const y = origin?.y ?? h / 2;
      // Far enough to reach the corner furthest from the origin.
      const r = Math.hypot(Math.max(x, w - x), Math.max(y, h - y));
      setCircle({ x, y, r });
      setRendered(true);
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setRevealed(true));
      });
      const focus = window.setTimeout(
        () => firstFieldRef.current?.focus({ preventScroll: true }),
        REVEAL_MS * 0.6
      );
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
        window.clearTimeout(focus);
      };
    }
    setRevealed(false);
    const t = window.setTimeout(() => setRendered(false), REVEAL_MS);
    return () => window.clearTimeout(t);
  }, [open, origin]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new Event("moriva:scroll-lock"));
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.dispatchEvent(new Event("moriva:scroll-unlock"));
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!rendered || !mounted) return null;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "*Proposal request — Moriva website*",
      "",
      "*Name:* " + name,
      "*Email:* " + email,
      phone ? "*Phone:* " + phone : null,
      organisation ? "*Organisation:* " + organisation : null,
      "",
      brief ? "*What they need:*\n" + brief : "*What they need:* (not specified)",
    ].filter(Boolean);

    const url =
      "https://wa.me/" +
      company.whatsapp +
      "?text=" +
      encodeURIComponent(lines.join("\n"));

    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const field =
    "w-full rounded-md border border-lineDark bg-paper px-4 py-3 text-sm text-inkText outline-none transition-colors placeholder:text-inkTextDim/60 focus:border-accent focus:bg-white";
  const label = "text-xs font-semibold text-inkText";

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="proposal-title"
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 md:p-10 motion-reduce:!transition-none"
      style={{
        clipPath: `circle(${revealed ? circle.r : 0}px at ${circle.x}px ${circle.y}px)`,
        transition: `clip-path ${REVEAL_MS}ms ${REVEAL_EASE}`,
      }}
    >
      <button
        type="button"
        aria-label="Close proposal form"
        onClick={onClose}
        className="absolute inset-0 bg-ink2/80 backdrop-blur-md"
      />

      <div
        data-lenis-prevent
        className={`relative z-10 max-h-[94vh] w-full max-w-6xl overflow-y-auto overscroll-contain rounded-lg border border-lineDark bg-surface shadow-[0_40px_90px_-24px_rgba(11,35,71,0.6)] transition-all duration-500 ease-out motion-reduce:transition-none ${
          revealed ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"
        }`}
        style={{ transitionDelay: revealed ? "200ms" : "0ms" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-lineDark bg-surface text-inkTextDim transition-colors hover:border-accent/40 hover:text-accent"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
            className="h-4 w-4"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* Left — brand panel, on the same light ground as the pages */}
          <div className="relative overflow-hidden border-b border-lineDark bg-gradient-to-b from-paper via-paper2/50 to-paper2/70 p-7 md:border-b-0 md:border-r md:p-10 lg:p-12">
            <GradientMesh variant="light" />

            <div className="relative flex h-full flex-col">
              <Image
                src="/moriva-logo.png"
                alt="Moriva Technologies"
                width={553}
                height={555}
                className="h-16 w-auto self-start"
              />

              <h2
                id="proposal-title"
                className="mt-7 font-sora text-2xl font-800 leading-[1.15] tracking-tight text-inkText md:text-3xl"
              >
                Let&apos;s build something
                <br />
                <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                  that lasts.
                </span>
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-inkTextDim">
                Tell us what you need built. The form opens WhatsApp with your
                details filled in, so the conversation starts straight away.
              </p>

              <p className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-inkTextDim">
                What happens next?
              </p>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/[0.08] text-[0.6875rem] font-bold text-accent">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-700 text-inkText">
                        {step.title}
                      </span>
                      <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-inkTextDim">
                        {step.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-lineDark pt-5 md:mt-auto">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-inkTextDim">
                  Or reach us directly
                </p>

                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href={"mailto:" + company.email}
                      data-cursor-hover
                      className="group flex items-center gap-3 rounded-md border border-lineDark bg-surface/70 px-3 py-2.5 transition-colors hover:border-accent/40 hover:bg-surface"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/[0.08] text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-inkTextDim">
                          Email
                        </span>
                        <span className="block truncate text-sm font-700 text-inkText">
                          {company.email}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={"https://wa.me/" + company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="group flex items-center gap-3 rounded-md border border-lineDark bg-surface/70 px-3 py-2.5 transition-colors hover:border-accent/40 hover:bg-surface"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/[0.08] text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.2 1.26-1.96 1.42-.52.11-1.2.2-3.5-.75-2.94-1.22-4.83-4.2-4.98-4.4-.14-.19-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.43.27-.29.58-.36.78-.36h.56c.18.01.42-.7.65.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.09.19-.14.31-.28.48l-.42.49c-.14.14-.28.3-.12.58.16.29.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.81.88-1.09.19-.28.37-.23.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.11.07.66-.17 1.34Z" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-inkTextDim">
                          WhatsApp
                        </span>
                        <span className="block truncate text-sm font-700 text-inkText">
                          {company.phones[0]}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={"tel:" + company.phones[1].replace(/\s/g, "")}
                      data-cursor-hover
                      className="group flex items-center gap-3 rounded-md border border-lineDark bg-surface/70 px-3 py-2.5 transition-colors hover:border-accent/40 hover:bg-surface"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/[0.08] text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
                          <path d="M6.6 3h2.2l1.4 3.5-1.7 1.2a12 12 0 0 0 5.8 5.8l1.2-1.7L19 13.2v2.2A2.4 2.4 0 0 1 16.4 18 13.4 13.4 0 0 1 6 7.6 2.4 2.4 0 0 1 6.6 3Z" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-inkTextDim">
                          Call
                        </span>
                        <span className="block truncate text-sm font-700 text-inkText">
                          {company.phones[1]}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={onSubmit} className="p-7 md:p-10 lg:p-12">
            <h3 className="font-sora text-xl font-800 tracking-tight text-inkText md:text-2xl">
              Request a proposal
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-inkTextDim">
              Share your goal and timeline. We come back with a clear scope and
              estimate.
            </p>

            <div className="mt-6 flex flex-col gap-1.5">
              <label htmlFor="proposal-name" className={label}>
                Full name
              </label>
              <input
                id="proposal-name"
                ref={firstFieldRef}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={field}
              />
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="proposal-email" className={label}>
                Work email
              </label>
              <input
                id="proposal-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={field}
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="proposal-phone" className={label}>
                  Phone{" "}
                  <span className="font-normal text-inkTextDim">optional</span>
                </label>
                <input
                  id="proposal-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={field}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="proposal-org" className={label}>
                  Organisation{" "}
                  <span className="font-normal text-inkTextDim">optional</span>
                </label>
                <input
                  id="proposal-org"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  placeholder="Company or practice"
                  className={field}
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="proposal-brief" className={label}>
                How can we help?{" "}
                <span className="font-normal text-inkTextDim">optional</span>
              </label>
              <textarea
                id="proposal-brief"
                rows={4}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Your goal, timeline, or what you would like built..."
                className={field + " resize-none"}
              />
            </div>

            <button
              type="submit"
              data-cursor-hover
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-accentDim text-base font-700 text-white shadow-[0_0_28px_rgba(245,146,30,0.35)] transition-all duration-300 hover:brightness-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4 shrink-0">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.2 1.26-1.96 1.42-.52.11-1.2.2-3.5-.75-2.94-1.22-4.83-4.2-4.98-4.4-.14-.19-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.43.27-.29.58-.36.78-.36h.56c.18.01.42-.7.65.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.09.19-.14.31-.28.48l-.42.49c-.14.14-.28.3-.12.58.16.29.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.81.88-1.09.19-.28.37-.23.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.11.07.66-.17 1.34Z" />
              </svg>
              Send message
            </button>

            <dl className="mt-6 grid gap-4 border-t border-lineDark pt-5 sm:grid-cols-2">
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-inkTextDim">
                  Typical reply
                </dt>
                <dd className="mt-1 text-sm font-700 text-inkText">
                  Within one working day
                </dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-inkTextDim">
                  First call
                </dt>
                <dd className="mt-1 text-sm font-700 text-inkText">
                  Free, no obligation
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-xs leading-relaxed text-inkTextDim">
              Your details are used to reply to this enquiry and nothing else.
              If you would rather not use WhatsApp, the email and phone options
              on the left reach the same people.
            </p>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
}
