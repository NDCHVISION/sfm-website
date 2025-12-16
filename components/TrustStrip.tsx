import Link from 'next/link'
import { Shield, Dna, CreditCard, Lock } from 'lucide-react'

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Shield,
      label: 'HIPAA-Compliant Telehealth',
      href: '/privacy',
    },
    {
      icon: Dna,
      label: 'Genetics & Lab Expertise',
      href: '/services/what-we-cover',
    },
    {
      icon: CreditCard,
      label: 'HSA/FSA Eligible',
      href: '/services',
    },
    {
      icon: Lock,
      label: 'Washington Licensed & Certified',
      href: '/about',
    },
  ]

  return (
    <section className="py-6 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 text-sfm-navy hover:text-sfm-gold transition-colors duration-300 cursor-pointer"
                aria-label={item.label}
              >
                <div className="w-10 h-10 rounded-lg bg-sfm-cream flex items-center justify-center group-hover:bg-sfm-azure/10 transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-sfm-azure group-hover:text-sfm-gold transition-colors duration-300"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm font-medium hidden sm:inline whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
