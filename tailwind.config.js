module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#ecfeff',
          100: '#cffafe',
          // ... rest of your colors
        },
      },
      // ... rest of your config
    },
  },
  plugins: [],
};