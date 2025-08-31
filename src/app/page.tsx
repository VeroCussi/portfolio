'use client';

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projectsEn } from "@/data/projects-en";
import Image from "next/image";
import GsapEffects from "@/components/GsapEffects";
import GlitchTitle from "./_components/GlitchTitle";
import TypeHeading from "./_components/TypeHeading";
import RetroButton from "./_components/RetroButton";
import NeonBadge from "./_components/NeonBadge";
import { Terminal, Sparkles, Globe, Wrench, Rocket } from "lucide-react";
import { getTranslations } from "@/lib/i18n";
import Footer from "@/components/Footer";

export default function HomePage() {
  const t = getTranslations('es');

  return (
    <div className="min-h-screen bg-theme text-primary">
      <GsapEffects />
      <Navbar locale="es" />
      
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
                href="/services" 
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

      {/* Projects Section */}
      <Section id="projects" title={t.projects}>
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

      {/* Skills Section */}
      <Section title={t.skills}>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-mono font-semibold mb-4 flex items-center gap-2"
                style={{ color: 'var(--ink)' }}>
              <Globe className="w-5 h-5 text-violet" />
              {t.frontend}
            </h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Vue.js", "TailwindCSS"].map((s) => (
                <NeonBadge key={s} tone="violet">{s}</NeonBadge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-mono font-semibold mb-4 flex items-center gap-2"
                style={{ color: 'var(--ink)' }}>
              <Terminal className="w-5 h-5 text-cyan" />
              {t.backend}
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Node.js", "Express", "MongoDB", "MySQL", "PHP"].map((s) => (
                <NeonBadge key={s} tone="cyan">{s}</NeonBadge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-mono font-semibold mb-4 flex items-center gap-2"
                style={{ color: 'var(--ink)' }}>
              <Wrench className="w-5 h-5 text-lime" />
              {t.wordpress}
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Kadence", "Gutenberg", "WP Rocket", "WPML", "Yoast SEO"].map((s) => (
                <NeonBadge key={s} tone="lime">{s}</NeonBadge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-mono font-semibold mb-4 flex items-center gap-2"
                style={{ color: 'var(--ink)' }}>
              <Rocket className="w-5 h-5 text-coral" />
              {t.tools}
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "Figma", "Python", "Machine Learning"].map((s) => (
                <NeonBadge key={s} tone="coral">{s}</NeonBadge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section title={t.about}>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:max-w-[60%] space-y-4 leading-relaxed"
               style={{ color: 'var(--ink)' }}>
            <p>{t.aboutDescription1}</p>
            <p>{t.aboutDescription2}</p>
            <p>{t.aboutDescription3}</p>
          </div>
          <div className="relative">
            <Image 
              src="/vero/lifeai.webp" 
              alt="Verónica Cussi" 
              width={280} 
              height={280} 
              className="rounded-2xl shadow-card" 
            />
            <div className="absolute inset-0 rounded-2xl border bg-gradient-to-br from-violet/10 to-cyan/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                 style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }} />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title={t.contactMe}>
        <div className="text-center space-y-6">
          <p className="text-lg max-w-2xl mx-auto"
             style={{ color: 'var(--ink)' }}>
            {t.contactDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-5">
            <RetroButton 
              href="mailto:verocussi@gmail.com"
              variant="primary"
              iconLeft={Terminal}
              className="text-lg px-8 py-4"
            >
              {t.sendEmail}
            </RetroButton>
            
            <RetroButton 
              href="https://www.linkedin.com/in/veronicacussi/"
              variant="secondary"
              iconLeft={Sparkles}
              className="text-lg px-8 py-4"
              asChild
            >
              {t.connectLinkedin}
            </RetroButton>
          </div>
          
          {/* <div className="pt-4">
            <RetroButton 
              href="/contact"
              variant="ghost"
              className="opacity-70"
            >
              {t.moreContact}
            </RetroButton>
          </div> */}
        </div>
      </Section>

      {/* Footer */}
      <Footer locale="es" />
    </div>
  );
}


