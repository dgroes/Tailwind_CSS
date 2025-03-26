/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { //  Clave contenedora!
        'verde-hoja': '#9fc22c',
      },
      width: {
        '42': '170px'
      },
      screens: {
        'tablet': '900px'
      }
    },
  },
  plugins: [],
}

