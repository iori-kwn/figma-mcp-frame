/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'subheading': ['20px', { lineHeight: '1.2', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '1.4', fontWeight: '400' }],
        'body-strong': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        'single-line-body': ['16px', { lineHeight: '1', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}