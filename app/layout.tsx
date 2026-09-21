import type { Metadata } from "next";
import { Sora, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import TouchRipple from "@/components/TouchRipple";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollArrows from "@/components/ScrollArrows";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moriva Technologies — Digital Engineering Studio",
  description:
    "We design and engineer websites, digital products and platforms for companies that have outgrown templates — strategy, interface and code, handled by one team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${dancingScript.variable}`}>
      <body className="bg-paper text-inkText antialiased">
        <Cursor />
        <TouchRipple />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollArrows />
      </body>
    </html>
  );
}
