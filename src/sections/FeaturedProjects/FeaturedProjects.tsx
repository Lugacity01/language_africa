import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { ongoingProjects, futureInitiatives } from '@/data/projects';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const FeaturedProjects: React.FC = () => {
  return (
    <Section id="projects" className="bg-surface overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-[600px]">
            <RevealOnScroll direction="up">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                Featured Projects
              </span>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-medium text-primary leading-[1.2]">
                Our impact across the continent and our vision for the future.
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll direction="up" delay={0.2}>
            <Button href="#all-projects" variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
              Explore our projects
            </Button>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Ongoing Projects */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="bg-background rounded-[var(--radius-xl)] p-8 lg:p-12 shadow-[var(--shadow-1)] border border-border-color h-full glass-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Ongoing Projects</h3>
              </div>
              <ul className="space-y-4">
                {ongoingProjects.map((project, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-primary/80">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Future Initiatives */}
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="bg-primary rounded-[var(--radius-xl)] p-8 lg:p-12 shadow-[var(--shadow-2)] h-full text-white glass-border glass-border-dark relative overflow-hidden">
              {/* Optional glow tracking could go here */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 text-accent flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Future Initiatives</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {futureInitiatives.map((initiative, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span className="text-base text-white/80">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
};
