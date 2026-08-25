/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          void: '#050508',
          dark: '#0a0a10',
          darker: '#07070c',
          card: 'rgba(15, 14, 25, 0.75)',
          cardHover: 'rgba(25, 22, 40, 0.85)',
          orange: '#ff6b1a',
          orangeGlow: '#ff8c38',
          gold: '#d4af37',
          goldBright: '#fce277',
          amber: '#ff9f1c',
          cyan: '#00e5ff',
          emerald: '#10b981',
          purple: '#8b5cf6',
          indigo: '#4f46e5',
        },
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        marcellus: ['"Marcellus"', 'serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'portal-glow': '0 0 50px rgba(255, 107, 26, 0.4), 0 0 100px rgba(212, 175, 55, 0.2)',
        'portal-inner': 'inset 0 0 40px rgba(255, 107, 26, 0.5)',
        'sigil-gold': '0 0 25px rgba(212, 175, 55, 0.45)',
        'sigil-orange': '0 0 30px rgba(255, 107, 26, 0.5)',
        'time-stone': '0 0 30px rgba(0, 229, 255, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)',
        'mystic-card': '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 107, 26, 0.15)',
        'mystic-card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 107, 26, 0.4)',
      },
      animation: {
        'portal-spin': 'spin 40s linear infinite',
        'portal-spin-reverse': 'spin-reverse 30s linear infinite',
        'portal-spin-fast': 'spin 15s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-cloak': 'floatCloak 6s ease-in-out infinite',
        'sigil-flicker': 'sigilFlicker 3s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        floatCloak: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.5deg)' },
        },
        sigilFlicker: {
          '0%, 100%': { opacity: 0.9, filter: 'drop-shadow(0 0 12px rgba(255, 107, 26, 0.6))' },
          '50%': { opacity: 0.6, filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.3))' },
        },
      },
    },
  },
  plugins: [],
}
