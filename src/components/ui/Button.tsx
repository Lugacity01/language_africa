import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-white hover:opacity-90 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] focus:ring-primary",
      secondary: "bg-secondary text-white hover:opacity-90 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] focus:ring-secondary",
      outline: "border border-border-color bg-transparent hover:bg-surface text-primary focus:ring-primary",
      ghost: "bg-transparent text-primary hover:bg-surface focus:ring-primary",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 gap-1.5",
      md: "text-base px-6 py-3 gap-2",
      lg: "text-lg px-8 py-4 gap-2",
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      fullWidth ? "w-full" : "",
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
