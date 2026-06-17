import { CheckCircle2, BarChart3, BookOpen, Users, Zap, ArrowRight, Database, Bell, Shield } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const productFeatures = [
  {
    id: 'resolution',
    badge: 'Core Feature',
    badgeVariant: 'teal',
    icon: Zap,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    title: 'Autonomous Resolution Engine',
    description:
      'Resolvo\'s AI reads your actual knowledge base, understands the customer\'s intent, and resolves tickets end-to-end — without human intervention. It handles billing questions, account changes, feature guidance, and more.',
    points: [
      'Understands nuanced, multi-part questions',
      'Follows your escalation rules automatically',
      'Learns from resolved tickets over time',
      'Works 24/7 without fatigue or inconsistency',
    ],
    mockup: 'resolution',
    reversed: false,
  },
  {
    id: 'knowledge',
    badge: 'Zero Hallucinations',
    badgeVariant: 'blue',
    icon: BookOpen,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: 'Knowledge-Grounded AI',
    description:
      'Every response is grounded in retrieved content from your help docs, Notion pages, or Confluence wikis. If the answer isn\'t there, Resolvo says so — and escalates. No fabricated policies, ever.',
    points: [
      'RAG-powered retrieval (no hallucination)',
      'Auto-syncs with Notion, Confluence, Zendesk',
      'Cites the exact doc it used in each reply',
      'Flags knowledge gaps for your team to fill',
    ],
    mockup: 'knowledge',
    reversed: true,
  },
  {
    id: 'escalation',
    badge: 'Smart Handoff',
    badgeVariant: 'purple',
    icon: Users,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    title: 'Smart Human Escalation',
    description:
      'When Resolvo can\'t resolve a ticket, it escalates to your team with a complete summary, intent classification, sentiment score, and suggested response — so agents pick up with full context, not confusion.',
    points: [
      'Full conversation summary on escalation',
      'Intent + sentiment classification tags',
      'Routing rules by topic, urgency, or tier',
      'Suggested next-step response pre-written',
    ],
    mockup: 'escalation',
    reversed: false,
  },
  {
    id: 'analytics',
    badge: 'Insights',
    badgeVariant: 'orange',
    icon: BarChart3,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    title: 'Analytics & Knowledge Gap Dashboard',
    description:
      'Track resolution rate, response time, CSAT delta, and knowledge gaps all in one place. See which topics keep escalating and what docs to write next.',
    points: [
      'Real-time resolution rate tracking',
      'CSAT before / after comparison',
      'Knowledge gap heatmap',
      'Weekly digest report via email',
    ],
    mockup: 'analytics',
    reversed: true,
  },
]

