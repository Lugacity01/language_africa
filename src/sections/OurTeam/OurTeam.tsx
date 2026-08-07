import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { team } from '@/data/team';

// Helper to format camelCase keys to Title Case
const formatTitle = (key: string) => {
  const result = key.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const OurTeam: React.FC = () => {
  const categories = Object.entries(team);

  return (
    <Section id="team" className="bg-background relative overflow-hidden">
      <Container>
        <div className="max-w-[800px] mb-24">
          <RevealOnScroll direction="up">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
              Our Team
            </span>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-medium text-primary leading-[1.1] mb-6">
              LanguageAccess Africa is led by passionate professionals.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-lg text-primary/75 leading-relaxed max-w-[700px]">
              With expertise in linguistics, translation, language technology, research, education, and innovation, we share a common vision of empowering African languages.
            </p>
          </RevealOnScroll>
        </div>

        {/* Editorial Directory Layout */}
        <div className="flex flex-col gap-16 md:gap-32 pb-16">
          {categories.map(([category, members], index) => (
            <div key={category} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              
              {/* Sticky Left Column (Category Title) */}
              <div className="md:col-span-4 lg:col-span-5 relative">
                <RevealOnScroll direction="up" delay={0.1}>
                  <div className="md:sticky md:top-32">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px w-8 bg-secondary/50" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                        Division {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary uppercase tracking-tight leading-tight">
                      {formatTitle(category)}
                    </h3>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Scrolling Right Column (Team Members) */}
              <div className="md:col-span-8 lg:col-span-7 flex flex-col">
                <div className="border-t border-border-color">
                  {members.map((member, idx) => (
                    <RevealOnScroll key={idx} direction="up" delay={0.1 + (idx * 0.05)}>
                      <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-8 border-b border-border-color md:hover:pl-6 transition-all duration-300 cursor-default">
                        <h4 className="text-xl md:text-2xl font-medium text-primary group-hover:text-secondary transition-colors mb-2 sm:mb-0">
                          {member.name}
                        </h4>
                        <p className="text-sm md:text-base text-primary/60 font-medium tracking-wide">
                          {member.role}
                        </p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
};
