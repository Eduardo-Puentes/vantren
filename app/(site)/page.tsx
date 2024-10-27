import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Vantren - Diseño y creación de soluciones tecnológicas",
  description: "En Vantren nos encargamos de integrar a negocios almundo digital mediante soluciones personalizadas.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <CTA />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
