'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();

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
    
    // Si ya estamos en el idioma seleccionado, no hacer nada
    if (locale === currentLocale) {
      return path;
    }
    
    // Si el idioma seleccionado es español, remover cualquier prefijo de idioma
    if (locale === 'es') {
      if (path.startsWith('/fr/')) return path.slice(3);
      if (path.startsWith('/en/')) return path.slice(3);
      if (path === '/fr') return '/';
      if (path === '/en') return '/';
      return path;
    }
    
    // Para francés e inglés, agregar el prefijo correcto
    if (path === '/') {
      // Si estamos en la raíz, solo agregar el prefijo del idioma
      return `/${locale}`;
    }
    
    // Si ya hay un prefijo de idioma, reemplazarlo
    if (path.startsWith('/fr/') || path.startsWith('/en/')) {
      return `/${locale}${path.slice(3)}`;
    }
    
    // Si no hay prefijo de idioma, agregar el nuevo
    return `/${locale}${path}`;
  };

  const handleLanguageChange = (locale: Locale) => {
    setIsOpen(false);
    const newPath = getLanguagePath(locale);
    
    // Usar router.push para navegación programática más suave
    if (locale !== currentLocale) {
      router.push(newPath);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-theme transition-all duration-300 bg-theme text-primary hover:bg-theme-secondary"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{languageNames[currentLocale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 backdrop-blur-sm border border-theme rounded-2xl shadow-card z-[9999] overflow-hidden bg-theme">
          {locales.map((locale) => {
            const isActive = locale === currentLocale;
            
            return (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-colors duration-200 ${
                  isActive ? 'bg-violet/20 text-violet' : 'text-primary hover:bg-theme-secondary'
                }`}
              >
                <span className="text-lg">{languageFlags[locale]}</span>
                <span className="flex-1 text-sm font-medium text-left">{languageNames[locale]}</span>
                {isActive && <Check className="w-4 h-4 text-violet" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
