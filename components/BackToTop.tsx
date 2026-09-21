"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      data-cursor-hover
      className="group inline-flex items-center gap-2 self-start text-xs font-semibold text-textDim transition-colors hover:text-accent"
    >
      Back to top
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent/50">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </span>
    </button>
  );
}
