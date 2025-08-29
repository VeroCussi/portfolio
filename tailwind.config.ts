import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0D10',
          light: '#F8FAFC'
        },
        'ink-2': {
          DEFAULT: '#141820',
          light: '#F1F5F9'
        },
        grid: {
          DEFAULT: '#1E293B',
          light: '#E2E8F0'
        },
        paper: {
          DEFAULT: '#F8FAFC',
          light: '#0F172A'
        },
        lime: {
          DEFAULT: '#22C55E',
          light: '#15803D'
        },
        violet: {
          DEFAULT: '#9333EA',
          light: '#7C3AED'
        },
        coral: {
          DEFAULT: '#FB923C',
          light: '#EA580C'
        },
        cyan: {
          DEFAULT: '#06B6D4',
          light: '#0891B2'
        },
        // Custom theme colors
        theme: {
          DEFAULT: 'var(--paper)',
          secondary: 'var(--ink-2)',
        },
        primary: {
          DEFAULT: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
        },
      },
      backgroundColor: {
        theme: 'var(--paper)',
        'theme-secondary': 'var(--ink-2)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
      },
      borderColor: {
        theme: 'var(--border)',
      },
      backgroundImage: {
        'retro-radial': 'radial-gradient(circle at 20% 10%, rgba(147,51,234,.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(6,182,212,.18), transparent 40%)',
        'retro-linear': 'linear-gradient(135deg, rgba(34,197,94,.25), rgba(251,146,60,.18))',
      },
      boxShadow: {
        glow: '0 0 10px rgba(147,51,234,.4), 0 0 30px rgba(6,182,212,.25)',
        'glow-light': '0 0 10px rgba(124,58,237,.6), 0 0 30px rgba(8,145,178,.4)',
        card: '0 12px 40px -12px rgba(0,0,0,.45)',
        'card-light': '0 12px 40px -12px rgba(0,0,0,.15)',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(1px,-1px)' },
          '40%': { transform: 'translate(-1px,1px)' },
          '60%': { transform: 'translate(1.5px,0.5px)' },
          '80%': { transform: 'translate(-1px,-0.5px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cursor: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        glitch: 'glitch 2.2s ease-in-out infinite alternate',
        scanline: 'scanline 8s linear infinite',
        type: 'type 3s steps(30, end) 1 normal both',
        cursor: 'cursor 1s step-end infinite',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

export default config
