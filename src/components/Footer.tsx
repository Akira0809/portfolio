'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Akira0809' },
    { name: 'X', url: 'https://x.com/Akira08092' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akira-ikeuchi-6a9b12361/' },
  ];

  return (
    <footer className="bg-background border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} akira-portfolio. {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-foreground dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
