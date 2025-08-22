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
      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
      style={{
        backgroundColor: 'var(--ink-2)',
        color: 'var(--paper)'
      }}
    >
      {ctaLabel}
    </Link>
  );

  return (
    <>
      {/* Hero */}
      <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-grid"
               style={{
                 backgroundColor: 'rgba(255, 255, 255, 0.6)',
                 borderColor: 'var(--grid)'
               }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
            {heroTitle}
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink)', opacity: 0.7 }}>
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
              className="group rounded-2xl border p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{
                borderColor: 'var(--grid)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: idx * 0.04 }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1"
                      style={{
                        backgroundColor: 'rgba(147, 51, 234, 0.1)',
                        color: 'rgb(147, 51, 234)',
                        ringColor: 'rgba(147, 51, 234, 0.2)'
                      }}>
                  {(() => {
                    const Icon = ICONS[s.icon];
                    return <Icon className="h-5 w-5" aria-hidden />;
                  })()}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--ink)' }}>
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                    {s.description}
                  </p>
                </div>
              </div>
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-4 list-disc pl-5 space-y-1 text-sm" style={{ color: 'var(--ink)', opacity: 0.8 }}>
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
              className="rounded-2xl border p-5 md:p-6"
              style={{
                borderColor: 'var(--grid)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.03 }}
            >
              <div className="flex items-center gap-2" style={{ color: 'var(--ink)' }}>
                <Rocket className="h-5 w-5" style={{ color: 'rgb(147, 51, 234)' }} aria-hidden />
                <p className="font-medium">{b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section title={locale === "fr" ? "Prêt à booster votre projet ?" : "Ready to boost your project?"}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p style={{ color: 'var(--ink)', opacity: 0.8 }}>
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
          <div className="divide-y" style={{ borderColor: 'var(--grid)' }}>
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
        className="w-full text-left py-3 md:py-4 flex items-center justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        style={{ color: 'var(--ink)' }}
     >
        <span className="font-medium">{item.q}</span>
        <LineChart className="h-4 w-4" style={{ color: 'var(--ink)', opacity: 0.6 }} aria-hidden />
      </button>
      <motion.div
        id={contentId}
        role="region"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-3 md:pb-4 text-sm" style={{ color: 'var(--ink)', opacity: 0.8 }}>
          {item.a}
        </div>
      </motion.div>
    </div>
  );
}

// No exports for icons to avoid passing functions across Server→Client boundary


