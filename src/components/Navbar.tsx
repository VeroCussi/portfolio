"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import RetroButton from "@/app/_components/RetroButton";
import ThemeToggle from "@/app/_components/ThemeToggle";
import LanguageSelector from "@/app/_components/LanguageSelector";

type NavbarProps = {
  locale: "es" | "fr" | "en";
};

export default function Navbar({ locale }: NavbarProps) {
  const isFrench = locale === "fr";

  const servicesHref = locale === "fr" ? "/fr/services" : locale === "en" ? "/en/services" : "/services";
  const contactHref = locale === "fr" ? "/fr/contact" : locale === "en" ? "/en/contact" : "/contact";
  const homeHref = isFrench ? "/fr" : "/";

  return (
    <nav className="relative w-full max-w-5xl mx-auto mt-6 rounded-2xl border border-theme backdrop-blur-sm px-6 py-4 flex items-center justify-between shadow-lg bg-theme z-[9998]">
      <Link
        href={homeHref}
        aria-label={isFrench ? "Aller à l'accueil" : "Go to home"}
        className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50 rounded-xl transition-all duration-300 hover:scale-105"
        prefetch={true}
      >
        <Image 
          src="/vero/veronicacussi.jpg" 
          alt="Verónica Cussi" 
          width={40} 
          height={40} 
          className="rounded-xl"
          priority
        />
        <span className="font-mono font-semibold text-lg text-primary">Verónica Cussi</span>
      </Link>
      
      <ul className="flex items-center gap-4 text-sm">
        <li>
          <RetroButton
            href={servicesHref}
            variant="ghost"
            className="text-sm px-4 py-2"
            prefetch={true}
          >
            {locale === "fr" ? "Services" : locale === "en" ? "Services" : "Servicios"}
          </RetroButton>
        </li>
        <li>
          <RetroButton
            href={contactHref}
            variant="ghost"
            className="text-sm px-4 py-2"
            prefetch={true}
          >
            {locale === "fr" ? "Contact" : locale === "en" ? "Contact" : "Contacto"}
          </RetroButton>
        </li>
        
        <div className="w-px h-8 bg-theme-secondary" />
        
        <li>
          <a
            href="https://github.com/VeroCussi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-theme transition-all duration-300 bg-theme text-primary hover:bg-theme-secondary"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/veronicacussi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-theme transition-all duration-300 bg-theme text-primary hover:bg-theme-secondary"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
        </li>
        
        <div className="w-px h-8 bg-theme-secondary" />
        
        <li>
          <ThemeToggle />
        </li>
        <li>
          <LanguageSelector currentLocale={locale} />
        </li>
      </ul>
    </nav>
  );
}


