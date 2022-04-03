module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        '3xl': '1700px',
      },
      width: {
        90: '20rem',
      },
      textShadow: {
        '2xl': '0 0 5px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
