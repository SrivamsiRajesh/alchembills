import Image from "next/image";
import AuroraHero from "./components/Header";
import Features from  "./components/Features";
import AboutUs from "./components/AboutUs";
import Educate from "./components/Educate";
import FancyTestimonialsSlider from "./components/testimonial";
import Contact from "./components/Contact"
export default function Home() {
  return (
    <>
    <AuroraHero />
    <AboutUs />
    <Features />
    <Educate />
    <FancyTestimonialsSlider />
    <Contact />
    </>  

  );
}
