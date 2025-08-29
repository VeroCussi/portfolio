"use client";

import { motion } from "framer-motion";
import { Globe, Bot, ShoppingCart, Wrench, Rocket, LineChart } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";

const ICONS = {
  globe: Globe,
  shoppingCart: ShoppingCart,
  bot: Bot,
  wrench: Wrench,
  rocket: Rocket,
  lineChart: LineChart,
} as const;

export type ServiceItem = {
  icon: keyof typeof ICONS;
  title: string;
  description: string;
  bullets?: string[];
};

export type FAQItem = {
  q: string;
  a: string;
};

type ServicesContentProps = {
  locale: "en" | "fr" | "es";
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  services: ServiceItem[];
  valueBullets: string[];
  faq?: FAQItem[];
  contactHref: string; // Use mailto as fallback until /contact exists
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ServicesContent({
  locale,
  heroTitle,
  heroSubtitle,
  ctaLabel,
  services,
  valueBullets,
  faq = [],
  contactHref,
}: ServicesContentProps) {
  const heroCta = (
    <Link
      href={contactHref}
      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 bg-theme-secondary text-white dark:text-gray-900 hover:bg-opacity-90"
    >
      {ctaLabel}
    </Link>
  );

  return (
    <>
      {/* Hero */}
      <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-theme border-theme">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            {heroTitle}
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-secondary">
            {heroSubtitle}
          </p>
          <div className="mt-6">{heroCta}</div>
        </motion.div>
      </header>

      {/* Services Grid */}
      <Section title={locale === "fr" ? "Prestations" : locale === "es" ? "Servicios" : "Services"} id="services-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, idx) => (
            <motion.article
              key={`${s.title}-${idx}`}
              className="group rounded-2xl border bg-theme border-theme p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: idx * 0.04 }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-violet/20 bg-violet/10 text-violet">
                  {(() => {
                    const Icon = ICONS[s.icon];
                    return <Icon className="h-5 w-5" aria-hidden />;
                  })()}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">
                    {s.description}
                  </p>
                  {s.bullets && (
                    <ul className="mt-3 space-y-1">
                      {s.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2 text-sm text-secondary">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet/60 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Value Props */}
      <Section title={locale === "fr" ? "Valeurs" : locale === "es" ? "Valores" : "Values"} id="values">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {valueBullets.map((bullet, idx) => (
            <motion.div
              key={idx}
              className="text-center p-4 rounded-2xl border bg-theme border-theme"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: idx * 0.04 }}
            >
              <p className="text-sm text-secondary">{bullet}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      {faq.length > 0 && (
        <Section title={locale === "fr" ? "FAQ" : locale === "es" ? "Preguntas Frecuentes" : "FAQ"} id="faq">
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl border bg-theme border-theme p-4 md:p-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE, delay: idx * 0.04 }}
              >
                <h3 className="font-semibold text-primary mb-2">{item.q}</h3>
                <p className="text-secondary">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}


