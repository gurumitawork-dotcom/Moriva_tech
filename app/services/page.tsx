import type { Metadata } from "next";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import { SHARE_IMAGE } from "@/data/seo";

const TITLE = "Software Development Services | Moriva Technologies";
const DESCRIPTION =
  "Explore Moriva Technologies' software development services, including websites, mobile applications, ERP systems, AI solutions, cloud infrastructure and business platforms.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/services/",
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

export default function ServicesPage() {
  return (
    <div className="pt-[88px]">
      <Services />
      <CtaBand />
    </div>
  );
}
