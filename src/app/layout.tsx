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
    images: [
      {
        url: '/LanguageAccess Africa Transparent BG (Light).png',
        width: 1200,
        height: 630,
        alt: 'LanguageAccess Africa Logo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: company.name,
    description: company.subheadline,
    images: ['/LanguageAccess Africa Transparent BG (Light).png'],
  },
  icons: {
    icon: '/LanguageAccess Africa Transparent BG (Light).png',
    apple: '/LanguageAccess Africa Transparent BG (Light).png',
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
