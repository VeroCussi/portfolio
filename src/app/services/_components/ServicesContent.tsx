"use client";

import { motion } from "framer-motion";
import { Globe, Bot, ShoppingCart, Wrench, Rocket, LineChart } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import { useId, useState } from "react";

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
  locale: "en" | "fr";
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
      className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      {ctaLabel}
    </Link>
  );

  return (
    <>
      {/* Hero */}
      <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl bg-white/60 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur bg-grid">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {heroTitle}
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {heroSubtitle}
          </p>
          <div className="mt-6">{heroCta}</div>
        </motion.div>
      </header>

      {/* Services Grid */}
      <Section title={locale === "fr" ? "Prestations" : "Services"} id="services-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, idx) => (
            <motion.article
              key={`${s.title}-${idx}`}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: idx * 0.04 }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-1 ring-orange-500/20">
                  {(() => {
                    const Icon = ICONS[s.icon];
                    return <Icon className="h-5 w-5" aria-hidden />;
                  })()}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    {s.description}
                  </p>
                </div>
              </div>
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {s.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Value / Differentials */}
      <Section title={locale === "fr" ? "Pourquoi moi ?" : "Why work with me?"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {valueBullets.map((b, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-5 md:p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.03 }}
            >
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                <Rocket className="h-5 w-5 text-orange-600 dark:text-orange-400" aria-hidden />
                <p className="font-medium">{b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section title={locale === "fr" ? "Prêt à booster votre projet ?" : "Ready to boost your project?"}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-zinc-700 dark:text-zinc-300">
            {locale === "fr"
              ? "Contactez-moi pour discuter de votre idée et obtenir un devis rapide."
              : "Get in touch to discuss your idea and receive a fast estimate."}
          </p>
          {heroCta}
        </div>
      </Section>

      {/* FAQ */}
      {faq.length > 0 && (
        <Section title="FAQ" id="faq">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {faq.map((item, idx) => (
              <FAQRow key={idx} item={item} index={idx} />)
            )}
          </div>
        </Section>
      )}
    </>
  );
}

function FAQRow({ item }: { item: FAQItem; index: number }) {
  const contentId = useId();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        className="w-full text-left py-3 md:py-4 flex items-center justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
     >
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.q}</span>
        <LineChart className="h-4 w-4 text-zinc-500" aria-hidden />
      </button>
      <motion.div
        id={contentId}
        role="region"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-3 md:pb-4 text-sm text-zinc-700 dark:text-zinc-300">
          {item.a}
        </div>
      </motion.div>
    </div>
  );
}

// No exports for icons to avoid passing functions across Server→Client boundary


