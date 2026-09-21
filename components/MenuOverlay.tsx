"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";

type NavLink = {
  label: string;
  href: string;
};

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
};

/** One line under each destination so the menu reads as a map, not a word list. */
const CAPTIONS: Record<string, string> = {
  "/": "Who we are",
  "/services": "What we build",
  "/portfolio": "Recent work",
  "/process": "How we work",
  "/faq": "Common questions",
  "/contact": "Say hello",
};

/**
 * The reveal grows out of the menu button (top right, just under the header),
 * so the panel reads as opening from the control that was tapped.
 */
const CLIP_CLOSED = "circle(0% at calc(100% - 2.75rem) 0%)";
const CLIP_OPEN = "circle(150% at calc(100% - 2.75rem) 0%)";

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function ChatGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.4L3 21z" />
      <path d="M9 10.5c.5 1.6 1.9 3 3.5 3.5l1.2-1.1 2 .9c-.2 1.2-1.2 1.9-2.4 1.7A6 6 0 0 1 8 10.2c-.2-1.2.5-2.2 1.7-2.4l.9 2-1.1 1.2" />
    </svg>
  );
}

function MailGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </svg>
  );
}

export default function MenuOverlay({ open, onClose, links }: MenuOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (open) {
      el.removeAttribute("inert");
    } else {
      el.setAttribute("inert", "");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const close = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
    containerRef.current?.setAttribute("inert", "");
    onClose();
  };

  // Each block enters a beat after the one above it, once the reveal is under way.
  const enter = (step: number) => ({
    style: { transitionDelay: open ? `${step * 55 + 180}ms` : "0ms" },
    className: `transition-all duration-500 ease-out ${
      open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
    }`,
  });

  const quickActions = [
    { label: "Call", href: `tel:${company.phones[0].replace(/\s+/g, "")}`, Glyph: PhoneGlyph, external: false },
    { label: "WhatsApp", href: `https://wa.me/${company.whatsapp}`, Glyph: ChatGlyph, external: true },
    { label: "Email", href: `mailto:${company.email}`, Glyph: MailGlyph, external: false },
  ];

  return (
    /*
      Sits under the floating header (z-40 against its z-50) and runs behind it
      to the top edge, so the logo and close button stay usable and no page
      content shows around the rounded bar while the menu is open.
    */
    <div
      ref={containerRef}
      className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-ink2 transition-[clip-path] duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] lg:hidden"
      style={{ clipPath: open ? CLIP_OPEN : CLIP_CLOSED }}
      aria-hidden={!open}
    >
      {/* Brand glows and a faint dot grid, so the panel has depth without imagery. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[90px]" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent2/35 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="relative flex min-h-full flex-col px-6 pb-8 pt-[104px]">
        <div style={enter(0).style} className={`flex items-center justify-between ${enter(0).className}`}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-textDim">
            Menu
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/85">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-full w-full rounded-full bg-accent" />
            </span>
            Available for new projects
          </span>
        </div>

        <nav className="mt-5 border-t border-white/10">
          {links.map((link, i) => {
            const active = pathname === link.href;
            const { style, className } = enter(i + 1);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-hover
                aria-current={active ? "page" : undefined}
                onClick={close}
                style={style}
                className={`group flex items-center gap-4 border-b border-white/10 py-3.5 ${className}`}
              >
                <span
                  className={`w-6 font-sora text-xs font-700 tabular-nums ${
                    active ? "text-accent" : "text-white/35"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-sora text-[1.7rem] font-800 leading-tight tracking-tight transition-colors group-active:text-accent ${
                      active ? "text-accent" : "text-text"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-textDim">
                    {active ? "You are here" : CAPTIONS[link.href]}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-white/20 text-white/70 group-active:border-accent group-active:bg-accent group-active:text-white"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 -rotate-45">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-8">
          <div
            style={enter(links.length + 1).style}
            className={`grid grid-cols-3 gap-2.5 ${enter(links.length + 1).className}`}
          >
            {quickActions.map(({ label, href, Glyph, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] py-3.5 text-white/90 backdrop-blur-md transition-colors active:border-accent active:text-accent"
              >
                <Glyph />
                <span className="text-xs font-medium">{label}</span>
              </a>
            ))}
          </div>

          <div
            style={enter(links.length + 2).style}
            className={`mt-3 ${enter(links.length + 2).className}`}
          >
            <Link
              href="/contact"
              data-cursor-hover
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-full bg-accent py-4 text-sm font-semibold text-inkText shadow-[0_10px_30px_rgba(245,146,30,0.35)]"
            >
              Start a project
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <p
            style={enter(links.length + 3).style}
            className={`mt-5 text-center text-[11px] tracking-wide text-textDim/80 ${enter(links.length + 3).className}`}
          >
            {company.legalName} · {company.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
