export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const variants = {
    primary:
      'bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.98] shadow-sm hover:shadow-md',
    secondary:
      'bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] shadow-sm',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100 active:scale-[0.98]',
    outline:
      'bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white active:scale-[0.98]',
    white:
      'bg-white text-teal-700 hover:bg-teal-50 active:scale-[0.98] shadow-sm',
    'white-outline':
      'bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-700 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
    xl: 'px-8 py-4 text-base gap-2.5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
