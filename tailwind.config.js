/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        morni: {
          primary: '#2F6B5F',
          'primary-dark': '#24534A',
          'primary-light': '#3D8577',
          secondary: '#8FB9A8',
          'secondary-light': '#B2D2C6',
          dark: '#10201C',
          'dark-card': '#162C27',
          'dark-surface': '#1A332E',
          light: '#F5F7F2',
          'light-card': '#FFFFFF',
          'light-surface': '#EBEFE7',
          accent: '#D8A85B',
          'accent-hover': '#C59547',
          'accent-light': '#F4E4C1',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "radial-gradient(circle at 50% 50%, rgba(47, 107, 95, 0.15), transparent 70%)",
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
