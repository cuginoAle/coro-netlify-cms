const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font)', ...fontFamily.sans],
      },
      spacing: {
        '0.2em': '0.2em',
        '0.4em': '0.4em',
        '0.5em': '0.5em',
        '1em': '1em',
      },
      borderWidth: {
        '0.1em': '0.1em',
        '0.2em': '0.2em',
        '0.4em': '0.4em',
      },
    },
  },
  plugins: [],
};
