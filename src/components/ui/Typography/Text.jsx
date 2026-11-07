import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const textStyles = {
  lead: 'text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal',
  body: 'text-base text-neutral-600 leading-relaxed font-normal',
  small: 'text-sm text-neutral-500 leading-normal',
  xs: 'text-xs text-neutral-400 leading-normal',
  eyebrow: 'text-xs font-semibold uppercase tracking-widest text-cyan inline-block',
  quote: 'text-xl sm:text-2xl italic text-neutral-800 font-serif leading-snug',
};

const tagMap = {
  lead: 'p',
  body: 'p',
  small: 'p',
  xs: 'span',
  eyebrow: 'span',
  quote: 'blockquote',
};

export const Text = forwardRef(({
  as,
  variant = 'body',
  children,
  className,
  ...props
}, ref) => {
  const Component = as || tagMap[variant] || 'p';

  return (
    <Component
      ref={ref}
      className={cn(
        textStyles[variant] || textStyles.body,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export default Text;
