import { Zap, BookOpen, Users, CheckCircle2 } from 'lucide-react'
import { features } from '../../data/mockData'

const iconMap = { Zap, BookOpen, Users }
const colorMap = {
  teal: {
    icon: 'bg-teal-50 text-teal-600',
    border: 'hover:border-teal-200',
    bullet: 'text-teal-500',
    badge: 'bg-teal-50 text-teal-600',
  },
  blue: {
    icon: 'bg-blue-50 text-blue-600',
    border: 'hover:border-blue-200',
    bullet: 'text-blue-500',
    badge: 'bg-blue-50 text-blue-600',
  },
  purple: {
    icon: 'bg-purple-50 text-purple-600',
    border: 'hover:border-purple-200',
    bullet: 'text-purple-500',
    badge: 'bg-purple-50 text-purple-600',
  },
}

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-subtle" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">Features</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Everything you need to resolve, not just respond
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Three core capabilities that make Resolvo the most effective AI support platform on the market.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            const colors = colorMap[feature.color]
            return (
              <div
                key={feature.id}
                className={`bg-white rounded-2xl border border-gray-100 p-8 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 ${colors.border} group`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${colors.icon} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Number */}
                <span className={`text-xs font-bold uppercase tracking-widest ${colors.badge} px-2 py-1 rounded-md mb-3 inline-block`}>
                  0{i + 1}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{feature.description}</p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${colors.bullet}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
