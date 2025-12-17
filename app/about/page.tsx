import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Heart,
  FileText,
  Shield,
  Scale,
  UserCheck,
  Users,
  Zap,
  Globe,
} from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// COMPREHENSIVE STRUCTURED DATA FOR SEO + AI DISCOVERY
// =============================================================================

// Primary Organization Schema
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  alternateName: 'SFM',
  description:
    'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, the practice solves healthcare fragmentation through Medicine That Remembers - a care model built on continuity, genetic testing, precision medicine, and cardiometabolic health optimization.',
  url: 'https://sankofafamilymedicine.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sankofafamilymedicine.com/images/sfm-logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://sankofafamilymedicine.com/images/sfm-background.png',
  medicalSpecialty: ['PrimaryCare', 'FamilyPractice', 'PreventiveMedicine'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Debit Card, HSA, FSA',
  areaServed: {
    '@type': 'State',
    name: 'Washington',
    sameAs: 'https://en.wikipedia.org/wiki/Washington_(state)',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'WA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.6062,
    longitude: -122.3321,
  },
  founder: {
    '@type': 'Physician',
    '@id': 'https://sankofafamilymedicine.com/#founder',
    name: 'Dr. Yaw Nkrumah',
    givenName: 'Yaw',
    familyName: 'Nkrumah',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'MD',
    jobTitle: 'Founder and Primary Care Physician',
    medicalSpecialty: ['PrimaryCare', 'FamilyPractice'],
    worksFor: {
      '@id': 'https://sankofafamilymedicine.com/#organization',
    },
  },
  sameAs: [
    'https://www.linkedin.com/company/sankofa-family-medicine',
  ],
  isAcceptingNewPatients: true,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Primary Care Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Virtual Primary Care',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'Telehealth Primary Care Visit',
              description: 'Comprehensive virtual primary care consultation with Dr. Nkrumah',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'Chronic Disease Management',
              description: 'Ongoing virtual management of chronic conditions including diabetes, hypertension, and thyroid disorders',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'Precision Medicine',
              description: 'Genetic testing and metabolic optimization for personalized treatment plans',
            },
          },
        ],
      },
    ],
  },
  knowsAbout: [
    'Primary Care',
    'Family Medicine',
    'Telehealth',
    'Virtual Healthcare',
    'Chronic Disease Management',
    'Precision Medicine',
    'Genetic Testing',
    'Preventive Care',
    'Direct Primary Care',
    'Patient-Centered Care',
  ],
  slogan: 'Medicine That Remembers',
  brand: {
    '@type': 'Brand',
    name: 'Medicine That Remembers',
    slogan: 'Go back, retrieve what matters, carry it forward.',
  },
}

// FAQ Schema for AI and Featured Snippets
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, the practice solves healthcare fragmentation through Medicine That Remembers - a care model built on continuity, genetic testing, precision medicine, and cardiometabolic health optimization. Unlike traditional practices with rotating providers, patients see the same physician for every visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Medicine That Remembers mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicine That Remembers is Sankofa Family Medicine\'s care philosophy. It means the clinic is designed to retain the details that shape your health: your history, your context, your goals, and your preferences. This approach addresses healthcare\'s continuity gap where patients are forced to repeat themselves because information gets lost between visits.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Sankofa principle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa is an Akan principle from West Africa, represented by a bird looking back while moving forward. Its meaning is: go back, retrieve what matters, and carry it into your future. The Sankofa bird moves forward with intention, reaching back only for what will serve the journey ahead. This principle of retaining what is essential while building what is new sits at the center of the clinic\'s care model.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can receive care at Sankofa Family Medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine serves patients of all ages residing in Washington State. Dr. Nkrumah is trained in family medicine for all ages; pediatric patients under 12 are accepted on a case-by-case basis with parental consultation. The practice is 100% virtual, delivering care through HIPAA-compliant telehealth visits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Sankofa Family Medicine accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine operates as a direct primary care practice and does not bill insurance directly. Patients pay transparent prices for care. The clinic accepts credit cards, debit cards, HSA, and FSA payments. This model allows for longer visits, same-physician continuity, and freedom from insurance-driven time constraints.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Sankofa Family Medicine offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa Family Medicine offers comprehensive virtual primary care including: telehealth consultations, chronic disease management (diabetes, hypertension, thyroid disorders), precision medicine with genetic testing, metabolic optimization, preventive care, secure messaging with your physician, and care coordination. All care is delivered by Dr. Yaw Nkrumah.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sankofa OS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa OS is clinical memory infrastructure currently in development at Sankofa Family Medicine. It is designed to solve healthcare\'s continuity problem by building memory into clinical workflows. Unlike traditional EHRs optimized for billing, Sankofa OS surfaces what matters: patient history, context, and goals. The system is being developed for eventual licensing to other healthcare organizations.',
      },
    },
  ],
}

