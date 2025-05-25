/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // fix: add slash before ** and remove extra slashes
    './src/app/page.{js,ts,jsx,tsx}', // page.tsx is a file, no need for /**/*
    './src/app/layout.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
