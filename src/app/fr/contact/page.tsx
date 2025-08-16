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
    <div className="min-h-screen pb-12 bg-[var(--background)] text-[var(--foreground)]">
      <Navbar locale="fr" />
      <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl bg-white/60 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur bg-grid">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Contact</h1>
        <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-300">Vous avez un projet ? Discutons-en.</p>
      </header>
      <Section title="Envoyer un message">
        <ContactForm locale="fr" />
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Email direct: <a href="mailto:verocussi@gmail.com" className="underline">verocussi@gmail.com</a>
        </p>
      </Section>
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2025 Verónica Cussi. Tous droits réservés.
      </footer>
    </div>
  );
}


