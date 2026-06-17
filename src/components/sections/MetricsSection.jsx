import { useEffect, useRef, useState } from 'react'
import { metrics } from '../../data/mockData'

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function MetricsSection() {
  return (
    <section className="py-24 bg-gradient-brand relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Results that speak for themselves
          </h2>
          <p className="text-teal-100 text-lg max-w-xl mx-auto">
            Real metrics from teams that switched to resolution-first support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix || ''}
                  suffix={metric.suffix}
                />
              </div>
              <div className="text-white font-semibold text-base mb-1">{metric.label}</div>
              <div className="text-teal-200 text-sm">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
