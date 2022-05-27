module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy-blue':'#04384c',
        'violet':'#a94335',
        'submit-btn': '#4ea30a',
        'white': '#ffffff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
