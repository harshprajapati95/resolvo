import { useContext, useState } from 'react'
import { X, Mail, Lock, User, AlertCircle, CheckCircle2 } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'

export default function SignUpModal() {
  const { signup, signUpOpen, setSignUpOpen, setSignInOpen } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (!agreeTerms) {
      setError('You must agree to the Terms & Conditions')
      return
    }

    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 600)) // Simulate API delay
      signup(email, password, name)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSwitchToSignIn = () => {
    setSignUpOpen(false)
    setSignInOpen(true)
  }

  if (!signUpOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setSignUpOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full animate-fade-up">
        {/* Close button */}
        <button
          onClick={() => setSignUpOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        {/* Header */}
        <div className="px-6 pt-8 pb-2">
          <h2 className="text-2xl font-bold text-gray-900">Start your free trial</h2>
          <p className="text-sm text-gray-500 mt-1">14 days, no credit card required</p>
        </div>

        {/* Benefits */}
        <div className="px-6 py-3 space-y-1.5">
          {['Full access to all features', 'Dedicated support', 'Cancel anytime'].map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-xs text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
              {benefit}
            </div>
          ))}
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

          {/* Success message */}
          {showSuccess && (
            <div className="flex gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <p className="text-sm text-green-600">Account created! Welcome aboard 🎉</p>
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Full name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                disabled={loading}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email address
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                disabled={loading}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">At least 6 characters</p>
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-1 rounded border-gray-300"
              disabled={loading}
            />
            <span className="text-xs text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-teal-600 hover:underline font-medium">
                Terms & Conditions
              </a>
              {' '}and{' '}
              <a href="#" className="text-teal-600 hover:underline font-medium">
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Start free trial'}
          </button>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or with</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm disabled:opacity-50"
              disabled={loading}
            >
              Google
            </button>
            <button
              type="button"
              className="py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm disabled:opacity-50"
              disabled={loading}
            >
              GitHub
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={handleSwitchToSignIn}
              className="text-teal-600 font-semibold hover:underline"
              disabled={loading}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
