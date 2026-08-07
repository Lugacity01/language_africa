import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { strategicPillars } from '@/data/services';
import { Languages, BookOpen, Cpu, GraduationCap, Users } from 'lucide-react';

const icons = [Languages, BookOpen, Cpu, GraduationCap, Users];

export const StrategicPillars: React.FC = () => {
  return (
    <Section id="pillars" className="bg-background relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 relative">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <RevealOnScroll direction="up">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                  Our Strategic Pillars
                </span>
              </RevealOnScroll>
              <RevealOnScroll direction="up" delay={0.1}>
                <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-medium text-primary leading-[1.2] mb-6">
                  Building a future where African languages thrive offline and in the digital world.
                </h2>
              </RevealOnScroll>
            </div>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {strategicPillars.map((pillar, index) => {
              const Icon = icons[index % icons.length];
              
              return (
                <RevealOnScroll 
                  key={index} 
                  direction="up" 
                  delay={0.1}
                >
                  <div className="group relative flex flex-col sm:flex-row gap-6 p-8 lg:p-10 rounded-[var(--radius-xl)] bg-transparent border border-border-color transition-all duration-300 overflow-hidden glass-border">
                    {/* Subtle hover gradient background */}
                    <div className="absolute inset-0 bg-surface/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-surface text-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold text-primary mb-3 leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-base text-primary/70 leading-relaxed font-medium">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
