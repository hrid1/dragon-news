import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Popins : ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui:{
    themes:[
      "garden", "dark"
    ]
  }
}

