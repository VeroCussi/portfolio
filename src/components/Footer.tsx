import { getTranslations } from '@/lib/i18n';

interface FooterProps {
  locale: 'es' | 'en' | 'fr';
  className?: string;
}

export default function Footer({ locale, className = '' }: FooterProps) {
  const t = getTranslations(locale);
  
  return (
    <footer className={`w-full max-w-5xl mx-auto mt-6 text-center text-sm text-muted ${className}`}>
      <p>{t.footerText}</p>
    </footer>
  );
}
