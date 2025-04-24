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
    en: "I'm a passionate web developer and designer with over 5 years of experience creating modern, responsive, and user-friendly websites and applications.",
    ja: '私は5年以上の経験を持つ情熱的なウェブ開発者およびデザイナーで、モダンでレスポンシブ、そしてユーザーフレンドリーなウェブサイトやアプリケーションを制作しています。',
  },
  'about.bio2': {
    en: 'My journey in web development began during my university years, where I discovered my passion for creating digital experiences. Since then, I\'ve worked with various technologies and frameworks, always staying up-to-date with the latest trends and best practices.',
    ja: '私のウェブ開発の旅は大学時代に始まり、そこでデジタル体験を創造することへの情熱を発見しました。それ以来、さまざまな技術やフレームワークを使用し、常に最新のトレンドとベストプラクティスを把握しています。',
  },
  'about.bio3': {
    en: 'I specialize in frontend development with React and Next.js, but I also have experience with backend technologies. I believe in creating accessible, performant, and visually appealing web experiences that solve real problems for users.',
    ja: '私はReactとNext.jsを使用したフロントエンド開発を専門としていますが、バックエンド技術の経験もあります。ユーザーの実際の問題を解決するアクセシブルで高性能、そして視覚的に魅力的なウェブ体験の創造を信条としています。',
  },
  'about.bio4': {
    en: "When I'm not coding, you can find me exploring new design trends, taking photographs, or traveling to new places. I'm always open to new opportunities and collaborations, so feel free to reach out!",
    ja: 'コーディングをしていないときは、新しいデザイントレンドを探索したり、写真を撮ったり、新しい場所を旅したりしています。常に新しい機会やコラボレーションに開かれていますので、お気軽にご連絡ください！',
  },
  'about.location': {
    en: 'Location',
    ja: '所在地',
  },
  'about.languages': {
    en: 'Languages',
    ja: '言語',
  },
  'about.interests': {
    en: 'Interests',
    ja: '興味・関心',
  },
  'about.skills': {
    en: 'Skills',
    ja: 'スキル',
  },
  'about.experience': {
    en: 'Experience',
    ja: '経歴',
  },
  'about.education': {
    en: 'Education',
    ja: '学歴',
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
