import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "../../contact/_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Veronica Cussi",
  description: "Contactez-moi pour vos projets web: sites vitrines, e‑commerce, apps sur mesure, etc.",
};

export default function ContactFrPage() {
  return (
    <div className="min-h-screen pb-12" style={{ backgroundColor: 'var(--paper)', color: 'var(--ink)' }}>
      <Navbar locale="fr" />
      <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-grid"
               style={{
                 backgroundColor: 'rgba(255, 255, 255, 0.6)',
                 borderColor: 'var(--grid)'
               }}>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>Contact</h1>
        <p className="mt-4 text-base md:text-lg" style={{ color: 'var(--ink)', opacity: 0.7 }}>Vous avez un projet ? Discutons-en.</p>
      </header>
      <Section title="Envoyer un message">
        <ContactForm locale="fr" />
        <p className="mt-4 text-sm" style={{ color: 'var(--ink)', opacity: 0.6 }}>
          Email direct: <a href="mailto:verocussi@gmail.com" className="underline" style={{ color: 'var(--ink)' }}>verocussi@gmail.com</a>
        </p>
      </Section>
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm" style={{ color: 'var(--ink)', opacity: 0.6 }}>
        © 2025 Verónica Cussi. Tous droits réservés.
      </footer>
    </div>
  );
}


