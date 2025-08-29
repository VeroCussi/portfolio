import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "../../es/contact-main/_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Veronica Cussi",
  description: "Contactez-moi pour vos projets web: sites vitrines, e‑commerce, apps sur mesure, etc.",
};

export default function ContactFrPage() {
  return (
    <div className="min-h-screen bg-theme text-primary">
      <Navbar locale="fr" />
      <div className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-theme border-theme">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">Contact</h1>
        <p className="mt-4 text-base md:text-lg text-secondary">Vous avez un projet ? Discutons-en.</p>
        
        <div className="mt-8">
          <ContactForm locale="fr" />
        </div>
        
        <div className="mt-8 p-4 rounded-2xl border border-theme">
          <p className="mt-4 text-sm text-muted">
            Email direct: <a href="mailto:verocussi@gmail.com" className="underline text-primary">verocussi@gmail.com</a>
          </p>
        </div>
      </div>
      <Footer locale="fr" />
    </div>
  );
}


