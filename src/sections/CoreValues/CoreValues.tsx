'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { company } from '@/data/company';
import { motion } from 'framer-motion';

export const CoreValues: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="values" className="bg-surface relative overflow-hidden">
      <Container>
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <RevealOnScroll direction="up">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
              Core Values
            </span>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-medium text-primary leading-[1.1]">
              The principles that drive our impact.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col border-t border-border-color mt-16 max-w-[1200px] mx-auto">
          {company.values.map((value, index) => (
            <RevealOnScroll key={index} direction="up" delay={0.1}>
              <div 
                className="group relative border-b border-border-color py-6 md:py-10 cursor-pointer transition-colors duration-500 hover:bg-black/5"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 md:px-8">
                  <h3 
                    className={`text-[clamp(1.75rem,5vw,6rem)] font-bold uppercase tracking-tight transition-all duration-500 ${
                      hoveredIndex === index ? 'text-primary' : 'text-primary md:text-transparent'
                    }`}
                    style={{ WebkitTextStroke: hoveredIndex === index ? '0px' : '1.5px rgba(16, 35, 42, 0.4)' }}
                  >
                    {value.title}
                  </h3>
                  
                  {/* Mobile Description (Always Visible) */}
                  <div className="md:hidden pt-2 pb-2">
                    <p className="text-base text-primary/80 leading-relaxed font-medium">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Desktop Description (Hover to Expand) */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: hoveredIndex === index ? 'auto' : 0,
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden md:block overflow-hidden md:max-w-[450px]"
                  >
                    <p className="text-lg md:text-xl text-primary/80 pt-2 md:pt-0 leading-relaxed font-medium md:text-right">
                      {value.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
};
