/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-az': '#0c234b',
        'orange-dark': '#b95915',
        'orange-light': '#e56020',
        'purp': '#27235c'
      },
      fontFamily: {
        "montserrat": "var(--font-montserrat)",
        "rye": "var(--font-rye)"
      }
    },
  },
  plugins: [],
}

