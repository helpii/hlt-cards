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
        'aprenlud1': '#fbc366',
        'aprenlud2': '#f27d54',
        'salainv1': '#74bcd8',
        'salainv2': '#2e95be',
        'pencomput1': '#74d888',
        'pencomput2': '#2cb865',
      },
      backgroundImage: {
        helplit: 'url("/helplit.png")',
        helpii_sm: 'url("/helpii_sm.png")',
        'aprenlud': 'linear-gradient(180deg, #fbc366, #f27d54)',
        'salainv': 'linear-gradient(180deg, #74bcd8, #2e95be)',
        'pen-comput': 'linear-gradient(180deg, #74d888, #2cb865)',
      }
    },
  },
  plugins: [],
}
