import Image from "next/image";
import Icon from "./Icon";
import type { WhyUsCard as WhyUsCardType } from "@/data/whyUs";

export default function WhyUsCard({
  card,
  priority = false,
}: {
  card: WhyUsCardType;
  priority?: boolean;
}) {
  return (
    <article
      data-cursor-hover
      className="group relative flex w-[min(22rem,80vw)] shrink-0 flex-col overflow-hidden rounded-lg border border-lineDark bg-surface shadow-[0_2px_16px_rgba(14,42,92,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_40px_rgba(14,42,92,0.13)]"
    >
      <div className="relative h-44 shrink-0 overflow-hidden bg-ink2 md:h-48">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="352px"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,35,71,0.10) 0%, rgba(11,35,71,0.30) 45%, rgba(11,35,71,0.80) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,146,30,0.28) 0%, transparent 55%, rgba(28,111,216,0.28) 100%)",
          }}
        />

        <span
          aria-hidden
          className="absolute right-5 top-2 font-sora text-[4.5rem] font-800 leading-none tracking-tight text-white/25 transition-colors duration-500 group-hover:text-white/40"
        >
          {card.number}
        </span>

        <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent text-white shadow-[0_0_28px_rgba(245,146,30,0.45)]">
          <Icon name={card.icon} className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-sora text-lg font-700 tracking-tight text-inkText">
          {card.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-inkTextDim">
          {card.description}
        </p>
      </div>
    </article>
  );
}
