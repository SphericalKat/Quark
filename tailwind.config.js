const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
