const base =
  'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full text-base font-semibold transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 min-w-[44px]'
const variants = {
  cta: 'bg-cta text-text-main hover:bg-cta-hover',
  accent: 'bg-accent text-accent-text hover:bg-accent-hover',
  dark: 'bg-secondary-accent text-white hover:bg-black',
  light: 'bg-white text-text-main border border-line hover:bg-surface-alt',
}

export default function Button({ as: Tag = 'a', variant = 'cta', className = '', ...props }) {
  return <Tag className={`${base} ${variants[variant]} ${className}`} {...props} />
}

export function CircleButton({ as: Tag = 'a', label, className = '', children, ...props }) {
  return (
    <Tag
      aria-label={label}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-hover shadow-sm2 transition duration-200 ease-out hover:scale-[1.06] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
