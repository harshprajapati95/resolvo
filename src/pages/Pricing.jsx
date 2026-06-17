import { useState } from 'react'
import { Check, X, ArrowRight, Zap } from 'lucide-react'
import { pricingPlans, pricingFeatureMatrix, faqs } from '../data/mockData'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Accordion from '../components/ui/Accordion'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" size="md" className="mb-6">Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-5">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
            Start free for 14 days. No credit card required. Pick the plan that fits your team.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-1.5 shadow-soft">
            <button
              id="toggle-monthly"
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                !annual ? 'bg-teal-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              id="toggle-annual"
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annual ? 'bg-teal-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Annual
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold transition-colors ${
                annual ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gray-950 text-white shadow-2xl ring-2 ring-teal-500 scale-[1.02]'
                    : 'bg-white border border-gray-200 shadow-soft hover:shadow-medium'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1">
                  {/* Plan name */}
                  <div className="flex items-center gap-2 mb-2">
                    {plan.highlight && <Zap className="w-4 h-4 text-teal-400" />}
                    <h2 className={`text-lg font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h2>
                  </div>
                  <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className={`text-5xl font-extrabold tracking-tight ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm mb-2 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>/mo</span>
                  </div>
                  {annual && (
                    <p className={`text-xs mb-6 ${plan.highlight ? 'text-teal-400' : 'text-teal-600'}`}>
                      Billed annually · Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr
                    </p>
                  )}
                  {!annual && <div className="mb-6" />}

                  {/* CTA */}
                  <Button
                    variant={plan.highlight ? 'primary' : 'outline'}
                    size="lg"
                    href="/contact"
                    className="w-full"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  {/* Divider */}
                  <div className={`my-7 border-t ${plan.highlight ? 'border-gray-700' : 'border-gray-100'}`} />

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm ${
                        feat === '—'
                          ? plan.highlight ? 'text-gray-600' : 'text-gray-300'
                          : plan.highlight ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        {feat === '—' ? (
                          <X className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                        ) : (
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-teal-400' : 'text-teal-600'}`} />
                        )}
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trial note */}
                <div className={`px-8 pb-6 text-center text-xs ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                  14-day free trial · No credit card required
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise note */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Need a custom plan for 50+ agents?{' '}
              <a href="/contact" className="text-teal-600 font-semibold hover:underline">
                Talk to sales →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Compare plans</h2>
            <p className="text-gray-500">A full breakdown of what's included in each plan.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft">
            {/* Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-4 col-span-1" />
              {['Starter', 'Growth', 'Scale'].map((name, i) => (
                <div key={name} className={`p-4 text-center border-l border-gray-200 ${i === 1 ? 'bg-teal-50' : ''}`}>
                  <span className={`font-bold text-sm ${i === 1 ? 'text-teal-700' : 'text-gray-700'}`}>{name}</span>
                  {i === 1 && <p className="text-xs text-teal-500 mt-0.5">Most Popular</p>}
                </div>
              ))}
            </div>

            {/* Rows */}
            {pricingFeatureMatrix.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 border-b border-gray-100 last:border-0 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                }`}
              >
                <div className="p-4 text-sm text-gray-700 font-medium col-span-1">{row.feature}</div>
                {[row.starter, row.growth, row.scale].map((val, i) => (
                  <div key={i} className={`p-4 text-center border-l border-gray-100 ${i === 1 ? 'bg-teal-50/30' : ''}`}>
                    {val === '✓' ? (
                      <Check className="w-4 h-4 text-teal-600 mx-auto" />
                    ) : val === '✗' ? (
                      <X className="w-4 h-4 text-gray-300 mx-auto" />
                    ) : (
                      <span className="text-sm text-gray-600 font-medium">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Frequently asked questions
            </h2>
            <p className="text-gray-500">
              Everything you need to know about Resolvo's pricing.{' '}
              <a href="/contact" className="text-teal-600 font-semibold hover:underline">
                Ask us anything →
              </a>
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
    </div>
  )
}
