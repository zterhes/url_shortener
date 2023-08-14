const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          'cyan': '#29C7C7',
          'darkViolet': '#3B3054'
        },
        secondary: {
          'red': '#F46262'
        },
        neutral: {
          'gray': '#BFBFBF',
          'grayishViolet': '#9E9AA7',
          'veryDarkBlue': '#35323E',
          'veryDarkViolet': '#232127'
        }
      }
    },
  },
  plugins: [],
}

