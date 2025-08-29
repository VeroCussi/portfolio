"use client";

import React from 'react';

interface NeonBadgeProps {
  children: React.ReactNode;
  tone?: 'violet' | 'cyan' | 'lime' | 'coral';
  className?: string;
}

const NeonBadge: React.FC<NeonBadgeProps> = ({
  children,
  tone = 'violet',
  className = '',
}) => {
  const toneClasses = {
    violet: 'border-violet-600 bg-violet-100',
    cyan: 'border-cyan-600 bg-cyan-100',
    lime: 'border-lime-600 bg-lime-100',
    coral: 'border-coral-600 bg-coral-100',
  };

  const textColors = {
    violet: 'text-violet-800',
    cyan: 'text-cyan-800',
    lime: 'text-lime-800',
    coral: 'text-coral-800',
  };

  const glowClasses = {
    violet: 'shadow-[0_0_8px_rgba(147,51,234,0.3)]',
    cyan: 'shadow-[0_0_8px_rgba(6,182,212,0.3)]',
    lime: 'shadow-[0_0_8px_rgba(34,197,94,0.3)]',
    coral: 'shadow-[0_0_8px_rgba(251,146,60,0.3)]',
  };

  // Clases CSS personalizadas para modo dark
  const darkModeClasses = {
    violet: 'badge-violet',
    cyan: 'badge-cyan',
    lime: 'badge-lime',
    coral: '',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        border text-xs font-mono tracking-wider uppercase
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-lg
        ${toneClasses[tone]}
        ${textColors[tone]}
        ${glowClasses[tone]}
        ${darkModeClasses[tone]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default NeonBadge;
