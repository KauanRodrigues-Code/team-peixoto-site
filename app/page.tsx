import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Modalities from "@/components/Modalities";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Athletes from "@/components/Athletes";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Modalities />
      <Benefits />
      <Results />
      <Athletes />
      <Gallery />
      <HowItWorks />
      <CTA />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
