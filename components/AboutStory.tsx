import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import WhyChooseStrip from "./WhyChooseStrip";
import { heroStats } from "@/data/stats";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-20 md:px-10 md:pb-12 md:pt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <span className="eyebrow">About Moriva</span>
              </Reveal>
              <Reveal delay={0.05} className="mt-4">
                <h2 className="font-sora text-4xl font-800 tracking-tight text-inkText md:text-6xl">
                  Inspired to innovate,
                  <br className="hidden sm:block" /> engineered to last.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-6 max-w-xl">
                <p className="text-lg leading-relaxed text-inkTextDim">
                  Moriva Technologies LLP is a digital engineering studio built
                  around a simple idea: technology should be shaped by what your
                  business actually needs, not by what a template allows.
                  We&apos;re a small, senior team that designs, builds and
                  supports websites, apps and platforms for companies ready to
                  invest in something built to last. We work with businesses
                  across India to deliver custom software, web and mobile
                  applications, ERP systems and AI-powered digital solutions.
                </p>
              </Reveal>

              <Reveal delay={0.15} className="mt-10">
                <dl className="grid grid-cols-3 gap-3 border-t border-lineDark pt-8 sm:gap-6 md:gap-8">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="min-w-0">
                      <dd className="truncate font-sora text-lg font-800 tracking-tight text-inkText sm:text-xl md:text-3xl">
                        {stat.value}
                      </dd>
                      <dt className="mt-1 truncate text-xs text-inkTextDim sm:text-sm">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
            <WhyChooseStrip />
          </div>
        </div>
      </div>
    </section>
  );
}
