/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rf: {
          darkGreen: '#0B5136',
          green: '#1f7a4d',
          lightGreen: '#e6f3ec',
          orange: '#FF9046',
          darkOrange: '#e0762f',
          cream: '#FFF9F5',
          dark: '#161e1b',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
