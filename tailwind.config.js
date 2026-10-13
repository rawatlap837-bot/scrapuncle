/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        backdrop: 'var(--page-backdrop)',
        surface: 'var(--surface)',
        'surface-alt': 'var(--surface-alt)',
        line: 'var(--border)',
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-text': 'var(--accent-text)',
        'accent-soft': 'var(--accent-soft)',
        'secondary-accent': 'var(--secondary-accent)',
        'sky-tint': 'var(--sky-tint)',
        success: 'var(--success)',
        danger: 'var(--danger)',
        cta: 'var(--cta)',
        'cta-hover': 'var(--cta-hover)',
      },
      fontFamily: { sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
      borderRadius: { hero: '40px', card: '24px', chip: '20px' },
      boxShadow: {
        sm2: '0 2px 8px rgba(15,17,21,.05)',
        md2: '0 8px 24px rgba(15,17,21,.06)',
        lg2: '0 16px 40px rgba(15,17,21,.10)',
      },
      screens: { nav: '900px' },
    },
  },
  plugins: [],
}
