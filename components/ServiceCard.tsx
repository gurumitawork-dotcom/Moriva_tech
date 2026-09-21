import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  size = "tall",
  className = "",
}: {
  service: Service;
  size?: "tall" | "short";
  className?: string;
}) {
  return (
    <Link
      href={"/services/" + service.slug}
      data-cursor-hover
      className={`group relative block overflow-hidden rounded-lg border border-white/15 bg-ink2 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(11,35,71,0.28)] transition-[box-shadow,border-color] duration-500 hover:border-accent/40 hover:ring-accent/25 hover:shadow-[0_26px_70px_rgba(11,35,71,0.38)] ${
        size === "tall" ? "h-[20.5rem] w-[16.25rem]" : "h-[16rem] w-full"
      } ${className}`}
    >
      <Image
        src={service.image}
        alt={service.alt}
        fill
        sizes="280px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #0B2347 0%, rgba(11,35,71,0.85) 45%, rgba(11,35,71,0.35) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,146,30,0.32) 0%, transparent 55%, rgba(28,111,216,0.28) 100%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-end p-5">
        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent text-white shadow-[0_0_28px_rgba(245,146,30,0.45)]">
          <Icon name={service.icon} className="h-4 w-4" />
        </span>
        <h3 className="font-sora text-[0.9375rem] font-700 tracking-tight text-white md:text-base">
          {service.title}
        </h3>
        <p
          className={`mt-1.5 text-[0.8125rem] leading-relaxed text-white/75 md:text-sm ${
            size === "tall" ? "line-clamp-3" : "line-clamp-2"
          }`}
        >
          {service.description}
        </p>
        <span className="mt-3 inline-flex items-center text-xs font-semibold text-accent md:text-sm">
          Learn more
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
