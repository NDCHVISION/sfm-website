import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MessageCircle, Shield, Heart, Stethoscope } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sankofa Family Medicine | Premium Virtual Primary Care in Washington State',
  description: 'Medicine That Remembers™: Premium virtual primary care built on continuity and precision. One physician who knows your history. HIPAA-compliant telehealth for adults across Washington.',
}

export default function HomePage() {
  return (
    <>
{/* Hero - Single clear message */}
<section className="relative min-h-screen flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/sfm-background.png"
      alt="Dr. Yaw Nkrumah seated at a warm wood desk in a bright, modern medical office with Sankofa bird sculpture"
      fill
      priority
      className="object-cover"
    />

    {/* Stronger solid overlay for guaranteed contrast */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-sfm-navy/60" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
    {/* Text card for clarity on all screens */}
    <div className="max-w-xl bg-sfm-navy/90 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm animate-fade-in">
      <p className="text-sfm-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-medium">
        Virtual Primary Care | Washington State
      </p>

      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
        Medicine That
        <br />
        Remembers<span className="tm">™</span>
      </h1>

      <p className="text-base md:text-lg text-white/85 mb-10 leading-relaxed">
        Premium virtual primary care built on continuity, precision, and legacy. One physician who
        knows your history. Every visit. HIPAA-compliant telehealth for adults across Washington State.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact" className="btn-primary">
          Join Waitlist
          <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
        </Link>
        <Link href="/services" className="btn-secondary-white">
          View Services &amp; Pricing
        </Link>
      </div>

      {/* Founding Member Badge */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-sfm-gold/20 border-2 border-sfm-gold/40 flex items-center justify-center">
              <span className="text-xs text-sfm-gold font-bold">30</span>
            </div>
          </div>
          <p className="text-white/60 text-sm">
            <span className="text-sfm-gold font-medium">Limited founding spots</span> — Lock in Tier 3 benefits at Tier 2 pricing
          </p>
        </div>
      </div>
    </div>
  </div>
  
  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
      <div className="w-1 h-2 bg-white/50 rounded-full" />
    </div>
  </div>
</section>

      {/* Patient Promises - Ethics as benefits */}
      <section className="py-28 bg-gradient-to-b from-white via-sfm-cream/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">Our Promise</p>
            <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">
              What You Can Expect
            </h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-muted max-w-xl mx-auto text-lg">
              Clear commitments that guide every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Your time respected',
                description:
                  'Same-day or next-day virtual appointments. No waiting rooms. No rushed visits.',
              },
              {
                icon: MessageCircle,
                title: 'Every question answered',
                description:
                  'Direct messaging with your physician. Responses within 24-48 hours, often sooner.',
              },
              {
                icon: Shield,
                title: 'You always know what is happening and why',
                description:
                  'Clear explanations, transparent records, no surprises. Your care, demystified.',
              },
              {
                icon: Heart,
                title: 'Your history comes first',
                description:
                  'Before we diagnose, we listen. Your history and context shape every decision.',
              },
              {
                icon: Stethoscope,
                title: 'One physician, always',
                description:
                  'No rotating providers. Dr. Nkrumah knows your history, your goals, your family.',
              },
            ].map((promise) => (
              <div key={promise.title} className="promise-card group">
                <promise.icon
                  className="w-8 h-8 text-sfm-azure mb-4 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg text-sfm-navy mb-2">{promise.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals - Credentials Bar */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-gray-500">
              <Shield className="w-5 h-5 text-sfm-azure" strokeWidth={1.5} />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <svg className="w-5 h-5 text-sfm-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-sm font-medium">Board Certified</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <svg className="w-5 h-5 text-sfm-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">Washington Licensed</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <svg className="w-5 h-5 text-sfm-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Same-Day Appointments</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Remembers Means - Brief intro */}
      <section className="py-28 bg-sfm-cream relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4 font-medium">
                The Sankofa Principle
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6 leading-tight">
                Why &quot;Medicine That Remembers&quot;?
              </h2>
              <div className="divider-gold mb-10" />

              <div className="space-y-6 text-muted leading-relaxed text-lg">
                <p>
                  <strong className="text-sfm-navy">Sankofa</strong> is an Akan principle from West Africa:
                  a bird looking back while moving forward. It means to retrieve what matters from the past
                  and carry it into your future.
                </p>
                <p>
                  In medicine, this translates to something rare: a clinic built to remember you.
                  Your history, your context, your goals are retained with intention, not lost in the shuffle.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/about" className="btn-secondary">
                  Learn More About Our Approach
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sfm-cream to-white p-8 shadow-2xl border border-sfm-gold/20 group">
                <Image
                  src="/images/sankofa-bird.png"
                  alt="Wooden Sankofa bird sculpture symbolizing learning from the past"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                <Image
                  src="/images/sfm-about.png"
                  alt="Stethoscope and notebook on a wooden desk representing thoughtful care"
                  width={600}
                  height={500}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">
                Our Care
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6 leading-tight">
                Precision Medicine,
                <br />
                Personal Relationship
              </h2>
              <div className="divider-gold mb-10" />

              <ul className="space-y-4 mb-10">
                {[
                  'Comprehensive virtual primary care',
                  'Genetic testing and interpretation',
                  'Cardiometabolic health optimization',
                  'Mental health and wellness support',
                  'Same physician every visit',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div
                      className="w-2.5 h-2.5 bg-gradient-to-br from-sfm-gold to-sfm-gold-light rounded-full flex-shrink-0 shadow-sm"
                      aria-hidden="true"
                    />
                    <span className="text-muted text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/services" className="btn-secondary">
                View Services &amp; Pricing
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DPC Comparison - Why Choose Direct Primary Care */}
      <section className="py-28 bg-sfm-navy relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(5,67,110,0.3),transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sfm-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Evidence Speaks
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Why Direct Primary Care?
            </h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-white/60 max-w-xl mx-auto">
              Every metric below is drawn from peer-reviewed research.
            </p>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { trad: '15 min', sfm: '45 min', label: 'Visit Duration' },
              { trad: '26 days', sfm: 'Same day', label: 'Wait Time' },
              { trad: '2,300+', sfm: '<500', label: 'Patients/Doctor' },
              { trad: '$100+', sfm: '$5-20', label: 'Lab Costs' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-3">
                  <div className="text-white/40 text-lg line-through mb-2">{stat.trad}</div>
                  <div className="text-sfm-gold text-2xl md:text-3xl font-display font-medium">{stat.sfm}</div>
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Traditional Care */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-white/40 text-sm uppercase tracking-wider mb-6 font-medium">Traditional Care</p>
              <ul className="space-y-4">
                {[
                  'Different doctor each visit',
                  'Phone trees and callbacks',
                  'Repeat your story every time',
                  'Unpredictable copays',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50">
                    <svg className="w-5 h-5 text-white/20 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SFM Care */}
            <div className="bg-sfm-gold/10 rounded-2xl p-8 border border-sfm-gold/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sfm-gold/10 rounded-full blur-2xl" />
              <p className="text-sfm-gold text-sm uppercase tracking-wider mb-6 font-medium relative">Sankofa Care</p>
              <ul className="space-y-4 relative">
                {[
                  'Same physician, always',
                  'Direct messaging with Dr. Nkrumah',
                  'Your history, remembered',
                  'One transparent monthly fee',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white">
                    <svg className="w-5 h-5 text-sfm-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link to full comparison */}
          <div className="text-center">
            <Link 
              href="/compare" 
              className="inline-flex items-center gap-2 text-sfm-gold hover:text-white transition-colors group"
            >
              <span>See the full evidence-based comparison</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-28 bg-gradient-to-b from-sfm-navy to-[#030d1a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sfm-gold/40 to-sfm-gold/10 blur-2xl scale-125" />
            <Image
              src="/images/dr-nkrumah.png"
              alt="Dr. Yaw Nkrumah, Founder of Sankofa Family Medicine"
              width={192}
              height={192}
              className="relative w-48 h-48 rounded-full object-cover object-top border-4 border-sfm-gold/40 shadow-2xl"
            />
          </div>
          <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6 font-medium">
            Founder's Message
          </p>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-white italic leading-relaxed mb-8">
            &quot;I built Sankofa Family Medicine to provide the kind of care I would want for my own family:
            care that remembers your history, respects your time, and stays with you across the years. Many
            physicians share these values; this practice gives us the structure and time to honor them.&quot;
          </blockquote>
          <p className="text-sfm-gold font-semibold text-lg">Dr. Yaw Nkrumah, MD</p>
          <p className="text-white/60 text-sm mt-2">Founder &amp; Medical Director</p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/founder" className="btn-secondary-white">
              Meet Our Founder
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/about" className="btn-secondary-white">
              More About SFM
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-b from-white to-sfm-cream/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6 leading-tight">
            Ready to Experience Care That Remembers?
          </h2>
          <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join our founding member waitlist for priority enrollment and exclusive benefits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

