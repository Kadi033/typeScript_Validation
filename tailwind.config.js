/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'hsla(0, 0%, 10%, 0.1)',
      },
      backdropFilter: {
        'blur-8': 'blur(8px)',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backdrop-blur-8': {
          'backdrop-filter': 'blur(8px)',
        },
      })
    },
  ],
}