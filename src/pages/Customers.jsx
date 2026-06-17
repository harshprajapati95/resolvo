import { Star, ArrowRight, TrendingUp, Clock, Smile } from 'lucide-react'
import { customerStories, testimonials } from '../data/mockData'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const wallTestimonials = [
  ...testimonials,
  {
    id: 4,
    quote: 'We cut our support headcount by 2 FTEs without reducing coverage. Resolvo just handles it.',
    author: 'Jordan Mills',
    role: 'COO',
    company: 'Neon',
    avatar: 'JM',
    rating: 5,
    metric: '2 FTEs reallocated',
  },
  {
    id: 5,
    quote: 'Our engineering team gets zero support pings now. Resolvo handles all the API questions from our docs.',
    author: 'Aisha Patel',
    role: 'CTO',
    company: 'Clerk',
    avatar: 'AP',
    rating: 5,
    metric: '0 engineering escalations',
  },
  {
    id: 6,
    quote: 'Resolution rate jumped from 29% to 88% in the first week. I was genuinely shocked.',
    author: 'Dev Torres',
    role: 'Support Manager',
    company: 'Posthog',
    avatar: 'DT',
    rating: 5,
    metric: '88% resolution rate — week 1',
  },
]

function MetricDelta({ label, before, after, icon: Icon, color }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center shrink-0`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-400 line-through">{before}</span>
          <ArrowRight className="w-3 h-3 text-gray-300 shrink-0" />
          <span className="text-sm font-bold text-emerald-600">{after}</span>
        </div>
      </div>
    </div>
  )
}

function StoryCard({ story }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-soft overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-subtle p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-12 h-12 rounded-xl ${story.logoColor} flex items-center justify-center text-white font-bold text-sm`}>
            {story.logo}
          </div>
          <div>
            <p className="font-bold text-gray-900">{story.company}</p>
            <p className="text-xs text-gray-500">{story.industry}</p>
          </div>
        </div>
        <h3 className="text-lg font-extrabold text-gray-900 leading-snug">{story.headline}</h3>
      </div>

      {/* Before / After */}
      <div className="p-6 border-b border-gray-100">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Before vs. After Resolvo</p>
        <div className="grid grid-cols-2 gap-4">
          {/* Before */}
          <div>
            <p className="text-xs font-semibold text-red-500 mb-3 flex items-center gap-1">
              <span className="w-2 h-2 bg-red-400 rounded-full" /> Before
            </p>
            <div className="space-y-2">
              {[
                ['Resolution Rate', story.before.resolutionRate],
                ['Avg Response', story.before.responseTime],
                ['CSAT', story.before.csat],
              ].map(([lbl, val]) => (
                <div key={lbl} className="bg-red-50 rounded-xl px-3 py-2 border border-red-100">
                  <p className="text-xs text-red-400">{lbl}</p>
                  <p className="text-sm font-bold text-red-600">{val}</p>
                </div>
              ))}
            </div>
          </div>
          {/* After */}
          <div>
            <p className="text-xs font-semibold text-emerald-500 mb-3 flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" /> After
            </p>
            <div className="space-y-2">
              {[
                ['Resolution Rate', story.after.resolutionRate],
                ['Avg Response', story.after.responseTime],
                ['CSAT', story.after.csat],
              ].map(([lbl, val]) => (
                <div key={lbl} className="bg-emerald-50 rounded-xl px-3 py-2 border border-emerald-100">
                  <p className="text-xs text-emerald-500">{lbl}</p>
                  <p className="text-sm font-bold text-emerald-700">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="p-6">
        <blockquote className="text-sm text-gray-600 leading-relaxed italic mb-4">
          "{story.quote}"
        </blockquote>
        <p className="text-xs font-semibold text-gray-500">— {story.author}</p>
      </div>
    </div>
  )
}

export default function Customers() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" size="md" className="mb-6">Customer Stories</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-5">
            Teams resolving more,{' '}
            <span className="text-gradient">stressing less</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            See how fast-growing teams use Resolvo to hit 90%+ resolution rates, improve CSAT, and scale support without scaling headcount.
          </p>
          {/* Logo row */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Amplitude', color: 'bg-orange-500' },
              { name: 'Retool', color: 'bg-blue-600' },
              { name: 'Loom', color: 'bg-purple-600' },
              { name: 'Neon', color: 'bg-green-600' },
              { name: 'Clerk', color: 'bg-gray-800' },
              { name: 'Posthog', color: 'bg-rose-600' },
            ].map(({ name, color }) => (
              <div key={name} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-soft">
                <div className={`w-5 h-5 rounded-md ${color} flex items-center justify-center text-white text-xs font-bold`}>
                  {name[0]}
                </div>
                <span className="text-sm font-semibold text-gray-600">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregate stats */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '92%', label: 'Avg Resolution Rate', sub: 'Across all customers' },
              { val: '+18%', label: 'CSAT Improvement', sub: 'Average uplift' },
              { val: '60%', label: 'Faster Responses', sub: 'vs human-only teams' },
              { val: '500+', label: 'Teams using Resolvo', sub: 'And growing' },
            ].map(({ val, label, sub }) => (
              <div key={label}>
                <p className="text-4xl font-extrabold text-teal-600 mb-1">{val}</p>
                <p className="text-sm font-semibold text-gray-800">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Success stories</h2>
            <p className="text-gray-500">Real results from real support teams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {customerStories.map((story) => (
              <StoryCard key={story.company} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Wall */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">What teams are saying</h2>
            <p className="text-gray-500">Hundreds of support teams trust Resolvo every day.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wallTestimonials.map((t) => (
              <div key={t.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-700 leading-relaxed mb-4">"{t.quote}"</blockquote>
                <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-4">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  <span className="text-teal-700 text-xs font-semibold">{t.metric}</span>
                </div>
                <div className="flex items-center gap-2.5 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                    <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After summary */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
              The Resolvo effect — by the numbers
            </h2>
            <p className="text-gray-400">Average improvements reported by Resolvo customers in the first 30 days.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Resolution Rate', before: '32%', after: '91%', icon: TrendingUp, color: 'bg-teal-600' },
              { label: 'Avg. Response Time', before: '4.5 hours', after: '3.1 min', icon: Clock, color: 'bg-blue-600' },
              { label: 'Customer Satisfaction', before: '3.5 / 5', after: '4.8 / 5', icon: Smile, color: 'bg-purple-600' },
              { label: 'Agent Load', before: '100% human', after: '13% human', icon: TrendingUp, color: 'bg-emerald-600' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <MetricDelta {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
