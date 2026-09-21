import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Moriva Technologies",
  description: "Have a project in mind? Let's build something worth maintaining.",
};

export default function ContactPage() {
  return <ContactSection />;
}
