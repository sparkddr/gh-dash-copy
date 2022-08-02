/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlue: "rgba(246,248,250)",
        darkgrey: "#24292F",
        textGrey: "#57606A",
        mediumGrey: "rgba(255,255,255,0.7)",
        borderGrey: "rgba(255,255,255,.15)",
        borderSummary: "#d0d7de",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
