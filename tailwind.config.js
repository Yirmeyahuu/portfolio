/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay-200': 'float 3s ease-in-out 0.2s infinite',
        'float-delay-400': 'float 3s ease-in-out 0.4s infinite',
        'orbit1': 'orbit 2s linear infinite',
        'orbit2': 'orbit 2s linear infinite',
        'orbit3': 'orbit 2s linear infinite',
        'fade-out': 'fadeOut 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 1.2s cubic-bezier(0.64, 0, 0.34, 1) forwards',
        'slide-up-delay-200': 'slideUp 1.2s cubic-bezier(0.64, 0, 0.34, 1) 0.2s forwards',
        'slide-up-delay-400': 'slideUp 1.2s cubic-bezier(0.64, 0, 0.34, 1) 0.4s forwards',
        'slide-up-delay-600': 'slideUp 1.2s cubic-bezier(0.64, 0, 0.34, 1) 0.6s forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(20px) rotate(-360deg)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
      },
    },
  },
  plugins: [],
};
