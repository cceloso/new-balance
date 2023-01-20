/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nb-red': '#CE0A2D'
      }
    },
    fontFamily: {
      'hero-heading': ['Playfair Display', 'serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
