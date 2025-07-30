/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-pink-50', 'text-pink-900', 'text-pink-700', 'border-pink-300',
    'bg-green-50', 'text-green-900', 'text-green-700', 'border-green-300',
    'bg-yellow-50', 'text-yellow-900', 'text-yellow-700', 'border-yellow-300'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
