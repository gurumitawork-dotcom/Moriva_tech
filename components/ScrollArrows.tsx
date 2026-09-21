"use client";

import { useEffect, useState } from "react";

/** Height of the fixed header, so a section lands just below it. */
const HEADER_OFFSET = 88;

/**
 * Floating up/down controls for phones and tablets, so moving through a long
 * page does not depend on swiping all the way back. Up appears once the
 * visitor is past the first screen; down steps to the next section and hides
 * at the bottom of the page.
 */
export default function ScrollArrows() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowUp(y > window.innerHeight * 0.6);
      setShowDown(max - y > 160);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toNextSection = () => {
    const blocks = document.querySelectorAll<HTMLElement>("main section, footer");
    const next = Array.from(blocks).find(
      (el) => el.getBoundingClientRect().top > HEADER_OFFSET + 8
    );
    const top = next
      ? window.scrollY + next.getBoundingClientRect().top - HEADER_OFFSET
      : document.documentElement.scrollHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const button =
    "pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/85 text-white shadow-[0_8px_24px_rgba(11,35,71,0.35)] backdrop-blur-md transition-all duration-300 ease-out active:scale-95 active:bg-accent active:border-accent";
  const hidden = "pointer-events-none translate-y-3 scale-90 opacity-0";
  const shown = "translate-y-0 scale-100 opacity-100";

  return (
    <div
      className="pointer-events-none fixed right-4 z-30 flex flex-col gap-2.5 lg:hidden"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        aria-label="Back to top"
        tabIndex={showUp ? 0 : -1}
        onClick={toTop}
        className={`${button} ${showUp ? shown : hidden}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next section"
        tabIndex={showDown ? 0 : -1}
        onClick={toNextSection}
        className={`${button} ${showDown ? shown : hidden}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
