/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '4.25': '1.0625rem',
      },
      minWidth: {
        '50': '3.125rem',
      },
      height: {
        '4.25': '1.0625rem',
        '30': '7.5rem',
        '43.5': '10.875rem',
        '45': '11.25rem',
        '62': '15.5rem',
      },
      lineHeight: {
        '16': '4rem',
      },
      margin: {
        '7.5': '1.875rem',
      },
      spacing: {
        '35': '8.75rem',
      },
      colors: {
        'regal-gray': '#9499A0',
        'theme-color': '#ff9000',
      },
    },
  },
  plugins: [],
}