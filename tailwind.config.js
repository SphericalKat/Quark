const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // Media for now
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        background: "var(--background)",
        card: "var(--card)",
        inactive: "var(--inactive)",
        border: "var(--border)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
