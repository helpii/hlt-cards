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
        'aprenlud1': '#fdc17f',
        'aprenlud2': '#f12f86',
        'salainv1': '#ec7ffd',
        'salainv2': '#2d44f1',
        'pencomput1': '#fbc366',
        'pencomput2': '#f1322f',
      },
      backgroundImage: {
        galaxy: 'url("/background-galaxy.png")',
        helplit: 'url("/helplit.png")',
        'aprenlud': 'linear-gradient(180deg, #fdc17f, #f12f86)',
        'salainv': 'linear-gradient(180deg, #ec7ffd, #2d44f1)',
        'pen-comput': 'linear-gradient(180deg, #fbc366, #f1322f)',
      }
    },
  },
  plugins: [],
}
