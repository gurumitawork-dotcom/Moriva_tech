import type { Metadata } from "next";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services — Moriva Technologies",
  description:
    "Full-stack digital engineering: web, product, AI, mobile, cloud and brand systems.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[88px]">
      <Services />
      <CtaBand />
    </div>
  );
}
