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
          100: "#484848",
          200: "#111215"
        },
        gray: {
          100: '#F6F3F3',
          200: '#DBDBDB',
          300: '#CCCCCC',
          400: '#8B9396',
        },
      },
      screens: {
        "3xl": "1792px"
      }
    },
  },
  plugins: [],
}