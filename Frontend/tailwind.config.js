/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "rgb(37, 175, 37)",
        color2: "rgb(24, 24, 58)",
        color3:"rgba(4, 241, 64, 0.781)"
    }
    },
  },
  plugins: [],
}

