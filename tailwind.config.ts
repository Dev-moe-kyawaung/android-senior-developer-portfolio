import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
        dark: '#0f172a',
        light: '#f8fafc',
        burmese: '#1a365d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        burmese: ['Noto Sans Myanmar', 'sans-serif'],
      },
      spacing: {
        compact: '0.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
