import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "./_components/ContactForm";
import GsapEffects from "@/components/GsapEffects";

export const metadata: Metadata = {
  title: "Contact | Veronica Cussi",
  description: "Get in touch for web projects: marketing sites, e‑commerce, custom apps and more.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-theme text-primary">
      <GsapEffects />
      <Navbar locale="en" />
      <div className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-theme border-theme">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">Contact</h1>
        <p className="mt-4 text-base md:text-lg text-secondary">Have a project? Let&apos;s discuss it.</p>
        
        <div className="mt-8">
          <ContactForm locale="en" />
        </div>
        
        <div className="mt-8 p-4 rounded-2xl border border-theme">
          <p className="mt-4 text-sm text-muted">
            You can also reach me directly at{" "}
            <a href="mailto:verocussi@gmail.com" className="underline hover:no-underline text-primary">
              verocussi@gmail.com
            </a>
          </p>
        </div>
      </div>
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-muted">
        <p>© 2024 Verónica Cussi. All rights reserved.</p>
      </footer>
    </div>
  );
}


