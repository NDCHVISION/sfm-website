import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Direct Primary Care? | Traditional vs. Sankofa DPC Comparison',
  description: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice. Compare: 15 min vs 45 min visits, 26-day waits vs same-day access, 2,300 patients vs 450. See why DPC solves healthcare fragmentation.',
  keywords: ['direct primary care comparison', 'DPC vs traditional', 'Washington State DPC', 'Medicine That Remembers', 'healthcare fragmentation', 'virtual primary care'],
  openGraph: {
    title: 'Why Direct Primary Care? | Traditional vs. Sankofa DPC Comparison',
    description: 'See the evidence-based differences: 15 min vs 45 min visits, 26-day waits vs same-day access. Direct primary care solves healthcare fragmentation.',
    url: 'https://sankofafamilymedicine.com/compare',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/compare',
  },
}

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: 'Healthcare Model Comparison',
      description: 'Side-by-side evidence-based comparison between traditional primary care and Direct Primary Care',
      specialty: { '@type': 'MedicalSpecialty', name: 'Family Medicine' },
      publisher: {
        '@type': 'MedicalBusiness',
        name: 'Sankofa Family Medicine',
        areaServed: { '@type': 'State', name: 'Washington' },
        priceRange: '$149-$449/month',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long is a typical primary care appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional primary care averages 15-18 minutes. Direct Primary Care practices like Sankofa offer 30-60 minute visits.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many patients does a typical doctor have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional practices average 2,300+ patients per physician. DPC practices average 445 patients, enabling personalized care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I text my doctor directly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In traditional care, patients use patient portals with 24-72 hour response times. 82% of DPC practices offer direct physician messaging with same-day responses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do labs cost with Direct Primary Care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DPC practices offer wholesale lab pricing, often 80-90% less than hospital or insurance-negotiated rates.',
          },
        },
      ],
    },
  ],
}

