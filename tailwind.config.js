const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // Define dark mode specific colors
      backgroundColor: {
        dark: '#1a202c',
        light: '#f7fafc',
      },
      textColor: {
        dark: '#f7fafc',
        light: '#1a202c',
      },
    },
  },
  plugins: [],
});