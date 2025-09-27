import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Medical/Healthcare Color Palette
      colors: {
        // Primary Medical Blues
        medical: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Primary medical blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        
        // Healthcare Teal/Cyan
        healthcare: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Primary healthcare teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        
        // Life/Success Green
        life: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Primary life green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        
        // Warning/Alert Orange
        alert: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary alert orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        
        // Critical/Error Red
        critical: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Primary critical red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        
        // Neutral Grays
        neutral: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        
        // Background colors
        background: {
          primary: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
          dark: '#0a0a0a',
          'dark-secondary': '#171717',
        },
        
        // Text colors
        text: {
          primary: '#171717',
          secondary: '#525252',
          tertiary: '#737373',
          inverse: '#ffffff',
          muted: '#a3a3a3',
        },
        
        // Border colors
        border: {
          light: '#e5e5e5',
          medium: '#d4d4d4',
          dark: '#a3a3a3',
        }
      },
      
      // Typography Scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Spacing Scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      
      // Box Shadows
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'medical': '0 4px 20px 0 rgb(14 165 233 / 0.15)',
        'healthcare': '0 4px 20px 0 rgb(20 184 166 / 0.15)',
        'glow-medical': '0 0 20px rgb(14 165 233 / 0.3)',
        'glow-healthcare': '0 0 20px rgb(20 184 166 / 0.3)',
      },
      
      // Animation Durations
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      
      // Animation Functions
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'medical': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'smooth': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      
      // Custom Keyframes
      keyframes: {
        // Fade animations
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        
        // Slide animations
        'slide-in-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        
        // Scale animations
        'scale-up': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-down': {
          '0%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        
        // Pulse animations
        'pulse-medical': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(14 165 233 / 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgb(14 165 233 / 0)' },
        },
        'pulse-healthcare': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(20 184 166 / 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgb(20 184 166 / 0)' },
        },
        
        // Rotate animations
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        
        // Float animation
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        
        // Shimmer animation
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      
      // Animation Classes
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'slide-in-up': 'slide-in-up 0.5s ease-out',
        'slide-in-down': 'slide-in-down 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'scale-up': 'scale-up 0.3s ease-out',
        'scale-down': 'scale-down 0.3s ease-out',
        'pulse-medical': 'pulse-medical 2s infinite',
        'pulse-healthcare': 'pulse-healthcare 2s infinite',
        'rotate-slow': 'rotate-slow 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      // Gradient Stops
      gradientColorStops: {
        'medical-start': '#0ea5e9',
        'medical-end': '#14b8a6',
        'healthcare-start': '#14b8a6',
        'healthcare-end': '#22c55e',
      },
      
      // Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [
    // Add custom plugin for hover effects
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Medical Button Styles
        '.btn-medical': {
          '@apply bg-medical-500 text-white px-6 py-3 rounded-lg font-medium': {},
          '@apply hover:bg-medical-600 hover:shadow-medical transform hover:scale-105': {},
          '@apply transition-all duration-300 ease-medical': {},
          '@apply focus:outline-none focus:ring-4 focus:ring-medical-500/30': {},
        },
        
        '.btn-medical-outline': {
          '@apply border-2 border-medical-500 text-medical-500 px-6 py-3 rounded-lg font-medium': {},
          '@apply hover:bg-medical-500 hover:text-white hover:shadow-medical transform hover:scale-105': {},
          '@apply transition-all duration-300 ease-medical': {},
          '@apply focus:outline-none focus:ring-4 focus:ring-medical-500/30': {},
        },
        
        // Healthcare Button Styles
        '.btn-healthcare': {
          '@apply bg-healthcare-500 text-white px-6 py-3 rounded-lg font-medium': {},
          '@apply hover:bg-healthcare-600 hover:shadow-healthcare transform hover:scale-105': {},
          '@apply transition-all duration-300 ease-medical': {},
          '@apply focus:outline-none focus:ring-4 focus:ring-healthcare-500/30': {},
        },
        
        '.btn-healthcare-outline': {
          '@apply border-2 border-healthcare-500 text-healthcare-500 px-6 py-3 rounded-lg font-medium': {},
          '@apply hover:bg-healthcare-500 hover:text-white hover:shadow-healthcare transform hover:scale-105': {},
          '@apply transition-all duration-300 ease-medical': {},
          '@apply focus:outline-none focus:ring-4 focus:ring-healthcare-500/30': {},
        },
        
        // Card Styles
        '.card': {
          '@apply bg-white rounded-xl shadow-md border border-border-light': {},
          '@apply hover:shadow-xl hover:-translate-y-1 transition-all duration-300': {},
        },
        
        '.card-medical': {
          '@apply bg-white rounded-xl shadow-md border border-border-light': {},
          '@apply hover:shadow-medical hover:-translate-y-2 transition-all duration-500': {},
          '@apply hover:border-medical-200': {},
        },
        
        '.card-healthcare': {
          '@apply bg-white rounded-xl shadow-md border border-border-light': {},
          '@apply hover:shadow-healthcare hover:-translate-y-2 transition-all duration-500': {},
          '@apply hover:border-healthcare-200': {},
        },
        
        // Interactive Elements
        '.interactive-hover': {
          '@apply cursor-pointer transition-all duration-300': {},
          '@apply hover:scale-105 hover:shadow-lg': {},
        },
        
        '.glow-on-hover': {
          '@apply transition-all duration-300': {},
          '&:hover': {
            '@apply shadow-glow-medical': {},
          },
        },
        
        // Text Effects
        '.text-gradient-medical': {
          '@apply bg-gradient-to-r from-medical-500 to-healthcare-500 bg-clip-text text-transparent': {},
        },
        
        '.text-gradient-healthcare': {
          '@apply bg-gradient-to-r from-healthcare-500 to-life-500 bg-clip-text text-transparent': {},
        },
        
        // Loading States
        '.loading-shimmer': {
          '@apply bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200': {},
          'background-size': '200% 100%',
          '@apply animate-shimmer': {},
        },
        
        // Glassmorphism
        '.glass': {
          '@apply bg-white/10 backdrop-blur-md border border-white/20': {},
        },
        
        '.glass-medical': {
          '@apply bg-medical-500/10 backdrop-blur-md border border-medical-500/20': {},
        },
      };
      
      addUtilities(newUtilities);
    },
  ],
  darkMode: 'class',
};

export default config;