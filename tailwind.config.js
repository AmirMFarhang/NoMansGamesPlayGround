/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'primary': '#240436',
          'maintext': '#ffffff',
          'secondary': '#580088',

      },
      fontFamily: {
          'Wagner': ['WagnerModern', 'sans-serif'],
      },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {},
  },
  plugins: [],
}