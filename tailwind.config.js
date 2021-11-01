
module.exports = {


  purge: ['./public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: { 
      height: {
        '500': '500px',
        '726': '726px',
        '150/100': '150%',
        '90vh': '90vh',
        '7-30':'7-30',
        '365':'365px'
      },
      rotate:{
        360:'360deg',
      },
      padding:{
        '4/100': '4%',
        '3/12': '12px',
        '4/16': '16px',
        '7/30': '30px',
        '5/20': '20px',
      },
      translate:{
        '125/100': '125%',
        '18': '72px',
        '7/30':'29px',
        '11/46':'46px'

      },
      borderWidth:{
        '1': '1px'
      },
      content:{
        '1':"''",
        '2':"''''",
        '3': "'<'",
        '4': "'>'"
      },
      margin: {
        '5':'20px',
        '5/20':'20px',
        '2/10':'10px'
      },
      fontSize:{
        '18':'18px',
      },
      width:{
        '110':'110px',
        '7-30':'30px',
        '26':'106px',
        '360':'360px',
        '400':'400px',
        '500':'500px',
        '90vw':'90vw',
        '40vw':'40vw',
      },
      leading:{
        '42':'42px',
      }
    }
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus',],
      display: ['hover','group-hover','focus'],
      marginRight: ['last'],
      appearance: ['hover', 'focus'],
      margin:['first', 'last'],
      border:['acive','hover','focus','target'],
      borderWidth: ['first'], 
      borderColor: ['first'], 
      opacity: ['disabled'],
      pointerEvents: ['hover', 'focus'],
      padding:['responsive']
    },

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}
