/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '450px',
      'xs': '370px',
      'lg': '200px',
      'md': '100px',
      'tablet': '500px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        'main-orange' : '#F64F59',
      },
      fontFamily: {
          poppins : 'Poppins',
      },
    
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
