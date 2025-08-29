import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projectsFr } from "@/data/projects-fr";
import GsapEffects from "@/components/GsapEffects";
import GlitchTitle from "../_components/GlitchTitle";
import TypeHeading from "../_components/TypeHeading";
import RetroButton from "../_components/RetroButton";
import NeonBadge from "../_components/NeonBadge";
import { Globe, Sparkles } from "lucide-react";
import { getTranslations } from "@/lib/i18n";

export default function HomePageFr() {
  const t = getTranslations('fr');

  return (
    <div className="min-h-screen bg-theme text-primary">
      <GsapEffects />
      <Navbar locale="fr" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with retro-radial and scanlines */}
        <div className="absolute inset-0 bg-retro-radial" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/5 to-ink/10" />
        
        {/* Scanlines animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan/10 to-transparent animate-scanline" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main Title */}
            <GlitchTitle as="h1" className="group">
              Verónica Cussi
            </GlitchTitle>
            
            {/* Subtitle with typing effect */}
            <div className="space-y-4">
              <TypeHeading 
                text={t.heroSubtitle}
                className="text-xl md:text-2xl lg:text-3xl font-sans font-medium"
                delay={0.5}
              />
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-secondary">
              {t.heroDescription}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <RetroButton 
                href="#projects" 
                variant="primary"
                iconRight={Globe}
                className="text-lg px-8 py-4"
              >
                {t.viewProjects}
              </RetroButton>
              
              <RetroButton 
                href="/fr/services" 
                variant="secondary"
                iconRight={Sparkles}
                className="text-lg px-8 py-4"
              >
                {t.services}
              </RetroButton>
            </div>
            
            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <NeonBadge tone="violet">React</NeonBadge>
              <NeonBadge tone="cyan">Node.js</NeonBadge>
              <NeonBadge tone="lime">WordPress</NeonBadge>
              <NeonBadge tone="coral">AI/ML</NeonBadge>
            </div>
          </div>
        </div>
      </section>

      <Section title={t.projects}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsFr.map((p) => (
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
      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-muted">
        <p>© 2024 Verónica Cussi. Tous droits réservés.</p>
      </footer>
    </div>
  );
}


