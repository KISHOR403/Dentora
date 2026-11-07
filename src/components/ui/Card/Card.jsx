import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const cardVariants = {
  white: 'bg-white border border-neutral-200/80 text-dark shadow-subtle',
  grey: 'bg-light-grey border border-neutral-200/50 text-dark',
  softCyan: 'bg-soft-cyan/50 border border-cyan-200/60 text-dark',
  dark: 'bg-dark border border-neutral-800 text-white shadow-dark-float',
  glass: 'glass-panel text-dark shadow-subtle',
};

export const Card = forwardRef(({
  children,
  variant = 'white',
  hover = false,
  interactive = false,
  className,
  as: Component = 'div',
  ...props
}, ref) => {
  const isInteractive = hover || interactive;

  const baseClasses = cn(
    'rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden',
    cardVariants[variant] || cardVariants.white,
    isInteractive && 'hover:-translate-y-1 hover:shadow-card-hover hover:border-cyan/40 cursor-pointer',
    className
  );

  return (
    <Component
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

export const CardHeader = ({ children, className, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={cn('text-xl font-semibold tracking-tight text-inherit', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className, ...props }) => (
  <p className={cn('text-sm text-neutral-500 leading-relaxed', className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={cn('pt-2 text-inherit', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className, ...props }) => (
  <div className={cn('flex items-center pt-6 mt-auto border-t border-black/5 dark:border-white/10', className)} {...props}>
    {children}
  </div>
);

export default Card;
