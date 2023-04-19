/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      keyframes:{
        welcome: {
          '0%':{opacity: 0},
          '100%':{opacity: 1}
        },
        bobside: {
          '0%':{transform: 'translateX(0)'},
          '50%':{transform: 'translateX(200px)'},
          '100%':{transform: 'translateX(0)'},
        }
      },
      
      animation: {
        welcome: 'welcome 2s ease-in-out 1'
      },
    }
  },
  plugins: [require("daisyui"),],
  daisyui: {
    themes:["dark", "light"]
  }

}
