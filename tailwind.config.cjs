/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'hero-heading': ['Playfair Display', 'serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
