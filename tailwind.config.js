/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/image/background-image.png')",
      },
      minHeight: {
        60: "80vh",
      },
    },
  },
  plugins: [],
};
