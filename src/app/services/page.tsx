import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesContent, { type ServiceItem, type FAQItem } from "./_components/ServicesContent";
// Icons are referenced by key inside the client component to avoid passing functions

export const metadata: Metadata = {
  title: "Services | Veronica Cussi",
  description:
    "Modern web development services: marketing sites, e‑commerce, AI chatbots, custom apps, optimization and maintenance.",
};

export default function ServicesPage() {
  const contactHref = "/contact";

  const services: ServiceItem[] = [
    {
      icon: "globe",
      title: "Marketing Sites",
      description: "Fast, secure and SEO‑friendly landing pages and corporate websites.",
      bullets: ["Core Web Vitals", "Polished visual design", "Analytics setup"],
    },
    {
      icon: "shoppingCart",
      title: "E‑commerce",
      description: "Online stores with Stripe/PayPal for physical or digital products.",
      bullets: ["Secure checkout", "Email receipts", "Catalog management"],
    },
    {
      icon: "bot",
      title: "Chatbots & AI",
      description: "OpenAI/GPT assistants integrated for support and automation.",
      bullets: ["Automated FAQs", "Smart forms", "CRM integration"],
    },
    {
      icon: "wrench",
      title: "Custom Web Apps",
      description: "Dashboards and CRUDs with Next.js + Node.js.",
      bullets: ["Authentication", "Roles & permissions", "REST/GraphQL APIs"],
    },
    {
      icon: "rocket",
      title: "Optimization & Redesign",
      description: "Performance, mobile‑first, accessibility and modern UX.",
      bullets: ["Lighthouse audit", "A11y improvements", "UI refactor"],
    },
    {
      icon: "lineChart",
      title: "Maintenance & Support",
      description: "Updates, monitoring and continuous improvements.",
      bullets: ["Backups", "Safe updates", "Basic monitoring"],
    },
  ];

  const valueBullets = [
    "Fast delivery and clean code",
    "Responsive and accessible design",
    "Technical SEO and best practices",
    "Clear communication and outcome focus",
  ];

  const faq: FAQItem[] = [
    { q: "What are typical timelines?", a: "Depending on scope: landing pages 1–2 weeks; multi‑section sites 2–4; custom apps by plan." },
    { q: "Do you offer fixed prices?", a: "Yes. After a short call and a scope brief, I provide a fixed price and deliverables." },
    { q: "Is maintenance included?", a: "Optional monthly plans for updates, monitoring and minor improvements." },
    { q: "Do I own the code?", a: "Yes, all project code and assets are yours upon delivery." },
  ];

  return (
    <div className="min-h-screen pb-12 bg-[var(--background)] text-[var(--foreground)]">
      <Navbar locale="en" />
      <ServicesContent
        locale="en"
        heroTitle="Services"
        heroSubtitle="Modern, tailored web development: fast sites, professional design and results‑first approach."
        ctaLabel="Request a quote"
        services={services}
        valueBullets={valueBullets}
        faq={faq}
        contactHref={contactHref}
      />
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2025 Verónica Cussi. All rights reserved.
      </footer>
    </div>
  );
}


