import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Heart,
  FileText,
  Shield,
  Scale,
  UserCheck,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Zap,
  Target,
  Brain,
} from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: 'About Sankofa Family Medicine | Medicine That Remembers',
  description:
    'Learn about Sankofa Family Medicine, a virtual-first direct primary care practice serving Washington State. Founded on the Sankofa principle of retrieving what matters to carry forward.',
  keywords: [
    'Sankofa Family Medicine',
    'direct primary care',
    'DPC',
    'virtual primary care',
    'Washington State telehealth',
    'Medicine That Remembers',
    'Dr. Yaw Nkrumah',
    'patient-centered care',
    'continuity of care',
  ],
  openGraph: {
    title: 'About Sankofa Family Medicine | Medicine That Remembers',
    description:
      'Virtual-first direct primary care serving Washington State. Founded on the principle of retrieving what matters.',
    url: 'https://sankofafamilymedicine.com/about',
    type: 'website',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/sfm-og-about.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Medicine That Remembers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sankofa Family Medicine',
    description: 'Virtual-first direct primary care serving Washington State.',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/about',
  },
}

// =============================================================================
// STRUCTURED DATA
// =============================================================================

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  alternateName: 'SFM',
  description:
    'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, the practice solves healthcare fragmentation through Medicine That Remembers.',
  url: 'https://sankofafamilymedicine.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sankofafamilymedicine.com/images/sfm-logo.png',
    width: 512,
    height: 512,
  },
  medicalSpecialty: ['PrimaryCare', 'FamilyPractice', 'PreventiveMedicine'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Debit Card, HSA, FSA',
  areaServed: {
    '@type': 'State',
    name: 'Washington',
  },
  founder: {
    '@type': 'Physician',
    '@id': 'https://sankofafamilymedicine.com/#founder',
    name: 'Dr. Yaw Nkrumah',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'MD',
    jobTitle: 'Founder and Primary Care Physician',
    medicalSpecialty: ['PrimaryCare', 'FamilyPractice'],
  },
  isAcceptingNewPatients: true,
  slogan: 'Medicine That Remembers',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, the practice solves healthcare fragmentation through Medicine That Remembers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Medicine That Remembers mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Medicine That Remembers is Sankofa Family Medicine's care philosophy. It means the clinic is designed to retain the details that shape your health: your history, your context, your goals, and your preferences.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Sankofa principle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa is an Akan principle from West Africa, represented by a bird looking back while moving forward. Its meaning is: go back, retrieve what matters, and carry it into your future.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sankofafamilymedicine.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: 'https://sankofafamilymedicine.com/about',
    },
  ],
}

// =============================================================================
// DATA
// =============================================================================

const journeySteps = [
  {
    step: '01',
    title: 'Join the Waitlist',
    description: 'Complete our brief intake form. We will reach out within 48 hours to schedule your welcome consultation.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Welcome Consultation',
    description: 'A complimentary 15-minute call to understand your health goals and ensure our practice is the right fit.',
    icon: MessageSquare,
  },
  {
    step: '03',
    title: 'Comprehensive Onboarding',
    description: 'Your 60-minute initial visit covers your complete health history, goals, and creates your personalized care plan.',
    icon: Target,
  },
  {
    step: '04',
    title: 'Ongoing Partnership',
    description: 'Same-day messaging, priority appointments, and continuous optimization. Your physician knows your history.',
    icon: Heart,
  },
]

const standards = [
  {
    icon: Heart,
    title: 'We listen first',
    description: 'Your history and lived experience shape the diagnosis, not the other way around.',
  },
  {
    icon: FileText,
    title: 'We document with dignity',
    description: 'Your medical records reflect who you are, not just what insurance codes might apply.',
  },
  {
    icon: Shield,
    title: 'Full transparency',
    description: 'Clear explanations, access to your records, and no hidden billing surprises.',
  },
  {
    icon: Scale,
    title: 'Fair treatment',
    description: 'Your background informs care. It never limits the quality of care you receive.',
  },
  {
    icon: UserCheck,
    title: 'Every question answered',
    description: 'Secure messaging responses within 24 to 48 hours for established patients.',
  },
]

