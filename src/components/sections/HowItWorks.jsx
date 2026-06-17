import { Database, Search, FileText, GitBranch, TrendingUp } from 'lucide-react'
import { steps } from '../../data/mockData'

const iconMap = { Database, Search, FileText, GitBranch, TrendingUp }

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            From ticket to resolution in seconds
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Resolvo's five-step resolution engine handles the full lifecycle of a support ticket — automatically.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-100 via-teal-400 to-teal-100 mx-24" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon]
              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  {/* Icon circle */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-1 ${
                    i === 0 ? 'bg-teal-600 shadow-glow' : 'bg-white border-2 border-teal-100 group-hover:border-teal-300 group-hover:shadow-soft'
                  }`}>
                    <Icon className={`w-8 h-8 ${i === 0 ? 'text-white' : 'text-teal-600'}`} />
                  </div>
                  <span className="text-xs font-bold text-teal-500 mb-1.5 uppercase tracking-widest">Step {step.step}</span>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon]
            return (
              <div key={step.step} className="flex gap-4">
                {/* Left: icon + line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    i === 0 ? 'bg-teal-600' : 'bg-teal-50 border border-teal-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${i === 0 ? 'text-white' : 'text-teal-600'}`} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-teal-100 my-2" />
                  )}
                </div>
                {/* Right: content */}
                <div className="pb-8">
                  <span className="text-xs font-bold text-teal-500 uppercase tracking-widest">Step {step.step}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
