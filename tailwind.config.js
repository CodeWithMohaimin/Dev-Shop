/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/image/background-image.png')",
        star: "url('/src/image/star.png')",
        market: "url('/src/image/market.png')",
      },
      minHeight: {
        20: "20vh",
        30: "30vh",
        40: "40vh",
        50: "50vh",
        60: "80vh",
      },
    },
  },
  plugins: [],
};
