import Image from "next/image";

/**
 * Right-hand workspace visual for the CTA band — the laptop, mug and office
 * scene cropped from the brand hero artwork, with the handwritten note laid
 * over it in the project's script font.
 */
export default function CtaVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] xl:block">
      {/* blue key light behind the desk */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 80% at 65% 55%, rgba(28,111,216,0.45) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 30%, #000 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 30%, #000 100%)",
        }}
      >
        <Image
          src="/cta/workspace.jpg"
          alt="A Moriva laptop and mug on a studio desk"
          fill
          sizes="(min-width: 1280px) 620px, 0px"
          className="object-cover object-[52%_center]"
        />
        {/* sink the photo into the navy card */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,42,92,0.85) 0%, rgba(14,42,92,0.25) 40%, rgba(14,42,92,0.10) 100%)",
          }}
        />
      </div>

      {/* handwritten note */}
      <div className="absolute right-6 top-7 text-right">
        <p className="font-script text-xl leading-[1.45] text-white/90 drop-shadow-[0_2px_8px_rgba(4,16,38,0.8)] 2xl:text-2xl">
          Technology
          <br />
          People
          <br />
          Progress
        </p>
        <span className="mt-2 ml-auto block h-[3px] w-20 rounded-full bg-accent" />
      </div>
    </div>
  );
}

/**
 * The same workspace scene for widths where the side panel above is hidden:
 * a banner across the top of the card, so phones and tablets still get the
 * photo instead of a bare text card. Bleeds to the card's edges by cancelling
 * its padding.
 *
 * The photo is masked to transparent rather than faded to a flat navy: the
 * card's mesh background is not one colour, so any painted fade leaves a
 * visible edge where it ends. The handwritten note is left out here because
 * at this crop it lands on the laptop screen's own text.
 */
export function CtaVisualBanner() {
  const mask =
    "linear-gradient(to bottom, #000 0%, #000 30%, rgba(0,0,0,0.82) 48%, rgba(0,0,0,0.5) 66%, rgba(0,0,0,0.22) 82%, rgba(0,0,0,0.06) 93%, transparent 100%)";
  return (
    <div
      className="pointer-events-none relative -mx-7 -mt-10 -mb-2 h-64 overflow-hidden sm:h-80 md:-mx-12 md:-mt-14 md:-mb-4 md:h-96 xl:hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <Image
        src="/cta/workspace.jpg"
        alt="A Moriva laptop and mug on a studio desk"
        fill
        sizes="(min-width: 1280px) 1px, 100vw"
        className="object-cover object-[52%_60%]"
      />
      {/* tint so the photo sits in the navy card rather than on it */}
      <div aria-hidden className="absolute inset-0 bg-ink/20" />
    </div>
  );
}
