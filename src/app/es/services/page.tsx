import Navbar from "@/components/Navbar";
import ServicesContent from "../services-main/_components/ServicesContent";

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
  "Entregas rápidas y código limpio",
  "Diseño responsive y accesible",
  "SEO técnico y buenas prácticas",
  "Comunicación clara y enfoque en resultados",
];

const faq = [
  { q: "¿Cuáles son los plazos habituales?", a: "Según el alcance: landing 1-2 semanas; sitios multi-secciones 2-4; proyectos a medida según planificación." },
  { q: "¿Propones precios fijos?", a: "Sí, después de una llamada y un documento de alcance, fijo precios y entregables." },
  { q: "¿El mantenimiento está incluido?", a: "Opcional: planes mensuales para actualizaciones, monitoreo y pequeñas mejoras." },
  { q: "¿El código me pertenece?", a: "Sí, el código y los assets son tuyos una vez entregados." },
];

export default function ServicesEsPage() {
  return (
    <div className="min-h-screen bg-theme text-primary">
      <Navbar locale="es" />
      <ServicesContent
        locale="es"
        heroTitle="Servicios de Desarrollo Web"
        heroSubtitle="Soluciones full-stack para empresas modernas"
        ctaLabel="Comenzar"
        services={services}
        valueBullets={valueBullets}
        faq={faq}
        contactHref="mailto:verocussi@gmail.com"
      />
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-muted">
        <p>© 2024 Verónica Cussi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
