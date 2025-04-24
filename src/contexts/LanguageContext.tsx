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
    en: 'Web Developer & Designer',
    ja: 'ウェブ開発者 & デザイナー',
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
    en: 'Frontend Developer & UI Designer',
    ja: 'フロントエンド開発者 & UIデザイナー',
  },
  'home.aboutDesc1': {
    en: "I'm a passionate web developer with expertise in modern frontend technologies. I specialize in creating responsive, accessible, and performant web applications with a focus on user experience.",
    ja: '私はモダンなフロントエンド技術に精通した情熱的なウェブ開発者です。ユーザー体験を重視した、レスポンシブで、アクセシブルで、高性能なウェブアプリケーションの作成を専門としています。',
  },
  'home.aboutDesc2': {
    en: 'With a background in both design and development, I bring a unique perspective to every project, ensuring both aesthetic appeal and technical excellence.',
    ja: 'デザインと開発の両方のバックグラウンドを持つことで、各プロジェクトに独自の視点をもたらし、美的魅力と技術的卓越性の両方を確保します。',
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
  
  // Contact Page
  'contact.title': {
    en: 'Contact Me',
    ja: 'お問い合わせ',
  },
  'contact.description': {
    en: "I'm always interested in hearing about new projects, opportunities, or just connecting with fellow developers and designers. Feel free to reach out through any of the channels below.",
    ja: '新しいプロジェクト、機会について聞くこと、または同業の開発者やデザイナーとつながることに常に興味があります。以下のいずれかのチャネルを通じてお気軽にご連絡ください。',
  },
  'contact.sendMessage': {
    en: 'Send Me a Message',
    ja: 'メッセージを送る',
  },
  'contact.formDesc': {
    en: "Prefer to send a direct message? Fill out the form below and I'll get back to you as soon as possible.",
    ja: '直接メッセージを送信したいですか？以下のフォームに記入していただければ、できるだけ早くご連絡いたします。',
  },
  'contact.name': {
    en: 'Name',
    ja: '名前',
  },
  'contact.email': {
    en: 'Email',
    ja: 'メールアドレス',
  },
  'contact.subject': {
    en: 'Subject',
    ja: '件名',
  },
  'contact.message': {
    en: 'Message',
    ja: 'メッセージ',
  },
  'contact.send': {
    en: 'Send Message',
    ja: '送信',
  },
  'contact.availability': {
    en: 'Availability',
    ja: '稼働状況',
  },
  'contact.available': {
    en: 'Currently Available for Projects',
    ja: '現在プロジェクト受付可能',
  },
  'contact.lookingFor': {
    en: 'Looking for a developer for your next project?',
    ja: '次のプロジェクトの開発者をお探しですか？',
  },
  'contact.availableDesc': {
    en: "I'm currently available for freelance work and open to discussing new opportunities. Whether you need a complete website, a specific feature, or consultation on your project, I'd be happy to help bring your vision to life.",
    ja: '現在、フリーランスの仕事を受け付けており、新しい機会について話し合うことに開かれています。完全なウェブサイト、特定の機能、またはプロジェクトに関するコンサルテーションが必要な場合でも、あなたのビジョンを実現するお手伝いをさせていただきます。',
  },
  'contact.emailMe': {
    en: 'Email Me',
    ja: 'メールを送る',
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
