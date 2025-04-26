'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export interface Work {
  title: string;
  image: string;
  description: string;
  url?: string;
  tags?: string[];
}

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-800">
      <div className="relative h-48 w-full">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{work.title}</h3>
        
        {work.tags && (
          <div className="flex flex-wrap gap-2 mb-3">
            {work.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{work.description}</p>
        
        {work.url && (
          <Link 
            href={work.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t('works.viewProject')}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