const comparisonData = [
  {
    category: 'Visit Duration',
    context: 'Time with your physician',
    traditional: { value: '15 min', label: 'median appointment', isNegative: false },
    sankofa: { value: '30-60 min', label: 'unhurried visits', isPositive: true },
    highlight: true,
  },
  {
    category: 'Appointment Wait',
    context: 'Days until you are seen',
    traditional: { value: '26+ days', label: 'national average', isNegative: false },
    sankofa: { value: 'Same day', label: 'or next day', isPositive: true },
    highlight: false,
  },
  {
    category: 'Patients per Doctor',
    context: 'How many share your physician',
    traditional: { value: '2,300+', label: 'patients per physician', isNegative: false },
    sankofa: { value: '<500', label: 'patients per physician', isPositive: true },
    highlight: true,
  },
  {
    category: 'Your Physician',
    context: 'Who you see each visit',
    traditional: { text: 'Whoever is available', isNegative: true },
    sankofa: { text: 'Dr. Nkrumah, always', isPositive: true },
    highlight: false,
  },
  {
    category: 'Message Your Doctor',
    context: 'How you reach your physician',
    traditional: { text: 'Patient portal, 24-72hr', isNegative: true },
    sankofa: { text: 'Direct text, same day', isPositive: true },
    highlight: true,
  },
  {
    category: 'After Hours Care',
    context: 'When you need help at night',
    traditional: { text: 'ER or wait until Monday', isNegative: true },
    sankofa: { text: '24/7 physician access', isPositive: true },
    highlight: false,
  },
  {
    category: 'Lab Work Pricing',
    context: 'What routine labs cost you',
    traditional: { value: '$100+', label: 'insurance-negotiated', isNegative: false },
    sankofa: { value: '$5-20', label: 'wholesale pricing', isPositive: true },
    highlight: true,
  },
  {
    category: 'Prior Authorization',
    context: 'Insurance approval delays',
    traditional: { text: 'Days to weeks waiting', isNegative: true },
    sankofa: { text: 'None required', isPositive: true },
    highlight: false,
  },
  {
    category: 'Monthly Cost',
    context: 'What you pay for access',
    traditional: { text: 'Unpredictable copays and bills', isNegative: true },
    sankofa: { text: 'One transparent fee', isPositive: true },
    highlight: true,
  },
  {
    category: 'When You Call',
    context: 'The phone experience',
    traditional: { text: 'Phone tree, hold, callback', isNegative: true },
    sankofa: { text: 'Direct line to Dr. Nkrumah', isPositive: true },
    highlight: false,
  },
]

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-sfm-navy via-sfm-navy to-[#070705]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Side by Side
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
            The <em className="text-sfm-gold italic">Evidence</em> Speaks
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Every metric below is drawn from peer-reviewed research. The difference is not subtle.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-b from-[#070705] to-sfm-navy">
        <div className="max-w-5xl mx-auto px-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full" role="table" aria-label="Healthcare comparison">
              <thead>
                <tr>
                  <th className="w-[28%] p-6 text-left text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                    Category
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40 bg-white/[0.02]">
                    <span className="block text-white/60">Typical Insurance-Based Clinic</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white/50 mt-2">
                      The Norm
                    </span>
                  </th>
                  <th className="w-[36%] p-6 text-center text-xs font-semibold tracking-[0.2em] uppercase text-sfm-gold bg-sfm-gold/[0.08]">
                    <span className="block">Sankofa Direct Primary Care</span>
                    <span className="block font-display text-2xl font-normal tracking-normal normal-case text-white mt-2">
                      The Standard
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={row.category}
                    className={`border-t border-white/[0.04] transition-colors hover:bg-white/[0.02] ${
                      row.highlight ? 'bg-sfm-gold/[0.02]' : ''
                    }`}
                  >
                    <td className="p-6 text-left">
                      <div className="font-display text-lg text-white mb-1">{row.category}</div>
                      <div className="text-sm text-white/40 italic">{row.context}</div>
                    </td>
                    <td className={`p-6 text-center bg-white/[0.02] ${row.highlight ? 'bg-white/[0.03]' : ''}`}>
                      <div className="flex items-center justify-center gap-3">
                        {row.traditional.isNegative && (
                          <X className="w-5 h-5 text-white/25 flex-shrink-0" strokeWidth={2.5} />
                        )}
                        <span className="text-white/50">
                          {row.traditional.value ? (
                            <>
                              <span className="block text-2xl font-display font-medium text-white/50">
                                {row.traditional.value}
                              </span>
                              <span className="text-sm opacity-70">{row.traditional.label}</span>
                            </>
                          ) : (
                            row.traditional.text
                          )}
                        </span>
                      </div>
                    </td>
                    <td className={`p-6 text-center bg-sfm-gold/[0.08] ${row.highlight ? 'bg-sfm-gold/[0.12]' : ''}`}>
                      <div className="flex items-center justify-center gap-3">
                        {row.sankofa.isPositive && !row.sankofa.value && (
                          <Check className="w-5 h-5 text-sfm-gold flex-shrink-0" strokeWidth={2.5} />
                        )}
                        <span className="text-white">
                          {row.sankofa.value ? (
                            <>
                              <span className="block text-2xl font-display font-medium text-sfm-gold">
                                {row.sankofa.value}
                              </span>
                              <span className="text-sm opacity-70">{row.sankofa.label}</span>
                            </>
                          ) : (
                            row.sankofa.text
                          )}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row) => (
              <div 
                key={row.category}
                className={`rounded-2xl overflow-hidden border border-white/10 ${
                  row.highlight ? 'border-sfm-gold/20' : ''
                }`}
              >
                <div className="bg-white/[0.03] p-4 text-center">
                  <div className="font-display text-lg text-white">{row.category}</div>
                  <div className="text-sm text-white/40 italic">{row.context}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 bg-white/[0.02] text-center border-r border-white/[0.04]">
                    <div className="text-xs uppercase tracking-wider text-white/30 mb-2">Insurance-Based</div>
                    <div className="flex items-center justify-center gap-2">
                      {row.traditional.isNegative && (
                        <X className="w-4 h-4 text-white/25" strokeWidth={2.5} />
                      )}
                      <span className="text-white/50 text-sm">
                        {row.traditional.value ? (
                          <>
                            <span className="block text-xl font-display">{row.traditional.value}</span>
                            <span className="text-xs opacity-70">{row.traditional.label}</span>
                          </>
                        ) : (
                          row.traditional.text
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-sfm-gold/[0.08] text-center">
                    <div className="text-xs uppercase tracking-wider text-sfm-gold mb-2">Sankofa DPC</div>
                    <div className="flex items-center justify-center gap-2">
                      {row.sankofa.isPositive && !row.sankofa.value && (
                        <Check className="w-4 h-4 text-sfm-gold" strokeWidth={2.5} />
                      )}
                      <span className="text-white text-sm">
                        {row.sankofa.value ? (
                          <>
                            <span className="block text-xl font-display text-sfm-gold">{row.sankofa.value}</span>
                            <span className="text-xs opacity-70">{row.sankofa.label}</span>
                          </>
                        ) : (
                          row.sankofa.text
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Evidence Footer */}
          <div className="mt-12 p-8 bg-white/[0.02] rounded-xl border border-white/[0.04] text-center">
            <p className="text-white/40 text-sm leading-relaxed">
              Statistics sourced from PMC, AAFP, AMN Healthcare, Society of Actuaries, and the Health Tracking Household Survey.
            </p>
          </div>

          {/* Lead Magnet - Download Guide */}
          <div className="mt-8 p-8 bg-gradient-to-r from-sfm-gold/10 to-sfm-azure/10 rounded-2xl border border-sfm-gold/20">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-sfm-gold/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-sfm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl text-white mb-2">Not Sure If DPC Is Right for You?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Read our free guide: <strong className="text-white">"How Healthy Is Your Relationship With Your Primary Care Doctor?"</strong> An interactive self-assessment to discover what kind of care you&apos;re getting.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/resources/dpc-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-gold hover:bg-sfm-gold-light text-sfm-navy font-medium rounded-lg transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Read Free Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden text-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sfm-gold/10 via-sfm-azure/10 to-sfm-gold/5" />
            <div className="absolute inset-0 border border-sfm-gold/20 rounded-3xl" />
            
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Ready for Medicine That Remembers™?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Founding members receive Tier 3 benefits at Tier 2 pricing, locked for life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Become a Founding Member
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-secondary-white">
                  View Membership Tiers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
