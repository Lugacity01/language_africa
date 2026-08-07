'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const partners = [
  'Governments',
  'Universities',
  'NGOs',
  'International Organizations',
  'Technology Companies',
  'Research Institutes',
  'Language Communities',
  'Private Sector Organizations',
];

export const Partnerships: React.FC = () => {
  return (
    <Section id="partner" className="bg-surface relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <RevealOnScroll direction="up">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
              Partner With Us
            </span>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-medium text-primary leading-[1.1] mb-6">
              We work best alongside people who understand the communities we're trying to reach.
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-lg leading-relaxed text-primary/75">
              Together, we can create innovative solutions that expand language access and preserve Africa's linguistic heritage.
            </p>
          </RevealOnScroll>
        </div>
      </Container>

      {/* Infinite Marquee (Full Bleed) */}
      <div className="relative w-full overflow-hidden flex items-center py-10 mb-16 bg-primary text-background rotate-[-2deg] scale-110">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <React.Fragment key={index}>
              <span className="text-4xl md:text-6xl font-bold tracking-tight uppercase px-8 opacity-90">
                {partner}
              </span>
              <span className="text-secondary text-4xl md:text-6xl">
                •
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <Container className="relative z-10">

        <div className="flex justify-center">
          <RevealOnScroll direction="up" delay={0.4} className="w-full md:w-auto">
            <Button href="/contact" size="lg" variant="primary" className="w-full md:w-auto" icon={<Handshake size={18} />}>
              Partner With Us
            </Button>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
};
