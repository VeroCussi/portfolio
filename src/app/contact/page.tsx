import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "./_components/ContactForm";
import GlitchTitle from "../_components/GlitchTitle";
import RetroButton from "../_components/RetroButton";
import NeonBadge from "../_components/NeonBadge";
import { Mail, MessageCircle, Phone, MapPin, Sparkles } from "lucide-react";
import GsapEffects from "@/components/GsapEffects";

export const metadata: Metadata = {
  title: "Contact | Veronica Cussi",
  description: "Get in touch for web projects: marketing sites, e‑commerce, custom apps and more.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--paper)', color: 'var(--ink)' }}>
      <GsapEffects />
      <Navbar locale="en" />
      <div className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-grid"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.6)',
             borderColor: 'var(--grid)'
           }}>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>Contact</h1>
        <p className="mt-4 text-base md:text-lg" style={{ color: 'var(--ink)', opacity: 0.7 }}>Have a project? Let's discuss it.</p>
        
        <div className="mt-8">
          <ContactForm locale="en" />
        </div>
        
        <div className="mt-8 p-4 rounded-2xl border" style={{ borderColor: 'var(--grid)' }}>
          <p className="mt-4 text-sm" style={{ color: 'var(--ink)', opacity: 0.6 }}>
            You can also reach me directly at{" "}
            <a href="mailto:verocussi@gmail.com" className="underline hover:no-underline" style={{ color: 'var(--ink)' }}>
              verocussi@gmail.com
            </a>
          </p>
        </div>
      </div>
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm" style={{ color: 'var(--ink)', opacity: 0.6 }}>
        <p>© 2024 Verónica Cussi. All rights reserved.</p>
      </footer>
    </div>
  );
}


