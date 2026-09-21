import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import WhyUsCard from "./WhyUsCard";
import { whyUsCards } from "@/data/whyUs";

export default function WhyUs() {
  const loop = [...whyUsCards, ...whyUsCards];

  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-8 md:pb-20 md:pt-12">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Why Moriva</span>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-2xl">
          <h2 className="font-sora text-5xl font-800 tracking-tight text-inkText md:text-7xl">
            Engineering discipline, design judgement.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-inkTextDim">
            Most agencies are strong on one side. We keep strategy, interface
            design and production code inside the same small team, so nothing
            gets lost in translation.
          </p>
        </Reveal>
      </div>

      {/*
        Below md a sideways marquee shows one card and a sliver at a time and
        clamps the descriptions, so phones get every point as a readable list
        instead.
      */}
      <ul className="mx-auto mt-12 flex max-w-[40rem] flex-col gap-4 px-6 md:hidden">
        {whyUsCards.map((card, i) => (
          <li key={card.number}>
            <Reveal delay={0.04 * i}>
              <article className="flex overflow-hidden rounded-lg border border-lineDark bg-surface shadow-[0_2px_16px_rgba(14,42,92,0.06)]">
                <div className="relative w-[6.5rem] shrink-0 overflow-hidden bg-ink2">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="104px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(11,35,71,0.15) 0%, rgba(11,35,71,0.75) 100%)",
                    }}
                  />
                  <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white shadow-[0_0_20px_rgba(245,146,30,0.45)]">
                    <Icon name={card.icon} className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex-1 p-4">
                  <span className="font-sora text-xs font-700 tracking-wider text-accent">
                    {card.number}
                  </span>
                  <h3 className="mt-1 font-sora text-base font-700 leading-snug tracking-tight text-inkText">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-inkTextDim">
                    {card.description}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={0.15} className="relative mt-16 hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent md:w-24" />

        <div className="marquee-pause overflow-hidden py-2">
          <div className="marquee-track flex w-max items-stretch animate-marquee gap-6">
            {loop.map((card, i) => (
              <div
                key={`${card.number}-${i}`}
                className="flex"
                aria-hidden={i >= whyUsCards.length}
              >
                <WhyUsCard card={card} priority={i < 3} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
