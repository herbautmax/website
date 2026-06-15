/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutres (l'ossature) — charcoal existant + échelle
        ink: {
          DEFAULT: '#181B1F', // fond principal
          950: '#0E1114',     // sections profondes / footer
          900: '#181B1F',
          800: '#20242A',     // surfaces / cartes
          700: '#2C313A',     // bordures
        },
        // Accent UNIQUE
        brand: {
          DEFAULT: '#12B981', // émeraude — CTA, liens, détails
          hover: '#0E9D6E',
          ink: '#04150E',     // texte foncé posé SUR l'émeraude
          soft: '#12211B',    // fond vert très sombre (chips, tints)
        },
        // Texte sur fond sombre
        mist: '#F3F5F4',      // titres / texte fort
        fog: '#C7CCD2',       // texte courant
        muted: '#9AA1AB',     // texte secondaire
        paper: '#FAF9F7',     // fond clair (rare)
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        label: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem', // ~20px, valeur des cartes
      },
      boxShadow: {
        card: '0 24px 60px -40px rgba(2,6,23,0.9)',
        'card-hover': '0 30px 80px -36px rgba(18,185,129,0.28)',
      },
      maxWidth: {
        prose: '65ch', // largeur de lecture cible
      },
    },
  },
  plugins: [],
}
