/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      fontFamily: {
        inter: 'var(--inter-font)',
      },
      colors: {
        primary: '#434273',
        lightGray: '#525860',
        darkGray: '#3D434A',
        background: '#F8FBFF',
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'md': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.5rem', // 24px
        '2xl': ['1.625rem', '1.875rem'], //28px
      },
    },
  },
  plugins: [],
}

