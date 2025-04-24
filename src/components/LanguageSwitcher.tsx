'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: 'en' | 'ja') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-foreground dark:text-gray-400 dark:hover:text-gray-200"
        aria-expanded={isOpen}
      >
        <span>{language === 'en' ? 'EN' : 'JP'}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-700">
          <div className="py-1">
            <button
              onClick={() => changeLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === 'en'
                  ? 'bg-gray-100 dark:bg-gray-700 text-foreground'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {t('language.en')}
            </button>
            <button
              onClick={() => changeLanguage('ja')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === 'ja'
                  ? 'bg-gray-100 dark:bg-gray-700 text-foreground'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {t('language.ja')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
