import type { Metadata } from "next";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { company } from "@/data/company";
import { SITE_URL, SHARE_IMAGE } from "@/data/seo";

const TITLE = "Process — Moriva Technologies";
const DESCRIPTION =
  "Discover Moriva Technologies' approach to software development, from initial discovery and planning through design, development, testing and launch.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/process/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/process/`,
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

export default function ProcessPage() {
  return (
    <div className="pt-[88px]">
      <Process />
      <CtaBand />
    </div>
  );
}
