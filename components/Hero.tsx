import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import HeroShowcase from "./HeroShowcase";
import {
  ChipIcon,
  CloudIcon,
  DevicesIcon,
  GrowthIcon,
  ShieldIcon,
} from "./HeroIcons";

/**
 * Picks up whatever real artwork lives in /public/hero at render time.
 * Drop files in and they appear — no code change needed. Sorted by filename,
 * so prefixing with 01-, 02-, 03- controls the order. A single file is treated
 * as one composed banner rather than a collage.
 */
function getHeroImages(): string[] {
  const dir = path.join(process.cwd(), "public", "hero");
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
      .sort()
      .map((file) => `/hero/${file}`);
  } catch {
    return [];
  }
}

const HEADLINE = "We Build Digital Solutions That Grow";

const SUMMARY =
  "From websites and mobile apps to cloud, security, and AI — we help businesses turn ideas into impactful digital products.";

const ARTWORK_ALT = `Moriva Technologies LLP — ${HEADLINE}. ${SUMMARY} Services: web and mobile development, cloud solutions, security and compliance, AI-powered applications, and digital transformation.`;

/**
 * The calls to action are drawn inside the artwork, so they are not real
 * controls. These transparent overlays sit exactly on top of them to keep the
 * hero clickable and keyboard reachable without drawing a second set of
 * buttons. Values are fractions of the artwork, which map 1:1 because the
 * container uses the image's own aspect ratio with object-contain.
 */
const CTA_HOTSPOTS = [
  { href: "/contact", label: "Get Started", left: "3.75%", top: "67%", width: "11.25%", height: "7.8%" },
  { href: "/services", label: "Our Services", left: "16.25%", top: "67%", width: "10%", height: "7.8%" },
];

/**
 * The full composition is only rendered from lg up. Declaring that here keeps
 * narrower viewports off the full-width candidate; they load the file through
 * MOBILE_ARTWORK_SIZES for the stacked halves instead.
 */
const ARTWORK_SIZES = "(min-width: 1024px) 96vw, 1px";

/**
 * Below lg a 2048x768 banner shrunk to phone width is a thin strip with
 * unreadable text, so the artwork is split at x=879 into its text half and its
 * photo half, stacked, each full width. The cut sits between the end of
 * "Transformation" (x≈877) and the "Turn Ideas" card (x=880); re-check it if
 * the artwork changes. Each box takes its slice's aspect ratio and
 * object-left/right pins the image to it, so nothing is letterboxed.
 *
 * Both halves share one sizes hint so they resolve to the same URL and the
 * file downloads once. It is the wider render: the text half shows the image
 * at 2048/879 = 2.33x the box width.
 */
const MOBILE_ARTWORK_SIZES = "(min-width: 1024px) 1px, 233vw";

/** CTA_HOTSPOTS mapped onto the text half: x scaled by 2048/879. */
const MOBILE_CTA_HOTSPOTS = [
  { href: "/contact", label: "Get Started", left: "8.74%", top: "67%", width: "26.21%", height: "7.8%" },
  { href: "/services", label: "Our Services", left: "37.86%", top: "67%", width: "23.3%", height: "7.8%" },
];

const PILLARS = [
  { label: "Web & Mobile Development", Icon: DevicesIcon },
  { label: "Cloud Solutions", Icon: CloudIcon },
  { label: "Security & Compliance", Icon: ShieldIcon },
  { label: "AI-Powered Applications", Icon: ChipIcon },
  { label: "Digital Transformation", Icon: GrowthIcon },
];

/**
 * Sits in the space the artwork leaves clear above the headline. Everything is
 * sized in em off a viewport-scaled font size, so the pill keeps its proportion
 * against the artwork at every width instead of looking oversized on smaller
 * desktops. The dot pulses only when the visitor has not asked for less motion.
 */
