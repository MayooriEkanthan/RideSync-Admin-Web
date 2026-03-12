/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',      // Sri Lankan Bus Red
        pastelBlue: '#E3F2FD',  // Official Light Blue
      },
    },
  },
  plugins: [],
}