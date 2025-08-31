import { motion } from 'framer-motion';
import ProjectsGrid from './ProjectsGrid';
import { projects, ProjectCard as ProjectCardType } from '@/lib/projects.data';

interface ProjectsSectionProps {
  projects?: ProjectCardType[];
  title?: string;
  subtitle?: string;
}

export default function ProjectsSection({ 
  projects: customProjects, 
  title = "Mis Proyectos",
  subtitle = "Una selección de mi trabajo más reciente"
}: ProjectsSectionProps) {
  const projectsToShow = customProjects || projects;
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background with retro-radial and scanlines */}
      <div className="absolute inset-0 bg-retro-radial" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/5 to-ink/10" />
      
      {/* Scanlines animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan/10 to-transparent animate-scanline" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Título principal con gradiente animado */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-indigo-400 animate-gradient-x">
              {title}
            </span>
          </motion.h2>
          
          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
          
          {/* Badge de contador */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {projectsToShow.length} proyectos disponibles
          </motion.div>
        </motion.div>
        
        {/* Grid de proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <ProjectsGrid projects={projectsToShow} />
        </motion.div>
        
        {/* CTA Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-2xl text-indigo-300 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer group">
            <span className="text-lg">🚀</span>
            <span className="font-medium">¿Tienes un proyecto en mente?</span>
            <span className="text-indigo-400 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
