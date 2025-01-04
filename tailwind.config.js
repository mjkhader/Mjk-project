/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors: {
        primaryColor: '#fc5d66',  // 
        secondaryColor: '#ffc05a',  // 
        lightColor: '#f9fafb',  // 
        darkColor: '#272d35',  // 
      },

      fontFamily:{
        sans: ['Open sans','sans-serif']
      },
    },
  },
  plugins: [],
}

