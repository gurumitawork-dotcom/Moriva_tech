import Hero from "@/components/Hero";
import AboutStory from "@/components/AboutStory";
import WhyUs from "@/components/WhyUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import PortfolioSection from "@/components/PortfolioSection";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStory />
      <WhyUs />
      <ServicesShowcase />
      <PortfolioSection />
      <CtaBand />
    </>
  );
}
