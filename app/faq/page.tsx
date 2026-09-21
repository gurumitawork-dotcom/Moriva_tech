import type { Metadata } from "next";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQ — Moriva Technologies",
  description: "A few things people ask first about working with Moriva.",
};

export default function FaqPage() {
  return (
    <div className="pt-[88px]">
      <Faq />
      <CtaBand />
    </div>
  );
}
