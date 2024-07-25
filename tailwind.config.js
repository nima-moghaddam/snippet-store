/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0e2432",
        dark_lighter: "#373c42",
        blue: "#339ae0",
        ivory: "#fefefe",
        pink: "#ff4181",
        gray: "#dfd1c5",
        orange: "#f9cd61"
      }
    },
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1224px",
      "2xl": "1200px",
      "3xl": "1300px"
    }
  },
  plugins: []
}


