import React from 'react';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { company } from '@/data/company';
import { ArrowUpRight } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
  { name: 'X (Twitter)', icon: FaTwitter, href: '#' },
  { name: 'Facebook', icon: FaFacebook, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'YouTube', icon: FaYoutube, href: '#' },
];

export const ClosingStatement: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-8 overflow-hidden relative">
      <Container className="relative z-10">
        
        {/* Main CTA Block */}
        <div className="border-b border-white/10 pb-20 mb-16">
          <div className="max-w-[800px]">
            <RevealOnScroll direction="up">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.15] tracking-tight mb-6">
                {company.closingStatement.title}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <p className="text-base md:text-lg leading-relaxed text-white/80 font-medium max-w-[95%] text-justify md:text-left">
                {company.closingStatement.description}
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          
          <RevealOnScroll direction="up" delay={0.2}>
            <div>
              <span className="block text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                Connect With Us
              </span>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index} 
                      href={social.href} 
                      className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <Icon size={18} className="text-white/80 group-hover:text-white" />
                      <span className="text-sm font-medium">{social.name}</span>
                      <ArrowUpRight size={14} className="text-white/40 group-hover:text-white/80 transition-colors ml-1" />
                    </a>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="md:text-right flex flex-col md:items-end">
              <div className="text-2xl font-bold tracking-tight mb-4">
                LanguageAccess<span className="text-accent">Africa.</span>
              </div>
              <p className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} LanguageAccess Africa. All rights reserved.
              </p>
            </div>
          </RevealOnScroll>
          
        </div>
      </Container>
    </footer>
  );
};
