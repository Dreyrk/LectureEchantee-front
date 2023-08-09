/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: {
        primary: "#27243A",
        secondary: "#4E4FEB",
        tertiary: "#242222",
      },
      light: {
        primary: "#EEF0F2",
        secondary: "#FFFFFF",
        tertiary: "#F4F4F6",
      },
      "secondary-plus": "#2C2CA1",
      black: "#000000",
      red: "#e01e37",
    },
    extend: {},
  },
  plugins: [],
};
