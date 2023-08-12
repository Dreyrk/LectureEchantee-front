/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: {
        primary: "var(--dark-primary)",
        secondary: "var(--dark-secondary)",
        tertiary: "var(--dark-tertiary)",
      },
      light: {
        primary: "var(--light-primary)",
        secondary: "var(--light-secondary)",
        tertiary: "var(--light-tertiary)",
      },
      "secondary-plus": "var(--secondary-plus)",
      black: "#000000",
      red: "#e01e37",
    },
    extend: {},
  },
  plugins: [],
};
