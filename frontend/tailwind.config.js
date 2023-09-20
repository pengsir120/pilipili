/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '30': '7.5rem',
        '45': '11.25rem',
        '62': '15.5rem',
      },
      spacing: {
        '35': '8.75rem',
      }
    },
  },
  plugins: [],
}