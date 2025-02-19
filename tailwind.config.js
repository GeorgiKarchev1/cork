/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7D4CC3',
        secondary: '#F4A836',
        background: '#0A0A32',
      },
      screens: {
        'xs': '426px',
      },
    },
  },
  safelist: [
    'text-white',
    'text-gray-300',
    'text-gray-400',
    'bg-gradient-to-r',
    'from-[#F4A836]',
    'to-[#E08E2B]',
    'text-transparent',
    'bg-clip-text',
  ],
} 