/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#800000",
        pastelBlue: "#E3F2FD",
      },
    },
  },
  plugins: [],
}