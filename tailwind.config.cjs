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
        'aprenlud1': '#fc4a91',
        'aprenlud2': '#4afcb6',
        'salainv1': '#2d44f1',
        'salainv2': '#ec7ffd',
        'pencomput1': '#42abfa',
        'pencomput2': '#ffca5c',
      },
      backgroundImage: {
        galaxy: 'url("/background-galaxy.png")',
        helplit: 'url("/helplit.png")',
        'aprenlud': 'linear-gradient(180deg, #fc4a91, #4afcb6)',
        'salainv': 'linear-gradient(180deg, #2d44f1, #ec7ffd)',
        'pen-comput': 'linear-gradient(180deg, #42abfa, #ffca5c)',
      }
    },
  },
  plugins: [],
}
