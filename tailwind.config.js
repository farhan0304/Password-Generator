/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        color1: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"
      }
    },
  },
  plugins: [],
}

