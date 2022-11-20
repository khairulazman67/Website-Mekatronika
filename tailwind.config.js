/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:{
          900 : '#0096D1',
          800 : '#BB4551',
          700 : '#BE6F76',  
          600 : '#EDA9AF'
        },
        secondary :{
          900 : '#8DBF8B',
          800 : '#B3DBB1',
          700 : '#CAE7C9',  
          600 : '#E1F6E0'
        },
        yellow :{
          900 : '#F09E56',
          800 : '#FADC9C',
          700 : '#E7D6AC',  
          600 : '#FCF1D8'
        }
      },
    },
  },
  plugins: [],
}
