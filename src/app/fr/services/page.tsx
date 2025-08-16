import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesContent, { type ServiceItem, type FAQItem } from "../../services/_components/ServicesContent";
// Icons are referenced by key inside the client component to avoid passing functions

export const metadata: Metadata = {
  title: "Services | Veronica Cussi",
  description: "Prestations web modernes: sites vitrines, e-commerce, chatbots/IA, apps sur mesure, optimisation et maintenance.",
};

export default function ServicesFrPage() {
  const contactHref = "/fr/contact";

  const services: ServiceItem[] = [
    {
      icon: "globe",
      title: "Sites Vitrines",
      description: "Landing pages et sites corporatifs rapides et optimisés pour le SEO.",
      bullets: ["Vitesse & Core Web Vitals", "Design professionnel", "Mise en place d’analytics"],
    },
    {
      icon: "shoppingCart",
      title: "E‑commerce",
      description: "Boutiques avec Stripe/PayPal pour produits physiques ou digitaux.",
      bullets: ["Checkout sécurisé", "Emails de confirmation", "Gestion de catalogue"],
    },
    {
      icon: "bot",
      title: "Chatbots & IA",
      description: "Assistants OpenAI/GPT intégrés pour support et automatisation.",
      bullets: ["FAQs automatisées", "Formulaires intelligents", "Intégration CRM"],
    },
    {
      icon: "wrench",
      title: "Apps Web sur Mesure",
      description: "Dashboards et CRUDs avec Next.js + Node.js.",
      bullets: ["Authentification", "Rôles et permissions", "APIs REST/GraphQL"],
    },
    {
      icon: "rocket",
      title: "Optimisation & Refonte",
      description: "Performance, mobile‑first, accessibilité et UX moderne.",
      bullets: ["Audit Lighthouse", "Amélioration accessibilité", "Refactor UI"],
    },
    {
      icon: "lineChart",
      title: "Maintenance & Support",
      description: "Mises à jour, monitoring et améliorations continues.",
      bullets: ["Backups", "Mises à jour sûres", "Monitoring basique"],
    },
  ];

  const valueBullets = [
    "Livraisons rapides et code propre",
    "Design responsive et accessible",
    "SEO technique et bonnes pratiques",
    "Communication claire et focus résultats",
  ];

  const faq: FAQItem[] = [
    { q: "Quels sont les délais habituels ?", a: "Selon la portée: landing 1–2 semaines; sites multi-sections 2–4; projets sur mesure selon planification." },
    { q: "Proposes-tu des prix fixes ?", a: "Oui, après un appel et un document de périmètre, je fixe prix et livrables." },
    { q: "Le maintenance est-elle incluse ?", a: "Optionnelle: plans mensuels pour mises à jour, monitoring et petites améliorations." },
    { q: "Le code m’appartient-il ?", a: "Oui, le code et les assets sont à vous une fois livrés." },
  ];

  return (
    <div className="min-h-screen pb-12 bg-[var(--background)] text-[var(--foreground)]">
      <Navbar locale="fr" />
      <ServicesContent
        locale="fr"
        heroTitle="Services"
        heroSubtitle="Développement web moderne et sur mesure: sites rapides, design professionnel et focus sur les résultats."
        ctaLabel="Demander un devis"
        services={services}
        valueBullets={valueBullets}
        faq={faq}
        contactHref={contactHref}
      />
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2025 Verónica Cussi. Tous droits réservés.
      </footer>
    </div>
  );
}


