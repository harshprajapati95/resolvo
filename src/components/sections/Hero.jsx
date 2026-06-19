import { useContext } from 'react'
import { ArrowRight, CheckCircle2, Clock, Zap, MessageSquare, BarChart3, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { AccessContext } from '../../context/AccessContext'

const mockTickets = [
  { id: 1, user: 'Alex R.', subject: 'How do I cancel my subscription?', status: 'resolved', time: '43s', avatar: 'AR', color: 'bg-violet-500' },
  { id: 2, user: 'Maya S.', subject: 'Password reset not working', status: 'resolved', time: '28s', avatar: 'MS', color: 'bg-blue-500' },
  { id: 3, user: 'Tom K.', subject: 'Upgrade to annual plan', status: 'resolved', time: '1m 12s', avatar: 'TK', color: 'bg-emerald-500' },
  { id: 4, user: 'Sara L.', subject: 'API rate limit exceeded — need help', status: 'escalated', time: 'Just now', avatar: 'SL', color: 'bg-orange-500' },
  { id: 5, user: 'Chris M.', subject: 'Where is my invoice for June?', status: 'resolved', time: '55s', avatar: 'CM', color: 'bg-pink-500' },
]

function TicketRow({ ticket }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
      <div className={`w-8 h-8 rounded-full ${ticket.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
        {ticket.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-800 truncate">{ticket.subject}</p>
        <p className="text-xs text-gray-400">{ticket.user}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs text-gray-400">{ticket.time}</span>
        <Badge variant={ticket.status === 'resolved' ? 'resolved' : 'escalated'} size="xs">
          {ticket.status === 'resolved' ? '✓ Resolved' : '↑ Escalated'}
        </Badge>
      </div>
    </div>
  )
}

export default function Hero() {
  const { openRequestAccess } = useContext(AccessContext)

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-subtle">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="animate-fade-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-teal-700 text-sm font-medium">AI-powered support automation</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6">
              Support that{' '}
              <span className="text-gradient">resolves,</span>
              <br />
              not just responds.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg">
              AI customer support automation that uses your real knowledge base, resolves common tickets end-to-end, and hands complex cases to humans with full context.
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-10">
              {[
                '92% average resolution rate — no human needed',
                'Grounded in your actual docs, not hallucinated policies',
                'Seamless handoff with full context when escalating',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openRequestAccess}
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-200 gap-2.5"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <Button variant="secondary" size="xl" href="/product">
                Book a Demo
              </Button>
            </div>

            {/* Social proof */}
            <p className="mt-6 text-xs text-gray-400">
              No credit card required · 14-day free trial · Setup in under 24 hours
            </p>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative animate-fade-in">
            {/* Floating stat cards */}
            <div className="absolute -top-6 -left-6 z-20 bg-white rounded-2xl shadow-medium p-3 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Resolution Rate</p>
                <p className="text-lg font-bold text-gray-900">92%</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 z-20 bg-white rounded-2xl shadow-medium p-3 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Avg. Response</p>
                <p className="text-lg font-bold text-gray-900">2.8 min</p>
              </div>
            </div>

            {/* Main dashboard card */}
            <div className="bg-white rounded-3xl shadow-medium border border-gray-100 overflow-hidden">
              {/* Header bar */}
              <div className="bg-gray-50 border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-medium">Resolvo Inbox</span>
                </div>
                <Badge variant="resolved" size="xs">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Live
                </Badge>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                {[
                  { label: 'Today', value: '247', icon: MessageSquare, color: 'text-teal-600' },
                  { label: 'Resolved', value: '228', icon: CheckCircle2, color: 'text-emerald-600' },
                  { label: 'Escalated', value: '19', icon: Zap, color: 'text-amber-600' },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="px-4 py-3 text-center">
                    <Icon className={`w-4 h-4 ${color} mx-auto mb-1`} />
                    <p className="text-lg font-bold text-gray-900">{value}</p>
                    <p className="text-xs text-gray-400">{label}</p>
                  </div>
                ))}
              </div>

              {/* Ticket list */}
              <div className="p-3">
                <div className="flex items-center justify-between px-3 mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recent Tickets</span>
                  <span className="text-xs text-teal-600 font-medium">View all →</span>
                </div>
                <div className="space-y-0.5">
                  {mockTickets.map((t) => (
                    <TicketRow key={t.id} ticket={t} />
                  ))}
                </div>
              </div>

              {/* Analytics mini */}
              <div className="border-t border-gray-100 px-5 py-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500">Resolution trend</span>
                  <BarChart3 className="w-4 h-4 text-gray-300" />
                </div>
                <div className="flex items-end gap-1 h-10">
                  {[55, 70, 62, 80, 75, 88, 92].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-teal-500 opacity-80 transition-all hover:opacity-100"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
