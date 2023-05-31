/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'new-button': 'inset rgb(255, 255, 255) 0px 0px 0px',
      },
      colors: {
        transform: 'rgb(224 231 255 / 0.2)',
        bluish: 'rgb(229, 231, 235)',
        'text-blue': 'rgb(79, 70, 229)',
        'background-button': 'rgba(79, 70, 229, 0.1)',
        'shipped-color': 'rgb(75, 85, 99)',
        'icon-color': 'rgb(156, 163, 175)',
        'right-box': 'rgb(99, 102, 241)'
      },
      height: {
        'blue-box': '69vh',
        'shade': '80vh'
      },
      transform: {
        'code-transform': 'translate(0, 0) rotate(0) skewX(-30deg) skewY(0) scaleX(1) scaleY(1)'
      },
      skew: {
        '30': '-35deg',
      }
    },
  },
  plugins: [],
};

