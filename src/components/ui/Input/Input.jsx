import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export const Input = forwardRef(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  type = 'text',
  id,
  ...props
}, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3.5 text-neutral-400 pointer-events-none flex items-center">
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            'w-full rounded-2xl bg-light-grey border border-neutral-200/80 px-4 py-3 text-sm text-dark placeholder:text-neutral-400 transition-all duration-200',
            'focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none',
            leftIcon && 'pl-11',
            rightIcon && 'pr-11',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/15',
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3.5 text-neutral-400 pointer-events-none flex items-center">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p className="text-xs text-red-500 mt-1 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-neutral-500 mt-1">{helperText}</p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
