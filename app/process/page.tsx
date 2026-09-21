import type { Metadata } from "next";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Process — Moriva Technologies",
  description:
    "From discovery to a product you can run — the five stages of every Moriva engagement.",
};

export default function ProcessPage() {
  return (
    <div className="pt-[88px]">
      <Process />
      <CtaBand />
    </div>
  );
}
