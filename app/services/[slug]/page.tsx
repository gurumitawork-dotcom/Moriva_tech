import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import GradientMesh from "@/components/GradientMesh";
import Icon, { type IconName } from "@/components/Icon";
import ProposalButton from "@/components/ProposalButton";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import ServiceDetailFaq from "@/components/ServiceDetailFaq";
import RelatedServices from "@/components/RelatedServices";
import PortfolioProcess from "@/components/PortfolioProcess";
import CtaBand from "@/components/CtaBand";
import { services } from "@/data/services";
import { serviceDetails, type DetailItem } from "@/data/serviceDetails";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title + " — Moriva Technologies",
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const detail = serviceDetails[service.slug];

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper pb-16 pt-14 md:pb-20 md:pt-16">
        <GradientMesh variant="light" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm md:mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-inkTextDim">
                <li>
                  <Link href="/" className="transition-colors hover:text-accent">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-inkTextDim/50">
                  /
                </li>
                <li>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-accent"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden className="text-inkTextDim/50">
                  /
                </li>
                <li className="font-medium text-inkText" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-semibold text-accent md:text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
                    <Icon name={service.icon} className="h-3.5 w-3.5" />
                  </span>
                  {detail ? detail.tagline : service.title}
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-5 font-sora text-4xl font-800 leading-[1.08] tracking-tight text-inkText md:mt-6 md:text-6xl">
                  {detail ? (
                    <>
                      <span className="block">{detail.headingLead}</span>
                      <span className="mt-1.5 block bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                        {detail.headingAccent}
                      </span>
                    </>
                  ) : (
                    service.title
                  )}
                </h1>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-base font-semibold tracking-tight text-transparent md:text-lg">
                  {service.short}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-inkTextDim">
                  {detail ? detail.intro : service.description}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ProposalButton
                    label="Request a proposal"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-accent to-accentDim px-8 text-base font-700 text-white shadow-[0_0_28px_rgba(245,146,30,0.35)] transition-all duration-300 hover:brightness-105"
                  />
                  <Link
                    href="/portfolio"
                    data-cursor-hover
                    className="inline-flex h-12 items-center justify-center rounded-md border border-lineDark bg-surface px-8 text-base font-700 text-inkText transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    See the work
                  </Link>
                </div>
              </Reveal>

              {detail && (
                <Reveal delay={0.2}>
                  <dl className="mt-8 grid w-full max-w-xl grid-cols-1 gap-4 border-t border-lineDark pt-6 xs:grid-cols-3 xs:gap-2.5 sm:gap-0">
                    {detail.stats.map((stat, i) => (
                      <div
                        key={stat.label}
                        className={
                          "flex min-w-0 flex-col xs:pr-1.5 sm:pr-5 " +
                          (i > 0 ? "sm:border-l sm:border-lineDark sm:pl-5" : "")
                        }
                      >
                        <dt className="font-sora text-xl font-800 tracking-tight text-inkText md:text-2xl">
                          {stat.value}
                        </dt>
                        <dd className="mt-1 text-[0.625rem] font-semibold uppercase leading-snug tracking-[0.1em] text-inkTextDim md:text-[0.6875rem]">
                          {stat.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.1}>
              <ServiceHeroVisual service={service} />
            </Reveal>
          </div>
        </div>
      </section>

      {detail && (
        <>
          {/* Positioning */}
          <section className="relative overflow-hidden bg-gradient-to-b from-paper via-paper2/50 to-paper2/60 py-16 md:py-20">
            <GradientMesh variant="light" />
            <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                <Reveal>
                  <span className="eyebrow">Our approach</span>
                  <h2 className="mt-4 font-sora text-2xl font-800 leading-[1.15] tracking-tight text-inkText md:text-4xl">
                    {detail.positioning.heading}
                  </h2>
                </Reveal>
                <Reveal delay={0.05}>
                  <div className="lg:pt-10">
                    {detail.positioning.body.map((para, i) => (
                      <p
                        key={para.slice(0, 24)}
                        className={
                          "text-base leading-relaxed text-inkTextDim " +
                          (i > 0 ? "mt-5" : "")
                        }
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <Block
            eyebrow="Common problems"
            lead="What we get called in"
            accent="to fix."
            sub="The patterns we see most often when a business asks us to look at what they have."
            items={detail.problems}
            tinted
          />

          <Block
            eyebrow="What is included"
            lead="End to end,"
            accent="under one team."
            sub="From the first conversation through to the live build and the support after it."
            items={detail.included}
          />

          <Block
            eyebrow="Built for your stage"
            lead="Right-sized for"
            accent="where you are."
            sub="The same standards, scoped to what the business actually needs right now."
            items={detail.stages}
            tinted
          />

          <PortfolioProcess />

          <Block
            eyebrow="Engineering standards"
            lead="Performance, SEO and"
            accent="security, built in."
            sub="Part of how the work is done, not upsells after launch."
            items={detail.features}
            tinted
          />

          {/* Industries */}
          <section className="relative overflow-hidden bg-paper py-16 md:py-20">
            <GradientMesh variant="light" />
            <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="max-w-2xl">
                <Reveal>
                  <span className="eyebrow">Industries</span>
                </Reveal>
                <Reveal delay={0.05} className="mt-4">
                  <h2 className="font-sora text-3xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
                    <span>Sectors we have</span>
                    <br />
                    <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                      shipped into.
                    </span>
                  </h2>
                </Reveal>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {detail.industries.map((industry, i) => (
                  <Reveal key={industry} delay={0.03 * i}>
                    <span className="inline-flex items-center rounded-full border border-lineDark bg-surface px-4 py-2 text-sm font-medium text-inkText">
                      {industry}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <ServiceDetailFaq items={detail.faq} />
        </>
      )}

      <RelatedServices />
      <CtaBand />
    </div>
  );
}

function Block({
  eyebrow,
  lead,
  accent,
  sub,
  items,
  tinted = false,
}: {
  eyebrow: string;
  lead: string;
  accent: string;
  sub: string;
  items: DetailItem[];
  tinted?: boolean;
}) {
  return (
    <section
      className={
        "relative overflow-hidden py-16 md:py-20 " +
        (tinted
          ? "bg-gradient-to-b from-paper via-paper2/50 to-paper2/60"
          : "bg-paper")
      }
    >
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4">
            <h2 className="font-sora text-3xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
              <span>{lead}</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                {accent}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
              {sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i} className="h-full">
              <article
                data-cursor-hover
                className="flex h-full flex-col rounded-lg border border-lineDark bg-surface p-6 shadow-[0_2px_16px_rgba(14,42,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_50px_rgba(14,42,92,0.13)]"
              >
                {item.icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-accent">
                    <Icon name={item.icon as IconName} className="h-5 w-5" />
                  </span>
                )}
                <h3 className="mt-4 font-sora text-base font-700 tracking-tight text-inkText md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inkTextDim">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
