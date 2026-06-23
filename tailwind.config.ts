import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14161A',
        paper: '#F6F7F9',
        surface: '#FFFFFF',
        muted: '#5A6270',
        line: '#E3E6EB',
        accent: '#2E5BFF',
      },
      fontFamily: {
        display: ['General Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': 'clamp(2.75rem, 6vw, 5rem)',
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.4',
        relaxed: '1.6',
      },
      maxWidth: {
        prose: '720px',
        container: '1200px',
      },
      spacing: {
        gutter: 'clamp(1.5rem, 5vw, 3rem)',
        section: 'clamp(6rem, 12vw, 8rem)',
      },
    },
  },
  plugins: [],
}

export default config
