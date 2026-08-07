'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 lg:pr-12">
            <RevealOnScroll direction="up">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                Contact
              </span>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-medium text-primary leading-[1.1] mb-6">
                We'd Love to Hear From You
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.2}>
              <p className="text-lg text-primary/75 leading-relaxed mb-12">
                Whether you're looking for professional language services, research collaboration, partnership opportunities, or volunteer engagement, we'd be delighted to connect with you.
              </p>
            </RevealOnScroll>

            <div className="space-y-8">
              <RevealOnScroll direction="up" delay={0.3}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface text-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Email</h4>
                    <a href={`mailto:${company.contact.email}`} className="text-lg text-primary/80 hover:text-secondary transition-colors">
                      {company.contact.email}
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll direction="up" delay={0.4}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface text-secondary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Phone</h4>
                    {company.contact.phones.map((phone, idx) => (
                      <div key={idx}>
                        <a href={`tel:${phone}`} className="text-lg text-primary/80 hover:text-secondary transition-colors block">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.5}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface text-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Locations</h4>
                    <div className="space-y-4">
                      {company.contact.addresses.map((address, idx) => (
                        <p key={idx} className="text-base text-primary/80 leading-relaxed">
                          {address}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Premium Contact Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="left" delay={0.3}>
              <div className="bg-white rounded-[var(--radius-xl)] p-6 md:p-12 shadow-[var(--shadow-2)] border border-border-color">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-primary block">Full Name</label>
                      <input id="name" type="text" className="w-full h-12 px-4 rounded-lg bg-surface border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-medium text-primary block">Organization <span className="text-primary/50">(Optional)</span></label>
                      <input id="organization" type="text" className="w-full h-12 px-4 rounded-lg bg-surface border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="Your Company" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-primary block">Email Address</label>
                      <input id="email" type="email" className="w-full h-12 px-4 rounded-lg bg-surface border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="jane@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-primary block">Phone Number</label>
                      <input id="phone" type="tel" className="w-full h-12 px-4 rounded-lg bg-surface border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="+234..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-primary block">Subject</label>
                    <input id="subject" type="text" className="w-full h-12 px-4 rounded-lg bg-surface border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary block">Message</label>
                    <textarea id="message" rows={5} className="w-full p-4 rounded-lg bg-surface border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <Button type="submit" size="lg" fullWidth icon={<Send size={18} />} iconPosition="right">
                    Send Message
                  </Button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
