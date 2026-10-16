import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutStory from "@/components/AboutStory";
import WhyUs from "@/components/WhyUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import PortfolioSection from "@/components/PortfolioSection";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import { SITE_URL, SHARE_IMAGE } from "@/data/seo";

const TITLE = "Moriva Technologies — Custom Software & Digital Solutions";
const DESCRIPTION =
  "Moriva Technologies builds custom software, websites, mobile applications, ERP systems and AI-powered solutions to help businesses streamline operations and grow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: company.name,
    type: "website",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE.url],
  },
};

/* Derived from data/company.ts — the only place these facts are authored.
   addressLocality/addressRegion/postalCode are parsed from company.location
   ("Kadiyam - East Godavari District Andhra Pradesh - 533126"); the district
   is dropped since PostalAddress has no matching field. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/moriva-logo.png`,
  email: company.email,
  contactPoint: company.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.replace(/\s+/g, ""),
    contactType: "customer service",
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kadiyam",
    addressRegion: "Andhra Pradesh",
    postalCode: "533126",
    addressCountry: "IN",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: SITE_URL,
};

/* Escapes "<" so the serialized JSON can never prematurely close this
   script tag or be parsed as markup. */
function toJsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(websiteJsonLd) }}
      />
      <Hero />
      <AboutStory />
      <WhyUs />
      <ServicesShowcase />
      <PortfolioSection />
      <CtaBand />
    </>
  );
}
