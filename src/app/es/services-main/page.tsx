import Navbar from "@/components/Navbar";
import GsapEffects from "@/components/GsapEffects";
import ServicesContent from "./_components/ServicesContent";

const services = [
  {
    icon: "globe" as const,
    title: "Sitios Vitrina",
    description: "Sitios web profesionales y atractivos que representan perfectamente tu marca y conectan con tu audiencia.",
    bullets: [
      "Diseño responsive y moderno",
      "Optimización SEO básica",
      "Integración con redes sociales",
      "Panel de administración intuitivo"
    ],
  },
  {
    icon: "shoppingCart" as const,
    title: "E-commerce",
    description: "Tiendas online completas con todas las funcionalidades necesarias para vender productos o servicios.",
    bullets: [
      "Catálogo de productos completo",
      "Sistema de pagos seguro",
      "Gestión de inventario",
      "Reportes de ventas"
    ],
  },
  {
    icon: "bot" as const,
    title: "Chatbots & IA",
    description: "Soluciones inteligentes que automatizan la atención al cliente y mejoran la experiencia del usuario.",
    bullets: [
      "Chatbots personalizados",
      "Integración con WhatsApp",
      "Respuestas inteligentes",
      "Análisis de conversaciones"
    ],
  },
  {
    icon: "wrench" as const,
    title: "Apps a Medida",
    description: "Aplicaciones web y móviles desarrolladas específicamente para las necesidades de tu negocio.",
    bullets: [
      "Análisis de requisitos",
      "Desarrollo personalizado",
      "Testing exhaustivo",
      "Mantenimiento continuo"
    ],
  },
  {
    icon: "rocket" as const,
    title: "Optimización & Rediseño",
    description: "Mejora el rendimiento y la apariencia de tu sitio web existente para obtener mejores resultados.",
    bullets: [
      "Auditoría de rendimiento",
      "Optimización de velocidad",
      "Rediseño de interfaz",
      "Mejoras de UX/UI"
    ],
  },
  {
    icon: "lineChart" as const,
    title: "Mantenimiento & Soporte",
    description: "Servicio continuo para mantener tu sitio web actualizado, seguro y funcionando perfectamente.",
    bullets: [
      "Actualizaciones de seguridad",
      "Backups automáticos",
      "Monitoreo 24/7",
      "Soporte técnico prioritario"
    ],
  }
];

const valueBullets = [
  "Livraisons rapides et code propre",
  "Design responsive et accessible",
  "SEO technique et bonnes pratiques",
  "Communication claire et focus résultats",
];

const faq = [
  { q: "Quels sont les délais habituels ?", a: "Selon la portée: landing 1–2 semaines; sites multi-sections 2–4; projets sur mesure selon planification." },
  { q: "Proposes-tu des prix fixes ?", a: "Oui, après un appel et un document de périmètre, je fixe prix et livrables." },
  { q: "Le maintenance est-elle incluse ?", a: "Optionnelle: plans mensuels pour mises à jour, monitoring et petites améliorations." },
  { q: "Le code m'appartient-il ?", a: "Oui, le code et les assets sont à vous une fois livrés." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-theme text-primary">
      <GsapEffects />
      <Navbar locale="en" />
      <ServicesContent
        locale="en"
        heroTitle="Web Development Services"
        heroSubtitle="Full-stack solutions for modern businesses"
        ctaLabel="Get Started"
        services={services}
        valueBullets={valueBullets}
        faq={faq}
        contactHref="mailto:verocussi@gmail.com"
      />
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-muted">
        <p>© 2024 Verónica Cussi. All rights reserved.</p>
      </footer>
    </div>
  );
}


