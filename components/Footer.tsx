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
      { label: company.location, href: "#" },
    ],
  },
];

const reach = [
  {
    label: "Email Moriva",
    href: "mailto:" + company.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Moriva",
    href: "https://wa.me/" + company.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-3.997 6.162-2.122 9.582 1.875 3.42 5.568 4.465 8.835 2.382l.342.205c3.577 2.11 7.213.405 8.905-3.207 1.692-3.613.46-7.98-2.75-9.848-2.505-1.495-5.565-1.24-7.774.706l.002.001z" />
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
  if (href === "#") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5 shrink-0 text-accent">
        <path d="M12 1.5C7.3 1.5 3.5 5.3 3.5 10c0 6 8.5 12 8.5 12s8.5-6 8.5-12c0-4.7-3.8-8.5-8.5-8.5zm0 11.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
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
