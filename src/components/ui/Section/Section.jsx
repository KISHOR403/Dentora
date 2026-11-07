import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Container } from '@/components/ui/Container';

const backgroundVariants = {
  white: 'bg-white text-dark',
  grey: 'bg-light-grey text-dark',
  softCyan: 'bg-soft-cyan/35 text-dark',
  dark: 'bg-dark text-white selection:bg-cyan selection:text-white',
  subtleGradient: 'bg-gradient-to-b from-white via-soft-cyan/20 to-white text-dark',
  glowGradient: 'bg-gradient-to-b from-white via-light-grey to-white text-dark',
};

const paddingVariants = {
  none: 'py-0',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
};

export const Section = forwardRef(({
  children,
  as: Component = 'section',
  bg = 'white',
  spacing = 'lg',
  containerSize = 'default',
  withContainer = true,
  className,
  id,
  ...props
}, ref) => {
  const content = withContainer ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Component
      ref={ref}
      id={id}
      className={cn(
        'relative w-full overflow-hidden transition-colors duration-300',
        backgroundVariants[bg] || backgroundVariants.white,
        paddingVariants[spacing] || paddingVariants.lg,
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
});

Section.displayName = 'Section';

export default Section;
