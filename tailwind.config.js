/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueGray:{
          100 : '#c7c4c4'
        },
        superRed:{
          100 : '#bd1515'
        },
        gray: {
          100 : '#577fcc',
          200 : '#4e72b7',
          300 : '#4565a3',
            400 : '#3c5990',
            500 : '#334c7c',
            600 : '#2a4069',
            700 : '#213456',
            800 : '#182743',
            900 : '#0f1b2f',
        },
        purple: {
          100 : '#eadabb',
          200 : '#e5d1ab',
          300 : '#e0c89a',
          400 : '#dabf8a',
            500 : '#d5b67a',
            600 : '#d0ad69',
          700 : '#CCA457',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