// Breadcrumb Schema
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

// WebPage Schema
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://sankofafamilymedicine.com/about/#webpage',
  url: 'https://sankofafamilymedicine.com/about',
  name: 'About Sankofa Family Medicine | Virtual Primary Care in Washington State',
  description:
    'Learn about Sankofa Family Medicine, a virtual-first primary care clinic serving patients across Washington State. Medicine That Remembers: care built on continuity, memory, dignity, and meaningful physician-patient relationships.',
  isPartOf: {
    '@id': 'https://sankofafamilymedicine.com/#website',
  },
  about: {
    '@id': 'https://sankofafamilymedicine.com/#organization',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://sankofafamilymedicine.com/images/sankofa-bird-new.png',
  },
  datePublished: '2025-12-11',
  dateModified: new Date().toISOString().split('T')[0],
  inLanguage: 'en-US',
}

// =============================================================================
// METADATA FOR SEO
// =============================================================================

export const metadata: Metadata = {
  title: 'About | Virtual Direct Primary Care | Washington State',
  description:
    'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Medicine That Remembers solves healthcare fragmentation through continuity, genetic testing, precision medicine, and cardiometabolic health. Founded by Dr. Yaw Nkrumah, MD.',
  keywords: [
    'Sankofa Family Medicine',
    'direct primary care Washington',
    'virtual DPC',
    'telehealth doctor Washington State',
    'Dr. Yaw Nkrumah',
    'Medicine That Remembers',
    'genetic testing primary care',
    'precision medicine',
    'cardiometabolic health',
    'healthcare fragmentation',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah', url: 'https://sankofafamilymedicine.com/founder' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/about',
  },
  openGraph: {
    title: 'About Sankofa Family Medicine | Virtual Primary Care in Washington State',
    description:
      'Medicine That Remembers for adults across Washington State. Virtual-first primary care built on continuity, memory, dignity, and meaningful physician-patient relationships.',
    url: 'https://sankofafamilymedicine.com/about',
    siteName: 'Sankofa Family Medicine',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/sfm-og-about.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Virtual Primary Care in Washington State - Medicine That Remembers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sankofa Family Medicine | Virtual Primary Care',
    description:
      'Medicine That Remembers: virtual-first primary care for adults across Washington State.',
    images: ['https://sankofafamilymedicine.com/images/sfm-og-about.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function AboutPage() {
  return (
    <>
      {/* Schema.org JSON-LD Structured Data */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative pt-40 pb-24 bg-sfm-navy overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sfm-azure/20 rounded-full blur-3xl" />
          
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center relative">
            <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6 font-medium">
              About Sankofa Family Medicine
            </p>
            <h1 
              id="hero-heading"
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1]"
            >
              Virtual Primary Care in Washington State
            </h1>
            <div className="divider-gold mx-auto mb-10" aria-hidden="true" />
            
            {/* AI-Optimized Lead Paragraph - Clear, factual, extractable */}
            <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
              Sankofa Family Medicine is a virtual-first primary care clinic serving adults 
              across Washington State. Founded by Dr. Yaw A. Nkrumah, we deliver{' '}
              <strong className="text-sfm-gold">Medicine That Remembers</strong>: care built on 
              continuity, memory, dignity, and meaningful physician-patient relationships.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-sfm-gold" aria-hidden="true" />
                Medicine That Remembers
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm text-white font-medium">
                HIPAA-Compliant Telehealth
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm text-white font-medium">
                Adults 18+ in Washington State
              </span>
            </div>

            {/* Key Stats - Clear data points for AI extraction */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
              aria-label="Key statistics"
            >
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-display text-sfm-gold mb-2">1 Physician</p>
                <p className="text-sm text-white/70">For your entire care journey</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-display text-sfm-gold mb-2">100% Virtual</p>
                <p className="text-sm text-white/70">Primary care via telehealth</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-4xl font-display text-sfm-gold mb-2">$0 Copays</p>
                <p className="text-sm text-white/70">Transparent direct pay model</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Sankofa Principle - Educational Content for AI */}
        <section 
          className="py-28 bg-white relative overflow-hidden"
          aria-labelledby="sankofa-principle-heading"
        >
          {/* Decorative element */}
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">
                  The Foundation
                </p>
                <h2 
                  id="sankofa-principle-heading"
                  className="font-display text-4xl text-sfm-navy mb-2"
                >
                  The Sankofa Principle
                </h2>
                <p className="text-sfm-gold text-lg mb-6">Ancient wisdom, modern medicine</p>
                <div className="divider-gold mb-8" aria-hidden="true" />

                {/* AI-Optimized Educational Content */}
                <div className="space-y-6 text-muted leading-relaxed">
                  <p>
                    <strong className="text-sfm-navy">Sankofa</strong> is an Akan principle
                    from West Africa, represented by a bird looking back while moving
                    forward. Its meaning is simple yet profound: go back, retrieve what
                    matters, and carry it into your future.
                  </p>
                  <p>
                    The Sankofa bird does not walk backward. It moves forward with
                    intention, reaching back only for what will serve the journey ahead.
                    This is not nostalgia. It is applied wisdom.
                  </p>
                  <p>
                    Across cultures, Sankofa has become shorthand for something larger
                    healthcare systems rarely do well:{' '}
                    <em>retain what is essential while building what is new.</em>
                  </p>
                  <p className="text-sfm-navy font-medium text-lg">
                    This principle sits at the center of our care model. We remember your 
                    history, your context, and your goals, delivering virtual primary care 
                    that honors your complete health story.
                  </p>
                </div>

                <div className="mt-8">
                  <Link 
                    href="/founder" 
                    className="btn-secondary"
                    aria-label="Learn more about Dr. Yaw Nkrumah, founder of Sankofa Family Medicine"
                  >
                    Meet Our Founder
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="relative max-w-md mx-auto">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-sfm-cream to-white p-6 shadow-xl border border-sfm-gold/20">
                  <Image
                    src="/images/sankofa-bird-new.png"
                    alt="Traditional Sankofa bird sculpture carved from rich dark wood, an Akan symbol representing the principle of learning from the past to build a better future, central to Sankofa Family Medicine's care philosophy"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters - Problem/Solution for AI Understanding */}
        <section 
          className="py-24 bg-sfm-cream"
          aria-labelledby="why-it-matters-heading"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
                The Problem We Solve
              </p>
              <h2 
                id="why-it-matters-heading"
                className="font-display text-4xl text-sfm-navy"
              >
                Why Medicine That Remembers Matters
              </h2>
            </div>

            {/* Clear Problem Statement */}
            <div className="space-y-6 text-muted leading-relaxed mb-12">
              <p>
                In today&apos;s healthcare landscape, information gets lost, stories become
                fragmented, and patients are forced to repeat themselves at every visit. 
                Adults across Washington State already navigate complex schedules, work 
                responsibilities, caregiving duties, and daily stress.
              </p>
              <p className="text-xl text-sfm-navy font-display">
                Your primary care doctor should not add to that burden.
              </p>
              <p>
                <strong className="text-sfm-gold">Medicine That Remembers</strong>{' '}
                is our answer to healthcare&apos;s continuity gap. Sankofa Family Medicine is
                designed from the ground up to retain the details that shape your health
                story and to deliver consistent, virtual primary care that feels human.
              </p>
            </div>

            {/* Clear Value Propositions */}
            <div className="bg-white p-8 border-l-4 border-sfm-gold rounded-2xl shadow-sm">
              <p className="text-sfm-navy font-medium mb-4">
                What Medicine That Remembers means in practice:
              </p>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-sfm-navy">We remember your history.</strong> Your 
                    care remains consistent across visits and years, even when visits happen virtually.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-sfm-navy">We remember your context.</strong> Every 
                    treatment plan fits your real life, not just a textbook or template.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-sfm-navy">We remember your goals.</strong> Progress 
                    is intentional, measured, and meaningful over time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-sfm-gold rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-sfm-navy">We remember the original promise of medicine:</strong> first, do no harm.
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-muted leading-relaxed">
              This is more than cultural heritage. It is a practical advantage in primary
              care. You get medicine that sees you clearly, stays anchored in your history,
              and moves forward with you through a virtual-first, relationship-centered model.
            </p>
          </div>
        </section>

        {/* What Makes Us Different - Clear Differentiators */}
        <section 
          className="py-24 bg-white"
          aria-labelledby="differentiators-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">
                Our Approach to Virtual Primary Care
              </p>
              <h2 
                id="differentiators-heading"
                className="font-display text-4xl text-sfm-navy mb-4"
              >
                What Makes Sankofa Family Medicine Different
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Differentiator 1 */}
              <article className="bg-sfm-cream p-8 border-l-4 border-sfm-gold rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <Users
                  className="w-8 h-8 text-sfm-gold mb-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl text-sfm-navy mb-3">
                  One Physician, Always
                </h3>
                <p className="text-muted">
                  No rotating providers. Dr. Yaw Nkrumah is your physician for every visit,
                  every message, every decision. Continuity is not a feature. It is the
                  foundation of how we deliver virtual primary care in Washington State.
                </p>
              </article>

              {/* Differentiator 2 */}
              <article className="bg-sfm-cream p-8 border-l-4 border-sfm-azure rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <Zap
                  className="w-8 h-8 text-sfm-azure mb-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl text-sfm-navy mb-3">
                  Precision Medicine
                </h3>
                <p className="text-muted">
                  Genetic testing, metabolic optimization, and evidence-based protocols,
                  all in service of personalized care that treats you as an individual, not
                  a statistic or checkbox on a form.
                </p>
              </article>

              {/* Differentiator 3 */}
              <article className="bg-sfm-cream p-8 border-l-4 border-sfm-navy rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <Globe
                  className="w-8 h-8 text-sfm-navy mb-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl text-sfm-navy mb-3">
                  Virtual-First, Human-Centered
                </h3>
                <p className="text-muted">
                  Technology that serves relationship, not replaces it. HIPAA-compliant
                  telehealth that brings convenient access to primary care throughout
                  Washington State without sacrificing human connection.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Sankofa OS Teaser */}
        <section 
          className="py-24 bg-sfm-navy"
          aria-labelledby="sankofa-os-heading"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
                The Infrastructure
              </p>
              <h2 
                id="sankofa-os-heading"
                className="font-display text-4xl text-white mb-4"
              >
                Sankofa OS
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We&apos;re building clinical memory infrastructure: what traditional EHRs 
                were never designed to do.
              </p>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-white/60 mb-6 max-w-xl mx-auto">
                Sankofa OS is currently in development. We&apos;re selectively building
                our early access cohort of physicians and health systems who want to
                shape what comes next in clinical memory technology.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/sankofa-os"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-gold text-sfm-navy font-medium rounded-full hover:bg-amber-300 transition-all"
                  aria-label="Learn more about Sankofa OS clinical memory infrastructure"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact?source=sankofa-os"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
                  aria-label="Join the Sankofa OS early access waitlist"
                >
                  Join Waitlist
                </Link>
              </div>

              <p className="text-white/30 text-xs mt-6">
                Early access opening soon. Limited availability.
              </p>
            </div>
          </div>
        </section>

        {/* Our Standards - Trust Building */}
        <section 
          className="py-24 bg-white"
          aria-labelledby="standards-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">
                Our Standards
              </p>
              <h2 
                id="standards-heading"
                className="font-display text-4xl text-sfm-navy mb-4"
              >
                Our Commitments to Patients
              </h2>
              <p className="text-muted max-w-xl mx-auto">
                These are not marketing claims. They are commitments we measure ourselves
                against as a virtual-first primary care practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {[
                {
                  icon: Heart,
                  title: 'We listen first',
                  description:
                    'Your history and lived experience shape the diagnosis, not the other way around.',
                },
                {
                  icon: FileText,
                  title: 'We document with dignity',
                  description:
                    'Your medical records reflect who you are, not just what insurance codes might apply.',
                },
                {
                  icon: Shield,
                  title: 'Full transparency',
                  description:
                    'Clear explanations, access to your records, and no hidden billing surprises.',
                },
                {
                  icon: Scale,
                  title: 'Fair treatment',
                  description:
                    'Your background informs care. It never limits the quality of care you receive.',
                },
                {
                  icon: UserCheck,
                  title: 'Every question answered',
                  description:
                    'Secure messaging responses within 24 to 48 hours for established patients.',
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className={`bg-sfm-cream p-6 border-l-4 border-sfm-azure rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <item.icon
                    className="w-6 h-6 text-sfm-azure mb-3"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-lg text-sfm-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Teaser */}
        <section 
          className="py-24 bg-sfm-cream"
          aria-labelledby="founder-heading"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div
                className="absolute inset-0 rounded-full bg-sfm-gold/15 blur-md"
                aria-hidden="true"
              />
              <Image
                src="/images/dr-nkrumah.png"
                alt="Dr. Yaw Nkrumah, MD, Board-eligible family medicine physician and founder of Sankofa Family Medicine, providing virtual primary care across Washington State"
                width={128}
                height={128}
                className="relative w-32 h-32 rounded-full object-cover object-top border-4 border-sfm-gold/30"
              />
            </div>
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">
              The Founder
            </p>
            <h2 
              id="founder-heading"
              className="font-display text-3xl text-sfm-navy mb-4"
            >
              Dr. Yaw Nkrumah, MD
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Board-eligible family medicine physician, researcher, and the vision behind 
              Sankofa Family Medicine. Dr. Nkrumah is licensed in Washington State and 
              dedicated to delivering virtual-first Medicine That Remembers™.
            </p>
            <Link 
              href="/founder" 
              className="btn-primary"
              aria-label="Read more about Dr. Yaw Nkrumah's background and philosophy"
            >
              Meet Our Founder
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section 
          className="py-28 bg-gradient-to-b from-white to-sfm-cream/50"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 
              id="cta-heading"
              className="font-display text-4xl md:text-5xl text-sfm-navy mb-6 leading-tight"
            >
              Ready to Experience Medicine That Remembers™?
            </h2>
            <p className="text-muted text-lg md:text-xl mb-12">
              Join our founding member waitlist for priority enrollment into virtual
              primary care at Sankofa Family Medicine. Now accepting adults across 
              Washington State.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-primary"
                aria-label="Join the Sankofa Family Medicine patient waitlist"
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
              <Link 
                href="/services" 
                className="btn-secondary"
                aria-label="View Sankofa Family Medicine services and pricing"
              >
                View Services and Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

