import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Calendar, Package, Zap, Settings, Download, BarChart3 } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  if (!user) {
    return null
  }

  const trialEndsAt = new Date(user.trialEndsAt)
  const daysRemaining = Math.ceil((trialEndsAt - new Date()) / (1000 * 60 * 60 * 24))

  return (
    <div className="pt-16 min-h-screen bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-lg text-gray-600">
                Here's what's happening with your Resolvo account
              </p>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Trial Status */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {daysRemaining > 0 ? 'Free Trial Active' : 'Trial Expired'}
              </h2>
              <p className="text-gray-700 mb-4">
                {daysRemaining > 0
                  ? `You have ${daysRemaining} days left in your free trial. Upgrade anytime to keep your data.`
                  : 'Your trial has expired. Upgrade to continue using Resolvo.'}
              </p>
              {daysRemaining > 0 && (
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    href="/pricing"
                  >
                    Upgrade Plan
                  </Button>
                  <Button variant="secondary">
                    Contact Sales
                  </Button>
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-teal-600 mb-1">
                {Math.max(0, daysRemaining)}
              </div>
              <p className="text-sm text-gray-600">Days remaining</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BarChart3, label: 'Tickets Resolved', value: '0', color: 'teal' },
            { icon: Zap, label: 'AI Automations', value: '0', color: 'blue' },
            { icon: Package, label: 'Knowledge Base', value: '0 docs', color: 'purple' },
            { icon: Calendar, label: 'Last Updated', value: 'Today', color: 'orange' },
          ].map((stat, i) => {
            const Icon = stat.icon
            const colorClasses = {
              teal: 'bg-teal-50 text-teal-600',
              blue: 'bg-blue-50 text-blue-600',
              purple: 'bg-purple-50 text-purple-600',
              orange: 'bg-orange-50 text-orange-600',
            }
            return (
              <div key={i} className="p-5 rounded-xl bg-white border border-gray-200 shadow-soft">
                <div className={`w-10 h-10 rounded-lg ${colorClasses[stat.color]} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            )
          })}
        </div>

        {/* Getting Started */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Setup Checklist */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-soft p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Getting Started</h3>
            <div className="space-y-3">
              {[
                { title: 'Connect your knowledge base', done: false },
                { title: 'Set up automation rules', done: false },
                { title: 'Configure escalation settings', done: false },
                { title: 'Run a test resolution', done: false },
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    defaultChecked={item.done}
                    className="rounded border-gray-300 cursor-pointer"
                  />
                  <span className={`text-sm ${item.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {item.title}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-soft p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Account Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-medium text-gray-900">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Plan</p>
                <div className="flex items-center gap-2">
                  <Badge variant="teal" size="md">
                    Free Trial
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Member Since</p>
                <p className="font-medium text-gray-900">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-soft p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '📚', title: 'Documentation', desc: 'Learn how to use Resolvo' },
              { icon: '🎥', title: 'Video Tutorials', desc: 'Step-by-step guides' },
              { icon: '💬', title: 'Community', desc: 'Chat with other users' },
            ].map((resource, i) => (
              <a
                key={i}
                href="#"
                className="p-4 rounded-xl border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all group"
              >
                <div className="text-2xl mb-2">{resource.icon}</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-teal-700 mb-1">
                  {resource.title}
                </h4>
                <p className="text-sm text-gray-600">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Unlock Pro Features</h3>
              <p className="opacity-90">
                Upgrade to access advanced analytics, custom integrations, and dedicated support.
              </p>
            </div>
            <Button variant="white" href="/pricing">
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
