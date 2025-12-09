import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight, Heart, Dna, Star, Shield, Sparkles } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Sankofa Family Medicine membership tiers and pricing. Virtual primary care starting at $149/month. Founding members get Tier 3 benefits at Tier 2 pricing. Direct primary care in Washington State.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Founding Member Hero */}
      <section className="relative pt-32 pb-20 bg-sfm-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/sfm-background.png" 
            alt="" 
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-sfm-gold/20 border border-sfm-gold/30 text-sfm-gold text-sm tracking-wide mb-6">
            FOUNDING MEMBER OPPORTUNITY
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-6">
            First 30 Members Get<br />
            <span className="text-sfm-gold">Tier 3 Benefits at Tier 2 Pricing</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Lock in premium access, genetic testing, and direct physician cell access, all at our 
            mid-tier price. This offer is locked for life for founding members.
          </p>
          <Link href="/contact" className="btn-primary">
            Claim Your Founding Spot
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Membership Tiers</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">
              Choose Your Level of Care
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Every tier includes unlimited virtual access to Dr. Nkrumah. 
              Choose the depth of precision medicine that fits your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="card flex flex-col">
              <Heart className="w-10 h-10 text-sfm-azure mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-2xl text-sfm-navy mb-1">Continuity Care</h3>
              <p className="text-gray-400 text-sm mb-6">Premium virtual primary care</p>
              
              <div className="mb-6">
                <span className="font-display text-4xl text-sfm-navy">$149</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Unlimited virtual visits',
                  '24-48 hour secure messaging',
                  '2 wellness visits/year',
                  'Care coordination',
                  'Prescription management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted text-sm">
                    <Check className="w-4 h-4 text-sfm-azure mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-secondary text-center">Join Waitlist</Link>
            </div>

            {/* Tier 2 - Featured */}
            <div className="card-featured flex flex-col scale-[1.02] shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-sfm-gold text-white text-xs font-medium tracking-wide">
                  FOUNDING MEMBER OFFER
                </span>
              </div>
              
              <Dna className="w-10 h-10 text-sfm-gold mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-2xl text-sfm-navy mb-1">Precision Care</h3>
              <p className="text-gray-400 text-sm mb-6">Genetic insights + AI-powered care</p>
              
              <div className="mb-6">
                <span className="font-display text-4xl text-sfm-gold">$249</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Everything in Continuity Care',
                  'Nexus DNA Panel included',
                  'Genetic interpretation',
                  'AI-generated health roadmap',
                  'Pharmacogenomic guidance',
                  'Priority scheduling',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted text-sm">
                    <Check className="w-4 h-4 text-sfm-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary text-center">Join Precision Care</Link>
            </div>

            {/* Tier 3 */}
            <div className="card flex flex-col">
              <Star className="w-10 h-10 text-sfm-navy mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-2xl text-sfm-navy mb-1">Legacy Health</h3>
              <p className="text-gray-400 text-sm mb-6">White-glove concierge care</p>
              
              <div className="mb-6">
                <span className="font-display text-4xl text-sfm-navy">$449</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Everything in Precision Care',
                  'Direct physician cell access',
                  'Same-day appointments',
                  'Extended visit times',
                  'Annual labs included',
                  'Family health planning',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted text-sm">
                    <Check className="w-4 h-4 text-sfm-navy mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-secondary text-center">Join Waitlist</Link>
            </div>
          </div>

          {/* Payment Note */}
          <div className="mt-12 text-center">
            <p className="text-muted text-sm">
              All memberships are cash-pay. We accept credit/debit cards and HSA/FSA via Stripe.{' '}
              <Link href="/faq" className="text-sfm-azure hover:text-sfm-navy underline">
                See FAQ for payment details
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Programs */}
      <section className="py-24 bg-sfm-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Transformation Programs</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">
              Targeted Health Outcomes
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Intensive programs designed for measurable transformation. Available to members and non-members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cardiometabolic Reset */}
            <div className="bg-white border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-xs tracking-wide text-sfm-azure font-medium">12 WEEKS</span>
              </div>
              <h3 className="font-display text-xl text-sfm-navy mb-2">Cardiometabolic Reset</h3>
              <p className="text-muted text-sm mb-6">
                Blood pressure, cholesterol, and metabolic markers: transformed.
              </p>
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-xs text-gray-400 mb-2">Expected Outcomes</p>
                <p className="text-sm text-muted">BP improvement: 12-15 points</p>
                <p className="text-sm text-muted">A1c reduction: 0.5-0.8</p>
              </div>
              <p className="font-display text-2xl text-sfm-navy mb-4">$1,495</p>
            </div>

            {/* Weight & Metabolic */}
            <div className="bg-white border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-sfm-gold" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-xs tracking-wide text-sfm-gold font-medium">12-16 WEEKS</span>
              </div>
              <h3 className="font-display text-xl text-sfm-navy mb-2">Weight & Metabolic</h3>
              <p className="text-muted text-sm mb-6">
                Evidence-based weight management with metabolic optimization.
              </p>
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-xs text-gray-400 mb-2">Includes</p>
                <p className="text-sm text-muted">5 physician visits</p>
                <p className="text-sm text-muted">Enhanced messaging</p>
              </div>
              <p className="font-display text-2xl text-sfm-navy mb-4">$1,895</p>
            </div>

            {/* Genomic Insight */}
            <div className="bg-white border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Dna className="w-6 h-6 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-xs tracking-wide text-gray-400 font-medium">ONE-TIME</span>
              </div>
              <h3 className="font-display text-xl text-sfm-navy mb-2">Genomic Insight</h3>
              <p className="text-muted text-sm mb-6">
                Have 23andMe or Ancestry? We&apos;ll unlock what they didn&apos;t tell you.
              </p>
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-xs text-gray-400 mb-2">What You Get</p>
                <p className="text-sm text-muted">Clinical interpretation</p>
                <p className="text-sm text-muted">Actionable insights</p>
              </div>
              <p className="font-display text-2xl text-sfm-navy mb-4">$295</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Enroll in a Program
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Non-Member Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm tracking-[0.2em] uppercase mb-4">Non-Member Visits</p>
            <h2 className="font-display text-3xl text-sfm-navy mb-4">
              Individual Visit Pricing
            </h2>
            <p className="text-gray-400 text-sm">
              Not ready for membership? Individual visits available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Primary Care Visit', duration: '30 min', price: '$179' },
              { name: 'Complex Visit', duration: '45 min', price: '$249' },
              { name: 'Comprehensive Visit', duration: '60 min', price: '$349' },
              { name: 'Genetic Interpretation', duration: 'Session', price: '$395' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-4 border border-gray-100">
                <div>
                  <p className="text-sfm-navy font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.duration}</p>
                </div>
                <p className="font-display text-xl text-sfm-navy">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Note */}
      <section className="py-12 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted text-sm">
            <Shield className="w-4 h-4 inline mr-2 text-sfm-azure" aria-hidden="true" />
            All services are delivered via HIPAA-compliant telehealth. Your health information is encrypted and secure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Join the founding cohort and lock in Tier 3 benefits at Tier 2 pricing, for life.
          </p>
          <Link href="/contact" className="btn-primary">
            Join Waitlist
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
