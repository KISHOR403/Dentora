/**
 * Global Design System Constants & Tokens
 * Source of truth for theme values used across components and animations.
 */

export const COLORS = {
  // Primary Palette
  cyan: {
    DEFAULT: '#24AEC5',
    hover: '#1D92A6',
    active: '#1A7485',
    light: '#52C7D6',
    soft: '#DDF5F7',
    subtle: '#EEFAFB',
    tint: 'rgba(36, 174, 197, 0.1)',
    glow: 'rgba(36, 174, 197, 0.35)',
  },
  softCyan: {
    DEFAULT: '#DDF5F7',
    light: '#EEFAFB',
    dark: '#C7EFF2',
  },
  lightGrey: {
    DEFAULT: '#F5F5F5',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EBEBEB',
    300: '#E0E0E0',
    400: '#CCCCCC',
  },
  black: {
    DEFAULT: '#111111',
    surface: '#1A1A1A',
    muted: '#2A2A2A',
    border: '#333333',
  },
  white: '#FFFFFF',

  // Status & Utility Colors
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#24AEC5',
  },
};

export const TYPOGRAPHY = {
  fonts: {
    sans: '"Plus Jakarta Sans", system-ui, sans-serif',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  scale: {
    display: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]',
    h1: 'text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]',
    h2: 'text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]',
    h3: 'text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.2]',
    h4: 'text-xl sm:text-2xl tracking-tight leading-[1.25]',
    lead: 'text-lg sm:text-xl text-neutral-600 leading-relaxed',
    body: 'text-base text-neutral-600 leading-relaxed',
    small: 'text-sm text-neutral-500 leading-normal',
    eyebrow: 'text-xs font-semibold tracking-widest uppercase text-cyan',
  },
};

export const TRANSITIONS = {
  luxury: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  fast: 'all 0.2s ease-in-out',
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
