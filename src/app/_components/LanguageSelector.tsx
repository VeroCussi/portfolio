'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';

interface LanguageSelectorProps {
  currentLocale: Locale;
}

const languageNames: Record<Locale, string> = {
  es: 'Español',
  fr: 'Français',
  en: 'English'
};

const languageFlags: Record<Locale, string> = {
  es: '🇪🇸',
  fr: '🇫🇷',
  en: '🇬🇧'
};

export default function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLanguagePath = (locale: Locale) => {
    const path = pathname ?? "/";
    
    if (locale === 'es') {
      // Remove language prefix if exists
      if (path.startsWith('/fr/')) return path.slice(3);
      if (path.startsWith('/en/')) return path.slice(3);
      if (path === '/fr') return '/';
      if (path === '/en') return '/';
      return path;
    } else {
      // Add language prefix
      if (path === '/') return `/${locale}`;
      if (path.startsWith('/fr/') || path.startsWith('/en/')) {
        return `/${locale}${path.slice(3)}`;
      }
      return `/${locale}${path}`;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300"
        style={{
          backgroundColor: 'var(--paper)',
          borderColor: 'var(--grid)',
          color: 'var(--ink)'
        }}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" style={{ color: 'var(--ink)' }} />
        <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{languageNames[currentLocale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--ink)' }} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 backdrop-blur-sm border rounded-2xl shadow-card z-50 overflow-hidden"
             style={{
               backgroundColor: 'var(--paper)',
               borderColor: 'var(--grid)'
             }}>
          {locales.map((locale) => {
            const isActive = locale === currentLocale;
            const path = getLanguagePath(locale);
            
            return (
              <Link
                key={locale}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 transition-colors duration-200 ${
                  isActive ? 'bg-violet/20' : 'hover:bg-slate-100'
                }`}
                style={{
                  color: isActive ? 'rgb(147, 51, 234)' : 'var(--ink)'
                }}
              >
                <span className="text-lg">{languageFlags[locale]}</span>
                <span className="flex-1 text-sm font-medium">{languageNames[locale]}</span>
                {isActive && <Check className="w-4 h-4" style={{ color: 'rgb(147, 51, 234)' }} />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
