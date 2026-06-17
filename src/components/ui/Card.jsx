export default function Card({ children, className = '', hover = true, padding = 'md' }) {
  const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8', none: '' }
  return (
    <div
      className={`bg-white border border-gray-100 rounded-2xl shadow-soft ${
        hover ? 'hover:shadow-medium hover:-translate-y-1 transition-all duration-300' : ''
      } ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  )
}
