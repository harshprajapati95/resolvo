import { useContext, useState } from 'react'
import { X, Mail, User, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { AccessContext } from '../../context/AccessContext'

export default function RequestAccessModal() {
  const { requestAccessOpen, closeRequestAccess, submittedEmail, markEmailSubmitted } = useContext(AccessContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!name.trim()) {
      setError('Company name is required')
      return
    }
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))
      
      // In production, this would call an API endpoint like:
      // POST /api/request-access
      // { name, email, timestamp, userAgent, etc }
      // The API would send an email to boss with the request
      
      markEmailSubmitted(email)
      
      // Reset form
      setTimeout(() => {
        setName('')
        setEmail('')
      }, 1500)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    if (!loading) {
      closeRequestAccess()
    }
  }

  if (!requestAccessOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full animate-fade-up">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={loading}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        {!submittedEmail ? (
          <>
            {/* Header */}
            <div className="px-6 pt-8 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">Request Access</h2>
              <p className="text-sm text-gray-500 mt-1">
                Start your 14-day free trial. No credit card required.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
              {/* Error message */}
              {error && (
                <div className="flex gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your company name"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Benefits */}
              <div className="py-3 px-3 bg-teal-50 rounded-lg">
                <p className="text-xs font-semibold text-teal-900 mb-2">What you'll get:</p>
                <ul className="space-y-1 text-xs text-teal-700">
                  <li>✓ Full access to all features</li>
                  <li>✓ 14-day free trial</li>
                  <li>✓ Personal onboarding support</li>
                </ul>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500">
                By requesting access, you agree to our{' '}
                <a href="#" className="text-teal-600 hover:underline">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-teal-600 hover:underline">
                  Privacy Policy
                </a>
              </p>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? 'Sending request...' : 'Request Free Trial'}
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="px-6 pt-8 pb-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request Sent!
              </h2>
              <p className="text-gray-600 mb-4">
                We've received your request for a free trial. Our team will review it and contact you at{' '}
                <span className="font-semibold text-gray-900">{submittedEmail}</span> within 24 hours.
              </p>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                <p className="text-sm text-blue-900">
                  <strong>What's next?</strong> Check your email for confirmation and next steps.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 active:scale-[0.98] transition-all"
              >
                Got it, thanks!
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
