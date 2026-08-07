'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { Heart } from 'lucide-react';

const volunteerRoles = [
  'Translation',
  'Interpretation',
  'Language Documentation',
  'Linguistic Research',
  'AI & NLP',
  'Software Development',
  'Graphic Design',
  'Website Development',
  'Content Writing',
  'Social Media Management',
];

export const CommunityInvolvement: React.FC = () => {
  return (
    <Section id="community" className="bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative h-full min-h-[400px] rounded-[var(--radius-xl)] overflow-hidden">
            <div className="absolute inset-0 bg-primary rounded-[var(--radius-xl)] overflow-hidden">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="flex flex-wrap justify-center gap-3 w-full max-w-[90%] md:max-w-none">
                  {volunteerRoles.map((role, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: '-20px' }}
                      transition={{ duration: 0.4, delay: 0.05 * idx, ease: 'easeOut' }}
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 text-white border border-white/20 text-xs md:text-sm font-medium backdrop-blur-sm hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                      {role}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 max-w-[540px]">
            <RevealOnScroll direction="up">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                Want to Get Involved?
              </span>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-medium text-primary leading-[1.1] mb-6">
                Volunteer With Us Today
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.2}>
              <p className="text-lg leading-relaxed text-primary/75 mb-8">
                This work runs on people, linguists and volunteers who believe language shouldn't be a barrier. Join our growing network of volunteers and contribute your expertise.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.3} className="w-full md:w-auto">
              <Button href="#volunteer" size="lg" className="w-full md:w-auto" icon={<Heart size={18} />}>
                Join as a Volunteer
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
};
