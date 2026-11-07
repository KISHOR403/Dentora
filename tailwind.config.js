/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Dental Palette
        cyan: {
          DEFAULT: '#24AEC5',
          50: '#F0FBFC',
          100: '#DDF5F7', // Soft cyan
          200: '#BFEBF0',
          300: '#8FDDE6',
          400: '#52C7D6',
          500: '#24AEC5', // Primary Cyan
          600: '#1D92A6',
          700: '#1A7485',
          800: '#1B5E6B',
          900: '#1A4F59',
          950: '#0C333B',
        },
        'soft-cyan': {
          DEFAULT: '#DDF5F7',
          light: '#EEFAFB',
          dark: '#C8EEF2',
        },
        'light-grey': {
          DEFAULT: '#F5F5F5',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#E0E0E0',
          400: '#CCCCCC',
        },
        dark: {
          DEFAULT: '#111111', // True Black tone
          subtle: '#1C1C1C',
          muted: '#2E2E2E',
          card: '#181818',
        },
        surface: {
          white: '#FFFFFF',
          muted: '#F5F5F5',
          soft: '#F8FCFC',
          cyanTint: '#EDFAF8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 2px 8px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -15px rgba(36, 174, 197, 0.12), 0 4px 16px -2px rgba(0, 0, 0, 0.04)',
        'cyan-glow': '0 0 25px -5px rgba(36, 174, 197, 0.35)',
        'cyan-glow-lg': '0 0 50px -10px rgba(36, 174, 197, 0.45)',
        'dark-float': '0 25px 50px -12px rgba(17, 17, 17, 0.35)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
