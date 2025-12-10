import Link from 'next/link'
import { ArrowRight, Lock, Fingerprint, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

// =============================================================================
// COMPREHENSIVE STRUCTURED DATA FOR SEO + AI DISCOVERY
// =============================================================================

// Software Application Schema for Sankofa OS
const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://sankofafamilymedicine.com/sankofa-os/#software',
  name: 'Sankofa OS',
  alternateName: 'Clinical Memory Infrastructure',
  description:
    'Sankofa OS is clinical memory infrastructure for healthcare organizations. Unlike traditional EHRs designed for billing, Sankofa OS is built to remember patient context, track care plan adherence, detect clinical drift, and surface what matters at the point of care. Currently in development by Sankofa Family Medicine.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web-based',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    price: '0',
    priceCurrency: 'USD',
    description: 'Early access waitlist - pricing to be announced',
  },
  creator: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sankofafamilymedicine.com/#organization',
    name: 'Sankofa Family Medicine',
  },
  featureList: [
    'Clinical memory infrastructure',
    'Patient context preservation',
    'Care plan tracking',
    'Clinical drift detection',
    'Pre-visit intelligence',
    'Patient data agency',
    'HIPAA compliant',
    'EHR integration layer',
  ],
  releaseNotes: 'Currently in development. Early access opening soon.',
  softwareVersion: 'Pre-release',
  screenshot: 'https://sankofafamilymedicine.com/images/sankofa-os-preview.png',
}

// Organization Schema
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://sankofafamilymedicine.com/#organization',
  name: 'Sankofa Family Medicine',
  description:
    'Virtual-first primary care clinic and healthcare technology company developing Sankofa OS clinical memory infrastructure.',
  url: 'https://sankofafamilymedicine.com',
  logo: 'https://sankofafamilymedicine.com/images/sfm-logo.png',
  sameAs: ['https://www.linkedin.com/company/sankofa-family-medicine'],
}

// FAQ Schema for AI and Featured Snippets
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Sankofa OS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa OS is clinical memory infrastructure — a software layer designed to solve healthcare\'s continuity problem. Unlike traditional Electronic Health Records (EHRs) that are optimized for billing and documentation, Sankofa OS is built to remember patient context, track care plan adherence, detect when care drifts from goals, and surface relevant information at the point of care. It is being developed by Sankofa Family Medicine.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Sankofa OS different from an EHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional EHRs were built for billing, compliance, and documentation volume. Sankofa OS is built for memory. It focuses on preserving patient context across visits, tracking whether care plans are followed, detecting clinical drift before it becomes a problem, and giving patients agency over their health data. It is designed to work alongside existing EHRs as an intelligence layer, not replace them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What problem does Sankofa OS solve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa OS addresses healthcare\'s continuity crisis. Patients are forced to repeat their stories at every visit because systems don\'t remember context. Care plans drift without detection. Physicians spend more time on documentation than patient care. Clinical adherence and coordination failures cost the healthcare system hundreds of billions annually. Sankofa OS is designed to solve this by building memory into clinical infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Sankofa OS available now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa OS is currently in development. Sankofa Family Medicine is building an early access cohort of physicians, medical directors, and health systems who want to influence the product roadmap. Those interested can join the waitlist for early access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is building Sankofa OS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa OS is being developed by Sankofa Family Medicine, a virtual-first primary care clinic founded by Dr. Yaw Nkrumah. The system is being built inside a practicing clinic, meaning every design decision is informed by real physician workflows and real patient relationships — not theoretical assumptions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Sankofa OS HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sankofa OS is being built with HIPAA compliance as a foundational requirement. The architecture includes encryption at rest and in transit, role-based access controls, comprehensive audit logging, and patient-controlled data permissions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the name Sankofa mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sankofa is an Akan principle from West Africa meaning "go back, retrieve what matters, and carry it forward." It is represented by a bird looking back while moving forward. This principle of retaining what is essential while building what is new is the philosophical foundation of both Sankofa Family Medicine and Sankofa OS.',
      },
    },
  ],
}

