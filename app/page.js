import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import InfoStrip from "@/components/InfoStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import DestinationsSection from "@/components/DestinationsSection";
import MbbsAbroadSection from "@/components/MbbsAbroadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Sticky Header with Logo and Navigation */}
      <Header />

      <main id="main-content">
        {/* Compact Hero Slider Banner (Controlled height, not full screen) */}
        <HeroSlider />

        {/* Slim Info Strip: Mon-Sat 9AM-7PM | Mota Varachha, Surat | Phone */}
        <InfoStrip />

        {/* About Section: Counsellor guidance, Mota Varachha headquarters */}
        <AboutSection />

        {/* Services: Editorial alternating image/text rows + Why IQ International */}
        <ServicesSection />

        {/* 5-Step Process Timeline */}
        <ProcessSection />

        {/* Global Destinations: UK, USA, Canada, Australia, New Zealand */}
        <DestinationsSection />

        {/* MBBS Abroad Spotlight: Russia & Georgia Medical Guidance */}
        <MbbsAbroadSection />

        {/* Contact Section: WhatsApp Inquiry Form + Physical Office & Google Map */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Quick Action Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Lightweight Scroll Reveal Animations */}
      <ScrollReveal />
    </>
  );
}
