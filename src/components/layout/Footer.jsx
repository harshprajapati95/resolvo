import { Zap, Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#product' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Integrations', href: '#product' },
    { label: 'Changelog', href: '#product' },
  ],
  Solutions: [
    { label: 'SaaS Teams', href: '#solutions' },
    { label: 'E-commerce', href: '#solutions' },
    { label: 'Enterprise', href: '#solutions' },
    { label: 'Startups', href: '#solutions' },
  ],
  Company: [
    { label: 'Customers', href: '#customers' },
    { label: 'Blog', href: '#hero' },
    { label: 'Careers', href: '#hero' },
    { label: 'About', href: '#hero' },
  ],
  Legal: [
    { label: 'Privacy', href: '#hero' },
    { label: 'Terms', href: '#hero' },
    { label: 'Security', href: '#hero' },
    { label: 'DPA', href: '#hero' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">Resolvo</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              AI customer support automation that resolves, not just responds. Built for modern support teams.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="/"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 Resolvo. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="/" className="hover:text-teal-400 transition-colors">Privacy</a>
            <a href="/" className="hover:text-teal-400 transition-colors">Terms</a>
            <a href="/" className="hover:text-teal-400 transition-colors">Security</a>
            <a href="/" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
