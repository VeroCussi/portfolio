'use client';

import { useState } from 'react';
import Image from 'next/image';
import MagneticButton from '../ui/MagneticButton';
import { ProjectCard as ProjectCardType, LinkKind } from '@/lib/projects.data';

interface ProjectCardProps {
  project: ProjectCardType;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getButtonVariant = (kind: LinkKind): 'primary' | 'secondary' | 'ghost' => {
    switch (kind) {
      case 'live': return 'primary';
      case 'code': return 'secondary';
      case 'demo': return 'ghost';
      default: return 'secondary';
    }
  };
  
  const getButtonIcon = (kind: LinkKind) => {
    switch (kind) {
      case 'live': return '🚀';
      case 'code': return '💻';
      case 'demo': return '👁️';
      default: return '🔗';
    }
  };
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Main card */}
      <div
        className="relative rounded-3xl bg-zinc-900/60 backdrop-blur border border-white/10 overflow-hidden h-full transition-all duration-300"
        style={{
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none'
        }}
      >
        {/* Media container */}
        <div className="relative h-48 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={`${project.title} - ${project.subtitle || 'Project screenshot'}`}
              fill
              className="object-cover transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
            />
            
            {/* Video overlay si existe */}
            {project.video && (
              <video
                src={project.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
          
          {/* Highlight badge */}
          {project.highlight && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
              ⭐ Featured
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title and subtitle */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.subtitle}
              </p>
            )}
          </div>
          
          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs rounded-full px-2 py-1 bg-white/5 border border-white/10 text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project badges */}
          {project.badges && project.badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs rounded-full px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links.map((link) => (
              <div key={link.kind}>
                <MagneticButton
                  href={link.url}
                  variant={getButtonVariant(link.kind)}
                  size="sm"
                  className="text-sm"
                >
                  <span>{getButtonIcon(link.kind)}</span>
                  {link.label || link.kind}
                </MagneticButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
