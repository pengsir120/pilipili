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
      zIndex: {
        '10010': '10010'
      },
      backgroundImage: {
        'close-icon': 'url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/close.a35a1809.svg)' 
      },
      translate: {
        '2/-4': '-50%'
      }
    },
  },
  plugins: [],
}