import { trustedCompanies } from '../../data/mockData'

export default function TrustedBy() {
  const doubled = [...trustedCompanies, ...trustedCompanies]

  return (
    <section className="py-16 border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by fast-growing teams at
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="logo-scroll-track">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-8 flex items-center justify-center"
            >
              <div className="flex items-center gap-2.5 text-gray-400 hover:text-gray-600 transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-500">{name[0]}</span>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
