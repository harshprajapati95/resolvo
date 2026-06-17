import { Star } from 'lucide-react'
import { testimonials } from '../../data/mockData'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">Customer Love</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Loved by support teams worldwide
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Don't take our word for it — hear from teams already resolving with Resolvo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="mt-5 text-gray-700 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Metric badge */}
              <div className="mt-5 mb-5 inline-flex items-center gap-1.5 bg-teal-50 border border-teal-100 rounded-full px-3 py-1.5">
                <span className="w-2 h-2 bg-teal-500 rounded-full" />
                <span className="text-teal-700 text-xs font-semibold">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
