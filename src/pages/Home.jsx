import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import AboutSection from "../components/organisms/AboutSection";
import HousesSection from "../components/organisms/HousesSection";
import ServicesSection from "../components/organisms/ServicesSection";
import WorksSection from "../components/organisms/WorksSection";
import GallerySection from "../components/organisms/GallerySection";
import ContactSection from "../components/organisms/ContactSection";
import Footer from "../components/organisms/Footer";
import FloatingWhatsapp from "../components/organisms/FloatingWhatsapp";

import useRevealAnimation from "../hooks/useRevealAnimation";

export default function Home() {
    useRevealAnimation();
  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <HousesSection />

      <ServicesSection />

      <WorksSection />

      <GallerySection />

      <ContactSection />

      <Footer />

      <FloatingWhatsapp />
    </>
  );
}