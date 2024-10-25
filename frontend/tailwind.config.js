module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        comfortaa: ['Comfortaa', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
      },

      colors: {
        'pink': '#d81b60',
        'green': '#4B8B77',
        'nude': '#D09C7E',
        'gray': '#f3f4f6',

      },
    },
  },
  plugins: [],
}
