import type { Metadata } from "next";
import WorkCarousel from "@/components/WorkCarousel";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Work — Moriva Technologies",
  description:
    "Products and platforms we've engineered across fintech, healthcare, logistics and retail.",
};

export default function WorkPage() {
  return (
    <div className="pt-[88px]">
      <WorkCarousel />
      <CtaBand />
    </div>
  );
}
