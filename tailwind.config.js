/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   extend:{
      color: {
        'citrone-red' : '#f64f59',
        'ae-bg' : '#FBFBFB',
        'chat-color' : '#f1f1f1' ,
        'event-color' : '#fff1f1',
        'event-row' : '#F6F6F6'
      
      },
      fontFamily: {
        poppins : 'Poppins',
      },
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
