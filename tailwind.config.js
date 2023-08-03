/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // configure the paths to JavaScript components and pages
    // * any files that contain Tailwind class names *
    './src/**/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rem': ['REM', 'sans-serif']
      },
    },
  },
  plugins: [],
}

