import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MessageCircle, Shield, Heart, Stethoscope, CheckCircle2, Sparkles, Users } from 'lucide-react'
import { Metadata } from 'next'
import CareJourney from '@/components/CareJourney'
import TrustStrip from '@/components/TrustStrip'
import SpotsCounter from '@/components/SpotsCounter'

export const metadata: Metadata = {
  title: 'Sankofa Family Medicine | Virtual Direct Primary Care | Washington State',
  description: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Medicine That Remembers solves healthcare fragmentation with one physician who knows your history, genetic testing, precision medicine, and cardiometabolic health optimization.',
  keywords: ['direct primary care Washington', 'virtual DPC', 'Medicine That Remembers', 'genetic testing', 'precision medicine', 'cardiometabolic health', 'Dr. Yaw Nkrumah'],
  openGraph: {
    title: 'Sankofa Family Medicine | Virtual Direct Primary Care',
    description: 'Medicine That Remembers. Virtual primary care built on continuity, dignity, and the physician-patient relationship.',
    images: ['/images/og-image.png'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Sankofa Family Medicine',
  description: 'Virtual-first direct primary care practice serving Washington State',
  url: 'https://sankofafamilymedicine.com',
  telephone: '+1-425-285-7390',
  email: 'info@sankofafamilymedicine.com',
  areaServed: 'Washington State, USA',
  priceRange: '$149-$449/month',
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
}

export default function HomePage() {
  const promises = [
    {
      icon: Clock,
      title: 'Your Time Respected',
      description: 'Same-day or next-day virtual appointments. No waiting rooms. No rushed visits.',
    },
    {
      icon: MessageCircle,
      title: 'Every Question Answered',
      description: 'Direct messaging with your physician. Responses within 24 to 48 hours, often sooner.',
    },
    {
      icon: Shield,
      title: 'Complete Transparency',
      description: 'Clear explanations, transparent records, no surprises. Your care, demystified.',
    },
    {
      icon: Heart,
      title: 'Your History Comes First',
      description: 'Before we diagnose, we listen. Your history and context shape every decision.',
    },
    {
      icon: Stethoscope,
      title: 'One Physician, Always',
      description: 'No rotating providers. Dr. Nkrumah knows your history, your goals, your family.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/sfm-background.png"
            alt="Dr. Yaw Nkrumah in a modern medical office"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sfm-navy/90 via-sfm-navy/80 to-sfm-azure/60" />
          <div className="absolute inset-0 pattern-dots-light opacity-20" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sfm-gold/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sfm-azure/20 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Virtual Primary Care</span>
                <span className="w-px h-4 bg-white/30" />
                <span className="text-white/70 text-sm">Washington State</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]">
                Medicine That
                <br />
                <span className="text-gradient-gold">Remembers</span>
                <span className="tm text-sfm-gold">TM</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                Virtual-first direct primary care for adults across Washington State. One physician who knows 
                your history, every visit. Genetic testing, precision medicine, and cardiometabolic health optimization included.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['45-Min Visits', 'Same-Day Access', 'Direct Text Access'].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-sfm-gold" />
                    <span className="text-white/90 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-primary text-base px-10 py-5">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="btn-secondary-white text-base px-10 py-5">
                  View Plans
                </Link>
              </div>

              {/* Founding Member Badge */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <SpotsCounter />
                <div>
                  <p className="text-sfm-gold font-semibold text-sm">Founding Member Offer</p>
                  <p className="text-white/60 text-sm">Lock in Tier 3 benefits at Tier 2 pricing</p>
                </div>
              </div>
            </div>

            {/* Feature Card */}
            <div className="hidden lg:block animate-fade-in animation-delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sfm-gold/30 to-sfm-azure/30 rounded-3xl blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sfm-gold/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-sfm-gold" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">The DPC Difference</p>
                      <p className="text-white/60 text-sm">What sets us apart</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Average Wait Time', value: '< 24 hours', note: 'vs 26+ days traditional' },
                      { label: 'Visit Duration', value: '45 minutes', note: 'vs 15 min industry avg' },
                      { label: 'Patient Panel', value: '< 500', note: 'vs 2,300+ traditional' },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-white/70 text-sm">{stat.label}</span>
                          <span className="text-sfm-gold font-bold text-lg">{stat.value}</span>
                        </div>
                        <p className="text-white/40 text-xs">{stat.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Patient Promises */}
      <section className="section-padding bg-gradient-to-b from-white via-sfm-cream/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="section-header">
            <p className="section-label">Our Promise</p>
            <h2 className="section-title">What You Can Expect</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="section-subtitle">
              Clear commitments that guide every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {promises.map((promise, index) => (
              <div 
                key={promise.title} 
                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 
                  shadow-sm hover:shadow-xl hover:border-sfm-gold/30 
                  transition-all duration-500 hover:-translate-y-2
                  ${index === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-sfm-azure via-sfm-gold to-sfm-azure rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sfm-azure/10 to-sfm-azure/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <promise.icon className="w-7 h-7 text-sfm-azure" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-display text-xl text-sfm-navy mb-3 group-hover:text-sfm-azure transition-colors">
                    {promise.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Journey */}
      <CareJourney />

      {/* About Dr. Nkrumah */}
      <section className="section-padding bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-navy-deep relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sfm-azure/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sfm-gold/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 pattern-dots-light opacity-20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-sfm-gold/30 to-sfm-azure/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10">
                <Image
                  src="/images/dr-nkrumah.png"
                  alt="Dr. Yaw Nkrumah, MD"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/80 via-transparent to-transparent" />
                
                {/* Credentials Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sfm-gold/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-sfm-gold" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Board Certified</p>
                        <p className="text-white/60 text-sm">Family Medicine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4 font-medium">Your Physician</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Meet Dr. Yaw Nkrumah
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold-light rounded-full mb-8" />
              
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Dr. Nkrumah founded Sankofa Family Medicine on a simple premise: healthcare works 
                  better when your doctor actually knows you.
                </p>
                <p>
                  After years of witnessing how fragmented care fails patients, he built a practice 
                  designed around continuity, memory, and the physician-patient relationship that 
                  traditional medicine has lost.
                </p>
                <p className="text-white/90 font-medium">
                  One physician. Your complete history. Every visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link href="/founder" className="btn-secondary-white">
                  Full Bio
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="btn-ghost text-white/70 hover:text-white hover:bg-white/10">
                  How It Works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl translate-y-1/2" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="section-header">
            <p className="section-label">From Dr. Nkrumah</p>
            <h2 className="section-title">Latest Insights</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="section-subtitle">
              Thoughts on primary care, prevention, and what it means to practice medicine with memory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                href: '/blog/genetic-testing-what-it-tells-you',
                image: '/images/blog-genetic-testing.png',
                category: 'Genetics',
                categoryColor: 'bg-blue-100 text-blue-700 border-blue-200',
                title: 'What Genetic Testing Actually Tells You (And What It Does Not)',
                excerpt: 'Genetic testing is not about predicting the future. It is about adding context to the present.',
              },
              {
                href: '/blog/virtual-care-more-personal',
                image: '/images/blog-virtual-care.png',
                category: 'Virtual Care',
                categoryColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
                title: 'Why Virtual Care With the Right Physician Is More Personal, Not Less',
                excerpt: 'There is a common assumption that virtual medicine is impersonal. I have found the opposite is often true.',
              },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="group">
                <article className="bg-sfm-cream/30 rounded-2xl overflow-hidden border border-gray-100 hover:border-sfm-gold/30 hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="font-display text-xl lg:text-2xl text-sfm-navy mb-3 group-hover:text-sfm-azure transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sfm-azure text-sm font-semibold group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-navy font-semibold transition-colors group"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding-lg bg-gradient-to-b from-white via-sfm-cream/50 to-sfm-cream relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-sfm-gold/10 border border-sfm-gold/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" />
            <span className="text-sfm-gold text-sm font-semibold">Now Accepting Founding Members</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sfm-navy mb-6 leading-tight">
            Ready to Experience Care
            <br className="hidden md:block" />
            That Remembers?
          </h2>
          <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our founding member waitlist for priority enrollment and exclusive benefits. 
            Limited spots available.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-12 py-5">
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="btn-secondary text-base px-12 py-5">
              View Plans
            </Link>
          </div>
          
          <p className="mt-10 text-gray-400 text-sm">
            No commitment required. Response within 24 hours.
          </p>
        </div>
      </section>
    </>
  )
}
