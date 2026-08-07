'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { company } from '@/data/company';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const VisionMission: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<'vision' | 'mission' | null>(null);

  return (
    <Section id="vision-mission" className="bg-background pt-0">
      <div className="w-full h-auto md:h-[700px] flex flex-col md:flex-row overflow-hidden border-y border-border-color">
        
        {/* VISION SECTION */}
        <motion.div
          className="relative h-full min-h-[400px] md:min-h-0 bg-primary text-white flex flex-col justify-end p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 cursor-pointer overflow-hidden group"
          animate={{
            flex: hoveredSection === 'vision' ? 2 : hoveredSection === 'mission' ? 0.5 : 1
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoveredSection('vision')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Background Gradient / Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          
          <div className="relative z-10 w-full md:min-w-[400px]">
            <div className="flex items-center gap-4 mb-4 md:mb-8">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent flex items-center gap-2">
                <span className="w-8 h-px bg-accent" />
                Our Vision
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 transition-transform duration-500 group-hover:-translate-y-2">
              VISION
            </h2>

            <AnimatePresence>
              {/* Mobile text (always visible) */}
              <div className="md:hidden mt-2">
                <p className="text-base text-white/80 leading-relaxed font-medium">
                  {company.vision}
                </p>
              </div>

              {/* Desktop text (hover expanded) */}
              {(hoveredSection === 'vision' || hoveredSection === null) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: hoveredSection === 'vision' ? 1 : 0.5, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="hidden md:block overflow-hidden"
                >
                  <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium max-w-[500px]">
                    {company.vision}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* MISSION SECTION */}
        <motion.div
          className="relative h-full min-h-[400px] md:min-h-0 bg-surface text-primary flex flex-col justify-end p-8 md:p-16 cursor-pointer overflow-hidden group"
          animate={{
            flex: hoveredSection === 'mission' ? 2 : hoveredSection === 'vision' ? 0.5 : 1
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoveredSection('mission')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Background Gradient / Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 w-full md:min-w-[400px]">
            <div className="flex items-center gap-4 mb-4 md:mb-8">
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary flex items-center gap-2">
                <span className="w-8 h-px bg-secondary" />
                Our Mission
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 transition-transform duration-500 group-hover:-translate-y-2">
              MISSION
            </h2>

            <AnimatePresence>
              {/* Mobile text (always visible) */}
              <div className="md:hidden mt-2">
                <p className="text-base text-primary/80 leading-relaxed font-medium">
                  {company.mission}
                </p>
              </div>

              {/* Desktop text (hover expanded) */}
              {(hoveredSection === 'mission' || hoveredSection === null) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: hoveredSection === 'mission' ? 1 : 0.5, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="hidden md:block overflow-hidden"
                >
                  <p className="text-base md:text-lg text-primary/80 leading-relaxed font-medium max-w-[500px]">
                    {company.mission}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

      <Container>
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mt-20 pt-10 border-t border-border-color">
            <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-primary mb-6">Our Story</h3>
              <p className="text-xl text-primary/75 leading-relaxed mb-8">
                Through research, innovation, collaboration, and capacity building, we are creating solutions that connect people, preserve linguistic heritage, and expand access to knowledge across Africa and beyond.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
};
