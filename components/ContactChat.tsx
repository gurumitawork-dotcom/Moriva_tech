"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { company } from "@/data/company";
import { services } from "@/data/services";

/** Quick-reply labels short enough to wrap cleanly on a phone. */
const SHORT: Record<string, string> = {
  "website-development": "Website",
  "mobile-app-development": "Mobile app",
  "cloud-solutions": "Cloud",
  "cybersecurity-services": "Security",
  "ai-chat-bots": "AI chatbot",
  "ui-ux-design": "UI/UX design",
  "it-consulting": "Consulting",
  "maintenance-support": "Maintenance",
  "seo-services": "SEO",
};
const TOPICS = [...services.filter((s) => SHORT[s.slug]).map((s) => SHORT[s.slug]), "Something else"];

type Answers = { name: string; email: string; topics: string[]; message: string; phone: string };
type StepKind = "text" | "email" | "chips" | "textarea" | "tel";
type Step = {
  key: keyof Answers;
  kind: StepKind;
  placeholder?: string;
  optional?: boolean;
  bot: (a: Answers) => string[];
};

const STEPS: Step[] = [
  {
    key: "name",
    kind: "text",
    placeholder: "Your name",
    bot: () => ["Hi there — you are talking to the Moriva team.", "What should we call you?"],
  },
  {
    key: "email",
    kind: "email",
    placeholder: "you@company.com",
    bot: (a) => [`Nice to meet you, ${a.name.split(" ")[0]}.`, "What is the best email to reach you on?"],
  },
  {
    key: "topics",
    kind: "chips",
    bot: () => ["What are you looking to build? Pick as many as fit."],
  },
  {
    key: "message",
    kind: "textarea",
    placeholder: "Your goal, timeline, anything useful…",
    bot: () => ["Tell us a little about it — the goal, a rough timeline, whatever you have."],
  },
  {
    key: "phone",
    kind: "tel",
    placeholder: "+91 98765 43210",
    optional: true,
    bot: () => ["Last one: would you like a call back? Leave a number, or skip."],
  },
];

type Message = { id: number; from: "bot" | "user"; text: string };

const EMPTY: Answers = { name: "", email: "", topics: [], message: "", phone: "" };

