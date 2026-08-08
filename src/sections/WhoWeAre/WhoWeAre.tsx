'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Globe, Shield, Users, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const WhoWeAre: React.FC = () => {
  return (
    <Section id="who-we-are" className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
      <Container>
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          
          <RevealOnScroll direction="up">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 mb-8">
              Who We Are
            </span>
          </RevealOnScroll>
          
          {/* Massive Typographic Mask */}
          <div className="w-full text-center mb-16 md:mb-24 px-4">
            <RevealOnScroll direction="up" delay={0.1}>
              <motion.h2 
                className="text-[clamp(1.5rem,7.5vw,5.5rem)] font-bold leading-[1.1] tracking-tight"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ffffff, var(--color-accent), var(--color-secondary), #ffffff, var(--color-accent))',
                  backgroundSize: '400% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Advancing African languages through innovation, research, and professional services.
              </motion.h2>
            </RevealOnScroll>
          </div>
          
          {/* Content Below the Mask (Bento Box Grid) */}
          <div className="w-full max-w-[1000px] mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              
              {/* Card 1: Wide */}
              <RevealOnScroll direction="up" delay={0.2} className="md:col-span-2">
                <div className="bg-white/5 border border-white/10 rounded-[var(--radius-xl)] p-6 md:p-10 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Globe size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Who We Are</h3>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    A registered language technology and research organization dedicated to advancing African and international languages. We translate, build, train, and preserve so no one is excluded from vital information.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Card 2: Square */}
              <RevealOnScroll direction="up" delay={0.3} className="md:col-span-1">
                <div className="bg-white/5 border border-white/10 rounded-[var(--radius-xl)] p-6 md:p-10 h-full hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Users size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Our Community</h3>
                  </div>
                  <p className="text-base text-white/70 leading-relaxed">
                    Bringing together linguists, translators, researchers, technologists, and innovators to create sustainable solutions that promote multilingual communication.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Card 3: Square */}
              <RevealOnScroll direction="up" delay={0.4} className="md:col-span-1">
                <div className="bg-white/5 border border-white/10 rounded-[var(--radius-xl)] p-6 md:p-10 h-full hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Shield size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Our Core Belief</h3>
                  </div>
                  <p className="text-base text-white/70 leading-relaxed">
                    We believe that every language carries knowledge, identity, and culture. We work to preserve linguistic diversity and empower communities across Africa.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Card 4: Wide */}
              <RevealOnScroll direction="up" delay={0.5} className="md:col-span-2">
                <div className="bg-white/5 border border-white/10 rounded-[var(--radius-xl)] p-6 md:p-10 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Cpu size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">The Future</h3>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    By combining deep language expertise with emerging technologies such as Artificial Intelligence (AI) and Natural Language Processing (NLP), we are building a future where African languages thrive both offline and in the digital world.
                  </p>
                </div>
              </RevealOnScroll>

            </div>
            
            <RevealOnScroll direction="up" delay={0.6} className="w-full flex justify-center">
              <Button href="/about" variant="primary" size="lg" className="w-full md:w-auto bg-white text-black hover:bg-white/90" icon={<ArrowRight size={18} />} iconPosition="right">
                Learn more about us
              </Button>
            </RevealOnScroll>
          </div>

        </div>
      </Container>
    </Section>
  );
};
