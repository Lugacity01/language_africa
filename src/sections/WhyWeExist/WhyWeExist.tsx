'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { company } from '@/data/company';
import { motion } from 'framer-motion';

export const WhyWeExist: React.FC = () => {
  return (
    <Section id="why-we-exist" className="bg-surface relative pt-0 pb-0 overflow-visible">
      <Container>
        
        <div className="flex flex-col md:flex-row relative w-full">
          
          {/* Left Column: Sticky Title */}
          <div className="w-full md:w-5/12 relative hidden md:block">
            {/* The sticky container tracks the scroll. Top-32 gives it some padding from the navbar */}
            <div className="sticky top-40 flex flex-col">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                {company.whyWeExist.title}
              </span>
              <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-bold text-primary leading-[1.1] tracking-tighter">
                The <br/>
                Communication <br/>
                Challenge in <br/>
                <span className="text-accent">Africa.</span>
              </h2>
            </div>
          </div>

          {/* Mobile Title (Non-sticky) */}
          <div className="w-full pt-24 pb-12 md:hidden">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
              {company.whyWeExist.title}
            </span>
            <h2 className="text-[clamp(1.5rem,9vw,3rem)] font-bold text-primary leading-[1.1] tracking-tighter">
              The Communication Challenge in <span className="text-accent">Africa.</span>
            </h2>
          </div>

          {/* Right Column: Scrolling Storytelling */}
          <div className="w-full md:w-7/12 flex flex-col gap-[15vh] md:gap-[50vh] pb-[15vh] md:pb-[30vh] md:pt-[30vh]">
            {company.whyWeExist.paragraphs.map((paragraph, index) => (
              <motion.div 
                key={index}
                className="relative flex flex-col"
                initial={{ opacity: 0.2, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ 
                  margin: "-30% 0px -30% 0px" // Only trigger when perfectly in the center of the screen
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* The large dramatic number watermark */}
                <div className="absolute -top-8 md:-top-20 -left-4 md:-left-12 text-[6rem] md:text-[12rem] font-bold text-primary/5 leading-none select-none pointer-events-none z-0">
                  0{index + 1}
                </div>
                
                {/* The Paragraph Text */}
                <p className="relative z-10 text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.6] text-primary font-medium tracking-wide text-justify">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </Container>
    </Section>
  );
};
