import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, FileText, Shield, Scale, UserCheck, Users, Zap, Globe } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Sankofa Family Medicine',
  description: 'Learn about Medicine That Remembers™: the Sankofa principle applied to virtual primary care. Premium telehealth built on memory, dignity, and meaningful physician-patient relationships.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">About Sankofa Family Medicine</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Our History</h1>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            A virtual-first primary care practice built on memory, dignity, and meaningful physician-patient relationship.
          </p>
        </div>
      </section>

      {/* The Sankofa Principle - Full Explanation */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">The Foundation</p>
              <h2 className="font-display text-4xl text-sfm-navy mb-2">The Sankofa Principle</h2>
              <p className="text-sfm-gold text-lg mb-6">Ancient wisdom, modern medicine</p>
              <div className="divider-gold mb-8" />
              
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  <strong className="text-sfm-navy">Sankofa</strong> is an Akan principle from West Africa, 
                  represented by a bird looking back while moving forward. Its meaning is simple yet profound: 
                  go back, retrieve what matters, and carry it into your future.
                </p>
                <p>
                  The Sankofa bird doesn&apos;t walk backward. It moves forward with intention, reaching back 
                  only for what will serve the journey ahead. This is not nostalgia. It&apos;s wisdom.
                </p>
                <p>
                  Across cultures, Sankofa has become shorthand for something larger systems rarely do well: 
                  <em>retain what is essential while building what is new.</em>
                </p>
                <p className="text-sfm-navy font-medium text-lg">
                  That principle sits at the center of our care model.
                </p>
              </div>
              
              <div className="mt-8">
                <Link href="/founder" className="btn-secondary">
                  Meet Dr. Nkrumah
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/sankofa-bird.png" 
                alt="Wooden Sankofa bird sculpture representing the principle of learning from the past" 
                width={600}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-sfm-gold/30 -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">The Problem We Solve</p>
            <h2 className="font-display text-4xl text-sfm-navy">Why It Matters for You</h2>
          </div>
          
          <div className="space-y-6 text-muted leading-relaxed mb-12">
            <p>
              In today&apos;s healthcare landscape, information gets lost, stories become fragmented, 
              and patients are forced to repeat themselves. People across Washington already navigate 
              complex schedules, responsibilities, and stresses.
            </p>
            <p className="text-xl text-sfm-navy font-display">
              Your doctor shouldn&apos;t add to that burden.
            </p>
            <p>
              <span className="text-sfm-gold font-medium">Medicine That Remembers™</span> is our answer 
              to healthcare&apos;s continuity gap: a clinic designed from the ground up to retain 
              the details that shape your health.
            </p>
          </div>

          <div className="bg-white p-8 border-l-4 border-sfm-gold">
            <p className="text-sfm-navy font-medium mb-4">In practice, this means we:</p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-sfm-navy">Remember your history</strong>, so your care remains consistent across visits and years.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-sfm-navy">Remember your context</strong>, so every treatment plan fits your real life, not a textbook.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-sfm-navy">Remember your goals</strong>, so progress is intentional, measured, and meaningful.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-sfm-navy">Remember the original promise of medicine:</strong> first, do no harm.</span>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-muted leading-relaxed">
            This is more than cultural heritage. It&apos;s a practical advantage: medicine that sees you clearly, 
            stays anchored in your history, and moves forward with you.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Our Approach</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sfm-cream p-8 border-l-4 border-sfm-gold">
              <Users className="w-8 h-8 text-sfm-gold mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-sfm-navy mb-3">One Physician, Always</h3>
              <p className="text-muted">
                No rotating providers. Dr. Nkrumah is your physician for every visit, every message, every decision. 
                Continuity isn&apos;t a feature. It&apos;s the foundation.
              </p>
            </div>
            
            <div className="bg-sfm-cream p-8 border-l-4 border-sfm-azure">
              <Zap className="w-8 h-8 text-sfm-azure mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-sfm-navy mb-3">Precision Medicine</h3>
              <p className="text-muted">
                Genetic testing, metabolic optimization, and evidence-based protocols, all in service of 
                personalized care that treats you as an individual, not a statistic.
              </p>
            </div>
            
            <div className="bg-sfm-cream p-8 border-l-4 border-sfm-navy">
              <Globe className="w-8 h-8 text-sfm-navy mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-sfm-navy mb-3">Virtual-First, Human-Centered</h3>
              <p className="text-muted">
                Technology that serves relationship, not replaces it. HIPAA-compliant telehealth that brings 
                convenient access without sacrificing human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sankofa OS */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">The Infrastructure</p>
            <h2 className="font-display text-4xl text-white mb-4">Sankofa OS</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Clinical infrastructure designed to make continuity automatic and empathy scalable.
            </p>
          </div>
          
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Behind Sankofa Family Medicine is <strong className="text-white">Sankofa OS</strong>: the clinical 
              operating system we&apos;re building to ensure that memory isn&apos;t just a philosophy. 
              It&apos;s embedded in every workflow.
            </p>
            <p>
              Most electronic health records are designed for billing, not for care. They optimize for 
              documentation volume, not clinical insight. Sankofa OS is different.
            </p>
            <p>
              It&apos;s designed to surface what matters: your history, your context, your goals. 
              AI-supported workflows help your physician stay present with you, not buried in paperwork. 
              Nothing important gets lost.
            </p>
            <p className="text-sfm-gold font-medium">
              Technology in service of relationship. Memory as medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Our Standards</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">What We Promise</h2>
            <p className="text-muted max-w-xl mx-auto">
              These aren&apos;t marketing claims. They&apos;re commitments we measure ourselves against.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'We listen first', description: 'Your history shapes the diagnosis, not the other way around.' },
              { icon: FileText, title: 'We document with dignity', description: 'Your records reflect who you are, not just what insurance codes apply.' },
              { icon: Shield, title: 'Full transparency', description: 'Clear explanations, access to your records, no surprises.' },
              { icon: Scale, title: 'Fair treatment', description: 'Your background informs care, never limits it.' },
              { icon: UserCheck, title: 'Every question answered', description: 'Secure messaging responses within 24-48 hours.' },
            ].map((item) => (
              <div key={item.title} className="bg-sfm-cream p-6 border-l-4 border-sfm-azure">
                <item.icon className="w-6 h-6 text-sfm-azure mb-3" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display text-lg text-sfm-navy mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Teaser */}
      <section className="py-24 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image 
            src="/images/dr-nkrumah.png" 
            alt="Dr. Yaw Nkrumah" 
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover object-top mx-auto mb-8 border-4 border-sfm-gold/30"
          />
          <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">The Founder</p>
          <h2 className="font-display text-3xl text-sfm-navy mb-4">Dr. Yaw Nkrumah, MD</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Family medicine physician, researcher, and the vision behind Sankofa Family Medicine. 
            Licensed in Washington State.
          </p>
          <Link href="/founder" className="btn-primary">
            More About Dr. Nkrumah
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-sfm-navy mb-4">Ready to Experience Care That Remembers?</h2>
          <p className="text-muted text-lg mb-10">Join our founding member waitlist for priority enrollment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services & Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
