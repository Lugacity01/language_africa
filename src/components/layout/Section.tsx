'use client';

import React, { useRef } from 'react';
import { cn } from '@/utils/cn';
import { motion, useInView } from 'framer-motion';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("py-16 md:py-24 lg:py-32", className)} 
      {...props}
    >
      {children}
    </motion.section>
  );
};
