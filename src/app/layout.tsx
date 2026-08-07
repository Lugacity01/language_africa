import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { company } from '@/data/company';

const customFont = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-custom' });

export const metadata: Metadata = {
  title: `${company.name} | ${company.headline}`,
  description: company.subheadline,
  keywords: ['LanguageAccess Africa', 'African Languages', 'Translation', 'AI for Africa', 'Linguistic Research', 'Language Technology'],
  openGraph: {
    title: company.name,
    description: company.subheadline,
    type: 'website',
    locale: 'en_NG',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${customFont.variable}`}>
      <body className="font-sans antialiased text-primary bg-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
