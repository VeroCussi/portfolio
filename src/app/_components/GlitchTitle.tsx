import React from 'react';

interface GlitchTitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  glitch?: boolean;
  className?: string;
}

const GlitchTitle: React.FC<GlitchTitleProps> = ({
  children,
  as: Component = 'h1',
  glitch = true,
  className = '',
}) => {
  const baseClasses = `
    relative font-mono font-bold
    ${glitch ? 'animate-glitch' : ''}
    ${className}
  `;

  const sizeClasses = {
    h1: 'text-4xl md:text-6xl lg:text-7xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl lg:text-4xl',
  };

  const titleClasses = `${baseClasses} ${sizeClasses[Component]}`;

  if (!glitch) {
    return (
      <Component className={titleClasses} style={{ color: 'var(--ink)' }}>
        {children}
      </Component>
    );
  }

  return (
    <Component className={titleClasses} style={{ color: 'var(--ink)' }}>
      <span className="relative z-10">{children}</span>
      
      {/* Glitch layer 1 - Violet */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: 'translate(2px, -1px)',
          filter: 'blur(0.3px)',
          color: 'rgba(147, 51, 234, 0.3)'
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      
      {/* Glitch layer 2 - Cyan */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
        style={{
          transform: 'translate(-1px, 1px)',
          filter: 'blur(0.3px)',
          color: 'rgba(6, 182, 212, 0.3)'
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </Component>
  );
};

export default GlitchTitle;
