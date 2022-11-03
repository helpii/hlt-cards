/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors:{
      },
      backgroundImage: {
        galaxy: 'url("/background-galaxy.png")',
        helplit: 'url("/helplit.png")',
        'apren-lud': 'linear-gradient(180deg, #9572FC, #eeeeee)',
        'sala-inv': 'linear-gradient(180deg, #7c32fd, #eeeeee)',
        'pen-comput': 'linear-gradient(180deg, #4ab8FC, #eeeeee)',
      }
    },
  },
  plugins: [],
}
