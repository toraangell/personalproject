/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  lightMode: "class",
  theme: {
    extend: {
      
      colors: {
        'contrast': {
          '50': '#edf2f5', 
          '100': '#dfe6eb', 
          '200': '#b1c0cc', 
          '300': '#8598ab', 
          '400': '#44546e', 
          '500': '#151c2e', 
          '600': '#111729', 
          '700': '#0b1121', 
          '800': '#080d1c', 
          '900': '#040814', 
          '950': '#02040d'
      },
        'dust': {
          '50': '#f7f9fa', 
          '100': '#f2f4f5', 
          '200': '#e1e5e8', 
          '300': '#ced4d9', 
          '400': '#a9b1ba', 
          '500': '#8a929f', 
          '600': '#6f7b8f', 
          '700': '#4c5a75', 
          '800': '#313f5e', 
          '900': '#1c2847', 
          '950': '#0b142e'
      },
        'purpledull': {
          '50': '#f2f5f7', 
          '100': '#e4e8ed', 
          '200': '#c3cad6', 
          '300': '#a2aabd', 
          '400': '#676c8a', 
          '500': '#383857',
          '500-light': '#bbbbd3', 
          '600': '#2e2e4f', 
          '700': '#1f1f40', 
          '800': '#131333', 
          '900': '#0b0b26', 
          '950': '#05051a'
      },
        'purplevibrant': {
          '50': '#fafcff', 
          '100': '#f2f8ff', 
          '200': '#e0ecff', 
          '300': '#cfddff', 
          '400': '#abb7ff', 
          '500': '#8787ff', 
          '600': '#6e6ee6', 
          '700': '#4d4dbf', 
          '800': '#313199', 
          '900': '#1c1c73', 
          '950': '#0b0b4a'
      },
      }
    },
  },
  plugins: [],
}

//https://javisperez.github.io/tailwindcolorshades/?PurpleVibrant=8787ff&purpleDull=383857&Contrast=151C2E&Dust=8a929f