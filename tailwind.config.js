/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary-color)",
        btnbg: "var(--transparent-bg)",
        inputbg: "var(--input-bg)",
        activebtnbg: "var(--active-transparent-bg)",
      },
      textColor: {
        tertiary: "var(--tertiary-color)",
        secondary: "var(--secondary-color)",
      },
      fontFamily: {
        barlow: ["Barlow", "Inter", "sans-serif"],
        barlowCon: ["Barlow Condensed", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

