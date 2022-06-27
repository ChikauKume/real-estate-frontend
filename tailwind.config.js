module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
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
        'light-gray': '#F6F9F9',
        'orange': 'rgb(234 88 22)',
        'gray': '#bdc8ca',
        'dark-gray': '#ABB0B8'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  important: true,
}