import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ComingSoonProps {
  title: string
  description: string
  icon: React.ReactNode
  expectedDate?: string
}

export default function ComingSoon({ title, description, icon, expectedDate }: ComingSoonProps) {
  return (
    <div className="min-h-screen pt-40 pb-16 bg-gradient-to-br from-sfm-cream via-white to-sfm-cream/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-10">
          <div className="p-8 bg-gradient-to-br from-sfm-gold/20 to-sfm-gold/5 rounded-3xl text-sfm-gold shadow-lg shadow-sfm-gold/10">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-6xl text-sfm-navy mb-6">
          {title}
        </h1>

        {/* Description */}
        <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-block mb-8">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-sfm-gold to-amber-500 text-sfm-navy font-semibold text-sm rounded-full shadow-lg shadow-sfm-gold/25">
            Coming Soon
          </span>
        </div>

        {/* Expected Date */}
        {expectedDate && (
          <p className="text-lg text-sfm-azure mb-12 font-medium">
            Expected: {expectedDate}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Join Waitlist <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="/"
            className="btn-secondary"
          >
            Back to Home
          </Link>
        </div>

        {/* Info Box */}
        <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-lg">
          <h2 className="font-display text-2xl text-sfm-navy mb-4">In the Meantime</h2>
          <p className="text-muted mb-6">
            Explore our current offerings or reach out to learn more about Sankofa Family Medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sfm-cream text-sfm-azure hover:bg-sfm-azure hover:text-white rounded-xl transition-all duration-300 font-medium"
            >
              View Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sfm-cream text-sfm-azure hover:bg-sfm-azure hover:text-white rounded-xl transition-all duration-300 font-medium"
            >
              Learn Our Story <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

