'use client';

import Section from '@/components/Section';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Metadata is in a separate file for client components

export default function AboutPage() {
  const { t } = useLanguage();
  const skills = [
    { category: 'Frontend', items: ["Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS",] },
    { category: 'Backend', items: ["Node.js", "Next.js", "Python", "Django", "Flask", "FastAPI"] },
    { category: 'Tools & Others', items: ["Git", "GitHub", "GitHub Actions", "VS Code", "AWS", "Vercel"] },
    { category: 'Mobile', items: ["Flutter", "Dart", "Adroid", "iOS", "AdMob"] },
  ];
  const qualifications = [
    { title: t('about.qualification0'), description: t('about.qualification0Desc') },
    { title: t('about.qualification1'), description: t('about.qualification1Desc') },
    { title: t('about.qualification2'), description: t('about.qualification2Desc') },
    { title: t('about.qualification3'), description: t('about.qualification3Desc') },
  ];

  const experiences = [
    {
      period: '2024 - ',
      title: t('about.experienceDesc0'),
      company: t('about.experienceDesc0Company'),
      description: t('about.experienceDesc0Description'),
    }
  ];

  const education = [
    {
      period: '2020 - 2024',
      degree: t('about.educationDesc0'),
      department: t('about.educationDesc0Department'),
    },
    {
      period: '2025 -',
      degree: t('about.educationDesc1'),
      department: t('about.educationDesc1Department'),
    }
  ];

  return (
    <>
      {/* Profile Section */}
      <Section title={t('about.title')}>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6">
              <Image
                src="/images/Akira_0809.jpg" // 画像のパスを指定
                alt="Profile Photo"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{t('about.location')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('about.locationDesc')}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">{t('about.languages')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('about.japanese')}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">{t('about.interests')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('about.interestsDesc')}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 font-mono">{t('about.hello')}</h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {t('about.bio1')}
              </p>

              <p>
                {t('about.bio2')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title={t('about.skills')} className="bg-gray-50 dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Qualifications Section */}
      <Section title={t('about.qualifications')}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualifications.map((qualification, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{qualification.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{qualification.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section title={t('about.experience')} className="bg-gray-50 dark:bg-gray-900">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:border-0 last:pb-0">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">{exp.period}</div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</div>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section title={t('about.education')}>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:border-0 last:pb-0">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="mb-1 text-sm font-medium text-purple-600 dark:text-purple-400">{edu.period}</div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <div className="text-gray-600 dark:text-gray-400">{edu.department}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
