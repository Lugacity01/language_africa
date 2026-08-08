'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { company } from '@/data/company';
import { Globe, Users, Handshake } from 'lucide-react';

export const Hero: React.FC = () => {
  const words = company.headline.split(' ');

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [-5, 5, -5] as any,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center justify-center md:justify-start overflow-hidden bg-primary pt-16 md:pt-40 py-16 md:py-24">

      {/* Animated Communication Waves Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.07] pointer-events-none">
        <svg
          className="absolute w-[200vw] h-[150vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave 1 - Represents Speech/Communication */}
          <motion.path
            d="M0,250 C200,250 300,100 500,250 C700,400 800,250 1000,250"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            animate={{
              d: [
                "M0,250 C200,250 300,100 500,250 C700,400 800,250 1000,250",
                "M0,250 C200,100 300,400 500,250 C700,100 800,400 1000,250",
                "M0,250 C200,250 300,100 500,250 C700,400 800,250 1000,250",
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Wave 2 - Represents Connection */}
          <motion.path
            d="M0,250 C200,400 300,250 500,250 C700,100 800,250 1000,250"
            stroke="var(--color-secondary)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M0,250 C200,400 300,250 500,250 C700,100 800,250 1000,250",
                "M0,250 C200,100 300,400 500,250 C700,400 800,100 1000,250",
                "M0,250 C200,400 300,250 500,250 C700,100 800,250 1000,250",
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Wave 3 - Represents Translation/Bridging */}
          <motion.path
            d="M0,250 C200,100 300,400 500,250 C700,250 800,100 1000,250"
            stroke="var(--color-accent)"
            strokeWidth="1"
            fill="none"
            animate={{
              d: [
                "M0,250 C200,100 300,400 500,250 C700,250 800,100 1000,250",
                "M0,250 C200,400 300,100 500,250 C700,400 800,250 1000,250",
                "M0,250 C200,100 300,400 500,250 C700,250 800,100 1000,250",
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Static gradient overlay to soften the lines near the edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary z-0 pointer-events-none" />

      <Container className="relative z-10 text-center md:text-left pt-12 md:pt-0">
        <div className="max-w-[850px] mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <div className="flex flex-wrap justify-center md:justify-start items-center mb-6 relative">
            <motion.h1
              className="text-[clamp(1.5rem,8vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white text-center md:text-left"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                  {Array.from(word).map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      variants={child}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </div>

          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed text-white/80 mb-8 md:mb-12 max-w-[700px] text-center md:text-left">
              {company.subheadline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.4} className="w-full flex justify-center md:justify-start">
            <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center md:justify-start w-full max-w-[400px] md:max-w-none mx-auto md:mx-0">
              <Button href="/services" size="lg" className="w-full md:w-auto" icon={<Globe size={18} />}>
                Explore Our Services
              </Button>
              <Button href="#community" variant="secondary" size="lg" className="w-full md:w-auto" icon={<Users size={18} />}>
                Join Community
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full md:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10" icon={<Handshake size={18} />}>
                Partner With Us
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
};
