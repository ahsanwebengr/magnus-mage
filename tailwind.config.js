/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3949AB',
        'primary-light': '#6F74DD',
        'primary-border': '#D0D0D0',
        'primary-color': '#828282'

      }
    },
  },
  plugins: [],
};