function AvailabilityPill({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-[0.7em] rounded-full border border-white/25 bg-white/10 px-[1.15em] py-[0.55em] backdrop-blur-md ${className}`}
    >
      <span className="relative flex h-[0.62em] w-[0.62em] shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex h-full w-full rounded-full bg-accent" />
      </span>
      <span className="font-medium tracking-wide text-white/90">
        Available for new projects
      </span>
    </span>
  );
}

type Hotspot = { href: string; label: string; left: string; top: string; width: string; height: string };

function CtaHotspot({ href, label, left, top, width, height }: Hotspot) {
  return (
    <Link
      href={href}
      data-cursor-hover
      aria-label={label}
      className="absolute rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      style={{ left, top, width, height }}
    >
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function CtaButtons() {
  return (
    <>
      <Link
        href="/contact"
        data-cursor-hover
        className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-inkText transition-transform hover:scale-[1.03]"
      >
        Get Started
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
      <Link
        href="/services"
        data-cursor-hover
        className="rounded-full border border-white/45 px-7 py-3.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
      >
        Our Services
      </Link>
    </>
  );
}

export default function Hero() {
  const images = getHeroImages();
  const hasArtwork = images.length === 1;

  return (
    <section
      className="relative isolate overflow-hidden bg-ink"
      aria-label="Moriva Technologies introduction"
    >
      {/* Tuned to the artwork's own edges so it never reads as a pasted panel. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(118deg, #021D47 0%, #06265A 46%, #0A3A78 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 84% 12%, rgba(2,75,156,0.55) 0%, rgba(2,29,71,0) 72%)",
        }}
      />

      {/*
        One heading for the whole section. The artwork draws it, so it stays in
        the accessibility tree and the document outline without being drawn
        twice. Only the collage fallback below lg shows it as live text.
      */}
      <h1 className="sr-only">{HEADLINE}</h1>

      {/* ---------- lg and up: the finished composition, on its own ---------- */}
      {/*
        Edge to edge with no gutter and no vertical padding beyond clearing the
        fixed navbar: the artwork *is* the hero, so the section height simply
        follows the image's aspect ratio and no background frame is ever shown
        around it. Capped at 2560 so an ultrawide display does not upscale a
        2048px source too far.
      */}
      <div className="relative z-10 hidden w-full pt-[88px] lg:block">
        <div className="relative mx-auto aspect-[2048/768] w-full max-w-[2560px]">
          <HeroShowcase images={images} alt={ARTWORK_ALT} sizes={ARTWORK_SIZES} />
          {hasArtwork && (
            <>
              {CTA_HOTSPOTS.map((cta) => (
                <CtaHotspot key={cta.href} {...cta} />
              ))}
              {/* Fills the band the artwork leaves clear above its headline. */}
              <AvailabilityPill className="absolute left-[3.8%] top-[8%] text-[clamp(10px,0.85vw,13px)]" />
            </>
          )}
        </div>
      </div>

      {/* ---------- below lg: the same artwork, split and stacked ---------- */}
      {hasArtwork && (
        <div className="relative z-10 w-full pt-[88px] lg:hidden">
          <div className="relative aspect-[879/768] w-full">
            <Image
              src={images[0]}
              alt={ARTWORK_ALT}
              fill
              sizes={MOBILE_ARTWORK_SIZES}
              quality={95}
              className="object-cover object-left"
              priority
            />
            {MOBILE_CTA_HOTSPOTS.map((cta) => (
              <CtaHotspot key={cta.href} {...cta} />
            ))}
            <AvailabilityPill className="absolute left-[8.85%] top-[7%] text-[clamp(9px,2.3vw,13px)]" />
          </div>
          {/*
            Pulled up 4px over the text half: at widths where the two aspect
            boxes land on fractional pixels, butting them edge to edge leaves a
            hairline of section background between them.
          */}
          <div className="relative -mt-1 aspect-[1169/768] w-full">
            <Image
              src={images[0]}
              alt=""
              fill
              sizes={MOBILE_ARTWORK_SIZES}
              quality={95}
              className="object-cover object-right"
            />
            {/*
              The text half ends in near-black navy while this half starts in
              bright blue, so fade from the former to hide the seam. Solid for
              the overlap, then eased out so no edge of the fade shows either.
              It starts 4px above the box: the image's top edge is drawn
              anti-aliased at its fractional position while this layer snaps
              to a whole pixel, which otherwise leaves one bright row showing.
            */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-1 h-[calc(32%+4px)]"
              style={{
                background:
                  "linear-gradient(180deg, #021D45 0%, #021D45 10px, rgba(2,29,69,0.75) 30%, rgba(2,29,69,0.35) 60%, rgba(2,29,69,0.1) 82%, rgba(2,29,69,0) 100%)",
              }}
            />
          </div>
        </div>
      )}

      {/* ---------- below lg, collage fallback only: live text ---------- */}
      {!hasArtwork && (
        <div className="relative z-10 mx-auto w-full max-w-[40rem] px-6 pb-14 pt-[104px] md:px-10 lg:hidden">
          <AvailabilityPill className="mb-6 text-[12px]" />
          <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-white/75">
            Digital Solutions for a Smarter Tomorrow
          </p>
          <p
            aria-hidden="true"
            className="mt-4 font-sora text-[2.1rem] font-800 leading-[1.1] tracking-tight text-text sm:text-[2.6rem]"
          >
            We Build Digital
            <br />
            <span className="text-accent">Solutions That Grow</span>
          </p>
          <p className="mt-5 text-base leading-relaxed text-textDim">{SUMMARY}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <CtaButtons />
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
            {PILLARS.map(({ label, Icon }) => (
              <li key={label} className="flex flex-col gap-2.5">
                <span className="h-[24px] w-[24px] text-white/90">
                  <Icon />
                </span>
                <span className="text-[12.5px] font-medium leading-[1.35] text-white/85">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
