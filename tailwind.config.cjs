module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        '3xl': '1700px'
      },
      width: {
        '90': '20rem'

      }
    },

  },
  plugins: [],
};
