/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        bg: '#0b0d10',
        card: '#12151a',
        border: '#1f2937',
        accent: '#14b8a6',
      },
    },
  },
  plugins: [],
};