const differentiators = [
  {
    icon: Clock,
    stat: '45-60',
    unit: 'min',
    label: 'Visit Duration',
    description: 'Comprehensive appointments, not rushed 15-minute slots',
  },
  {
    icon: Users,
    stat: '< 200',
    unit: '',
    label: 'Patient Panel',
    description: 'Small panel means your physician actually knows you',
  },
  {
    icon: Zap,
    stat: 'Same',
    unit: 'Day',
    label: 'Access',
    description: 'Messaging and appointments when you need them',
  },
  {
    icon: Brain,
    stat: '1',
    unit: '',
    label: 'Physician',
    description: 'See the same doctor every visit, every time',
  },
]

// =============================================================================
// COMPONENT
// =============================================================================

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pattern-dots opacity-30" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                  <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" />
                  <span className="text-white/80 text-sm font-medium tracking-wide">About Our Practice</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  Healthcare Built on{' '}
                  <span className="text-sfm-gold">Memory</span>
                </h1>

                <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                  Sankofa Family Medicine was founded on a simple belief: your physician should know 
                  your history without you having to repeat it. We call this Medicine That Remembers™.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link href="/founder" className="btn-secondary-white">
                    Meet Dr. Nkrumah
                  </Link>
                </div>
              </div>

              {/* Sankofa Visual */}
              <div className="relative hidden lg:block">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-sfm-gold/20 to-sfm-azure/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <Image
                      src="/images/sfm-bird.png"
                      alt="The Sankofa bird, an Akan symbol representing the principle of retrieving what matters from the past"
                      width={400}
                      height={400}
                      className="w-full h-auto opacity-90"
                    />
                    <div className="absolute bottom-8 left-8 right-8 bg-sfm-navy/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <p className="text-sfm-gold font-display text-lg mb-1">Sankofa</p>
                      <p className="text-white/70 text-sm">
                        "Go back and retrieve what matters. Carry it forward."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Sankofa Principle */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label">The Principle</p>
                <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-6">
                  What is Sankofa?
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-8" />
                
                <div className="space-y-6 text-sfm-navy/70 leading-relaxed">
                  <p>
                    Sankofa is an Akan principle from West Africa, represented by a mythical bird 
                    looking back while moving forward. The word translates to "go back and get it," 
                    teaching that we must retrieve what matters from our past to build our future.
                  </p>
                  <p>
                    In healthcare, this principle addresses a fundamental problem: medical records 
                    fragment across systems, physicians rotate between visits, and patients are 
                    forced to repeat their history because no one remembers it.
                  </p>
                  <p>
                    Sankofa Family Medicine was built to solve this. One physician. Complete continuity. 
                    A practice designed to remember what matters about your health.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-sfm-cream rounded-3xl p-8 border border-sfm-gold/10">
                  <div className="grid grid-cols-2 gap-4">
                    {differentiators.map((item, index) => (
                      <div
                        key={item.label}
                        className={`bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 ${
                          index === 0 ? 'border-2 border-sfm-gold/20' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-sfm-azure/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-sfm-azure" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className="flex items-baseline gap-1 mb-1">
                          <span className="font-display text-3xl text-sfm-navy">{item.stat}</span>
                          <span className="text-sfm-navy/60 text-sm">{item.unit}</span>
                        </div>
                        <p className="text-sfm-gold text-sm font-medium mb-1">{item.label}</p>
                        <p className="text-sfm-navy/50 text-xs">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medicine That Remembers */}
        <section className="py-24 bg-sfm-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-label">Our Philosophy</p>
              <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
                Medicine That Remembers™
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-6" />
              <p className="text-sfm-navy/60 max-w-2xl mx-auto">
                A care model designed to retain the details that shape your health: your history, 
                your context, your goals, and your preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Context Preserved',
                  description: 'Your physician knows why you made past decisions, not just what medications you take.',
                },
                {
                  icon: Heart,
                  title: 'Relationship Continuity',
                  description: 'See the same physician every visit. Build trust over time, not from scratch each appointment.',
                },
                {
                  icon: Sparkles,
                  title: 'Personalized Care',
                  description: 'Treatment plans built on comprehensive understanding, not incomplete snapshots.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sfm-azure/10 to-sfm-azure/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-sfm-azure" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-sfm-navy mb-3">{item.title}</h3>
                  <p className="text-sfm-navy/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Steps */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-label">How It Works</p>
              <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
                Your Journey With Us
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-6" />
              <p className="text-sfm-navy/60 max-w-2xl mx-auto">
                From first contact to ongoing partnership, every step is designed for clarity and care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative group"
                >
                  {/* Connector Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-sfm-gold/30 to-transparent z-0" />
                  )}
                  
                  <div className="relative bg-sfm-cream rounded-2xl p-6 h-full border border-sfm-gold/10 hover:border-sfm-gold/30 transition-all duration-300 hover:shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sfm-gold to-sfm-gold/80 flex items-center justify-center shadow-gold">
                        <span className="font-display text-sfm-navy font-semibold">{step.step}</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-sfm-azure/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-sfm-azure" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-display text-lg text-sfm-navy mb-2">{step.title}</h3>
                    <p className="text-sfm-navy/60 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Standards */}
        <section className="py-24 bg-sfm-navy">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-gold text-sm tracking-widest uppercase mb-4">Our Standards</p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Commitments to Every Patient
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mx-auto mb-6" />
              <p className="text-white/60 max-w-2xl mx-auto">
                These are not marketing claims. They are commitments we measure ourselves against.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((item, index) => (
                <div
                  key={item.title}
                  className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sfm-gold/30 transition-all duration-300 ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sfm-gold/10 flex items-center justify-center shrink-0 group-hover:bg-sfm-gold/20 transition-colors">
                      <item.icon className="w-6 h-6 text-sfm-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Teaser */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-sfm-gold/20 to-sfm-azure/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/dr-nkrumah.png"
                    alt="Dr. Yaw Nkrumah, MD, founder of Sankofa Family Medicine"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sfm-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        Board-Eligible Family Medicine
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        WA Licensed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="section-label">The Founder</p>
                <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-6">
                  Dr. Yaw Nkrumah, MD
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-sfm-gold to-sfm-gold/50 rounded-full mb-8" />
                
                <div className="space-y-4 text-sfm-navy/70 leading-relaxed mb-8">
                  <p>
                    Dr. Nkrumah founded Sankofa Family Medicine to address a fundamental problem 
                    he witnessed throughout his training: patients forced to repeat their histories 
                    because no one in the system remembered them.
                  </p>
                  <p>
                    Trained at the Medical University of South Carolina and Kadlec Family Medicine 
                    Residency, Dr. Nkrumah brings both clinical expertise and a vision for how 
                    primary care should work.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/founder" className="btn-primary">
                    Full Biography
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-sfm-cream via-white to-sfm-cream">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 rounded-full border border-sfm-gold/20 mb-8">
              <Sparkles className="w-4 h-4 text-sfm-gold" />
              <span className="text-sfm-navy text-sm font-medium">Now Accepting Founding Members</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sfm-navy mb-6 leading-tight">
              Ready to Experience{' '}
              <span className="text-sfm-gold">Medicine That Remembers</span>™?
            </h2>

            <p className="text-sfm-navy/60 text-lg mb-10 max-w-2xl mx-auto">
              Join our founding member waitlist for priority enrollment. Now accepting adults 
              across Washington State.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View Membership Plans
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-sfm-navy/50">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" />
                No Contracts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" />
                HSA/FSA Accepted
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sfm-gold" />
                Cancel Anytime
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
