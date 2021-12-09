const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        "light-black": "#0C0C0C",
        "dark-gray": "#767676",
        "light-gray": "#CCCCCC",
        "lighter-gray": "#F5F5F5",
				"nav-light": "#FCFCFCCC",
				"nav-dark": "#181818CC",
				"light-border": "#18181840",
				"dark-border": "#FFFFFF66",
				"surface-dark": "#181818",
				"surface-light": "#FFFFFF"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
