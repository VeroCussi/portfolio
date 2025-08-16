import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Veronica Cussi",
  description: "Get in touch for web projects: marketing sites, e‑commerce, custom apps and more.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-12 bg-[var(--background)] text-[var(--foreground)]">
      <Navbar locale="en" />
      <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl bg-white/60 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur bg-grid">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Contact</h1>
        <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-300">Have a project in mind? Let’s talk.</p>
      </header>
      <Section title="Send a message">
        <ContactForm locale="en" />
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Prefer email? <a href="mailto:verocussi@gmail.com" className="underline">verocussi@gmail.com</a>
        </p>
      </Section>
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2025 Verónica Cussi. All rights reserved.
      </footer>
    </div>
  );
}


