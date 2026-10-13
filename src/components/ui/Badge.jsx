const variants = {
  soft: 'bg-surface-alt text-text-muted',
  accent: 'bg-accent-soft text-accent-hover',
  solid: 'bg-accent text-accent-text',
}
export default function Badge({ variant = 'accent', children }) {
  return (
    <span className={`inline-flex h-[26px] items-center rounded-full px-3 text-[13px] font-semibold tracking-[0.04em] ${variants[variant]}`}>
      {children}
    </span>
  )
}
