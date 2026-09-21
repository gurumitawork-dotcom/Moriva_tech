import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import WhyChooseStrip from "./WhyChooseStrip";
import { heroStats } from "@/data/stats";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <GradientMesh variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-20 md:px-10 md:pb-12 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
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
                  invest in something built to last.
                </p>
              </Reveal>

              <Reveal delay={0.15} className="mt-10">
                <dl className="flex flex-wrap gap-x-10 gap-y-6 border-t border-lineDark pt-8">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <dd className="font-sora text-3xl font-800 tracking-tight text-inkText md:text-4xl">
                        {stat.value}
                      </dd>
                      <dt className="mt-1 max-w-[9rem] text-sm text-inkTextDim">
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
