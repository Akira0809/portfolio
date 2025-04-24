'use client';

import Link from 'next/link';
import Section from '@/components/Section';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 via-purple-50 to-background dark:from-blue-950 dark:via-purple-950 dark:to-background opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
            <span className="block">Akira</span>
            <span className="block mt-2 text-2xl md:text-4xl text-gray-600 dark:text-gray-400">{t('home.title')}</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            {t('home.subtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/works" 
              className="px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              {t('home.viewWork')}
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-transparent border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:bg-opacity-10 transition-colors"
            >
              {t('home.contactMe')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <Section title={t('home.aboutTitle')} className="bg-gray-50 dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('home.aboutRole')}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('home.aboutDesc1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('home.aboutDesc2')}
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              {t('home.learnMore')}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-6">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'UI/UX'].map((skill) => (
                  <div 
                    key={skill}
                    className="bg-white dark:bg-gray-800 px-3 py-2 rounded-md text-center shadow-sm"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Featured Works Preview */}
      <Section title={t('home.worksTitle')}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Project Image {i}]
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Project Title {i}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {t('home.projectDesc')}
                </p>
                <Link 
                  href={`/works#project-${i}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('home.viewDetails')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link 
            href="/works" 
            className="px-6 py-3 bg-transparent border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:bg-opacity-10 transition-colors"
          >
            {t('home.viewAllProjects')}
          </Link>
        </div>
      </Section>
      
      {/* Contact CTA */}
      <Section title={t('home.getInTouch')} className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            {t('home.contactDesc')}
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-foreground text-background font-medium rounded-md hover:bg-opacity-90 transition-colors text-lg"
          >
            {t('home.contactMe')}
          </Link>
        </div>
      </Section>
    </>
  );
}
