import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("mx-auto w-full max-w-[1320px] px-4 md:px-8", className)} 
      {...props}
    >
      {children}
    </div>
  );
};
