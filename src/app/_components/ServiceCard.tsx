import React from 'react';
import { LucideIcon } from 'lucide-react';
import RetroButton from './RetroButton';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  items?: string[];
  ctaText?: string;
  ctaHref?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  desc,
  items = [],
  ctaText,
  ctaHref,
}) => {
  return (
    <div className="
      group relative backdrop-blur-sm
      border rounded-2xl p-6 md:p-8
      shadow-card hover:shadow-glow hover:-translate-y-1
      transition-all duration-500 ease-out
      overflow-hidden
    "
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'var(--grid)'
    }}>
      {/* Background glow effect */}
      <div className="
        absolute inset-0 bg-gradient-to-br from-violet/5 to-cyan/5
        opacity-0 group-hover:opacity-100 transition-opacity duration-500
      " />
      
      {/* Icon */}
      <div className="relative z-10 mb-4">
        <div className="
          w-12 h-12 rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20
          flex items-center justify-center border
        "
        style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }}>
          <Icon className="w-6 h-6" style={{ color: 'rgb(147, 51, 234)' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-mono font-semibold" style={{ color: 'var(--ink)' }}>
          {title}
        </h3>
        
        <p className="leading-relaxed" style={{ color: 'var(--ink)', opacity: 0.8 }}>
          {desc}
        </p>

        {items.length > 0 && (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(34, 197, 94)' }} />
                {item}
              </li>
            ))}
          </ul>
        )}

        {ctaText && ctaHref && (
          <div className="pt-4">
            <RetroButton
              href={ctaHref}
              variant="ghost"
              className="text-sm px-4 py-2"
            >
              {ctaText}
            </RetroButton>
          </div>
        )}
      </div>

      {/* Hover border effect */}
      <div className="
        absolute inset-0 rounded-2xl border border-transparent
        bg-gradient-to-r from-violet/20 via-transparent to-cyan/20
        opacity-0 group-hover:opacity-100 transition-opacity duration-500
        -z-10
      " />
    </div>
  );
};

export default ServiceCard;
