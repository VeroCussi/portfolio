'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../cards/ProjectCard';
import { ProjectCard as ProjectCardType } from '@/lib/projects.data';

interface ProjectsGridProps {
  projects: ProjectCardType[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };
  
  return (
    <div className="space-y-8">
      {/* Grid de proyectos */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            layout
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

