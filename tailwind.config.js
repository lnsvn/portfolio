/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // configure the paths to JavaScript components and pages
    // * any files that contain Tailwind class names *
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

