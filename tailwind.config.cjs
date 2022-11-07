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
        'helplit1': '#fbc366',
        'helplit2': '#f27d54',
        'aprenlud1': '#b754f2',
        'aprenlud2': '#d240ef',
        'salainv1': '#74d888',
        'salainv2': '#2cb865',
        'pencomput1': '#74bcd8',
        'pencomput2': '#2e95be',
      },
      backgroundImage: {
        helplit_logo: 'url("/helplit.png")',
        helpii_sm: 'url("/helpii_sm.png")',
        helplit_sm: 'url("/helplit_sm.png")',
        'helplit': 'linear-gradient(180deg, #fbc366, #f27d54)',
        'aprenlud': 'linear-gradient(180deg, #b754f2, #d240ef)',
        'salainv': 'linear-gradient(180deg, #74d888, #2cb865)',
        'pen-comput': 'linear-gradient(180deg, #74bcd8, #2e95be)',
      }
    },
  },
  plugins: [],
}
