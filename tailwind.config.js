/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'markazi-text': ['Markazi Text', 'serif'],
    },
    extend: {
      colors: {
        'nota-blue': '#212342',
        'nota-black': '#373737',
        'nota-white': '#FCF6E8',
        'nota-peach': '#FECCB3',
        'nota-yellow': '#FEC447',

      }
    },
  },
  plugins: [],
}

