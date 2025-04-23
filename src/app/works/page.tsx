import type { Metadata } from 'next';
import Section from '@/components/Section';
import WorkCard, { Work } from '@/components/WorkCard';

export const metadata: Metadata = {
  title: 'My Works | Akira Portfolio',
  description: 'Explore my portfolio of web development and design projects.',
};

export default function WorksPage() {
  const works: Work[] = [
    {
      title: 'E-commerce Website',
      image: '/projects/project1.jpg',
      description: 'A fully responsive e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include product filtering, cart functionality, user authentication, and payment integration.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'E-commerce'],
      url: 'https://example.com/project1',
    },
    {
      title: 'Task Management App',
      image: '/projects/project2.jpg',
      description: 'A productivity application for managing tasks and projects. Built with React, Redux, and Firebase. Features include drag-and-drop task organization, user authentication, and real-time updates.',
      tags: ['React', 'Redux', 'Firebase', 'SaaS'],
      url: 'https://example.com/project2',
    },
    {
      title: 'Restaurant Website',
      image: '/projects/project3.jpg',
      description: 'A modern website for a local restaurant with online reservation system. Built with Next.js and Tailwind CSS. Features include menu display, reservation form, and integration with Google Maps.',
      tags: ['Next.js', 'Tailwind CSS', 'Restaurant'],
      url: 'https://example.com/project3',
    },
    {
      title: 'Weather Dashboard',
      image: '/projects/project4.jpg',
      description: 'A weather application that displays current weather and forecasts for multiple locations. Built with React and OpenWeather API. Features include location search, saved locations, and detailed weather information.',
      tags: ['React', 'API Integration', 'Weather'],
      url: 'https://example.com/project4',
    },
    {
      title: 'Personal Blog',
      image: '/projects/project5.jpg',
      description: 'A blog platform built with Next.js and MDX. Features include categorized posts, search functionality, and responsive design.',
      tags: ['Next.js', 'MDX', 'Blog'],
      url: 'https://example.com/project5',
    },
    {
      title: 'Fitness Tracker',
      image: '/projects/project6.jpg',
      description: 'A mobile-first web application for tracking workouts and fitness progress. Built with React and Chart.js. Features include workout logging, progress visualization, and goal setting.',
      tags: ['React', 'Chart.js', 'Fitness'],
      url: 'https://example.com/project6',
    },
  ];

  return (
    <>
      <Section title="My Works">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
          Here's a collection of my recent projects. Each project represents different challenges 
          and solutions I've worked on. Click on any project to learn more or visit the live site.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>
      </Section>
      
      <Section title="Client Projects" className="bg-gray-50 dark:bg-gray-900">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
          I've had the pleasure of working with various clients across different industries. 
          Here are some of the projects I've contributed to as part of agency work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              client: 'Tech Startup',
              project: 'Landing Page Redesign',
              description: 'Redesigned the company landing page to improve conversion rates and user engagement. The new design resulted in a 40% increase in lead generation.',
            },
            {
              client: 'Local Business',
              project: 'Online Presence Overhaul',
              description: 'Created a comprehensive online presence including website, social media profiles, and local business listings. Resulted in increased foot traffic and online inquiries.',
            },
            {
              client: 'Non-profit Organization',
              project: 'Donation Platform',
              description: 'Developed a donation platform that simplified the giving process and provided detailed reporting for the organization. Increased online donations by 65%.',
            },
            {
              client: 'Educational Institution',
              project: 'Course Management System',
              description: 'Built a custom course management system for online learning. Features included content delivery, student progress tracking, and assessment tools.',
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-2">{item.client}</h3>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.project}</div>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="Open Source Contributions">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
          I'm passionate about giving back to the community through open source contributions. 
          Here are some projects I've contributed to or created.
        </p>
        
        <div className="space-y-6">
          {[
            {
              name: 'React Component Library',
              description: 'A collection of reusable React components with TypeScript support and comprehensive documentation.',
              contribution: 'Creator & Maintainer',
              url: 'https://github.com/username/react-components',
            },
            {
              name: 'Tailwind CSS Plugin',
              description: 'A plugin that extends Tailwind CSS with additional utilities for common design patterns.',
              contribution: 'Contributor',
              url: 'https://github.com/username/tailwind-plugin',
            },
            {
              name: 'Developer Tools',
              description: 'CLI tools to improve developer workflow and productivity.',
              contribution: 'Contributor',
              url: 'https://github.com/username/dev-tools',
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Role:</span> {item.contribution}
                </div>
              </div>
              <div className="md:w-1/4 flex md:justify-end items-center">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
