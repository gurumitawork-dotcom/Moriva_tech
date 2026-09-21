import type { Metadata } from "next";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import GradientMesh from "@/components/GradientMesh";
import Reveal from "@/components/Reveal";
import TechStack from "@/components/TechStack";
import BusinessResults from "@/components/BusinessResults";
import WhyPortfolio from "@/components/WhyPortfolio";
import PortfolioProcess from "@/components/PortfolioProcess";
import RelatedServices from "@/components/RelatedServices";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Portfolio — Moriva Technologies",
  description:
    "Websites, web apps, member portals and mobile applications designed, built and shipped by Moriva Technologies.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-[88px]">
      <PortfolioHero />

      <section
        id="portfolio-grid"
        className="relative overflow-hidden bg-gradient-to-b from-paper via-paper2/50 to-paper2/60 pb-20 pt-6 md:pb-24 md:pt-8"
      >
        <GradientMesh variant="light" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Every project</span>
            </Reveal>
            <Reveal delay={0.05} className="mt-4">
              <h2 className="font-sora text-4xl font-800 leading-[1.1] tracking-tight text-inkText md:text-5xl">
                <span>Built, shipped,</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                  still running.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-5">
              <p className="max-w-xl text-base leading-relaxed text-inkTextDim">
                Filter by what you need built. Public builds link straight to
                the live site; private ones we can walk you through on a call.
              </p>
            </Reveal>
          </div>

          <div className="mt-10">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      <TechStack />
      <BusinessResults />
      <WhyPortfolio />
      <PortfolioProcess />
      <RelatedServices />
      <CtaBand />
    </div>
  );
}
