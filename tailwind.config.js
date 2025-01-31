/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'],
    },
    extend: {
      colors: {
        primary: '#8E1616',
        secondary: '#D84040',
        light: '#FFFFFF',
        semilight: '#EEEEEE',
        semidark: '#1D1616',
        dark: '#000000',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}