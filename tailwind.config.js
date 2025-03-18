/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
        },
      },
      animation: {
        gradient: 'gradientShift 5s ease infinite',
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};