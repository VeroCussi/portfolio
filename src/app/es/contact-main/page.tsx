import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "./_components/ContactForm";
import GsapEffects from "@/components/GsapEffects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto | Veronica Cussi",
  description: "Ponte en contacto para proyectos web: sitios de marketing, e-commerce, apps a medida y más.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-theme text-primary">
      <GsapEffects />
      <Navbar locale="es" />
      <div className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-theme border-theme">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">Contacto</h1>
        <p className="mt-4 text-base md:text-lg text-secondary">¿Tienes un proyecto? Hablemos de él.</p>
        
        <div className="mt-8">
          <ContactForm locale="es" />
        </div>
        
        <div className="mt-8 p-4 rounded-2xl border border-theme">
          <p className="mt-4 text-sm text-muted">
            También puedes contactarme directamente en{" "}
            <a href="mailto:verocussi@gmail.com" className="underline hover:no-underline text-primary">
              verocussi@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer locale="es" />
    </div>
  );
}


