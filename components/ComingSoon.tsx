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
    <div className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-sfm-cream via-white to-blue-50/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-sfm-gold/10 rounded-full text-sfm-gold">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-6xl text-sfm-navy mb-6">
          {title}
        </h1>

        {/* Description */}
        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-block mb-8">
          <span className="inline-block px-4 py-2 bg-sfm-gold text-white font-semibold text-sm">
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
        <div className="p-8 bg-sfm-navy/5 border border-sfm-navy/10">
          <h2 className="font-semibold text-sfm-navy mb-3 text-lg">In the Meantime</h2>
          <p className="text-muted mb-4">
            Explore our current offerings or reach out to learn more about Sankofa Family Medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="text-sfm-azure hover:text-sfm-navy transition-colors font-medium flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
            >
              View Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link 
              href="/about" 
              className="text-sfm-azure hover:text-sfm-navy transition-colors font-medium flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
            >
              Learn Our History <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

