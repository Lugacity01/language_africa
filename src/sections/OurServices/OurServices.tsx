import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { cn } from '@/utils/cn';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageSquare, Globe, GraduationCap, Cpu, Users, Search } from 'lucide-react';

const icons = [MessageSquare, Globe, Search, Cpu, Users, GraduationCap];

// We alternate colors for the stacked cards to create contrast
const cardColors = [
  'bg-white text-primary border-border-color',
  'bg-surface text-primary border-border-color',
  'bg-[#f4f7f6] text-primary border-border-color', // soft tint
  'bg-primary text-white border-primary-light/20', // dark card
  'bg-secondary text-white border-secondary-light/20', // accent card
  'bg-white text-primary border-border-color',
];

export const OurServices: React.FC = () => {
  return (
    <Section id="services" className="bg-background relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-[600px]">
            <RevealOnScroll direction="up">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                Our Services
              </span>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-[clamp(1.5rem,7vw,3rem)] font-medium text-primary leading-[1.1]">
                Professional solutions for a multilingual world.
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll direction="up" delay={0.2} className="w-full md:w-auto">
            <Button href="/services" variant="outline" className="w-full md:w-auto" icon={<ArrowRight size={18} />} iconPosition="right">
              View all services
            </Button>
          </RevealOnScroll>
        </div>

        {/* The Stacking Deck Container */}
        <div className="relative mt-16 w-full flex flex-col gap-12 md:gap-24 pb-32">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            const colorClass = cardColors[index % cardColors.length];
            const isDark = colorClass.includes('text-white');
            
            return (
              <div 
                key={index} 
                className={cn(
                  "sticky w-full rounded-[var(--radius-2xl)] border shadow-[0_20px_40px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-500",
                  colorClass
                )}
                style={{ 
                  // Calculate dynamic top offset for the sticky stack effect
                  top: `calc(10vh + ${index * 1.5}rem)`,
                  // Z-index increases sequentially
                  zIndex: index + 10,
                  // Taller min-height to ensure substantial scrolling real estate
                  minHeight: '60vh'
                }}
              >
                <div className="p-8 md:p-16 lg:p-20 flex flex-col h-full justify-between">
                  
                  {/* Top section: Icon and Number */}
                  <div className="flex justify-between items-start mb-16">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center border shadow-sm",
                      isDark ? "bg-white/10 border-white/20 text-white" : "bg-white border-primary/10 text-primary"
                    )}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    
                    <span className={cn(
                      "text-4xl md:text-7xl font-bold opacity-10 tracking-tighter",
                      isDark ? "text-white" : "text-primary"
                    )}>
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Bottom section: Content */}
                  <div className="max-w-3xl mt-auto">
                    <h3 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-[1.1] tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className={cn(
                      "text-base md:text-xl leading-relaxed font-medium",
                      isDark ? "text-white/80" : "text-primary/70"
                    )}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
