import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { company } from "@/data/company";
import { SITE_URL, SHARE_IMAGE } from "@/data/seo";

const TITLE = "Contact — Moriva Technologies";
const DESCRIPTION =
  "Contact Moriva Technologies to discuss your custom software, website, mobile app, ERP or business-platform project and explore the right solution for your business.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact/`,
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

export default function ContactPage() {
  return <ContactSection />;
}
