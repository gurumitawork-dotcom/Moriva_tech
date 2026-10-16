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
import { company } from "@/data/company";
import { SITE_URL, SHARE_IMAGE } from "@/data/seo";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/* Batch rollout: only these slugs get canonical/OG/Twitter metadata so far.
   Descriptions are adapted from each service's existing serviceDetails intro,
   not invented. Other slugs keep their original title+description only,
   added here one batch at a time. */
const METADATA_DESCRIPTIONS: Record<string, string> = {
  "website-development":
    "Custom website development focused on responsive design, fast loading, user experience and measurable business outcomes.",
  "mobile-app-development":
    "Custom iOS and Android app development with intuitive user experiences, reliable performance and features tailored to your business.",
  "cloud-solutions":
    "Cloud hosting, deployment and environment management designed for reliable releases, scalable infrastructure and streamlined operations.",
  "cybersecurity-services":
    "Cybersecurity services for access control, system hardening and secure data handling to strengthen infrastructure security and reduce risk.",
  "ai-chat-bots":
    "Custom AI chatbot development to automate routine queries, support customers around the clock and enable human handover when needed.",
  "ui-ux-design":
    "UI/UX design services focused on intuitive interfaces, clear user journeys and consistent design systems that improve usability.",
  "it-consulting":
    "IT consulting and digital transformation services to identify modernization priorities, evaluate costs and plan practical technology improvements.",
  "maintenance-support":
    "Website and application maintenance services covering monitoring, bug fixes, security updates and ongoing improvements after launch.",
  "seo-services":
    "SEO services covering technical audits, on-page optimization and indexing improvements to help search engines discover your website.",
  "rag-application-development":
    "Moriva Technologies develops retrieval-augmented generation (RAG) applications that connect AI models with relevant business documents and knowledge sources to deliver context-aware answers.",
  "landing-page-design":
    "Landing page design services focused on message match, conversion-focused layouts and fast loading to help turn campaign traffic into enquiries.",
  "erp-development":
    "Custom ERP development for integrated, scalable business management solutions that connect workflows, streamline operations and support business growth.",
};

export function generateMetadata({ params }: Params): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  const title = service.title + " — Moriva Technologies";
  const description = METADATA_DESCRIPTIONS[service.slug];

  if (!description) {
    return { title, description: service.description };
  }

  const canonical = `${SITE_URL}/services/${service.slug}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: company.name,
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}

/* Escapes "<" so the serialized JSON can never prematurely close this
   script tag or be parsed as markup. */
function toJsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function ServiceDetailPage({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const detail = serviceDetails[service.slug];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}/`,
      },
    ],
  };

  return (
    <div className="pt-[88px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper pb-16 pt-14 md:pb-20 md:pt-16">
        <GradientMesh variant="light" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
            <div>
              <Reveal>
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1.5 text-sm">
                    <li>
                      <Link href="/" className="text-inkTextDim transition-colors hover:text-accent">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden className="text-inkTextDim/50">
                      /
                    </li>
                    <li>
                      <Link href="/services/" className="text-inkTextDim transition-colors hover:text-accent">
                        Services
                      </Link>
                    </li>
                    <li aria-hidden className="text-inkTextDim/50">
                      /
                    </li>
                    <li aria-current="page">
                      <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-semibold text-accent md:text-sm">
                        {service.title}
                      </span>
                    </li>
                  </ol>
                </nav>
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

      <RelatedServices currentSlug={service.slug} />
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
