/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero-pattern': "url('./src/assets/img1.png')",
        'happy-customer': "url('./src/assets/happy-client.jpg')",
      },
      colors :{
        'primary': '#2AAFC0',
        'light': '#757575',
      }

    },
  },
  plugins: [],
}