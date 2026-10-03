'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { team, TeamMember } from '@/data/team';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

// Helper to format camelCase keys to Title Case
const formatTitle = (key: string) => {
  const result = key.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const TeamAccordionRow: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDetails = !!member.bio || !!member.image;

  return (
    <div className="border-b border-border-color">
      <div 
        className={cn(
          "group flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-8 transition-all duration-300",
          hasDetails ? "cursor-pointer md:hover:pl-6" : "cursor-default"
        )}
        onClick={() => hasDetails && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <h4 className="text-xl md:text-2xl font-medium text-primary group-hover:text-secondary transition-colors mb-2 sm:mb-0">
            {member.name}
          </h4>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-sm md:text-base text-primary/60 font-medium tracking-wide">
            {member.role}
          </p>
          {hasDetails && (
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-primary/40 group-hover:text-secondary">
              <ChevronDown size={20} />
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 flex flex-col md:flex-row gap-8">
              {/* Image */}
              {member.image && (
                <div className="w-full aspect-[4/5] max-w-[280px] mx-auto sm:mx-0 md:max-w-none md:w-64 md:h-[22rem] flex-shrink-0 rounded-[var(--radius-xl)] overflow-hidden bg-surface border border-border-color shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              )}
              
              {/* Bio & Socials */}
              <div className="flex flex-col flex-grow">
                {member.bio && (
                  <p className="text-base text-justify text-primary/70 leading-relaxed mb-6 max-w-3xl">
                    {member.bio}
                  </p>
                )}
                
                {member.socials && (
                  <div className="flex items-center gap-4 mt-auto">
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-primary/40 hover:text-[#0A66C2] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.socials.x && (
                      <a 
                        href={member.socials.x} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-primary/40 hover:text-black transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a 
                        href={member.socials.facebook} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-primary/40 hover:text-[#1877F2] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaFacebook size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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

        {/* Editorial Directory Layout with Accordions */}
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
                      <TeamAccordionRow member={member} />
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
