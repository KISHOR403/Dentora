import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { buttonTap } from '@/utils/animations';
import { Loader2 } from 'lucide-react';

const buttonVariants = {
  // Primary brand cyan action
  primary: `
    bg-cyan text-white shadow-subtle
    hover:bg-cyan-600 hover:shadow-cyan-glow
    active:bg-cyan-700
    focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2
  `,
  // Soft cyan gentle secondary action
  soft: `
    bg-soft-cyan text-dark font-medium
    hover:bg-cyan-200/70 hover:text-cyan-900
    active:bg-soft-cyan-dark
    focus-visible:ring-2 focus-visible:ring-cyan/40
  `,
  // Luxury high-contrast black button
  dark: `
    bg-dark text-white
    hover:bg-dark-subtle hover:shadow-dark-float
    active:bg-neutral-800
    focus-visible:ring-2 focus-visible:ring-dark
  `,
  // Crisp outline button with soft hover
  outline: `
    bg-transparent border border-neutral-300 text-dark
    hover:border-cyan hover:bg-cyan-50 hover:text-cyan-700
    active:bg-cyan-100
    focus-visible:ring-2 focus-visible:ring-cyan/40
  `,
  // Ghost minimal button
  ghost: `
    bg-transparent text-dark
    hover:bg-light-grey hover:text-dark
    active:bg-neutral-200
  `,
  // Pure Cyan Outline
  outlineCyan: `
    bg-transparent border border-cyan/40 text-cyan-700
    hover:border-cyan hover:bg-soft-cyan/40
    active:bg-soft-cyan
  `,
};

const buttonSizes = {
  sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5 h-8',
  md: 'text-sm px-5 py-2.5 rounded-full gap-2 h-10',
  lg: 'text-base px-6 py-3.5 rounded-full gap-2.5 h-12 font-medium',
  xl: 'text-lg px-8 py-4 rounded-full gap-3 h-14 font-semibold',
};

export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  pill = true,
  animate = true,
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium transition-all duration-300 select-none
    disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
  `;

  const roundedClass = pill ? 'rounded-full' : 'rounded-xl';

  const combinedClasses = cn(
    baseClasses,
    roundedClass,
    buttonVariants[variant] || buttonVariants.primary,
    buttonSizes[size] || buttonSizes.md,
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-1" />
      ) : leftIcon ? (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">{leftIcon}</span>
      ) : null}

      <span className="truncate">{children}</span>

      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{rightIcon}</span>
      )}
    </>
  );

  if (animate && !disabled && !isLoading) {
    return (
      <motion.button
        ref={ref}
        type={type}
        whileTap={buttonTap}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={cn(combinedClasses, 'group cursor-pointer')}
        onClick={onClick}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={cn(combinedClasses, 'cursor-pointer')}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