function ResolutionMockup() {
  const tickets = [
    { id: 1, text: 'Cancel subscription', status: 'resolved', time: '43s' },
    { id: 2, text: 'Reset password', status: 'resolved', time: '28s' },
    { id: 3, text: 'Upgrade to annual plan', status: 'resolved', time: '1m 2s' },
    { id: 4, text: 'API rate limit help', status: 'escalated', time: 'Now' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-medium overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="text-gray-400 text-xs ml-2">Resolvo Inbox</span>
      </div>
      <div className="p-4 space-y-2">
        {tickets.map((t) => (
          <div key={t.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{t.text}</p>
            </div>
            <span className="text-xs text-gray-400">{t.time}</span>
            <Badge variant={t.status === 'resolved' ? 'resolved' : 'escalated'} size="xs">
              {t.status === 'resolved' ? '✓' : '↑'} {t.status}
            </Badge>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 pt-1 grid grid-cols-3 gap-2">
        {[['92%', 'Resolved'], ['4', 'Escalated'], ['2.8m', 'Avg time']].map(([val, lbl]) => (
          <div key={lbl} className="bg-teal-50 rounded-xl p-2.5 text-center">
            <p className="text-teal-700 font-bold text-lg">{val}</p>
            <p className="text-teal-500 text-xs">{lbl}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function KnowledgeMockup() {
  const sources = [
    { name: 'Cancellation Policy', match: '98%' },
    { name: 'Billing FAQ', match: '94%' },
    { name: 'Subscription Guide', match: '87%' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-medium p-5 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-semibold text-gray-700">Knowledge Retrieval</span>
      </div>
      <div className="bg-blue-50 rounded-xl p-3 text-sm text-blue-800 border border-blue-100 font-medium">
        "How do I cancel my subscription?"
      </div>
      <div className="space-y-2">
        {sources.map((s) => (
          <div key={s.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="text-sm text-gray-700 flex-1">{s.name}</span>
            <Badge variant="blue" size="xs">{s.match}</Badge>
          </div>
        ))}
      </div>
      <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-green-800">
        ✓ Response grounded in 3 verified sources
      </div>
    </div>
  )
}

function EscalationMockup() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-medium p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-gray-700">Escalation Handoff</span>
        </div>
        <Badge variant="escalated" size="xs">↑ Escalated</Badge>
      </div>
      {[
        ['Intent', 'Billing dispute — potential churn risk'],
        ['Sentiment', '😟 Frustrated (confidence: 91%)'],
        ['Priority', 'High — Enterprise customer'],
      ].map(([label, value]) => (
        <div key={label} className="bg-purple-50 rounded-xl px-4 py-3 border border-purple-100">
          <p className="text-xs text-purple-500 font-semibold mb-0.5">{label}</p>
          <p className="text-sm text-purple-900 font-medium">{value}</p>
        </div>
      ))}
      <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
        <p className="text-xs text-gray-500 font-semibold mb-1">Suggested Response</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          "Hi Sarah, I see there was a billing issue with your account. I'm escalating this to our team now — we'll have this sorted within 2 hours..."
        </p>
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  const bars = [65, 72, 68, 80, 85, 89, 92]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-medium p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-orange-600" />
          <span className="text-sm font-semibold text-gray-700">Resolution Analytics</span>
        </div>
        <Badge variant="orange" size="xs">This week</Badge>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[['92%', 'Resolution Rate', 'teal'], ['+18%', 'CSAT Delta', 'green'], ['2.8m', 'Avg Response', 'blue'], ['3', 'KB Gaps Found', 'orange']].map(([val, lbl, color]) => (
          <div key={lbl} className={`bg-${color}-50 rounded-xl p-3 border border-${color}-100`}>
            <p className={`text-${color}-700 font-bold text-xl`}>{val}</p>
            <p className={`text-${color}-500 text-xs`}>{lbl}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Resolution Trend</p>
        <div className="flex items-end gap-1 h-16">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-sm bg-teal-500/80 hover:bg-teal-600 transition-colors" style={{ height: `${h}%` }} />
              <span className="text-xs text-gray-400">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mockupMap = {
  resolution: ResolutionMockup,
  knowledge: KnowledgeMockup,
  escalation: EscalationMockup,
  analytics: AnalyticsMockup,
}

const integrations = [
  { name: 'Zendesk', icon: Shield },
  { name: 'Intercom', icon: Bell },
  { name: 'Freshdesk', icon: Database },
  { name: 'HubSpot', icon: Users },
  { name: 'Notion', icon: BookOpen },
  { name: 'Confluence', icon: Database },
]

export default function Product() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" size="md" className="mb-6">Product Overview</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Built to resolve tickets,{' '}
            <span className="text-gradient">not deflect them</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Every feature in Resolvo is designed with one goal: actually resolving your customers' issues, end-to-end, automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" size="lg" href="/pricing">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" href="#demo-section">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Feature deep dives */}
      {productFeatures.map((feat) => {
        const Icon = feat.icon
        const Mockup = mockupMap[feat.mockup]
        return (
          <section key={feat.id} className={`py-20 ${feat.reversed ? 'bg-gray-50/50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${feat.reversed ? 'lg:flex-row-reverse' : ''}`}>
                <div className={feat.reversed ? 'lg:order-2' : ''}>
                  <Badge variant={feat.badgeVariant} size="sm" className="mb-4">{feat.badge}</Badge>
                  <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">{feat.title}</h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-7">{feat.description}</p>
                  <ul className="space-y-3">
                    {feat.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${feat.iconColor}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={feat.reversed ? 'lg:order-1' : ''}>
                  <Mockup />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Integrations */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Works with your existing stack</h2>
          <p className="text-gray-500 mb-10">Resolvo connects to the tools your team already uses — no migration needed.</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {integrations.map(({ name, icon: Icon }) => (
              <div key={name} className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-soft transition-all group">
                <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-teal-50 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-teal-600" />
                </div>
                <span className="text-xs font-medium text-gray-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
