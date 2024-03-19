/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'light-blue': 'var(--theme-header-background-color)'
    },
    fontFamily: {
      'logo': ['Montserrat', 'sans-serif'],
      'default': ['inter', 'sans-serif']
    }
  },
  plugins: [],
}
