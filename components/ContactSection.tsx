import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import ContactChat from "./ContactChat";
import RequestDemo from "./RequestDemo";
import { company } from "@/data/company";

const direct = [
  {
    label: "WhatsApp",
    value: company.phones[0],
    href: `https://wa.me/${company.whatsapp}`,
    external: true,
  },
  {
    label: "Call",
    value: company.phones[1],
    href: `tel:${company.phones[1].replace(/\s+/g, "")}`,
    external: false,
  },
  {
    label: "Call",
    value: company.phones[0],
    href: `tel:${company.phones[0].replace(/\s+/g, "")}`,
    external: false,
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    external: false,
  },
];

const nextSteps = ["We reply within one working day", "A free discovery call", "A written scope & price"];

/**
 * The contact page opens straight into a conversation: no hero, just the chat
 * with the team on one side and every direct line on the other.
 */
export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-paper pt-[88px]">
      <GradientMesh variant="light" fadeBottom />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)] gap-6 px-4 pb-16 pt-6 sm:px-6 md:px-10 md:pb-24 md:pt-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-8">
        {/*
          The chat has a fixed height, so the demo card fills the rest of the
          column and both sides end level with the navy panel.
        */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <Reveal>
            <ContactChat />
          </Reveal>
          <Reveal delay={0.05} className="flex-1">
            <RequestDemo />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <aside className="relative flex h-full flex-col overflow-hidden rounded-lg bg-ink p-7 text-text md:p-9">
            <GradientMesh variant="navy" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            <div className="relative flex h-full flex-col">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-accent" />
                </span>
                Available for new projects
              </span>

              <h2 className="mt-6 font-sora text-3xl font-800 leading-[1.1] tracking-tight md:text-4xl">
                Rather skip
                <br />
                <span className="text-accent">the chat?</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-textDim">
                Every line below reaches the people who will build your product.
              </p>

              <ul className="mt-7 border-t border-white/10">
                {direct.map(({ label, value, href, external }) => (
                  <li key={href}>
                    <a
                      href={href}
                      data-cursor-hover
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 border-b border-white/10 py-4"
                    >
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-textDim">
                          {label}
                        </span>
                        <span className="mt-0.5 font-sora text-base font-700 tracking-tight transition-colors group-hover:text-accent md:text-lg">
                          {value.includes("@") ? (
                            <>
                              {value.split("@")[0]}
                              <wbr />@{value.split("@")[1]}
                            </>
                          ) : (
                            value
                          )}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-textDim">
                  What happens next
                </p>
                <ol className="mt-4 flex flex-col gap-3">
                  {nextSteps.map((s, i) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-white/90">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 font-sora text-xs font-800 text-accent">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-auto pt-10">
                <p className="font-script text-2xl text-white/90">{company.tagline}</p>
                <p className="mt-1 text-xs text-textDim">{company.legalName}</p>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
