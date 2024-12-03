/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      animation: {
        "spin-slowed": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

