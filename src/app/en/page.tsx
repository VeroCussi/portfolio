import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projectsEn } from "@/data/projects-en";
import Image from "next/image";
import GsapEffects from "@/components/GsapEffects";
import GlitchTitle from "../_components/GlitchTitle";
import TypeHeading from "../_components/TypeHeading";
import RetroButton from "../_components/RetroButton";
import NeonBadge from "../_components/NeonBadge";
import { Terminal, Sparkles, Globe, Wrench, Rocket } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

export default function HomePageEn() {
  const t = getTranslations('en');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--paper)', color: 'var(--ink)' }}>
      <GsapEffects />
      <Navbar locale="en" />
      <Header
        title={t.heroTitle}
        description={t.heroDescription}
        cvHref={t.cvHref}
        cvLabel={t.cvLabel}
      />
      <Section title={t.projects}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsEn.map((p) => (
            <ProjectCard 
              key={p.title} 
              image={p.image} 
              title={p.title} 
              description={p.description} 
              techIcons={p.techIcons} 
              buttons={p.buttons} 
            />
          ))}
        </div>
      </Section>
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm" style={{ color: 'var(--ink)', opacity: 0.6 }}>
        <p>© 2024 Verónica Cussi. All rights reserved.</p>
      </footer>
    </div>
  );
}
