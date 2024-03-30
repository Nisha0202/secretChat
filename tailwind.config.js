/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'mywhite': '#ffffff',
      'mypink': '#FFAAAA',
      'myred': '#C10A0A',
      'myblack': '#262626',
      'mygray': '#6b7280',
      'myBlue': '#0000e5',
      'mylight-gray': '#9ca3af',
      'card': ' #36454F',
      'mydark-white': 'rgb(207, 207, 207)',
      'mylight-black': '#232B2B',

    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

