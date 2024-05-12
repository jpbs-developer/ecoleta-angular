/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: "#F0F0F5",
        titles: "#322153",
        texts: "#6C6C80",
        green: "#34CB79",
        "green-100": "#2FB86E",
      },
    },
  },
  plugins: [],
};
