/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colte: {
          navy: {
            DEFAULT: '#0B1F3A',
            50: '#F0F4FA',
            100: '#D9E3F1',
            200: '#B3C8E4',
            300: '#86A7D3',
            400: '#5482BF',
            500: '#2F64A8',
            600: '#1C4B8C',
            700: '#15396D',
            800: '#0F294F',
            900: '#0B1F3A',
            950: '#061120',
          },
          orange: {
            DEFAULT: '#FF7A00',
            50: '#FFF7EE',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#FF7A00',
            600: '#EA6900',
            700: '#C25100',
            800: '#9A4006',
            900: '#7C3608',
          },
          accent: {
            DEFAULT: '#00A6A6',
            50: '#E6F8F8',
            100: '#C2EDED',
            200: '#8AE0E0',
            300: '#4DD0D0',
            400: '#1AC2C2',
            500: '#00A6A6',
            600: '#008585',
            700: '#006666',
            800: '#034E4E',
            900: '#064242',
          },
          text: {
            primary: '#172B4D',
            secondary: '#42526E',
            muted: '#6B778C',
          },
          light: '#F4F7FA',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 122, 0, 0.35)',
        'glow-teal': '0 0 25px -5px rgba(0, 166, 166, 0.35)',
        'premium': '0 10px 30px -10px rgba(11, 31, 58, 0.12), 0 4px 6px -2px rgba(11, 31, 58, 0.04)',
        'card': '0 4px 20px -2px rgba(11, 31, 58, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'dash': 'dash 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dash: {
          to: {
            strokeDashoffset: '1000',
          },
        },
      },
    },
  },
  plugins: [],
}
