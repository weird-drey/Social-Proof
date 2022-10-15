/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan'],
      },
    },
  },
  plugins: [],
}
