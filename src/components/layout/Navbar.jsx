import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { AccessContext } from '../../context/AccessContext'

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Customers', href: '/customers' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { openRequestAccess } = useContext(AccessContext)

  const handleRequestAccess = () => {
    openRequestAccess()
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-soft border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/Resolvo Logo.png"
              alt="Resolvo Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Resolvo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${active
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openRequestAccess}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-b border-gray-100`}
      >
        <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active ? 'text-teal-700 bg-teal-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-3 pb-2">
            <button
              onClick={handleRequestAccess}
              className="block w-full px-5 py-2.5 text-sm font-semibold rounded-xl bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-200 text-center"
            >
              Start Free Trial
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
//               to="/pricing"
//               onClick={() => setIsOpen(false)}
//               className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               Sign in
//             </Link>
//             <Link
//               to="/pricing"
//               onClick={() => setIsOpen(false)}
//               className="block px-5 py-2.5 text-sm font-semibold rounded-xl bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.98] shadow-sm hover:shadow-md transition-all duration-200 text-center"
//             >
//               Start Free
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )
// }
