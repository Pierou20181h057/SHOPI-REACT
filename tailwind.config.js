/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'card': '0 25px 50px -15px rgb(0 0 0 / 0.25);'
      }
    },
  },
  plugins: [],
}

