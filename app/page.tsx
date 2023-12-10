import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import HowWeWork from "@/components/HowWeWork/HowWeWork";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <HowWeWork />
      <Gallery />
      <Contact />
    </>
  )
}
