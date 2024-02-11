import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import PricingCards from "@/components/PricingCards/PricingCards";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <HowWeWork />
      <Gallery />
      <PricingCards />
      <Contact />
    </>
  );
}
