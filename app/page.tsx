import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MessageCircle, Shield, Heart, Stethoscope } from 'lucide-react'
import { Metadata } from 'next'
import CareJourney from '@/components/CareJourney'
import TrustStrip from '@/components/TrustStrip'
import SpotsCounter from '@/components/SpotsCounter'

export const metadata: Metadata = {
  title: 'Sankofa Family Medicine | Virtual Direct Primary Care | Washington State',
  description: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Medicine That Remembers solves healthcare fragmentation - one physician who knows your history, offering genetic testing, precision medicine, and cardiometabolic health optimization.',
  keywords: ['direct primary care Washington', 'virtual DPC', 'Medicine That Remembers', 'genetic testing', 'precision medicine', 'cardiometabolic health', 'Dr. Yaw Nkrumah'],
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

      {/* Ultra-concrete promise */}
      <div className="flex items-center gap-3 mb-6 py-3 px-4 bg-white/5 rounded-lg border border-white/10">
        <Clock className="w-5 h-5 text-sfm-gold flex-shrink-0" />
        <p className="text-white/90 text-sm md:text-base font-medium">
          Most members seen within 24 hours • 45-minute visits • Direct text access to Dr. Nkrumah
        </p>
      </div>

      <p className="text-base md:text-lg text-white/85 mb-10 leading-relaxed">
        Virtual-first direct primary care (DPC) for patients across Washington State. We solve healthcare
        fragmentation - one physician who knows your history, every visit. Genetic testing, precision
        medicine, and cardiometabolic health optimization included.
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
        <div className="flex items-start gap-4 flex-col sm:flex-row sm:items-center">
          <SpotsCounter />
          <p className="text-white/60 text-sm">
            <span className="text-sfm-gold font-medium">Limited founding spots</span> - Lock in Tier 3 benefits at Tier 2 pricing
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

      {/* Trust Strip - Global Trust Signals */}
      <TrustStrip />

      {/* Patient Promises - Ethics as benefits */}
      <section className="py-32 bg-gradient-to-b from-white via-sfm-cream/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
            ].map((promise, index) => (
              <div 
                key={promise.title} 
                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 
                  shadow-sm hover:shadow-xl hover:border-sfm-gold/30 
                  transition-all duration-500 hover:-translate-y-2
                  ${index === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''}`}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-sfm-azure via-sfm-gold to-sfm-azure rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-sfm-cream flex items-center justify-center mb-6 
                    group-hover:bg-sfm-azure/10 transition-colors duration-300">
                    <promise.icon
                      className="w-7 h-7 text-sfm-azure transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3 group-hover:text-sfm-azure transition-colors duration-300">
                    {promise.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{promise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals - Credentials Bar */}
      <section className="py-16 bg-white border-y border-gray-100 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-50" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-[0.2em] mb-8 font-medium">
            Trusted Care Credentials
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-gray-600 group hover:text-sfm-navy transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sfm-cream flex items-center justify-center group-hover:bg-sfm-azure/10 transition-colors">
                <Shield className="w-5 h-5 text-sfm-azure" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600 group hover:text-sfm-navy transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sfm-cream flex items-center justify-center group-hover:bg-sfm-azure/10 transition-colors">
                <svg className="w-5 h-5 text-sfm-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Washington Licensed</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 group hover:text-sfm-navy transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sfm-cream flex items-center justify-center group-hover:bg-sfm-azure/10 transition-colors">
                <svg className="w-5 h-5 text-sfm-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Same-Day Appointments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Care Journey - Interactive Process Timeline */}
      <CareJourney />

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
                  loading="lazy"
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
                  loading="lazy"
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
      <section className="py-32 bg-gradient-to-b from-sfm-navy via-sfm-navy to-[#030d1a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sfm-azure/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          {/* Quote mark decorative */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-sfm-gold/10 text-[200px] font-display leading-none select-none pointer-events-none">
            &ldquo;
          </div>
          
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sfm-gold/40 via-sfm-gold/20 to-sfm-azure/20 blur-2xl scale-150" />
            <div className="relative">
              <Image
                src="/images/dr-nkrumah.png"
                alt="Dr. Yaw Nkrumah, Founder of Sankofa Family Medicine"
                width={192}
                height={192}
                loading="lazy"
                className="relative w-48 h-48 rounded-full object-cover object-top border-4 border-sfm-gold/40 shadow-2xl"
              />
              {/* Online indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-emerald-500 rounded-full border-4 border-sfm-navy shadow-lg" />
            </div>
          </div>
          
          <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-8 font-medium">
            Founder&apos;s Message
          </p>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-white italic leading-relaxed mb-10 relative">
            &quot;I built Sankofa Family Medicine to provide the kind of care I would want for my own family:
            care that remembers your history, respects your time, and stays with you across the years. Many
            physicians share these values; this practice gives us the structure and time to honor them.&quot;
          </blockquote>
          <div className="flex flex-col items-center">
            <p className="text-sfm-gold font-semibold text-xl">Dr. Yaw Nkrumah, MD</p>
            <p className="text-white/60 text-sm mt-2 mb-4">Founder &amp; Medical Director</p>
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <span>Washington Licensed</span>
            </div>
          </div>

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
      <section className="py-32 bg-gradient-to-b from-white via-sfm-cream/30 to-sfm-cream/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 border border-sfm-gold/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" />
            <span className="text-sfm-gold text-sm font-medium">Now Accepting Founding Members</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sfm-navy mb-6 leading-tight">
            Ready to Experience Care<br className="hidden md:block" /> That Remembers?
          </h2>
          <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our founding member waitlist for priority enrollment and exclusive benefits. 
            Limited spots available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-10 py-5">
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary text-base px-10 py-5">
              View Services &amp; Pricing
            </Link>
          </div>
          
          {/* Trust indicator */}
          <p className="mt-10 text-gray-400 text-sm">
            No commitment required • Response within 24 hours
          </p>
        </div>
      </section>
    </>
  )
}

