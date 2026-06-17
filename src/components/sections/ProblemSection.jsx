import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react'

const deflectionPoints = [
  'Sends generic help-center links',
  'Optimizes for ticket closure, not resolution',
  'Frustrates customers with chatbot loops',
  'Forces human escalation for basic tasks',
  'Provides no context when handing off',
]

const resolutionPoints = [
  'Reads your actual policies and docs',
  'Resolves tickets completely end-to-end',
  'Gives precise, grounded answers every time',
  'Handles 80%+ of volume autonomously',
  'Hands off with full conversation context',
]

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">The Problem</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Traditional AI deflects. Resolvo resolves.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Most AI support tools are built to reduce ticket volume — not to actually help your customers. Resolvo is built differently.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Deflection card */}
          <div className="rounded-2xl border border-red-100 bg-red-50/30 p-8">
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-gray-800 text-lg">Traditional Chatbots</h3>
              <span className="ml-auto text-xs font-semibold text-red-500 bg-red-100 rounded-full px-2.5 py-1">
                Deflection
              </span>
            </div>
            <ul className="space-y-3">
              {deflectionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-sm text-red-600 font-medium">Result: Frustrated customers, low CSAT, burned-out agents.</p>
            </div>
          </div>

          {/* Resolution card */}
          <div className="rounded-2xl border border-teal-200 bg-teal-50/30 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-gray-800 text-lg">Resolvo</h3>
              <span className="ml-auto text-xs font-semibold text-teal-700 bg-teal-100 rounded-full px-2.5 py-1">
                Resolution
              </span>
            </div>
            <ul className="space-y-3">
              {resolutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-sm text-teal-700 font-medium">Result: Happy customers, 92% resolution rate, less agent burnout.</p>
            </div>
          </div>
        </div>

        {/* Arrow connector */}
        <div className="flex items-center justify-center mt-10">
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 text-sm text-gray-600 font-medium">
            <span>Deflection → Resolution</span>
            <ArrowRight className="w-4 h-4 text-teal-600" />
            <span className="text-teal-700 font-semibold">That's the Resolvo difference</span>
          </div>
        </div>
      </div>
    </section>
  )
}
