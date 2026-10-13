export default function Card({ highlighted = false, className = '', children, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`rounded-card ${highlighted ? 'bg-accent text-accent-text' : 'bg-surface-alt'} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
