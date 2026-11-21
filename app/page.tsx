
import type { Metadata } from "next";
import StructuredData from "./components/home/StructuredData";
import HeroSection from "./components/home/HeroSection";
import PropertyCategories from "./components/home/PropertyCategories";
import FreeListingSection from "./components/home/FreeListingSection";
import AIFeaturesSection from "./components/home/AIFeaturesSection";
import ProfessionalSection from "./components/home/ProfessionalSection";
import ServicesSection from "./components/home/ServicesSection";
import CitiesSection from "./components/home/CitiesSection";
import SEOContentSection from "./components/home/SEOContentSection";
import AppDownloadSection from "./components/home/AppDownloadSection";
import FAQSection from "./components/home/FAQSection";



export const metadata: Metadata = {
  title:
    "OPV India | Buy, Sell & Rent Properties | Post Property Free",

  description:
    "Explore plots, villas, apartments, agricultural lands and commercial properties across India. Discover properties with OPV AI and post property free.",

  alternates: {
    canonical: "https://www.openplotsandvillas.in/",
  },

  openGraph: {
    title:
      "OPV India | AI-Powered Real Estate Discovery",
    description:
      "Explore properties across India. Buy, sell, rent and post property free with OPV.",
    url: "https://www.openplotsandvillas.in/",
    type: "website",
    locale: "en_IN",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <section id="home">
        <HeroSection />
      </section>

      <section id="properties">
        <PropertyCategories />
      </section>

      <FreeListingSection />

      <section id="features">
        <AIFeaturesSection />
      </section>

      <section id="professionals">
        <ProfessionalSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="cities">
        <CitiesSection />
      </section>

      <SEOContentSection />

      <section id="app">
        <AppDownloadSection />
      </section>

      <FAQSection />
    </>
  );
}
