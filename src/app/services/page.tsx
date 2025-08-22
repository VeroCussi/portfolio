import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import GlitchTitle from "../_components/GlitchTitle";
import TypeHeading from "../_components/TypeHeading";
import ServiceCard from "../_components/ServiceCard";
import RetroButton from "../_components/RetroButton";
import NeonBadge from "../_components/NeonBadge";
import { 
  Globe, 
  ShoppingCart, 
  Bot, 
  Wrench, 
  Rocket, 
  LifeBuoy,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sitios Vitrina",
    desc: "Sitios web profesionales y atractivos que representan perfectamente tu marca y conectan con tu audiencia.",
    items: [
      "Diseño responsive y moderno",
      "Optimización SEO básica",
      "Integración con redes sociales",
      "Panel de administración intuitivo"
    ],
    ctaText: "Ver ejemplos",
    ctaHref: "/#projects"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Tiendas online completas con todas las funcionalidades necesarias para vender productos o servicios.",
    items: [
      "Catálogo de productos completo",
      "Sistema de pagos seguro",
      "Gestión de inventario",
      "Reportes de ventas"
    ],
    ctaText: "Consultar",
    ctaHref: "/contact"
  },
  {
    icon: Bot,
    title: "Chatbots & IA",
    desc: "Soluciones inteligentes que automatizan la atención al cliente y mejoran la experiencia del usuario.",
    items: [
      "Chatbots personalizados",
      "Integración con WhatsApp",
      "Respuestas inteligentes",
      "Análisis de conversaciones"
    ],
    ctaText: "Explorar IA",
    ctaHref: "/contact"
  },
  {
    icon: Wrench,
    title: "Apps a Medida",
    desc: "Aplicaciones web y móviles desarrolladas específicamente para las necesidades de tu negocio.",
    items: [
      "Análisis de requisitos",
      "Desarrollo personalizado",
      "Testing exhaustivo",
      "Mantenimiento continuo"
    ],
    ctaText: "Discutir proyecto",
    ctaHref: "/contact"
  },
  {
    icon: Rocket,
    title: "Optimización & Rediseño",
    desc: "Mejora el rendimiento y la apariencia de tu sitio web existente para obtener mejores resultados.",
    items: [
      "Auditoría de rendimiento",
      "Optimización de velocidad",
      "Rediseño de interfaz",
      "Mejoras de UX/UI"
    ],
    ctaText: "Evaluar sitio",
    ctaHref: "/contact"
  },
  {
    icon: LifeBuoy,
    title: "Mantenimiento & Soporte",
    desc: "Servicio continuo para mantener tu sitio web actualizado, seguro y funcionando perfectamente.",
    items: [
      "Actualizaciones de seguridad",
      "Backups automáticos",
      "Monitoreo 24/7",
      "Soporte técnico prioritario"
    ],
    ctaText: "Contratar plan",
    ctaHref: "/contact"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--paper)', color: 'var(--ink)' }}>
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
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm" style={{ color: 'var(--ink)', opacity: 0.6 }}>
        <p>© 2024 Verónica Cussi. All rights reserved.</p>
      </footer>
    </div>
  );
}