// WebPage Schema
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sankofafamilymedicine.com/sankofa-os/#webpage',
  url: 'https://sankofafamilymedicine.com/sankofa-os',
  name: 'Sankofa OS | Clinical Memory Infrastructure for Healthcare',
  description:
    'Sankofa OS is clinical memory infrastructure — what EHRs were never designed to do. Built for physicians who refuse to forget their patients. Early access opening soon.',
  isPartOf: {
    '@id': 'https://sankofafamilymedicine.com/#website',
  },
  about: {
    '@id': 'https://sankofafamilymedicine.com/sankofa-os/#software',
  },
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  inLanguage: 'en-US',
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
      name: 'Sankofa OS',
      item: 'https://sankofafamilymedicine.com/sankofa-os',
    },
  ],
}

// =============================================================================
// METADATA FOR SEO
// =============================================================================

export const metadata: Metadata = {
  title: 'Sankofa OS | Clinical Memory Infrastructure for Healthcare',
  description:
    'Sankofa OS is clinical memory infrastructure — what EHRs were never designed to do. Memory, intelligence, and patient control built into clinical workflows. Early access for physicians and health systems opening soon.',
  keywords: [
    'Sankofa OS',
    'clinical memory infrastructure',
    'healthcare technology',
    'EHR alternative',
    'clinical memory',
    'healthcare software',
    'patient context',
    'care continuity technology',
    'clinical intelligence',
    'healthcare innovation',
    'physician technology',
    'health system software',
    'care plan tracking',
    'clinical drift detection',
    'HIPAA compliant healthcare software',
    'patient data agency',
    'healthcare AI',
    'medical software',
  ],
  authors: [{ name: 'Sankofa Family Medicine', url: 'https://sankofafamilymedicine.com' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/sankofa-os',
  },
  openGraph: {
    title: 'Sankofa OS | Clinical Memory Infrastructure',
    description:
      'EHRs were built for billing. We are building for memory. Sankofa OS is clinical memory infrastructure for healthcare. Early access opening soon.',
    url: 'https://sankofafamilymedicine.com/sankofa-os',
    siteName: 'Sankofa Family Medicine',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sankofafamilymedicine.com/images/sankofa-os-og.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa OS - Clinical Memory Infrastructure - Your EHR remembers billing codes. Ours remembers patients.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa OS | Clinical Memory Infrastructure',
    description:
      'EHRs were built for billing. We are building for memory. Early access opening soon.',
    images: ['https://sankofafamilymedicine.com/images/sankofa-os-og.png'],
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
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function SankofaOSPage() {
  return (
    <>
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-[#0a0a0f] min-h-screen overflow-hidden">
        {/* Grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <main id="main-content">
          {/* ===== HERO SECTION ===== */}
          <section 
            className="relative min-h-screen flex items-center justify-center px-6"
            aria-labelledby="hero-heading"
          >
            {/* Atmospheric background */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,160,53,0.08)_0%,_transparent_70%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(199,160,53,0.12)_0%,_transparent_70%)]" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '100px 100px',
                }}
              />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-12 animate-[fadeIn_1s_ease-out_0.2s_forwards] opacity-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sfm-gold opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sfm-gold" />
                </span>
                <span className="text-white/60 text-sm tracking-wide">
                  In Development · Early Access Opening Soon
                </span>
              </div>

              {/* Main headline - AI-optimized with clear value proposition */}
              <h1 
                id="hero-heading"
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight leading-[0.95] animate-[fadeInUp_1s_ease-out_0.4s_forwards] opacity-0"
              >
                Your EHR remembers
                <br />
                <span className="text-white/30">billing codes.</span>
                <br />
                <span className="bg-gradient-to-r from-sfm-gold via-amber-300 to-sfm-gold bg-clip-text text-transparent">
                  Ours remembers patients.
                </span>
              </h1>

              {/* Subheadline - Clear product definition for AI extraction */}
              <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-[fadeInUp_1s_ease-out_0.6s_forwards] opacity-0">
                <strong className="text-white/70">Sankofa OS</strong> is clinical memory infrastructure — 
                the intelligence layer that transforms fragmented visits into continuous care.
              </p>

              {/* CTA */}
              <div className="animate-[fadeInUp_1s_ease-out_0.8s_forwards] opacity-0">
                <Link
                  href="#waitlist"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sfm-gold text-sfm-navy font-medium rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-[0_0_40px_rgba(199,160,53,0.3)] hover:-translate-y-0.5"
                  aria-label="Request early access to Sankofa OS"
                >
                  Request Early Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>

              {/* Scroll indicator */}
              <div 
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-[fadeIn_1s_ease-out_1.2s_forwards] opacity-0"
                aria-hidden="true"
              >
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ===== THE PROBLEM ===== */}
          <section 
            className="relative py-32 px-6"
            aria-labelledby="problem-heading"
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left column */}
                <div className="lg:col-span-5">
                  <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                    The Failure
                  </p>
                  <h2 
                    id="problem-heading"
                    className="font-display text-4xl sm:text-5xl text-white leading-tight mb-8"
                  >
                    Healthcare&apos;s most expensive problem isn&apos;t technology.
                  </h2>
                  <div className="w-16 h-px bg-gradient-to-r from-sfm-gold to-transparent" aria-hidden="true" />
                </div>

                {/* Right column - Clear problem statement for AI */}
                <div className="lg:col-span-7 lg:pt-12">
                  <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                    <p className="text-white/80 text-xl">It&apos;s forgetting.</p>
                    <p>
                      Context disappears between visits. Care plans drift without
                      detection. Patients repeat themselves because no system was
                      designed to remember.
                    </p>
                    <p>
                      The cost is measured in hundreds of billions annually. The
                      human cost is immeasurable.
                    </p>
                    <p className="text-white/40 text-base pt-4 border-t border-white/10">
                      The infrastructure to solve this exists. It simply hasn&apos;t
                      been built for the right purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== THE SOLUTION ===== */}
          <section 
            className="relative py-32 px-6"
            aria-labelledby="solution-heading"
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-sfm-gold/[0.02] to-transparent"
              aria-hidden="true"
            />

            <div className="relative max-w-4xl mx-auto text-center">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                The Solution
              </p>
              <h2 
                id="solution-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-8 leading-tight"
              >
                We&apos;re building what EHRs
                <br />
                were never designed to do.
              </h2>

              {/* Feature hints - Abstract for mystery, but semantic for AI */}
              <div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 mb-16"
                role="list"
                aria-label="Core capabilities of Sankofa OS"
              >
                {[
                  {
                    icon: Fingerprint,
                    label: 'Memory',
                    hint: 'What matters, surfaced when it matters',
                    description: 'Patient context preserved across visits',
                  },
                  {
                    icon: Sparkles,
                    label: 'Intelligence',
                    hint: 'Context that compounds over time',
                    description: 'Clinical insights that improve with history',
                  },
                  {
                    icon: Lock,
                    label: 'Control',
                    hint: 'Patient agency by design',
                    description: 'Patients own and control their health data',
                  },
                ].map((item) => (
                  <article
                    key={item.label}
                    role="listitem"
                    className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-sfm-gold/30 hover:bg-sfm-gold/[0.03] transition-all duration-500"
                  >
                    <item.icon
                      className="w-6 h-6 text-sfm-gold/70 mb-4 group-hover:text-sfm-gold transition-colors"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="text-white font-medium mb-2">{item.label}</h3>
                    <p className="text-white/40 text-sm">{item.hint}</p>
                    {/* Hidden but accessible description for AI/screen readers */}
                    <span className="sr-only">{item.description}</span>
                  </article>
                ))}
              </div>

              <p className="text-white/30 text-sm tracking-wide">
                Architecture proprietary · Details protected by design
              </p>
            </div>
          </section>

          {/* ===== CREDIBILITY ===== */}
          <section 
            className="relative py-32 px-6 border-t border-white/[0.06]"
            aria-labelledby="credibility-heading"
          >
            <h2 id="credibility-heading" className="sr-only">About Sankofa OS Development</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4">
                    Origin
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Sankofa OS is being developed inside a practicing primary care
                    clinic — not a lab. Every design decision is informed by real
                    physician workflow and real patient relationships.
                  </p>
                </div>

                <div>
                  <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4">
                    Philosophy
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Named for the Akan principle of retrieving what matters from the
                    past to move forward wisely. Not nostalgia. Applied wisdom
                    encoded into clinical infrastructure.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-20 pt-12 border-t border-white/[0.06]">
                <blockquote className="text-center">
                  <p className="font-display text-2xl sm:text-3xl text-white/80 italic leading-relaxed max-w-3xl mx-auto">
                    &ldquo;Continuity isn&apos;t a feature. It&apos;s the foundation.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </section>

          {/* ===== WAITLIST ===== */}
          <section
            id="waitlist"
            className="relative py-32 px-6 border-t border-white/[0.06]"
            aria-labelledby="waitlist-heading"
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(199,160,53,0.1)_0%,_transparent_70%)]"
              aria-hidden="true"
            />

            <div className="relative max-w-2xl mx-auto text-center">
              <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
                Early Access
              </p>
              <h2 
                id="waitlist-heading"
                className="font-display text-4xl sm:text-5xl text-white mb-6"
              >
                Shape what comes next.
              </h2>
              <p className="text-white/50 text-lg mb-12 leading-relaxed">
                We&apos;re building our founding cohort of physicians who want
                clinical infrastructure that actually remembers. Limited access.
                Influence on roadmap.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Target audience */}
                  <div 
                    className="flex flex-wrap items-center justify-center gap-4 text-white/40 text-sm"
                    role="list"
                    aria-label="Who should join the waitlist"
                  >
                    <span className="flex items-center gap-2" role="listitem">
                      <span className="w-1.5 h-1.5 rounded-full bg-sfm-gold/60" aria-hidden="true" />
                      Independent physicians
                    </span>
                    <span className="flex items-center gap-2" role="listitem">
                      <span className="w-1.5 h-1.5 rounded-full bg-sfm-gold/60" aria-hidden="true" />
                      Medical directors
                    </span>
                    <span className="flex items-center gap-2" role="listitem">
                      <span className="w-1.5 h-1.5 rounded-full bg-sfm-gold/60" aria-hidden="true" />
                      Health systems
                    </span>
                  </div>

                  <Link
                    href="/contact?source=sankofa-os"
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-sfm-gold text-sfm-navy font-medium rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-[0_0_50px_rgba(199,160,53,0.4)] hover:-translate-y-0.5"
                    aria-label="Request access to Sankofa OS early access program"
                  >
                    Request Access
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>

                  <p className="text-white/30 text-xs">
                    We review every request personally.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="relative py-12 px-6 border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sfm-gold/10 border border-sfm-gold/20 flex items-center justify-center">
                  <span className="text-sfm-gold font-display text-sm">S</span>
                </div>
                <span className="text-white/40 text-sm">
                  Sankofa OS · A Sankofa Family Medicine Innovation
                </span>
              </div>

              <nav className="flex items-center gap-6 text-white/30 text-sm" aria-label="Footer navigation">
                <Link
                  href="/about"
                  className="hover:text-white/60 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white/60 transition-colors"
                >
                  Contact
                </Link>
                <span className="flex items-center gap-2">
                  <Lock className="w-3 h-3" aria-hidden="true" />
                  HIPAA Compliant
                </span>
              </nav>
            </div>

            <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-white/[0.04] text-center">
              <p className="text-white/20 text-xs italic">
                &ldquo;Go back, retrieve what matters, carry it forward.&rdquo;
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

