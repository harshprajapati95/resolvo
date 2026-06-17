export default function Badge({ children, variant = 'teal', size = 'sm', className = '' }) {
  const variants = {
    teal: 'bg-teal-50 text-teal-700 border border-teal-200',
    green: 'bg-green-50 text-green-700 border border-green-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200',
    orange: 'bg-orange-50 text-orange-700 border border-orange-200',
    gray: 'bg-gray-100 text-gray-600 border border-gray-200',
    resolved: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    pending: 'bg-amber-50 text-amber-700 border border-amber-200',
    escalated: 'bg-red-50 text-red-600 border border-red-200',
  }

  const sizes = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span className={`inline-flex items-center gap-1 font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
