/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0e2432",
        dark_lighter: "#373c42",
        ivory: "#fefefe",
        pink: "#ff4181",
        gray: "#dfd1c5",
        orange: "#f9cd61",
        //-------
        primary: "#f8f9fb",
        secondary: "#c80fa0",
        "font-dark": "#3b4560",
        "font-normal": "#65758c",
        "font-light": "#a7a7ab",
        "font-ultra-light": "#ced2d4",
        green: "#acdc3c",
        red: "#b81f36",
        blue: "#1f9cfe",
      },
      boxShadow: {
        "3xl":
          "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
        card: "0 20px 27px 0 rgba(0, 0, 0, .05)",
        icon: "0 .3125rem .625rem 0 rgba(0,0,0,.12)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(310deg, #7928ca, #ff0080)",
        "border-gradient":
          "linear-gradient(90deg, transparent, rgba(0, 0, 0, .4), transparent)",
      },
      fontSize: {
        normal: ".875rem",
        small: ".75rem",
        h1: "1.25rem",
        h2: "1rem",
      },
      fontWeight: {
        bold: "600",
        bolder: "700",
        light: "400",
      },
      borderRadius: {
        card: "1rem",
        icon: ".5rem",
      },
    },
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "1100px",
      xl: "1224px",
      "2xl": "1200px",
      "3xl": "1300px",
    },
  },
  plugins: [],
};
