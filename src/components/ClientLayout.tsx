'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
