import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vantren - Diseño y creación de soluciones tecnológicas",
  description: "En Vantren nos encargamos de integrar a negocios almundo digital mediante soluciones personalizadas.",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
