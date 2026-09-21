import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import BackToTop from "./BackToTop";
import { company } from "@/data/company";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services" },
      { label: "Mobile App Development", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
      { label: "AI Chat Bots", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Process", href: "/process" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: company.email, href: "mailto:" + company.email },
      {
        label: company.phones[0],
        href: "tel:" + company.phones[0].replace(/\s+/g, ""),
      },
      {
        label: company.phones[1],
        href: "tel:" + company.phones[1].replace(/\s+/g, ""),
      },
    ],
  },
];

const reach = [
  {
    label: "Email Moriva",
    href: "mailto:" + company.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Moriva",
    href: "https://wa.me/" + company.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.2 1.26-1.96 1.42-.52.11-1.2.2-3.5-.75-2.94-1.22-4.83-4.2-4.98-4.4-.14-.19-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.43.27-.29.58-.36.78-.36h.56c.18.01.42-.7.65.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.09.19-.14.31-.28.48l-.42.49c-.14.14-.28.3-.12.58.16.29.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.81.88-1.09.19-.28.37-.23.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.11.07.66-.17 1.34Z" />
      </svg>
    ),
  },
];




function RowIcon({ href }: { href: string }) {
  if (href.startsWith("mailto:")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5 shrink-0 text-accent">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }
  if (href.startsWith("tel:")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5 shrink-0 text-accent">
        <path d="M6.6 3h2.2l1.4 3.5-1.7 1.2a12 12 0 0 0 5.8 5.8l1.2-1.7L19 13.2v2.2A2.4 2.4 0 0 1 16.4 18 13.4 13.4 0 0 1 6 7.6 2.4 2.4 0 0 1 6.6 3Z" />
      </svg>
    );
  }
  return null;
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[1.75rem] bg-ink pt-8 md:pt-10">
      {/* hairline of brand colour where the CTA hands over to the footer */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(245,146,30,0.12) 0%, transparent 70%)",
        }}
      />

      {/* soft blue shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute -left-24 top-0 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(28,111,216,0.22)" }}
        />
        <div
          className="absolute right-[12%] top-10 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(245,146,30,0.10)" }}
        />
        <div
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "rgba(20,60,130,0.35)" }}
        />
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-3 right-4 select-none font-sora text-[26vw] font-800 leading-none tracking-tight text-white/[0.035] sm:text-[6rem] lg:-bottom-6 lg:right-6 lg:text-[7rem] xl:text-[9rem]"
      >
        Moriva
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)_minmax(0,0.55fr)_minmax(0,0.95fr)_minmax(0,0.95fr)] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" data-cursor-hover>
              <Logo iconHeight={48} />
            </Link>
            <p className="mt-3 max-w-[250px] text-[0.8125rem] leading-relaxed text-textDim">
              A digital engineering studio building websites, products and
              platforms that last.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1 text-[0.6875rem] font-semibold text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for new projects
            </p>

            <ul className="flex items-center gap-2">
              {reach.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-cursor-hover
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-textDim transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-text">{col.title}</h4>
              <span className="mt-1.5 block h-[2px] w-8 rounded-full bg-accent" />
              <ul className="mt-3.5 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      data-cursor-hover
                      className="flex items-center gap-2 text-sm text-textDim transition-all duration-200 hover:translate-x-0.5 hover:text-accent"
                    >
                      <RowIcon href={link.href} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-text">Stay connected</h4>
            <span className="mt-1.5 block h-[2px] w-8 rounded-full bg-accent" />
            <p className="mt-3.5 text-[0.8125rem] leading-relaxed text-textDim">
              Occasional notes on what we are building.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 border-t border-line py-4 text-xs text-textDim sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {company.legalName}. All rights reserved.</span>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
