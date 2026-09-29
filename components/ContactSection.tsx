import Reveal from "./Reveal";
import GradientMesh from "./GradientMesh";
import ContactForm from "./ContactForm";
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
    value: company.phones[2],
    href: `tel:${company.phones[2].replace(/\s+/g, "")}`,
    external: false,
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    external: false,
  },
];


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
        <div className="flex flex-col gap-6 lg:gap-8 lg:h-full">
          <Reveal className="h-full">
            <ContactForm />
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 lg:h-full">
          <Reveal delay={0.1} className="flex-1">
          <aside className="relative flex h-full flex-col overflow-hidden rounded-lg bg-ink p-6 text-text md:p-7">
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

              <h2 className="mt-4 font-sora text-3xl font-800 leading-[1.1] tracking-tight md:text-4xl">
                Rather skip
                <br />
                <span className="text-accent">the chat?</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-textDim">
                Every line below reaches the people who will build your product.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {direct.map(({ label, value, href, external }) => {
                  const isWhatsApp = label === "WhatsApp";
                  const isEmail = label === "Email";
                  const isCall = label === "Call";

                  return (
                    <a
                      key={href}
                      href={href}
                      data-cursor-hover
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group relative inline-flex items-center overflow-hidden rounded-full border border-white/15 transition-all duration-300 hover:border-accent/50"
                    >
                      {/* Gradient background */}
                      <div
                        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background: isWhatsApp
                            ? "linear-gradient(135deg, rgba(25,195,109,0.1) 0%, rgba(245,146,30,0.05) 100%)"
                            : isEmail
                            ? "linear-gradient(135deg, rgba(220,53,69,0.1) 0%, rgba(245,146,30,0.05) 100%)"
                            : "linear-gradient(135deg, rgba(65,105,225,0.1) 0%, rgba(245,146,30,0.05) 100%)",
                          opacity: 0.6,
                        }}
                      />

                      {/* Left accent strip */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5"
                        style={{
                          background: isWhatsApp
                            ? "#19C36D"
                            : isEmail
                            ? "#DC3545"
                            : "#4169E1",
                        }}
                      />

                      <div className="relative flex items-center gap-3 px-4 py-2.5 ml-0.5">
                        <div className="flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          {isWhatsApp && (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-accent">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-3.997 6.162-2.122 9.582 1.875 3.42 5.568 4.465 8.835 2.382l.342.205c3.577 2.11 7.213.405 8.905-3.207 1.692-3.613.46-7.98-2.75-9.848-2.505-1.495-5.565-1.24-7.774.706l.002.001z" />
                            </svg>
                          )}
                          {isEmail && (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-accent">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                          )}
                          {isCall && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
                              <path d="M6.6 3h2.2l1.4 3.5-1.7 1.2a12 12 0 0 0 5.8 5.8l1.2-1.7L19 13.2v2.2A2.4 2.4 0 0 1 16.4 18 13.4 13.4 0 0 1 6 7.6 2.4 2.4 0 0 1 6.6 3Z" />
                            </svg>
                          )}
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/60 transition-colors duration-300 group-hover:text-accent">
                            {label}
                          </span>
                          <span className="font-sora text-sm font-700 tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
                            {value.includes("@") ? (
                              <>
                                {value.split("@")[0]}<wbr />@{value.split("@")[1]}
                              </>
                            ) : (
                              value
                            )}
                          </span>
                        </div>

                        <span
                          aria-hidden
                          className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/50 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent group-hover:scale-110"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>


              <div className="mt-auto pt-10">
                <p className="font-script text-2xl text-white/90">{company.tagline}</p>
                <p className="mt-1 text-xs text-textDim">{company.legalName}</p>
              </div>
            </div>
          </aside>
          </Reveal>

          <Reveal delay={0.15}>
            <RequestDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