export default function ContactChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [draft, setDraft] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [error, setError] = useState("");

  const idRef = useRef(0);
  const timers = useRef<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  // The input only takes focus once the visitor has answered something, so
  // opening the page on a phone does not throw the keyboard up.
  const engaged = useRef(false);

  const say = useCallback((from: Message["from"], text: string) => {
    setMessages((m) => [...m, { id: idRef.current++, from, text }]);
  }, []);

  /** Bot lines arrive one by one behind a typing indicator, like a real chat. */
  const botSays = useCallback(
    (lines: string[], after?: () => void) => {
      const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let t = 0;
      setTyping(true);
      lines.forEach((line, i) => {
        t += calm ? 0 : 450 + Math.min(line.length * 12, 700);
        timers.current.push(
          window.setTimeout(() => {
            say("bot", line);
            if (i === lines.length - 1) {
              setTyping(false);
              after?.();
              if (engaged.current) inputRef.current?.focus({ preventScroll: true });
            }
          }, t)
        );
      });
    },
    [say]
  );

  useEffect(() => {
    const pending = timers.current;
    botSays(STEPS[0].bot(EMPTY));
    return () => pending.forEach(window.clearTimeout);
  }, [botSays]);

  // Keep the newest message in view without scrolling the page itself.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing, done]);

  const current = STEPS[step];

  const advance = (value: string | string[], shown: string) => {
    engaged.current = true;
    const next = { ...answers, [current.key]: value } as Answers;
    setAnswers(next);
    setDraft("");
    setPicked([]);
    setError("");
    say("user", shown);
    if (step + 1 < STEPS.length) {
      setStep(step + 1);
      botSays(STEPS[step + 1].bot(next));
    } else {
      setStep(STEPS.length);
      botSays([`Thanks, ${next.name.split(" ")[0]} — that is everything we need.`, "Here is your message. Send it wherever suits you:"], () =>
        setDone(true)
      );
    }
  };

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (typing || !current) return;
    if (current.kind === "chips") {
      if (!picked.length) return setError("Pick at least one, or choose “Something else”.");
      return advance(picked, picked.join(", "));
    }
    const v = draft.trim();
    if (!v) {
      if (current.optional) return advance("", "No call needed, thanks.");
      return setError("This one is needed to reply to you.");
    }
    if (current.kind === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      return setError("That email does not look quite right.");
    }
    advance(v, v);
  };

  const restart = () => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    setMessages([]);
    setAnswers(EMPTY);
    setStep(0);
    setDone(false);
    setDraft("");
    setPicked([]);
    setError("");
    botSays(STEPS[0].bot(EMPTY));
  };

  const body = [
    `Name: ${answers.name}`,
    `Email: ${answers.email}`,
    answers.phone ? `Phone: ${answers.phone}` : null,
    answers.topics.length ? `Interested in: ${answers.topics.join(", ")}` : null,
    "",
    answers.message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`*Project inquiry — Moriva website*\n\n${body}`)}`;
  const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(`Project inquiry from ${answers.name}`)}&body=${encodeURIComponent(body)}`;

  const progress = Math.min(step, STEPS.length) / STEPS.length;

  return (
    <div className="flex h-[min(78vh,680px)] min-h-[520px] flex-col overflow-hidden rounded-lg border border-lineDark bg-surface shadow-[0_30px_80px_-30px_rgba(11,35,71,0.35)]">
      {/* chat header */}
      <div className="relative flex items-center gap-3 border-b border-lineDark px-5 py-4 md:px-6">
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-lineDark bg-white">
          <Image src="/moriva-logo.png" alt="" width={553} height={555} className="h-8 w-auto" />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface bg-emerald-500" />
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="font-sora text-base font-800 tracking-tight text-inkText md:text-lg">
            Start a conversation
          </h1>
          <p className="truncate text-xs text-inkTextDim">
            {typing ? (
              <span className="text-accent">Moriva team is typing…</span>
            ) : (
              "Moriva team · replies within one working day"
            )}
          </p>
        </div>
        {step > 0 && (
          <button
            type="button"
            onClick={restart}
            data-cursor-hover
            className="shrink-0 rounded-full border border-lineDark px-3 py-1.5 text-xs font-medium text-inkTextDim transition-colors hover:border-accent hover:text-accent"
          >
            Start over
          </button>
        )}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-lineDark">
          <span
            className="block h-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-500 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </span>
      </div>

      {/* messages */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        aria-live="polite"
        className="flex-1 space-y-2.5 overflow-y-auto overscroll-contain px-4 py-5 md:px-6"
        style={{
          backgroundImage: "radial-gradient(rgba(14,42,92,0.07) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`chat-bubble flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[85%] whitespace-pre-wrap break-words px-4 py-2.5 text-[0.9375rem] leading-relaxed shadow-sm ${
                m.from === "user"
                  ? "rounded-2xl rounded-br-md bg-gradient-to-br from-accent to-accentDim text-white"
                  : "rounded-2xl rounded-bl-md border border-lineDark bg-white text-inkText"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className="chat-bubble flex justify-start" aria-label="Moriva team is typing">
            <span className="flex gap-1 rounded-2xl rounded-bl-md border border-lineDark bg-white px-4 py-3.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-inkTextDim/50 motion-safe:animate-bounce"
                  style={{ animationDelay: `${i * 140}ms` }}
                />
              ))}
            </span>
          </div>
        )}

        {done && (
          <div className="chat-bubble pt-2">
            <div className="rounded-lg border border-lineDark bg-white p-4 shadow-sm">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-inkTextDim">
                Your message
              </p>
              <pre className="mt-2 whitespace-pre-wrap break-words font-inter text-sm leading-relaxed text-inkText">
                {body}
              </pre>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDim text-sm font-700 text-white shadow-[0_10px_28px_rgba(245,146,30,0.35)] transition-all hover:brightness-105"
                >
                  Send on WhatsApp
                </a>
                <a
                  href={mailHref}
                  data-cursor-hover
                  className="inline-flex h-11 items-center justify-center rounded-full border border-lineDark text-sm font-700 text-inkText transition-colors hover:border-accent hover:text-accent"
                >
                  Send by email
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* composer */}
      {!done && current && (
        <form onSubmit={submit} noValidate className="border-t border-lineDark bg-paper/60 px-4 py-3.5 md:px-5">
          {current.kind === "chips" && (
            <div className="mb-3 flex flex-wrap gap-2">
              {TOPICS.map((t) => {
                const on = picked.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={on}
                    disabled={typing}
                    data-cursor-hover
                    onClick={() => {
                      setError("");
                      setPicked((p) => (on ? p.filter((x) => x !== t) : [...p, t]));
                    }}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all disabled:opacity-50 ${
                      on
                        ? "border-accent bg-accent text-white shadow-[0_6px_16px_rgba(245,146,30,0.3)]"
                        : "border-lineDark bg-white text-inkText hover:border-accent/50"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex items-end gap-2.5">
            {current.kind === "chips" ? (
              <p className="flex-1 self-center text-sm text-inkTextDim">
                {picked.length ? `${picked.length} selected` : "Tap to choose"}
              </p>
            ) : current.kind === "textarea" ? (
              <textarea
                ref={inputRef}
                rows={2}
                value={draft}
                disabled={typing}
                onChange={(e) => {
                  setDraft(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit();
                  }
                }}
                placeholder={current.placeholder}
                aria-label={current.placeholder}
                className="max-h-32 min-h-[2.75rem] flex-1 resize-none rounded-2xl border border-lineDark bg-white px-4 py-2.5 text-[0.9375rem] text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)] disabled:opacity-60"
              />
            ) : (
              <input
                ref={inputRef}
                type={current.kind === "text" ? "text" : current.kind}
                autoComplete={current.key === "name" ? "name" : current.key === "email" ? "email" : "tel"}
                value={draft}
                disabled={typing}
                onChange={(e) => {
                  setDraft(e.target.value);
                  setError("");
                }}
                placeholder={current.placeholder}
                aria-label={current.placeholder}
                className="h-11 flex-1 rounded-full border border-lineDark bg-white px-4 text-[0.9375rem] text-inkText outline-none transition-all placeholder:text-inkTextDim/60 focus:border-accent focus:shadow-[0_0_0_4px_rgba(245,146,30,0.12)] disabled:opacity-60"
              />
            )}

            {current.optional && !draft.trim() ? (
              <button
                type="submit"
                disabled={typing}
                data-cursor-hover
                className="h-11 shrink-0 rounded-full border border-lineDark bg-white px-5 text-sm font-semibold text-inkText transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
              >
                Skip
              </button>
            ) : (
              <button
                type="submit"
                disabled={typing}
                aria-label="Send"
                data-cursor-hover
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_6px_18px_rgba(245,146,30,0.4)] transition-transform hover:scale-105 disabled:opacity-50"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            )}
          </div>
          {error && <p className="mt-2 px-1 text-xs font-medium text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
