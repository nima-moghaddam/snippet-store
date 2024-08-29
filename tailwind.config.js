/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8f9fb",
        secondary: "#c80fa0",
        gray: "#65758c",
        "gray-dark": "#3b4560",
        "gray-light": "#a7a7ab",
        "gray-lighter": "#ced2d4",
        green: "#acdc3c",
        red: "#b81f36",
        blue: "#1f9cfe",
        "semi-transparent-white": "hsla(0, 0%, 100%, 0.8)",
      },
      boxShadow: {
        "3xl":
          "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
        card: "0 20px 27px 0 rgba(0, 0, 0, .05)",
        icon: "0 .3125rem .625rem 0 rgba(0,0,0,.12)",
        navbar:
          "inset 0 0 1px 1px hsla(0, 0%, 100%, .9), 0 20px 27px 0 rgba(0, 0, 0, .05)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(310deg, #7928ca, #ff0080)",
        "border-gradient":
          "linear-gradient(90deg, transparent, rgba(0, 0, 0, .4), transparent)",
      },
      fontSize: {
        xl: "1.25rem",
        lg: "1rem",
        base: ".875rem",
        sm: ".75rem",
      },
      fontWeight: {
        bolder: "700",
        bold: "600",
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
      lg: "1050px",
      xl: "1224px",
      "2xl": "1300px",
      "3xl": "1400px",
    },
  },
  plugins: [],
};
