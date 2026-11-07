import React from 'react';
import { cn } from '@/utils/cn';

const badgeVariants = {
  softCyan: 'bg-soft-cyan text-cyan-900 border border-cyan-200/50',
  cyan: 'bg-cyan text-white shadow-sm',
  dark: 'bg-dark text-white',
  grey: 'bg-light-grey text-neutral-800 border border-neutral-200/60',
  outline: 'bg-white border border-neutral-300 text-neutral-800',
  outlineCyan: 'bg-white/80 border border-cyan/40 text-cyan-800 backdrop-blur-sm',
};

const badgeSizes = {
  sm: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
  md: 'text-xs px-3.5 py-1.5 gap-2 font-medium',
  lg: 'text-sm px-4 py-2 gap-2.5 font-semibold',
};

export const Badge = ({
  children,
  variant = 'softCyan',
  size = 'md',
  dot = false,
  dotColor,
  icon,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full select-none transition-colors duration-200',
        badgeVariants[variant] || badgeVariants.softCyan,
        badgeSizes[size] || badgeSizes.md,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColor || (variant === 'cyan' ? 'bg-white' : 'bg-cyan')
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              dotColor || (variant === 'cyan' ? 'bg-white' : 'bg-cyan')
            )}
          />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
