import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function CTABanner() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-brand rounded-3xl p-12 sm:p-16 relative overflow-hidden shadow-glow">
          {/* Decorations */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">14-day free trial · No credit card</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to resolve, not just respond?
            </h2>
            <p className="text-teal-100 text-lg mb-10 max-w-xl mx-auto">
              Join hundreds of support teams already using Resolvo to hit 90%+ resolution rates — and finally give their agents breathing room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="xl" href="/pricing">
                Start Free Today
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="white-outline" size="xl" href="/product">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
