import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { HeartHandshake, CheckCircle2 } from 'lucide-react';

const impactPoints = [
  'Document endangered languages.',
  'Develop AI tools for African languages.',
  'Train future language professionals.',
  'Create open language resources.',
  'Conduct impactful research.',
  'Build digital platforms that promote multilingual communication.',
];

export const Donate: React.FC = () => {
  return (
    <Section id="donate" className="bg-primary text-white overflow-hidden relative">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#06303b] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="max-w-[600px]">
            <RevealOnScroll direction="up">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                Donate & Sponsor
              </span>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.1] mb-6">
                Our work runs on funding as much as it runs on people.
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.2}>
              <p className="text-lg leading-relaxed text-white/80 mb-8">
                Every donation funds training, documentation, research, and technology for underserved languages. Every contribution helps preserve Africa's linguistic heritage and ensures that language is never a barrier to opportunity.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.3} className="w-full md:w-auto">
              <Button href="#donate-now" variant="secondary" size="lg" className="w-full md:w-auto" icon={<HeartHandshake size={18} />}>
                Donate Now
              </Button>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="relative glass-border glass-border-dark rounded-[var(--radius-xl)] p-8 lg:p-12 overflow-hidden shadow-2xl">
              {/* True SVG Glass Backdrop */}
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backdropFilter: 'blur(20px) url(#svg-glass)' }} />
              <div className="absolute inset-0 z-0 bg-white/5 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-8">Your support enables us to:</h3>
                <ul className="space-y-4">
                  {impactPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
      
      {/* Hidden SVG Filter for True Glass Distortion */}
      <svg className="hidden">
        <filter id="svg-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
          <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
          <feBlend mode="overlay" in="composite" in2="SourceGraphic" />
        </filter>
      </svg>
    </Section>
  );
};
