"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type NavbarProps = {
  locale: "en" | "fr";
};

export default function Navbar({ locale }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);

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

  const switchHref = isFrench ? "/" : "/fr";

  return (
    <nav className="w-full max-w-5xl mx-auto mt-6 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-zinc-900/80 backdrop-blur px-4 py-3 flex items-center justify-between text-zinc-900 dark:text-zinc-100">
      <div className="flex items-center gap-3">
        <Image src="/vero/veronicacussi.jpg" alt="Verónica Cussi" width={40} height={40} className="rounded-md" />
        <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Verónica Cussi</span>
      </div>
      <ul className="flex items-center gap-3 text-sm">
        <li>
          <a href="https://github.com/VeroCussi" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/veronicacussi/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">LinkedIn</a>
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


