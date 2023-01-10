/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-pic-music': "url('/assets/images/music.jpg')",
      },
    },
  },
  plugins: [],
}
