/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
         "3xl" :'0px_1px_22px rgba(0, 0, 0, 0.11)'
      },
      colors: {
        'peach': '#F64F59',
      },
    },
  },
  plugins: [],
}
