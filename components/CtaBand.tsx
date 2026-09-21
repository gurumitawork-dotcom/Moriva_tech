import Link from "next/link";
import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import ProposalButton from "./ProposalButton";
import CtaVisual, { CtaVisualBanner } from "./CtaVisual";

const benefits = [
  "Direct consultation",
  "Tailored solutions",
  "Long-term partnership",
];

export default function CtaBand() {
  return (
    <section className="relative bg-paper px-6 pb-14 md:px-10 md:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-ink px-7 py-10 md:px-12 md:py-14">
            <GradientMesh variant="navy" />

            <CtaVisual />
            <CtaVisualBanner />

            <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] lg:gap-12 xl:pr-[38%]">
              {/* Message */}
              <div className="max-w-[560px]">
                <span className="eyebrow">Have a project in mind?</span>
                <h2 className="mt-3 font-sora text-[2rem] font-800 leading-[1.05] tracking-tight text-text md:text-[2.5rem]">
                  Let&apos;s build something
                  <br />
                  <span className="text-accent">worth maintaining.</span>
                </h2>
                <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-textDim md:text-[0.9375rem]">
                  From idea to impact — we&apos;re here to turn your vision into
                  long-term value.
                </p>
              </div>

              {/* Benefits + actions */}
              <div className="flex flex-col gap-7 lg:border-l lg:border-line lg:pl-12">
              <ul className="flex flex-col gap-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/35 text-white/90">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                        className="h-2.5 w-2.5"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="whitespace-nowrap text-sm font-medium text-text">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start gap-3">
                <ProposalButton
                  label="Request a proposal"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDim min-w-[200px] px-7 text-sm font-700 text-white shadow-[0_0_28px_rgba(245,146,30,0.4)] transition-all duration-300 hover:brightness-105"
                />
                <Link
                  href="/contact"
                  data-cursor-hover
                  className="group inline-flex items-center gap-1.5 text-sm text-textDim transition-colors hover:text-accent"
                >
                  Or see all the ways to reach us
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
