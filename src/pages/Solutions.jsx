import { useState } from 'react'
import { ArrowRight, CheckCircle2, CreditCard, Lock, Code, Star, Package, RotateCcw, Tag, Globe } from 'lucide-react'
import { saasSolutions, ecommSolutions } from '../data/mockData'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const iconMap = { CreditCard, Lock, Code, Star, Package, RotateCcw, Tag, Globe }

const tabs = [
  { id: 'saas', label: 'SaaS Support Teams', badge: 'B2B Software' },
  { id: 'ecomm', label: 'E-commerce Teams', badge: 'Online Retail' },
]

function ScenarioCard({ item }) {
  const Icon = iconMap[item.icon]
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Scenario */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Customer says</p>
            <p className="text-sm font-semibold text-gray-800 leading-snug">"{item.scenario}"</p>
          </div>
        </div>
      </div>

      {/* AI Action */}
      <div className="p-5 border-b border-teal-50 bg-teal-50/30">
        <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
          Resolvo AI Action
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">{item.action}</p>
      </div>

      {/* Outcome */}
      <div className="p-5 bg-emerald-50/30">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Outcome
        </p>
        <p className="text-sm font-semibold text-gray-800">{item.outcome}</p>
      </div>
    </div>
  )
}

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('saas')
  const solutions = activeTab === 'saas' ? saasSolutions : ecommSolutions

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" size="md" className="mb-6">Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Resolvo works for your{' '}
            <span className="text-gradient">exact use case</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you run a SaaS platform or an e-commerce store, Resolvo handles your most common support scenarios autonomously — so your team can focus on complex issues that need a human touch.
          </p>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex bg-gray-100 rounded-2xl p-1 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-teal-700 shadow-soft'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                  <Badge variant={activeTab === tab.id ? 'teal' : 'gray'} size="xs">
                    {tab.badge}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          {/* Scenario heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              {activeTab === 'saas' ? 'Common SaaS Support Scenarios' : 'Common E-commerce Support Scenarios'}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              {activeTab === 'saas'
                ? 'Resolvo handles every routine SaaS support case — from billing to feature guidance — fully autonomously.'
                : 'From order tracking to returns, Resolvo resolves e-commerce tickets instantly, around the clock.'}
            </p>
          </div>

          {/* Scenario cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {solutions.map((item, i) => (
              <ScenarioCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-14 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ['80%+', 'Of tickets resolved autonomously'],
              ['< 3 min', 'Average time to resolution'],
              ['24/7', 'Always-on support coverage'],
              ['Zero', 'Hallucinated policies'],
            ].map(([val, lbl]) => (
              <div key={lbl}>
                <p className="text-3xl font-extrabold text-teal-400 mb-1">{val}</p>
                <p className="text-gray-400 text-sm">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get started in under 24 hours</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            No engineering required. Connect your knowledge base, configure your escalation rules, and Resolvo is live.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { step: '1', title: 'Connect', desc: 'Link your Zendesk, Intercom, or Freshdesk account' },
              { step: '2', title: 'Train', desc: 'Sync your help docs — Notion, Confluence, or PDFs' },
              { step: '3', title: 'Resolve', desc: 'Go live and watch tickets resolve automatically' },
            ].map((s) => (
              <div key={s.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <Button variant="primary" size="lg" href="/pricing">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
