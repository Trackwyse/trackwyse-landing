/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: "#FDF8F4",
        primary: {
          100: "#2C2C2C",
          200: "#111215"
        },
        gray: {
          100: '#F6F3F3',
          200: '#DBDBDB',
          300: '#CCCCCC',
          400: '#8B9396',
        },
      }
    },
  },
  plugins: [],
}