/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      height: {
        '72': '72px',
        294:'294px'
      },
      colors: {
        'navbarColor': '#70737C',
        banner:'#EAF1EB',
        text:'#1F2533',
        throughColor:"#70737C",
        button:'#359740',

      },
      minHeight: {
        'main': 'calc(100vh - 100px)',
      }
    },
  },
  plugins: [],
}