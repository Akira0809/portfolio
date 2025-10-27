'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

type Translations = {
  [key: string]: {
    en: string;
    ja: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    ja: 'ホーム',
  },
  'nav.about': {
    en: 'About',
    ja: '自己紹介',
  },
  'nav.works': {
    en: 'Works',
    ja: '制作実績',
  },
  'nav.contact': {
    en: 'Contact',
    ja: 'お問い合わせ',
  },
  
  // Home Page
  'home.title': {
    en: 'Developer',
    ja: '開発者',
  },
  'home.subtitle': {
    en: 'Creating beautiful, functional, and user-friendly web experiences with modern technologies.',
    ja: '最新技術を使用した美しく、機能的で、ユーザーフレンドリーなウェブ体験を創造します。',
  },
  'home.viewWork': {
    en: 'View My Work',
    ja: '制作実績を見る',
  },
  'home.contactMe': {
    en: 'Contact Me',
    ja: 'お問い合わせ',
  },
  'home.aboutTitle': {
    en: 'About Me',
    ja: '自己紹介',
  },
  'home.aboutRole': {
    en: 'Ikeuchi Akira',
    ja: '池内 晶',
  },
  'home.aboutDesc1': {
    en: 'My name is Akira Ikeuchi. I am a first-year university student in the Faculty of Business and Data Science at Kansai University. I started programming in high school and started my own business at the age of 18. I have been entrusted with several projects and have won many awards at hackathons.',
    ja: '池内 晶（いけうち あきら）と申します。関西大学ビジネスデータサイエンス学部に所属する大学1年生です。高校時代よりプログラミングに取り組み、18歳で起業。これまでに複数の案件を受託し、ハッカソンでは受賞経験も重ねてまいりました。',
  },
  'home.aboutDesc2': {
    en: 'Always seeking new challenges, we expand our creativity through hobbies such as games, travel, and movies based on our belief that there is no time to stand still. We aim to be a pioneer of the next generation by crossing technology and imagination.',
    ja: '常に新しい挑戦を求め、「止まっている暇はない」という信念のもと、ゲーム・旅行・映画などの趣味を通じて創造力を広げています。技術と発想力を掛け合わせ、次の時代を切り開く存在を目指しています。',
  },
  'home.learnMore': {
    en: 'Learn more about me',
    ja: 'もっと詳しく',
  },
  'home.worksTitle': {
    en: 'Featured Works',
    ja: '主な制作実績',
  },
  'home.projectDesc': {
    en: 'A brief description of the project, highlighting key features and technologies used.',
    ja: 'プロジェクトの簡単な説明。主な機能と使用技術を紹介します。',
  },
  'home.viewDetails': {
    en: 'View Details',
    ja: '詳細を見る',
  },
  'home.viewAllProjects': {
    en: 'View All Projects',
    ja: 'すべてのプロジェクトを見る',
  },
  'home.getInTouch': {
    en: 'Get In Touch',
    ja: 'お問い合わせ',
  },
  'home.contactDesc': {
    en: "Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
    ja: '一緒に仕事をすることに興味がありますか？新しいプロジェクト、クリエイティブなアイデア、またはあなたのビジョンの一部になる機会について、いつでも話し合いに応じます。',
  },
  
  // About Page
  'about.title': {
    en: 'About Me',
    ja: '自己紹介',
  },
  'about.hello': {
    en: "Hello, I'm Ikeuchi Akira",
    ja: 'はじめまして、池内 晶です',
  },
  'about.bio1': {
    en: "My name is Akira Ikeuchi. I am a first-year student at Kansai University, majoring in Business Data Science. I began programming in high school and started my own company at the age of 18. Since then, I have taken on multiple projects and have received several awards in hackathons.",
    ja: '池内 晶（いけうち あきら）と申します。関西大学ビジネスデータサイエンス学部に所属する大学1年生です。高校時代よりプログラミングに取り組み、18歳で起業。これまでに複数の案件を受託し、ハッカソンでは受賞経験も重ねてまいりました。',
  },
  'about.bio2': {
    en: 'Constantly seeking new challenges, I live by the belief that “there\'s no time to stand still.” Through my hobbies—gaming, traveling, and watching movies—I continue to expand my creativity. By combining technical skills with imagination, I aim to become a trailblazer for the next generation.',
    ja: '常に新しい挑戦を求め、「止まっている暇はない」という信念のもと、ゲーム・旅行・映画などの趣味を通じて創造力を広げています。技術と発想力を掛け合わせ、次の時代を切り開く存在を目指しています。',
  },
  'about.location': {
    en: 'Location',
    ja: '所在地',
  },
  'about.locationDesc': {
    en: 'Osaka, Japan',
    ja: '大阪府',
  },
  'about.languages': {
    en: 'Languages',
    ja: '言語',
  },
  'about.japanese': {
    en: 'Japanese (Native)',
    ja: '日本語（母国語）',
  },
  'about.interests': {
    en: 'Interests',
    ja: '興味・関心',
  },
  'about.interestsDesc': {
    en: 'Development, Movies, Travel, Gaming',
    ja: '開発、映画、旅行、ゲーム',
  },
  'about.skills': {
    en: 'Skills',
    ja: 'スキル',
  },
  'about.qualifications': {
    en: 'Qualifications',
    ja: '資格',
  },
  'about.qualification0': {
    en: 'IT Passport Examination',
    ja: 'ITパスポート',
  },
  'about.qualification0Desc': {
    en: 'National certification proving basic knowledge of IT',
    ja: 'ITに関する基礎知識を証明する国家資格',
  },
  'about.qualification1': {
    en: 'Python 3 Certified Engineer Basic Examination',
    ja: 'Python3エンジニア認定基礎試験',
  },
  'about.qualification1Desc': {
    en: 'Private certification test for basic Python syntax and programming fundamentals',
    ja: 'Pythonの基本文法とプログラミングの基礎知識を問う民間資格試験',
  },
  'about.qualification2': {
    en: 'JDLA Deep Learning for GENERAL',
    ja: 'G検定',
  },
  'about.qualification2Desc': {
    en: 'A certification test for acquiring AI/deep learning literacy conducted by the Japan Deep Learning Association (JDLA).',
    ja: '一般社団法人日本ディープラーニング協会（JDLA）が実施する、AI・ディープラーニングの活⽤リテラシー習得のための検定試験',
  },
  'about.qualification3': {
    en: 'Fundamental Information Technology Engineer Examination',
    ja: '基本情報技術者試験',
  },
  'about.qualification3Desc': {
    en: 'National Information Technology Engineers Examination (ITEE) covering programming, algorithms, and IT management fundamentals.',
    ja: '情報処理推進機構（IPA）が実施する国家試験で、プログラミングやアルゴリズム、ITマネジメントなど幅広い知識を問います。',
  },
  'about.experience': {
    en: 'Experience',
    ja: '経歴',
  },
  'about.experienceDesc0': {
    en: 'COROLE Entrepreneurship Corporation',
    ja: '株式会社COROLE 起業',
  },
  'about.experienceDesc0Company': {
    en: 'COROLE Inc.',
    ja: '株式会社COROLE',
  },
  'about.experienceDesc0Description': {
    en: 'We are commissioned to work on a variety of projects and focus on web development and mobile app development.',
    ja: '様々な案件を受託し、ウェブ開発とモバイルアプリ開発を中心に活動しています。',
  },
  'about.education': {
    en: 'Education',
    ja: '学歴',
  },
  'about.educationDesc0': {
    en: 'National Institute of Technology, Kagawa College, Department of Information Engineering',
    ja: '香川高等専門学校',
  },
  'about.educationDesc0Department': {
    en: 'Department of Information Engineering',
    ja: '情報工学科',
  },
  'about.educationDesc1': {
    en: 'Kansai University',
    ja: '関西大学',
  },
  'about.educationDesc1Department': {
    en: 'Business Data Science',
    ja: 'ビジネスデータサイエンス学部',
  },
  
  // Works Page
  'works.title': {
    en: 'My Works',
    ja: '制作実績',
  },
  'works.description': {
    en: "Here's a collection of my recent projects. Each project represents different challenges and solutions I've worked on. Click on any project to learn more or visit the live site.",
    ja: '最近のプロジェクトのコレクションです。各プロジェクトは、私が取り組んできた様々な課題と解決策を表しています。詳細を知るまたはライブサイトを訪問するには、いずれかのプロジェクトをクリックしてください。',
  },
  'works.clientProjects': {
    en: 'Client Projects',
    ja: 'クライアントプロジェクト',
  },
  'works.clientDesc': {
    en: "I've had the pleasure of working with various clients across different industries. Here are some of the projects I've contributed to as part of agency work.",
    ja: '様々な業界のクライアントと仕事をする喜びを経験してきました。以下は、エージェンシーワークの一環として貢献したプロジェクトの一部です。',
  },
  'works.openSource': {
    en: 'Open Source Contributions',
    ja: 'オープンソースへの貢献',
  },
  'works.openSourceDesc': {
    en: "I'm passionate about giving back to the community through open source contributions. Here are some projects I've contributed to or created.",
    ja: 'オープンソースへの貢献を通じてコミュニティに還元することに情熱を持っています。以下は、私が貢献または作成したプロジェクトの一部です。',
  },
  'works.viewProject': {
    en: 'View Project',
    ja: 'プロジェクトを見る',
  },
  'works.viewOnGitHub': {
    en: 'View on GitHub',
    ja: 'GitHubで見る',
  },
  'works.hackathonTitle': {
    en: 'Hackathon Awards',
    ja: 'ハッカソン受賞歴',
  },
  'works.hackathonDescription': {
    en: 'A collection of awards I have received in hackathons. I showcase my experience in developing innovative products in a short period of time using various technologies.',
    ja: 'ハッカソンで受賞した実績をまとめています。様々な技術を活用し、短期間で革新的なプロダクトを開発した経験を紹介します。',
  },
  'works.competitiveProgramming': {
    en: 'Competitive Programming',
    ja: '競技プログラミング',
  },
  'works.competitiveProgrammingDescription': {
    en: 'My achievements in competitive programming. I am honing my skills in efficient code design using knowledge of algorithms and data structures.',
    ja: '競技プログラミング関連の実績です。アルゴリズムやデータ構造の知識を活かし、効率的なコード設計能力を磨いています。',
  },
  'works.viewDetails': {
    en: 'View Details',
    ja: '詳細を見る',
  },
  'works.viewProfile': {
    en: 'View Profile',
    ja: 'プロフィールを見る',
  },
  'works.developmentTitle': {
    en: 'Development Achievements',
    ja: '開発実績',
  },
  'works.developmentDescription': {
    en: 'Delivered works with clearly defined roles.',
    ja: '担当した開発実績を紹介します。',
  },
  'works.client': {
    en: 'Client',
    ja: 'クライアント',
  },
  'works.projectType': {
    en: 'Project Type',
    ja: 'プロジェクト種別',
  },
  'works.period': {
    en: 'Period',
    ja: '期間',
  },
  'works.role': {
    en: 'Role',
    ja: '担当',
  },
  'works.technologies': {
    en: 'Tech Stack',
    ja: '使用技術',
  },
  
  // Contact Page
  'contact.title': {
    en: 'Contact Me',
    ja: 'お問い合わせ',
  },
  'contact.description': {
    en: "I'm always interested in hearing about new projects, opportunities, or just connecting with fellow developers and designers. Feel free to reach out through any of the channels below.",
    ja: '新しいプロジェクト、機会について聞くこと、または同業の開発者やデザイナーとつながることに常に興味があります。以下のいずれかのチャネルを通じてお気軽にご連絡ください。',
  },
  'contact.availability': {
    en: 'Availability',
    ja: '稼働状況',
  },
  'contact.available': {
    en: 'Currently Available for Projects',
    ja: '現在、プロジェクトを受け付けています',
  },
  'contact.lookingFor': {
    en: 'Looking for a developer for your next project?',
    ja: '次のプロジェクトの開発者をお探しですか？',
  },
  'contact.availableDesc': {
    en: "I am currently working as an engineer at COROLE Inc. At COROLE Inc., I am working on various projects under contract, focusing on web development and mobile application development.",
    ja: '現在、株式会社COROLEにてエンジニアとして活動しています。株式会社COROLEでは、様々な案件を受託し、ウェブ開発とモバイルアプリ開発を中心に活動しています。',
  },
  'contact.viewWorks': {
    en: 'View My Work',
    ja: '制作実績を見る',
  },
  
  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    ja: '全ての権利を保有します。',
  },
  
  // Language Switcher
  'language.en': {
    en: 'English',
    ja: '英語',
  },
  'language.ja': {
    en: 'Japanese',
    ja: '日本語',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
