'use client';

import Section from '@/components/Section';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Define interfaces for each section
interface HackathonAward {
  event: {
    ja: string;
    en: string;
  };
  award: {
    ja: string;
    en: string;
  };
  project: {
    ja: string;
    en: string;
  };
  date: Date;
  image?: string;
  tags?: string[];
  url?: string;
}

interface CompetitiveProgramming {
  contest: {
    ja: string;
    en: string;
  };
  result: {
    ja: string;
    en: string;
  };
  image?: string;
  tags?: string[];
  url?: string;
}

interface DevelopmentWork {
  title: {
    ja: string;
    en: string;
  };
  client?: {
    ja: string;
    en: string;
  };
  projectType?: {
    ja: string;
    en: string;
  };
  period: {
    ja: string;
    en: string;
  };
  role: {
    ja: string;
    en: string;
  };
  technologies: string;
  image?: string;
}

export default function WorksPage() {
  const { language, t } = useLanguage();

  // Development works data
  const developmentWorks: DevelopmentWork[] = [
    {
      title: {
        ja: 'DA VINCI SQUARE（パズルゲームアプリ）',
        en: 'DA VINCI SQUARE (Puzzle Game App)',
      },
      client: {
        ja: '株式会社Game',
        en: 'Game Co., Ltd.',
      },
      period: {
        ja: '2025年1月〜3月（継続中）',
        en: 'Jan 2025 - Mar (ongoing)',
      },
      role: {
        ja: 'アプリ全体を一人で開発（UI・ロジック・API連携などすべて）',
        en: 'Sole developer for entire app (UI, logic, API integration)',
      },
      technologies: 'Flutter (Dart)',
      image: '/images/placeholder.svg',
    },
    {
      title: {
        ja: 'APAPANE（子供向けエデュテイメントアプリ）',
        en: 'APAPANE (Edutainment App for Kids)',
      },
      projectType: {
        ja: '自社開発',
        en: 'In-house project',
      },
      period: {
        ja: '2023年12月〜2024年5月',
        en: 'Dec 2023 - May 2024',
      },
      role: {
        ja: '主にバックエンド（API設計・DB設計）',
        en: 'Mainly backend (API and DB design)',
      },
      technologies: 'Flutter / Firebase / Figma',
      image: '/images/placeholder.svg',
    },
    {
      title: {
        ja: 'メタバースゴルフ場（GSPro対応）',
        en: 'Metaverse Golf Course (GSPro compatible)',
      },
      client: {
        ja: '某EC企業様',
        en: 'A certain e-commerce company',
      },
      period: {
        ja: '2025年5月〜（継続中）',
        en: 'May 2025 - present',
      },
      role: {
        ja: 'コース設計・地形モデリングなど全体を一人で担当',
        en: 'Responsible for course design and terrain modeling',
      },
      technologies: 'Blender / Unity',
      image: '/images/placeholder.svg',
    },
    {
      title: {
        ja: 'Discord Bot 開発',
        en: 'Discord Bot Development',
      },
      period: {
        ja: '-',
        en: '-',
      },
      role: {
        ja: 'Discord Botの設計・実装（詳細は非公開）',
        en: 'Designed and implemented a Discord Bot (details private)',
      },
      technologies: 'Python / Discord API',
      image: '/images/placeholder.svg',
    },
  ];

  // Hackathon Awards data
  const hackathonAwards: HackathonAward[] = [
    {
      event: {
        ja: "メディカルハッカソン by ものづくり医療センター",
        en: "Medical Hackathon by Manufacturing Medical Center"
      },
      award: {
        ja: "優秀賞",
        en: "Excellence Award"
      },
      project: {
        ja: "社会人エンジニアと即席チームで参加し、医療分野の課題に取り組み初めての賞を獲得。",
        en: "Participated with a team of professional engineers and won my first award by tackling challenges in the medical field."
      },
      date: new Date(2023, 3, 29),
      image: "/images/hackathon/medical.png",
      tags: ["Healthcare", "Medical", "Python", "Django"],
      url: "",
    },
    {
      event: {
        ja: "認知症フレンドリーテック 第二回ハッカソン",
        en: "Dementia Friendly Tech 2nd Hackathon"
      },
      award: {
        ja: "Protopedia賞",
        en: "Protopedia Award"
      },
      project: {
        ja: "認知症にやさしいテクノロジーをテーマに、プロトタイプ開発を行い受賞。",
        en: "Developed a prototype focused on dementia-friendly technology and received an award."
      },
      date: new Date(2023, 7, 5),
      image: "/images/hackathon/dementia.png",
      tags: ["Healthcare", "IoT", "Flutter"],
      url: "",
    },
    {
      event: {
        ja: "【技育CAMP】マンスリーハッカソン vol.8",
        en: "Geek Camp Monthly Hackathon vol.8"
      },
      award: {
        ja: "企業賞",
        en: "Corporate Award"
      },
      project: {
        ja: "予定管理Webアプリを作成し企業賞を受賞。",
        en: "Created a schedule management web application and won a corporate award."
      },
      date: new Date(2023, 7, 19),
      image: "/images/hackathon/giku-vol.8.png",
      tags: ["Hackathon", "Student", "Next.js"],
      url: "",
    },
    {
      event: {
        ja: "関西ビギナーズハッカソン vol.2",
        en: "Kansai Beginners Hackathon vol.2"
      },
      award: {
        ja: "優秀賞",
        en: "Excellence Award"
      },
      project: {
        ja: "Flutterを使ったモバイルアプリ開発で優秀賞を受賞。チームワークとUI設計力を評価された。",
        en: "Won an excellence award for mobile app development using Flutter. Received recognition for teamwork and UI design skills."
      },
      date: new Date(2023, 7, 25),
      image: "/images/hackathon/kansai.png",
      tags: ["Flutter", "Mobile App", "Hackathon", "Python", "Django"],
      url: "https://qiita.com/Akira_0809/items/2a1513be50483f68b11c",
    },
    {
      event: {
        ja: "【技育CAMP】マンスリーハッカソン vol.9",
        en: "Geek Camp Monthly Hackathon vol.9"
      },
      award: {
        ja: "企業賞",
        en: "Corporate Award"
      },
      project: {
        ja: "Go言語でGitのコミットメッセージを自動生成するCLIを開発し、企業賞を受賞。",
        en: "Developed a CLI tool in Go language that automatically generates Git commit messages and won a corporate award."
      },
      date: new Date(2023, 8, 9),
      image: "/images/hackathon/giku-vol.9.png",
      tags: ["Hackathon", "Go", "CLI"],
      url: "",
    },
    {
      event: {
        ja: "CCCu22 2023 ファイナル",
        en: "CCCu22 2023 Final"
      },
      award: {
        ja: "Code for Japan賞　Salesforce賞",
        en: "Code for Japan Award & Salesforce Award"
      },
      project: {
        ja: "選抜されたファイナリストとして最終成果発表を行い、表彰された。",
        en: "Presented final results as a selected finalist and received awards."
      },
      date: new Date(2023, 9, 8),
      image: "/images/hackathon/CCC.png",
      tags: ["Flutter", "Hackathon", "LLM", "Python", "Django"],
      url: "https://youtu.be/r9zSqFSwIRw?t=6974",
    },
    {
      event: {
        ja: "【技育CAMP】マンスリーハッカソン vol.10",
        en: "Geek Camp Monthly Hackathon vol.10"
      },
      award: {
        ja: "最優秀賞",
        en: "Grand Prize"
      },
      project: {
        ja: "複数のLLMを会話させることによって最適解を導き出すWebアプリを開発し、最優秀賞を受賞。",
        en: "Developed a web application that derives optimal solutions by facilitating conversations between multiple LLMs and won the grand prize."
      },
      date: new Date(2023, 9, 14),
      image: "/images/hackathon/giku-vol.10.png",
      tags: ["Hackathon", "Python", "Django", "LLM"],
      url: "",
    },
    {
      event: {
        ja: "【Generative AI】Incubation Program「荒波~ARANAMI~」3rd",
        en: "Generative AI Incubation Program 'ARANAMI' 3rd"
      },
      award: {
        ja: "総合優秀賞　Business賞　Skyland Ventures賞",
        en: "Overall Excellence Award, Business Award & Skyland Ventures Award"
      },
      project: {
        ja: "生成AIを活用した新規サービス提案・プロトタイピングで受賞。",
        en: "Received awards for new service proposals and prototyping utilizing generative AI."
      },
      date: new Date(2023, 11, 9),
      image: "/images/hackathon/aranami.png",
      tags: ["Generative AI", "Innovation", "Business Contest"],
      url: "",
    },
    {
      event: {
        ja: "技育CAMPアドバンス vol.4",
        en: "Geek Camp Advance vol.4"
      },
      award: {
        ja: "企業賞",
        en: "Corporate Award"
      },
      project: {
        ja: "複数のLLMを会話させるWebアプリをNext.jsでリファクタし、企業賞を受賞。",
        en: "Refactored a web application that facilitates conversations between multiple LLMs using Next.js and won a corporate award."
      },
      date: new Date(2023, 11, 16),
      image: "/images/hackathon/giku-vol.4.png",
      tags: ["Hackathon", "Advanced", "Python", "Django", "Next.js"],
      url: "",
    },
  ];

  // Competitive Programming data
  const competitiveProgramming: CompetitiveProgramming[] = [
    {
      contest: {
        ja: "AtCoder",
        en: "AtCoder"
      },
      result: {
        ja: "最高到達レート：茶色（Max Rating: 450）",
        en: "Highest Rating: Brown (Max Rating: 450)"
      },
      tags: ["AtCoder", "Algorithm", "Problem Solving"],
      url: "https://atcoder.jp/users/Akira_0809",
    },
  ];

  // Format date based on current language
  const formatDate = (date: Date) => {
    if (language === 'ja') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    } else {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);
    }
  };

  return (
    <>
      {/* Development Works Section */}
      <Section
        title={t('works.developmentTitle') || '開発実績（担当明記）'}
        translationKey="works.developmentTitle"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
          {t('works.developmentDescription') || '担当した開発実績を紹介します。'}
        </p>

        <div className="space-y-6">
          {developmentWorks.map((work, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {work.image && (
                <div className="relative h-32 w-full md:w-1/4">
                  <Image
                    src={work.image}
                    alt={work.title[language]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{work.title[language]}</h3>
                {work.client && (
                  <p className="text-sm mb-1">
                    {t('works.client')}:{' '}
                    {work.client[language]}
                  </p>
                )}
                {work.projectType && (
                  <p className="text-sm mb-1">
                    {t('works.projectType')}:{' '}
                    {work.projectType[language]}
                  </p>
                )}
                <p className="text-sm mb-1">
                  {t('works.period')}: {work.period[language]}
                </p>
                <p className="text-sm mb-1">
                  {t('works.role')}: {work.role[language]}
                </p>
                <p className="text-sm">
                  {t('works.technologies')}: {work.technologies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Hackathon Awards Section */}
      <Section title={t('works.hackathonTitle') || "ハッカソン受賞歴"} translationKey="works.hackathonTitle">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
          {t('works.hackathonDescription') || "ハッカソンで受賞した実績をまとめています。様々な技術を活用し、短期間で革新的なプロダクトを開発した経験を紹介します。"}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathonAwards.map((award, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {award.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={award.image}
                    alt={award.event[language]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{award.event[language]}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{award.award[language]}</div>
                
                {award.date && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {formatDate(award.date)}
                  </div>
                )}
                
                {award.tags && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {award.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{award.project[language]}</p>
                
                {award.url && (
                  <a 
                    href={award.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('works.viewDetails') || "詳細を見る"}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Competitive Programming Section */}
      <Section title={t('works.competitiveProgramming') || "競技プログラミング"} translationKey="works.competitiveProgramming" className="bg-gray-50 dark:bg-gray-900">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
          {t('works.competitiveProgrammingDescription') || "競技プログラミング関連の実績です。アルゴリズムやデータ構造の知識を活かし、効率的なコード設計能力を磨いています。"}
        </p>
        
        <div className="space-y-6">
          {competitiveProgramming.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">{item.contest[language]}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.result[language]}</p>
                
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {item.url && (
                <div className="md:w-1/4 flex md:justify-end items-center">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    {t('works.viewProfile') || "プロフィールを見る"}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
