import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const headingStyles = {
  display: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]',
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.18]',
  h3: 'text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-[1.25]',
  h4: 'text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-[1.3]',
  h5: 'text-base sm:text-lg font-medium leading-[1.35]',
  h6: 'text-sm sm:text-base font-medium uppercase tracking-wider',
};

const tagMap = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export const Heading = forwardRef(({
  as,
  variant = 'h2',
  children,
  className,
  highlight,
  ...props
}, ref) => {
  const Component = as || tagMap[variant] || 'h2';

  return (
    <Component
      ref={ref}
      className={cn(
        'font-sans text-dark transition-colors',
        headingStyles[variant] || headingStyles.h2,
        className
      )}
      {...props}
    >
      {children}
      {highlight && (
        <span className="text-cyan block md:inline md:ml-2">
          {highlight}
        </span>
      )}
    </Component>
  );
});

Heading.displayName = 'Heading';

export default Heading;
