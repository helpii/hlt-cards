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
        'HELP_weak': '#fbc366',
        'HELP_stronk': '#f27d54',
        'ALUD_weak': '#d240ef',
        'ALUD_stronk': '#8a51cc',
        'SINV_weak': '#45e2a0',
        'SINV_stronk': '#2cb865',
        'PCOM_weak': '#74bcd8',
        'PCOM_stronk': '#2e95be',
      },
      backgroundImage: {
        helplit_logo: 'url("/helplit.png")',
        helpii_sm: 'url("/helpii_sm.png")',
        helplit_sm: 'url("/helplit_sm.png")',
        'HELP': 'linear-gradient(180deg, #fbc366, #f27d54)',
        'ALUD': 'linear-gradient(180deg, #d240ef, #8a51cc)',
        'SINV': 'linear-gradient(180deg, #45e2a0, #2cb865)',
        'PCOM': 'linear-gradient(180deg, #74bcd8, #2e95be)',
      }
    },
  },
  plugins: [],
}
