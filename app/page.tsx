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
    <div className="absolute inset-0 bg-black/70" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
    {/* Text card for clarity on all screens */}
    <div className="max-w-xl bg-sfm-navy/90 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm animate-fade-in">
      <p className="text-sfm-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
        Virtual Primary Care | Washington State
      </p>

      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
        Medicine That
        <br />
        Remembers<span className="tm">™</span>
      </h1>

      <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
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
    </div>
  </div>
</section>

      {/* Patient Promises - Ethics as benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Our Promise</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">
              What You Can Expect
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Clear commitments that guide every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={promise.title} className="promise-card">
                <promise.icon
                  className="w-8 h-8 text-sfm-azure mb-4"
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

      {/* What Remembers Means - Brief intro */}
      <section className="py-24 bg-sfm-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
                The Sankofa Principle
              </p>
              <h2 className="font-display text-4xl text-sfm-navy mb-6">
                Why &quot;Medicine That Remembers&quot;?
              </h2>
              <div className="divider-gold mb-8" />

              <div className="space-y-6 text-muted leading-relaxed">
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
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sfm-cream to-white p-6 shadow-xl border border-sfm-gold/20">
                <Image
                  src="/images/sankofa-bird.png"
                  alt="Wooden Sankofa bird sculpture symbolizing learning from the past"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/sfm-about.png"
                  alt="Stethoscope and notebook on a wooden desk representing thoughtful care"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">
                Our Care
              </p>
              <h2 className="font-display text-4xl text-sfm-navy mb-6">
                Precision Medicine,
                <br />
                Personal Relationship
              </h2>
              <div className="divider-gold mb-8" />

              <ul className="space-y-4 mb-8">
                {[
                  'Comprehensive virtual primary care',
                  'Genetic testing and interpretation',
                  'Cardiometabolic health optimization',
                  'Mental health and wellness support',
                  'Same physician every visit',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-sfm-gold rounded-full flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-muted">{item}</span>
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

      {/* Founder Message */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/images/dr-nkrumah.png"
            alt="Dr. Yaw Nkrumah, Founder of Sankofa Family Medicine"
            width={192}
            height={192}
            className="w-48 h-48 rounded-full object-cover object-top mx-auto mb-8 border-4 border-sfm-gold/30"
          />
          <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
            Founder&apos;s Message
          </p>
          <blockquote className="font-display text-2xl md:text-3xl text-white italic leading-relaxed mb-6">
            &quot;I built Sankofa Family Medicine to provide the kind of care I would want for my own family:
            care that remembers your history, respects your time, and stays with you across the years. Many
            clinicians share these values; this practice gives us the structure and time to honor them.&quot;
          </blockquote>
          <p className="text-sfm-gold font-medium">Dr. Yaw Nkrumah, MD</p>
          <p className="text-white/70 text-sm mt-1">Founder &amp; Medical Director</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-sfm-navy mb-4">
            Ready to Experience Care That Remembers?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
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

