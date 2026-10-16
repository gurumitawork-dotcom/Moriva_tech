import type { Metadata } from "next";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import { SITE_URL, SHARE_IMAGE } from "@/data/seo";

const TITLE = "FAQ — Moriva Technologies";
const DESCRIPTION =
  "Find answers about Moriva Technologies' software development services, project timelines, pricing, technology choices and ongoing support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/faq/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/faq/`,
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

export default function FaqPage() {
  return (
    <div className="pt-[88px]">
      <Faq />
      <CtaBand />
    </div>
  );
}
