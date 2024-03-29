/** @type {(options?: {strategy?: "base" | "class"}) => Function} */
const forms = require('@tailwindcss/forms');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const daisyui = require('daisyui');
const prettierTailwind = require('prettier-plugin-tailwindcss');

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      width: {
        recaptcha: '304px', // recaptcha width
      },
      fontFamily: {
        // barlow: ["'Barlow', sans-serif", ...defaultTheme.fontFamily.sans],
        // redHat: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        pageView: 'calc(100vh - 128px)',
      },
      maxHeight: {
        about: '600px',
      },
      fontSize: {
        base: '1rem',
      },
      letterSpacing: {
        logo: '0.5rem',
      },
      colors: {
        primary: 'rgb(34 197 94)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 15%)',
        chocolate: '#56433b',
        infoBar: 'rgb(34 197 94)',
      },
      lineHeight: {
        full: '100%',
      },
      boxShadow: {
        'custom-1':
          '0 -2px 4px rgba(0,0,0,0.02), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.05), 0 8px 8px rgba(0,0,0,0.05), 0 16px 16px rgba(0,0,0,0.05);',
      },
      screens: {
        // https://tailwindcss.com/docs/screens
        xxs: '360px',
        400: '400px',
        xs: '480px',
        tablet: '768px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }

        desktopBig: '1536px',
        // => @media (min-width: 1536px) { ... }

        tall: { raw: '(min-height: 900px)' },
        tallMobile: { raw: '(orientation: portrait) and (max-width: 500px)' },
        tabletTall: { raw: '(orientation: portrait) and (min-width: 501px)' },
        tabletBigLandscape: { raw: '(orientation: landscape) and (min-height: 900px)' },
      },
      animation: {
        shake: 'shake 1.5s infinite',
        menuAppear: 'appear 0.2s 1 ease-in-out forwards',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translate(2px, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-2px, 0) rotate(1deg)' },
          '50%': { transform: 'translate(2px, 0) rotate(1deg)' },
          '75%': { transform: 'translate(-2px, 0) rotate(0deg)' },
          '100%': { transform: 'translate(2px, 0) rotate(0deg)' },
        },
        appear: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      outline: {
        green: '2px solid #00cc00',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require

  plugins: [forms, aspectRatio, daisyui, prettierTailwind],
  // prettierTailwind MUST come last
};
