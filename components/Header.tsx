"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/**
 * A floating, fully rounded bar rather than an edge-to-edge strip. It still
 * fits inside the 88px every page reserves for the header (12px gap + 68px
 * bar), so no page layout depends on this change. Once the page scrolls, it
 * picks up a deeper shadow to separate it from the content.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
        <div
          className={`pointer-events-auto relative mx-auto flex max-w-[1400px] items-center justify-between overflow-hidden rounded-full border border-white/10 bg-ink4/90 pl-4 pr-2.5 backdrop-blur-xl transition-all duration-300 md:pl-6 md:pr-3 ${
            scrolled
              ? "shadow-[0_14px_40px_-12px_rgba(4,16,38,0.55)]"
              : "shadow-[0_8px_30px_-14px_rgba(4,16,38,0.4)]"
          } h-[68px]`}
        >
          {/* brand hairline along the bottom curve */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[28%] bottom-0 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #F5C43C 18%, #1C6FD8 50%, #F5C43C 82%, transparent 100%)",
            }}
          />

          <Link href="/" data-cursor-hover className="shrink-0">
            <Logo iconHeight={38} />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-white text-inkText shadow-[0_4px_14px_rgba(4,16,38,0.25)]"
                      : "text-textDim hover:bg-white/10 hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              data-cursor-hover
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDim py-2.5 pl-5 pr-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(245,146,30,0.35)] transition-all hover:brightness-105 lg:inline-flex"
            >
              Start a project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <button
              type="button"
              data-cursor-hover
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/15 bg-white/5 lg:hidden"
            >
              <span
                className={`block h-[1.5px] w-5 bg-text transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-text transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  );
}
