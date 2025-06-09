/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      fontFamily: {
        'geist': ['var(--font-geist)', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      colors: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'muted': 'var(--muted)',
        'border': 'var(--border)',
        'input': 'var(--input)',
        'card': 'var(--card)',
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-pattern.svg')",
        'footer-texture': "url('/images/footer-texture.png')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-hover)',
              },
            },
            h1: {
              color: 'var(--foreground)',
            },
            h2: {
              color: 'var(--foreground)',
            },
            h3: {
              color: 'var(--foreground)',
            },
            strong: {
              color: 'var(--foreground)',
            },
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'), // Add Typography plugin here
  ],
};
