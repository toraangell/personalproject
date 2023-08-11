/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'purple': {
          50: '#fcfaff', 
          100: '#f8f2ff', 
          200: '#ece0ff', 
          300: '#ddcfff', 
          400: '#b7abff', 
          500: '#8787ff', 
          600: '#6e6ee6', 
          700: '#4d4dbf', 
          800: '#313199', 
          900: '#1c1c73', 
          950: '#0b0b4a'
      }
      }
    },
  },
  plugins: [],
}

