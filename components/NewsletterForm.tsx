"use client";

import { useState } from "react";
import { company } from "@/data/company";

/**
 * There is no mailing-list backend yet, so this hands the address to the
 * studio inbox rather than silently dropping it.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter signup");
    const body = encodeURIComponent("Please add " + email + " to the list.");
    window.location.href =
      "mailto:" + company.email + "?subject=" + subject + "&body=" + body;
  };

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2 rounded-full border border-line bg-white/[0.04] p-1 pl-4 transition-colors focus-within:border-accent/50">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="min-w-0 flex-1 bg-transparent text-sm text-text outline-none placeholder:text-textDim/60"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          data-cursor-hover
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accentDim text-white transition-all duration-300 hover:brightness-105"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="h-4 w-4"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </form>
  );
}
