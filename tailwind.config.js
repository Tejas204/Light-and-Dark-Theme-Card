/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg-light-color"      :   "var(--bg-light-color)",
        "bg-dark-color"       :   "var(--bg-dark-color)",
        "bg-card-light-color" :   "var(--bg-card--light-color)",
        "bg-card-dark-color"  :   "var(--bg-card--dark-color)",
        "bg-text-light-color" :   "var(--bg-text--light-color)",
        "bg-text-dark-color"  :   "var(--bg-text--dark-color)",
        "title-light-color"   :   "var(--title-light-color)",
        "title-dark-color"    :   "var(--title-dark-color)",
        "border-light-color"  :   "var(--border-light-color)",
        "border-dark-color"   :   "var(--border-dark-color)",
      }
    },
  },
  plugins: [],
}

