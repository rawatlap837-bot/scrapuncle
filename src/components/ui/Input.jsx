const field =
  'w-full min-h-[48px] rounded-chip border border-line bg-white px-4 text-base text-text-main placeholder:text-text-muted transition focus:border-accent'

export default function Field({ id, label, error, as = 'input', children, ...props }) {
  const Tag = as
  const errId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={errId}
        className={`${field} ${as === 'textarea' ? 'py-3' : ''} ${error ? 'border-danger' : ''}`}
        {...props}
      >
        {children}
      </Tag>
      <p id={errId} aria-live="polite" className="mt-1 min-h-[20px] text-[13px] text-danger">
        {error || ''}
      </p>
    </div>
  )
}
