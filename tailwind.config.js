/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#02162B",
        secondary: "#70BA65",
        accent: "#919ca1",
        neutral: "#191D24",
        "base-100": "#ffffff",
        info: "#02162B",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#E30F0F",
      },
    },
  ],
  plugins: [require("daisyui")],
};
