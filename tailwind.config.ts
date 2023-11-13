import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'steam-primary': 'rgb(23 29 37)',
        'steam-secondary': {
          DEFAULT: 'rgb(36 40 47)',
          400: 'rgb(36 39 44)',
          300: 'rgb(39 43 51)',
          200: 'rgb(62 64 71)'
        },
        'steam-tertiary': 'rgb(46 51 60)',
        'steam-accent-1': 'rgb(139 146 154)',
        'steam-accent-2': 'rgb(235 235 235)',
        'steam-accent-3': {
          DEFAULT: 'rgb(92 126 16)',
          600: 'rgb(119 162 14)',
          500: 'rgb(154 203 23)',
          300: 'rgb(207 241 101)'
        },
        'steam-accent-4': {
          DEFAULT: 'rgb(25 153 255)',
          500: 'rgb(40 177 255)',
          300: 'rgb(65, 150, 212)',
        },
        'steam-accent-5': 'rgb(50 58 75)',
        'steam-accent-6': 'rgb(62 78 105)',
        'steam-accent-7': 'rgb(88 111 150)',
        'steam-accent-8': {
          DEFAULT: 'rgb(66 194 55)',
          light:  'rgb(87 203 42)'
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
