/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
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
          "primary": "#00c6ff",          
          "secondary": "#7c9b00",                 
          "accent": "#3e00ff",                 
          "neutral": "#0a1a24",                 
          "base-100": "#fffef9",                 
          "info": "#00a3e3",                 
          "success": "#00efc5",                 
          "warning": "#f18b00",                 
          "error": "#f3576d",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwindcss'),
  require('autoprefixer'),],
};