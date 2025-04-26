'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import { useLanguage } from '@/contexts/LanguageContext';

// Define interface for featured projects
interface FeaturedProject {
  title: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  image: string;
  tags: string[];
  url: string;
}

export default function Home() {
  const { language, t } = useLanguage();
  
  // Featured projects data (using real projects from the works page)
  const featuredProjects: FeaturedProject[] = [
    {
      title: {
        ja: "【技育CAMP】マンスリーハッカソン vol.10",
        en: "Geek Camp Monthly Hackathon vol.10"
      },
      description: {
        ja: "複数のLLMを会話させることによって最適解を導き出すWebアプリを開発し、最優秀賞を受賞。",
        en: "Developed a web application that derives optimal solutions by facilitating conversations between multiple LLMs and won the grand prize."
      },
      image: "/images/hackathon/giku-vol.10.png",
      tags: ["Hackathon", "Python", "Django", "LLM"],
      url: "/works",
    },
    {
      title: {
        ja: "【Generative AI】Incubation Program「荒波~ARANAMI~」3rd",
        en: "Generative AI Incubation Program 'ARANAMI' 3rd"
      },
      description: {
        ja: "生成AIを活用した新規サービス提案・プロトタイピングで受賞。",
        en: "Received awards for new service proposals and prototyping utilizing generative AI."
      },
      image: "/images/hackathon/aranami.png",
      tags: ["Generative AI", "Innovation", "Business Contest"],
      url: "/works",
    },
    {
      title: {
        ja: "関西ビギナーズハッカソン vol.2",
        en: "Kansai Beginners Hackathon vol.2"
      },
      description: {
        ja: "Flutterを使ったモバイルアプリ開発で優秀賞を受賞。チームワークとUI設計力を評価された。",
        en: "Won an excellence award for mobile app development using Flutter. Received recognition for teamwork and UI design skills."
      },
      image: "/images/hackathon/kansai.png",
      tags: ["Flutter", "Mobile App", "Hackathon", "Python", "Django"],
      url: "https://qiita.com/Akira_0809/items/2a1513be50483f68b11c",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 via-purple-50 to-background dark:from-blue-950 dark:via-purple-950 dark:to-background opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
              <span className="block">Akira Ikeuchi</span>
              <span className="block mt-2 text-2xl md:text-4xl text-gray-600 dark:text-gray-400">{t('home.title')}</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 text-gray-700 dark:text-gray-300">
              {t('home.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
          
          <div className="hidden md:block">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/images/Akira_0809.jpg"
                alt="Akira Ikeuchi"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <Section title={t('home.aboutTitle')} translationKey="home.aboutTitle" className="bg-gray-50 dark:bg-gray-900">
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
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-6">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Flutter', 'Python', 'Django', 'UI/UX'].map((skill) => (
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
      <Section title={t('home.worksTitle')} translationKey="home.worksTitle">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title[language]}</h3>
                
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description[language]}
                </p>
                
                <Link 
                  href={project.url}
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
      <Section title={t('home.getInTouch')} translationKey="home.getInTouch" className="bg-gray-50 dark:bg-gray-900">
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
