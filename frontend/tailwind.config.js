/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'ssm': '320px',
      // => @media (min-width: 375px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {},
  },
  daisyui: {
    themes:[
      {
        main: {
          "primary": "#e91f1f",          
          "primary-content": "#000516",                    
          "secondary": "#365f00",                    
          "secondary-content": "#d4decd",                    
          "accent": "#00ec21",                    
          "accent-content": "#001300",                    
          "neutral": "#060400",                    
          "neutral-content": "#c5c4c1",                    
          "base-100": "#fafafa",                    
          "base-200": "#eeeeee",                    
          "base-300": "#b15555",                    
          "base-content": "#141615",                    
          "info": "#00abdf",                    
          "info-content": "#000b12",                    
          "success": "#008a00",                    
          "success-content": "#000700",                    
          "warning": "#ffb51c",                    
          "warning-content": "#160c00",                    
          "error": "#ec0029",                    
          "error-content": "#130001",          
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwindcss'),
  require('autoprefixer'),],
};