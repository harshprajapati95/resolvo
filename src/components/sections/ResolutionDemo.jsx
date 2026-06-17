import { useState } from 'react'
import { Play, BookOpen, CheckCircle2, Loader2, User, Bot, Clock } from 'lucide-react'
import { demoTicket, demoKbSources, demoResponse } from '../../data/mockData'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const STEPS = ['idle', 'ticket', 'reading', 'responding', 'resolved']

export default function ResolutionDemo() {
  const [step, setStep] = useState('idle')
  const [displayedResponse, setDisplayedResponse] = useState('')

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

  async function runDemo() {
    setStep('ticket')
    setDisplayedResponse('')
    await sleep(1200)
    setStep('reading')
    await sleep(2200)
    setStep('responding')
    // Typewriter effect
    const text = demoResponse
    for (let i = 0; i <= text.length; i += 3) {
      setDisplayedResponse(text.slice(0, i))
      await sleep(18)
    }
    setDisplayedResponse(text)
    await sleep(400)
    setStep('resolved')
  }

  function reset() {
    setStep('idle')
    setDisplayedResponse('')
  }

  return (
    <section className="py-24 bg-gray-950" id="demo">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Live Demo</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Watch Resolvo resolve a ticket
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Click "Simulate Ticket" to see how Resolvo reads your knowledge base and resolves a real support request in seconds.
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
          {/* Demo chrome bar */}
          <div className="bg-gray-800 border-b border-gray-700 px-5 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-400 text-xs ml-2 font-medium">Resolvo Resolution Engine</span>
            {step === 'resolved' && (
              <Badge variant="resolved" size="xs" className="ml-auto">✓ Ticket Resolved</Badge>
            )}
            {step === 'reading' && (
              <Badge variant="teal" size="xs" className="ml-auto">
                <Loader2 className="w-3 h-3 animate-spin" /> Reading KB...
              </Badge>
            )}
            {step === 'responding' && (
              <Badge variant="blue" size="xs" className="ml-auto">
                <Loader2 className="w-3 h-3 animate-spin" /> Generating response...
              </Badge>
            )}
          </div>

          <div className="p-6 lg:p-8">
            {/* IDLE */}
            {step === 'idle' && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-teal-600/20 flex items-center justify-center mb-5">
                  <Play className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Resolution Demo</h3>
                <p className="text-gray-400 text-sm max-w-sm mb-8">
                  See Resolvo autonomously handle a real support ticket — from receipt to resolution.
                </p>
                <Button variant="primary" size="lg" onClick={runDemo} id="simulate-ticket-btn">
                  <Play className="w-4 h-4" />
                  Simulate Ticket
                </Button>
              </div>
            )}

            {/* TICKET RECEIVED */}
            {step !== 'idle' && (
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left panel — Incoming ticket */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Incoming Ticket</span>
                    {step === 'ticket' && (
                      <span className="ml-auto text-xs text-amber-400 font-medium flex items-center gap-1">
                        <Loader2 className="w-3 h-3 animate-spin" /> Analyzing...
                      </span>
                    )}
                  </div>
                  <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div>
                        <p className="text-white font-semibold text-sm">{demoTicket.subject}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{demoTicket.email} · {demoTicket.plan}</p>
                      </div>
                      <Badge variant="pending" size="xs">
                        <Clock className="w-3 h-3" />
                        {demoTicket.submitted}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed border-t border-gray-700 pt-4">
                      {demoTicket.message}
                    </p>
                  </div>

                  {/* KB reading step */}
                  {(step === 'reading' || step === 'responding' || step === 'resolved') && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-teal-400" />
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Knowledge Base Sources</span>
                      </div>
                      <div className="space-y-2">
                        {demoKbSources.map((src, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 bg-teal-900/30 border border-teal-700/40 rounded-xl px-3 py-2.5"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span className="text-teal-300 text-xs">{src}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right panel — AI Response */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">AI Response</span>
                    {step === 'resolved' && (
                      <Badge variant="resolved" size="xs" className="ml-auto">✓ Resolved</Badge>
                    )}
                  </div>
                  <div className={`bg-gray-800 rounded-2xl border p-5 min-h-[280px] transition-colors duration-500 ${
                    step === 'resolved' ? 'border-emerald-600/50' : 'border-gray-700'
                  }`}>
                    {(step === 'responding' || step === 'resolved') && displayedResponse ? (
                      <pre className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                        {displayedResponse}
                        {step === 'responding' && (
                          <span className="inline-block w-0.5 h-3.5 bg-teal-400 ml-0.5 animate-pulse" />
                        )}
                      </pre>
                    ) : step === 'reading' ? (
                      <div className="flex flex-col items-center justify-center h-full py-8">
                        <Loader2 className="w-8 h-8 text-teal-400 animate-spin mb-3" />
                        <p className="text-gray-400 text-sm">Reading knowledge base...</p>
                        <p className="text-gray-600 text-xs mt-1">Grounding response in your policies</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full py-8">
                        <Loader2 className="w-8 h-8 text-teal-400 animate-spin mb-3" />
                        <p className="text-gray-400 text-sm">Classifying intent...</p>
                      </div>
                    )}
                  </div>

                  {/* Resolved badge */}
                  {step === 'resolved' && (
                    <div className="mt-4 flex items-center gap-3 bg-emerald-900/30 border border-emerald-700/40 rounded-2xl px-4 py-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-emerald-400 text-sm font-semibold">Ticket Resolved Automatically</p>
                        <p className="text-emerald-600 text-xs">No human agent required · Resolved in ~45s</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action buttons */}
            {step !== 'idle' && (
              <div className="mt-6 flex justify-center gap-3">
                {step === 'resolved' && (
                  <Button variant="primary" size="md" onClick={reset}>
                    Try Again
                  </Button>
                )}
                <Button variant="ghost" size="md" className="text-gray-400 hover:text-gray-200" onClick={reset}>
                  Reset
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
