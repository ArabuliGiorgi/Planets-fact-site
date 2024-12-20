/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '720px',
      'desktop': '1440px'
    },
    extend: {},
  },
  plugins: [],
}