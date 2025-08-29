import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "../../es/services-main/_components/ServicesContent";

const services = [
  {
    icon: "globe" as const,
    title: "Showcase Sites",
    description: "Professional and attractive websites that perfectly represent your brand and connect with your audience.",
    bullets: [
      "Responsive and modern design",
      "Basic SEO optimization",
      "Social media integration",
      "Intuitive admin panel"
    ],
  },
  {
    icon: "shoppingCart" as const,
    title: "E-commerce",
    description: "Complete online stores with all the necessary functionalities to sell products or services.",
    bullets: [
      "Complete product catalog",
      "Secure payment system",
      "Inventory management",
      "Sales reports"
    ],
  },
  {
    icon: "bot" as const,
    title: "Chatbots & AI",
    description: "Intelligent solutions that automate customer service and improve user experience.",
    bullets: [
      "Custom chatbots",
      "WhatsApp integration",
      "Smart responses",
      "Conversation analysis"
    ],
  },
  {
    icon: "wrench" as const,
    title: "Custom Apps",
    description: "Web and mobile applications developed specifically for your business needs.",
    bullets: [
      "Requirements analysis",
      "Custom development",
      "Exhaustive testing",
      "Continuous maintenance"
    ],
  },
  {
    icon: "rocket" as const,
    title: "Optimization & Redesign",
    description: "Improve the performance and appearance of your existing website to get better results.",
    bullets: [
      "Performance audit",
      "Speed optimization",
      "Interface redesign",
      "UX/UI improvements"
    ],
  },
  {
    icon: "lineChart" as const,
    title: "Maintenance & Support",
    description: "Continuous service to keep your website updated, secure and working perfectly.",
    bullets: [
      "Security updates",
      "Automatic backups",
      "24/7 monitoring",
      "Priority technical support"
    ],
  }
];

const valueBullets = [
  "Fast deliveries and clean code",
  "Responsive and accessible design",
  "Technical SEO and best practices",
  "Clear communication and focus on results",
];

const faq = [
  { q: "What are the usual deadlines?", a: "Depending on scope: landing 1-2 weeks; multi-section sites 2-4; custom projects according to planning." },
  { q: "Do you offer fixed prices?", a: "Yes, after a call and a scope document, I set prices and deliverables." },
  { q: "Is maintenance included?", a: "Optional: monthly plans for updates, monitoring and small improvements." },
  { q: "Does the code belong to me?", a: "Yes, the code and assets are yours once delivered." },
];

export default function ServicesEnPage() {
  return (
    <div className="min-h-screen bg-theme text-primary">
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
      <Footer locale="en" />
    </div>
  );
}
