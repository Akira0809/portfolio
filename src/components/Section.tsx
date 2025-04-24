'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
  translationKey?: string;
}

export default function Section({ id, title, children, className = '', translationKey }: SectionProps) {
  const { t } = useLanguage();
  
  // If a translation key is provided, use it to translate the title
  const sectionTitle = translationKey ? t(translationKey) : title;
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-mono">{sectionTitle}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
