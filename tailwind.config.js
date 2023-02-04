/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      display: '"Bellefair", serif',
      body: '"Barlow", sans-serif',
      "body-alt": '"Barlow Condensed", sens-serif',
    },
    fontSize: {
      base: "18px",
      h1: "8.34rem",
      h2: "5.55rem",
      h3: "3.1rem",
      h4: "1.78rem",
      h5: "1.56rem",
    },
    colors: {
      black: "#0B0D17",
      white: "#FFFFFF",
      purple: "#D0D6F9",
      transparant: "rgba(255, 255, 255, 0.04)",
    },
    extend: {},
  },
  plugins: [],
};
