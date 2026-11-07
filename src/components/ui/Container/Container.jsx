import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const sizeMap = {
  narrow: 'max-w-4xl',     // ~896px for editorial/article content
  default: 'max-w-7xl',    // ~1280px standard container
  wide: 'max-w-[1440px]',  // ~1440px luxury expansive grid
  full: 'max-w-full',
};

export const Container = forwardRef(({
  children,
  size = 'default',
  className,
  noPadding = false,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'w-full mx-auto',
        sizeMap[size] || sizeMap.default,
        !noPadding && 'px-4 sm:px-6 md:px-8 lg:px-12',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
