'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Who We Are', href: '/#who-we-are' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if text should be dark. It is dark if scrolled, OR if we are on a light page (not home).
  const isDarkText = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center px-4 md:px-8',
        isScrolled ? 'top-4' : 'top-6'
      )}
    >
      <div
        className={cn(
          'w-full max-w-[1100px] flex items-center justify-between transition-all duration-500 ease-out',
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3 glass-border'
            : 'bg-transparent py-2'
        )}
      >

        {/* Logo */}
        <a href="/" className="z-50 relative flex items-center">
          <img
            src="/LanguageAccess Africa Transparent BG (Light).png"
            alt="LanguageAccess Africa"
            className={cn(
              "h-16 md:h-16 w-auto object-contain transition-all duration-300",
              isDarkText ? "invert brightness-0" : "" // Converts white to black for the scrolled light background
            )}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  isDarkText ? "text-primary/80 hover:text-secondary" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button href="#donate" variant={isDarkText ? 'primary' : 'secondary'} size="sm">
            Donate
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden z-50 relative p-2 transition-colors duration-300", isDarkText ? "text-primary" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        'fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-[0.22,1,0.36,1] md:hidden flex flex-col pt-32 px-8',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col gap-8 text-3xl font-medium tracking-tight mb-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="mt-auto pb-12">
          <Button href="#donate" variant="primary" size="lg" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
            Donate Now
          </Button>
        </div>
      </div>
    </header>
  );
};
