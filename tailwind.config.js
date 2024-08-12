const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        customBlue: '#00d1d1',
        primary: '#00d1d1',
        secondary: '#808080',
        accent: {
          DEFAULT: '#00d1d1',
          secondary: '#18abbc',
          tertiary: '#90c6cd'

        },
        grey: '#e8f0f1',
    },
    fontFamily: {
      primary: 'Poppins'
  },
  boxShadow: {
  custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
  custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',

  },
  backgroundImage: {
    services: 'url(assets/img/services/bg.svg)',
    departments: 'url(assets/img/departments/bg.svg)',
    testimonials: 'url(assets/img/testimonials/bg1.svg)',
    quoteLeft: 'url(assets/img/team/quote-a-left-svgrepo-com.svg)',
    quoteRight: 'url(assets/img/team/quote-a-right-svgrepo-com.svg)',
    footer: 'url(assets/img/blog/qfo-img1.jpg)',
    moon: 'url(assets/img/header/moon.jpg)',








  },
  plugins: [],
}}}