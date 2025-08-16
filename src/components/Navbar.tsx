"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";

type NavbarProps = {
  locale: "en" | "fr";
};

export default function Navbar({ locale }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setIsDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const isFrench = locale === "fr";

  const switchHref = (() => {
    const path = pathname ?? "/";
    if (isFrench) {
      // FR -> EN: quita prefijo /fr si existe
      if (path === "/fr") return "/";
      return path.startsWith("/fr/") ? path.slice(3) : "/";
    }
    // EN -> FR: añade prefijo /fr
    if (path === "/") return "/fr";
    return `/fr${path}`;
  })();
  const servicesHref = isFrench ? "/fr/services" : "/services";
  const contactHref = isFrench ? "/fr/contact" : "/contact";

  return (
    <nav className="w-full max-w-5xl mx-auto mt-6 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-zinc-900/80 backdrop-blur px-4 py-3 flex items-center justify-between text-zinc-900 dark:text-zinc-100">
      <Link
        href={isFrench ? "/fr" : "/"}
        aria-label={isFrench ? "Aller à l’accueil" : "Go to home"}
        className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 rounded-md"
      >
        <Image src="/vero/veronicacussi.jpg" alt="Verónica Cussi" width={40} height={40} className="rounded-md" />
        <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Verónica Cussi</span>
      </Link>
      <ul className="flex items-center gap-3 text-sm">
        <li>
          <Link href={servicesHref} className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
            {isFrench ? "Services" : "Services"}
          </Link>
        </li>
        <li>
          <Link href={contactHref} className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
            {isFrench ? "Contact" : "Contact"}
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/VeroCussi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
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
            className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
        </li>
        <li>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
            {isDark ? "☀️" : "🌙"}
          </button>
        </li>
        <li>
          <Link href={switchHref} className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition" aria-label="Switch language">
            {isFrench ? "EN" : "FR"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}


