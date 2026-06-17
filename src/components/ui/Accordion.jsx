import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen ? 'border-teal-200 shadow-soft' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <button
              id={`faq-${item.id}`}
              className="w-full flex items-center justify-between px-6 py-4 text-left focus-visible:outline-none"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-sm md:text-base pr-4 ${isOpen ? 'text-teal-700' : 'text-gray-800'}`}>
                {item.question}
              </span>
              <ChevronDown
                className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-teal-600' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
