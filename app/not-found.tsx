import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — Moriva Technologies",
  description: "The page you're looking for doesn't exist or may have moved.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-[88px] text-center">
      <p className="font-sora text-sm font-700 uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-sora text-4xl font-800 tracking-tight text-inkText md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-inkTextDim">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        data-cursor-hover
        className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-accent to-accentDim px-8 text-base font-700 text-white shadow-[0_0_28px_rgba(245,146,30,0.35)] transition-all duration-300 hover:brightness-105"
      >
        Return home
      </Link>
    </div>
  );
}
