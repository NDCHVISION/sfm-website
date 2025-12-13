'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Check, ArrowRight, Heart, Dna, Star, Shield, Sparkles, Crown } from 'lucide-react'

export default function ServicesPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tiers = [
    {
      name: 'Continuity Care',
      tagline: 'Premium virtual primary care',
      monthlyPrice: 149,
      annualPrice: 1609,
      annualSavings: 179,
      icon: Heart,
      gradient: 'from-sfm-azure/10 to-transparent',
      accentColor: 'sfm-azure',
      featured: false,
      features: [
        'Unlimited virtual visits',
        '24-48 hour secure messaging',
        '2 wellness visits/year',
        'Care coordination',
        'Prescription management',
      ],
      cta: 'Join Waitlist',
    },
    {
      name: 'Precision Care',
      tagline: 'Genetic insights + AI-powered care',
      monthlyPrice: 249,
      annualPrice: 2689,
      annualSavings: 299,
      icon: Dna,
      gradient: 'from-sfm-gold/10 via-sfm-gold/5 to-transparent',
      accentColor: 'sfm-gold',
      featured: true,
      features: [
        'Everything in Continuity Care',
        'DNA Panel included',
        'Genetic interpretation',
        'AI-generated health roadmap',
        'Pharmacogenomic guidance',
        'Priority scheduling',
      ],
      cta: 'Claim Founding Spot',
    },
    {
      name: 'Legacy Health',
      tagline: 'White-glove concierge care',
      monthlyPrice: 449,
      annualPrice: 4849,
      annualSavings: 539,
      icon: Crown,
      gradient: 'from-sfm-navy/10 to-transparent',
      accentColor: 'sfm-navy',
      featured: false,
      features: [
        'Everything in Precision Care',
        'Direct physician cell access',
        'Same-day appointments',
        'Extended visit times',
        'Annual labs included',
        'Family health planning',
      ],
      cta: 'Join Waitlist',
    },
  ]

  const programs = [
    {
      name: 'Cardiometabolic Reset',
      duration: '12 WEEKS',
      description: 'Blood pressure, cholesterol, and metabolic markers: transformed.',
      outcomes: ['BP improvement: 12-15 points', 'A1c reduction: 0.5-0.8'],
      price: 1495,
      icon: Shield,
      color: 'sfm-azure',
    },
    {
      name: 'Weight & Metabolic',
      duration: '12-16 WEEKS',
      description: 'Evidence-based weight management with metabolic optimization.',
      outcomes: ['5 physician visits', 'Enhanced messaging'],
      price: 1895,
      icon: Sparkles,
      color: 'sfm-gold',
    },
    {
      name: 'Genomic Insight',
      duration: 'ONE-TIME',
      description: "Have 23andMe or Ancestry? We will unlock what they did not tell you.",
      outcomes: ['Clinical interpretation', 'Actionable insights'],
      price: 295,
      icon: Dna,
      color: 'sfm-azure',
    },
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://sankofafamilymedicine.com/#organization',
        name: 'Sankofa Family Medicine',
        alternateName: 'Sankofa Family Medicine PLLC',
        description: 'Premium virtual direct primary care practice serving Washington State. Offering genetics-informed, AI-powered personalized healthcare with unlimited physician access and same-day appointments.',
        url: 'https://sankofafamilymedicine.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sankofafamilymedicine.com/images/logo.png',
        },
        image: 'https://sankofafamilymedicine.com/images/og-image.jpg',
        telephone: '+1-XXX-XXX-XXXX',
        email: 'info@sankofafamilymedicine.com',
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
        areaServed: {
          '@type': 'State',
          name: 'Washington',
          sameAs: 'https://en.wikipedia.org/wiki/Washington_(state)',
        },
        serviceArea: {
          '@type': 'GeoShape',
          name: 'Washington State',
          description: 'Virtual healthcare services available to all Washington State residents',
        },
        priceRange: '$149-$449/month',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, HSA, FSA',
        medicalSpecialty: [
          'Family Medicine',
          'Primary Care',
          'Preventive Medicine',
          'Genetics',
        ],
        availableService: [
          {
            '@type': 'MedicalProcedure',
            '@id': 'https://sankofafamilymedicine.com/#continuity-care',
            name: 'Continuity Care Membership',
            description: 'Premium virtual primary care membership with unlimited visits, 24-48 hour secure messaging, wellness visits, care coordination, and prescription management for Washington State residents.',
            procedureType: 'https://schema.org/NoninvasiveProcedure',
            howPerformed: 'Telemedicine video consultation',
            preparation: 'No preparation required',
            followup: 'Ongoing care coordination included',
            offers: {
              '@type': 'Offer',
              price: '149',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '149',
                priceCurrency: 'USD',
                unitText: 'month',
                billingDuration: 'P1M',
              },
              availability: 'https://schema.org/InStock',
              validFrom: '2025-01-01',
            },
          },
          {
            '@type': 'MedicalProcedure',
            '@id': 'https://sankofafamilymedicine.com/#precision-care',
            name: 'Precision Care Membership',
            description: 'Advanced virtual primary care with DNA panel, genetic interpretation, AI-generated health roadmap, pharmacogenomic guidance, and priority scheduling for Washington State residents.',
            procedureType: 'https://schema.org/NoninvasiveProcedure',
            howPerformed: 'Telemedicine video consultation with genetic testing',
            preparation: 'DNA sample collection kit provided',
            followup: 'Ongoing genetic counseling and AI-powered health optimization',
            offers: {
              '@type': 'Offer',
              price: '249',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '249',
                priceCurrency: 'USD',
                unitText: 'month',
                billingDuration: 'P1M',
              },
              availability: 'https://schema.org/LimitedAvailability',
              validFrom: '2025-01-01',
            },
          },
          {
            '@type': 'MedicalProcedure',
            '@id': 'https://sankofafamilymedicine.com/#legacy-health',
            name: 'Legacy Health Membership',
            description: 'White-glove concierge virtual care with direct physician cell access, same-day appointments, extended visit times, annual labs included, and family health planning for Washington State residents.',
            procedureType: 'https://schema.org/NoninvasiveProcedure',
            howPerformed: 'Telemedicine with direct physician access',
            preparation: 'No preparation required',
            followup: 'Unlimited direct physician communication',
            offers: {
              '@type': 'Offer',
              price: '449',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '449',
                priceCurrency: 'USD',
                unitText: 'month',
                billingDuration: 'P1M',
              },
              availability: 'https://schema.org/InStock',
              validFrom: '2025-01-01',
            },
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Sankofa Family Medicine Healthcare Services',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Membership Plans',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Continuity Care Membership',
                    description: 'Premium virtual primary care with unlimited visits',
                  },
                  price: '149',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Precision Care Membership',
                    description: 'Genetic insights and AI-powered personalized care',
                  },
                  price: '249',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Legacy Health Membership',
                    description: 'White-glove concierge care with direct physician access',
                  },
                  price: '449',
                  priceCurrency: 'USD',
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Transformation Programs',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cardiometabolic Reset Program',
                    description: '12-week intensive program for blood pressure, cholesterol, and metabolic optimization',
                  },
                  price: '1495',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Weight and Metabolic Program',
                    description: '12-16 week evidence-based weight management program',
                  },
                  price: '1895',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Genomic Insight Session',
                    description: 'Clinical interpretation of existing genetic test results from 23andMe or Ancestry',
                  },
                  price: '295',
                  priceCurrency: 'USD',
                },
              ],
            },
          ],
        },
        isAcceptingNewPatients: true,
        virtualLocation: {
          '@type': 'VirtualLocation',
          name: 'Sankofa Family Medicine Telehealth Platform',
          description: 'HIPAA-compliant virtual care platform for Washington State residents',
        },
        knowsAbout: [
          'Telemedicine',
          'Virtual Primary Care',
          'Direct Primary Care',
          'Genetic Testing',
          'Pharmacogenomics',
          'Preventive Medicine',
          'Cardiometabolic Health',
          'Weight Management',
          'AI-Powered Healthcare',
        ],
        sameAs: [
          'https://www.linkedin.com/company/sankofa-family-medicine',
        ],
      },
      {
        '@type': 'Physician',
        '@id': 'https://sankofafamilymedicine.com/#physician',
        name: 'Dr. Nkrumah',
        description: 'Board-eligible family medicine physician specializing in genetics-informed virtual primary care',
        medicalSpecialty: 'Family Medicine',
        worksFor: {
          '@id': 'https://sankofafamilymedicine.com/#organization',
        },
        availableService: [
          'Virtual Primary Care',
          'Genetic Consultation',
          'Preventive Medicine',
          'Chronic Disease Management',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sankofafamilymedicine.com/services/#webpage',
        url: 'https://sankofafamilymedicine.com/services',
        name: 'Services and Pricing | Sankofa Family Medicine | Virtual Primary Care Washington State',
        description: 'Explore membership tiers and pricing for premium virtual direct primary care in Washington State. Genetics-informed healthcare with unlimited physician access starting at $149/month.',
        isPartOf: {
          '@id': 'https://sankofafamilymedicine.com/#website',
        },
        about: {
          '@id': 'https://sankofafamilymedicine.com/#organization',
        },
        breadcrumb: {
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
              name: 'Services',
              item: 'https://sankofafamilymedicine.com/services',
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sankofafamilymedicine.com/#website',
        url: 'https://sankofafamilymedicine.com',
        name: 'Sankofa Family Medicine',
        description: 'Premium virtual direct primary care practice in Washington State',
        publisher: {
          '@id': 'https://sankofafamilymedicine.com/#organization',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sankofafamilymedicine.com/services/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Direct Primary Care (DPC)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Direct Primary Care is a membership-based healthcare model where patients pay a monthly fee directly to their physician for comprehensive primary care services. This eliminates insurance billing complexity and allows for longer visits, same-day access, and a stronger patient-physician relationship.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Sankofa Family Medicine available throughout Washington State?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Sankofa Family Medicine provides virtual primary care services to patients located anywhere in Washington State through our HIPAA-compliant telemedicine platform.',
            },
          },
          {
            '@type': 'Question',
            name: 'What payment methods are accepted?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We accept credit cards, debit cards, HSA (Health Savings Account), and FSA (Flexible Spending Account) payments. We are a cash-pay practice and do not bill insurance directly.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included in the genetic testing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our Precision Care and Legacy Health memberships include comprehensive DNA panel testing with clinical interpretation, pharmacogenomic guidance for medication optimization, and an AI-generated personalized health roadmap.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Founding Member Hero */}
      <section className="relative pt-36 pb-28 bg-sfm-navy overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(188,152,51,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,67,110,0.2),transparent_50%)]" />
          <Image 
            src="/images/sfm-background.png" 
            alt="" 
            fill
            className="object-cover opacity-5 mix-blend-luminosity"
            aria-hidden="true"
            priority
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sfm-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sfm-gold/20 to-sfm-gold/10 
              border border-sfm-gold/30 text-sfm-gold text-sm tracking-[0.2em] mb-8 backdrop-blur-sm
              transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <Star className="w-4 h-4" fill="currentColor" aria-hidden="true" />
            FOUNDING MEMBER OPPORTUNITY
          </div>
          
          <h1 
            className={`font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1]
              transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            First 30 Members Get<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sfm-gold via-yellow-500 to-sfm-gold">
              Tier 3 Benefits at Tier 2 Pricing
            </span>
          </h1>
          
          <p 
            className={`text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body
              transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Lock in premium access, genetic testing, and direct physician cell access at our 
            mid-tier price. <span className="text-white/90 font-medium">Locked for life.</span>
          </p>
          
          <div 
            className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sfm-gold to-yellow-600 
                text-sfm-navy font-semibold tracking-wide hover:from-yellow-500 hover:to-sfm-gold 
                transition-all duration-300 shadow-lg shadow-sfm-gold/25 hover:shadow-xl hover:shadow-sfm-gold/40"
            >
              Claim Your Founding Spot
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          
          {/* Founding spots indicator */}
          <div 
            className={`mt-12 inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10
              transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-sfm-gold to-sfm-gold/50 
                    border-2 border-sfm-navy flex items-center justify-center"
                >
                  <span className="text-xs text-sfm-navy font-bold">{i + 1}</span>
                </div>
              ))}
            </div>
            <span className="text-white/60 text-sm font-body">Limited founding positions available</span>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-28 bg-gradient-to-b from-white via-white to-sfm-cream/50 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23051c3b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium font-body">
              Membership Tiers
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">
              Choose Your Level of Care
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-body">
              Every tier includes unlimited virtual access to Dr. Nkrumah. 
              Choose the depth of precision medicine that fits your health journey.
            </p>
          </header>

          {/* Billing Toggle */}
          <div className="flex flex-col items-center mb-20">
            <p className="text-sm text-gray-400 mb-5 tracking-wide font-body">Choose Your Commitment</p>

            <div
              className={`billing-toggle relative inline-flex items-center gap-6 bg-gray-100 rounded-full p-1.5 shadow-inner ${
                billingPeriod === 'annual' ? 'annual-active' : ''
              }`}
              role="tablist"
              aria-label="Billing period"
            >
              <div className="toggle-options relative z-10 inline-flex rounded-full">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`toggle-option px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 font-body ${
                    billingPeriod === 'monthly' ? 'is-active text-sfm-navy' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-pressed={billingPeriod === 'monthly'}
                >
                  Monthly
                </button>

                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`toggle-option px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 font-body ${
                    billingPeriod === 'annual' ? 'is-active text-sfm-navy' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-pressed={billingPeriod === 'annual'}
                >
                  Annual
                  <span className="badge px-2.5 py-1 bg-gradient-to-r from-sfm-gold/20 to-yellow-400/20 text-sfm-gold text-xs font-semibold rounded-full tracking-wide">
                    SAVE 10%
                  </span>
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 max-w-sm text-center font-body">
              {billingPeriod === 'monthly'
                ? 'Month-to-month flexibility. Start, pause, or cancel anytime.'
                : 'Commit to your health for the year and save 10%. Paid upfront.'}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-start">
            {tiers.map((tier, index) => {
              const Icon = tier.icon
              const displayPrice = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.annualPrice
              const priceLabel = billingPeriod === 'monthly' ? '/month' : '/year'
              
              return (
                <article 
                  key={tier.name}
                  className={`group relative flex flex-col transition-all duration-500
                    ${tier.featured 
                      ? 'lg:-mt-4 lg:mb-4 z-10' 
                      : ''
                    }
                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Featured tier glow effect */}
                  {tier.featured && (
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-sfm-gold via-sfm-gold/50 to-sfm-gold/20 
                      rounded-2xl opacity-100" />
                  )}
                  
                  <div 
                    className={`relative flex flex-col h-full bg-white rounded-2xl overflow-hidden
                      transition-all duration-300
                      ${tier.featured 
                        ? 'shadow-2xl shadow-sfm-gold/15' 
                        : 'border border-gray-200 hover:border-gray-300 hover:shadow-xl'
                      }`}
                  >
                    {/* Featured badge */}
                    {tier.featured && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sfm-gold via-yellow-500 to-sfm-gold" />
                    )}
                    
                    {/* Card header */}
                    <div className={`p-8 pb-6 bg-gradient-to-br ${tier.gradient}`}>
                      {tier.featured && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sfm-gold/10 
                          border border-sfm-gold/20 rounded-full mb-4">
                          <Star className="w-3.5 h-3.5 text-sfm-gold" fill="currentColor" />
                          <span className="text-sfm-gold text-xs font-semibold tracking-wide font-body">
                            FOUNDING MEMBER OFFER
                          </span>
                        </div>
                      )}
                      
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl 
                        ${tier.accentColor === 'sfm-azure' ? 'bg-sfm-azure/10' : ''} 
                        ${tier.accentColor === 'sfm-gold' ? 'bg-sfm-gold/10' : ''} 
                        ${tier.accentColor === 'sfm-navy' ? 'bg-sfm-navy/10' : ''} 
                        mb-5`}>
                        <Icon 
                          className={`w-7 h-7 
                            ${tier.accentColor === 'sfm-azure' ? 'text-sfm-azure' : ''} 
                            ${tier.accentColor === 'sfm-gold' ? 'text-sfm-gold' : ''} 
                            ${tier.accentColor === 'sfm-navy' ? 'text-sfm-navy' : ''}`} 
                          strokeWidth={1.5} 
                          aria-hidden="true" 
                        />
                      </div>
                      
                      <h3 className="font-display text-2xl text-sfm-navy mb-1">{tier.name}</h3>
                      <p className="text-gray-400 text-sm font-body">{tier.tagline}</p>
                    </div>
                    
                    {/* Pricing */}
                    <div className="px-8 py-6 border-b border-gray-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-400 font-body">$</span>
                        <span 
                          className={`font-display text-5xl tracking-tight
                            ${tier.featured ? 'text-sfm-gold' : 'text-sfm-navy'}`}
                        >
                          {displayPrice.toLocaleString()}
                        </span>
                        <span className="text-gray-400 ml-1 font-body">{priceLabel}</span>
                      </div>
                      
                      <p className="text-sm text-gray-400 mt-2 font-body">
                        {billingPeriod === 'monthly' ? (
                          <>
                            or <span className="text-sfm-azure">${tier.annualPrice.toLocaleString()}/year</span>
                            <span className="text-gray-300 mx-1">|</span>
                            save ${tier.annualSavings}
                          </>
                        ) : (
                          <span className="text-emerald-600 font-medium">
                            You save ${tier.annualSavings} vs monthly
                          </span>
                        )}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="p-8 pt-6 flex-grow">
                      <ul className="space-y-4" role="list">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full 
                              ${tier.accentColor === 'sfm-azure' ? 'bg-sfm-azure/10' : ''} 
                              ${tier.accentColor === 'sfm-gold' ? 'bg-sfm-gold/10' : ''} 
                              ${tier.accentColor === 'sfm-navy' ? 'bg-sfm-navy/10' : ''} 
                              flex items-center justify-center`}>
                              <Check 
                                className={`w-3 h-3 
                                  ${tier.accentColor === 'sfm-azure' ? 'text-sfm-azure' : ''} 
                                  ${tier.accentColor === 'sfm-gold' ? 'text-sfm-gold' : ''} 
                                  ${tier.accentColor === 'sfm-navy' ? 'text-sfm-navy' : ''}`} 
                                strokeWidth={3}
                                aria-hidden="true" 
                              />
                            </span>
                            <span className="text-gray-600 text-sm leading-relaxed font-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <div className="p-8 pt-0">
                      <Link 
                        href="/contact" 
                        className={`group/btn flex items-center justify-center gap-2 w-full py-4 rounded-xl
                          font-semibold text-sm tracking-wide transition-all duration-300 font-body
                          ${tier.featured 
                            ? 'bg-gradient-to-r from-sfm-gold to-yellow-600 text-sfm-navy hover:from-yellow-500 hover:to-sfm-gold shadow-lg shadow-sfm-gold/25 hover:shadow-xl hover:shadow-sfm-gold/40' 
                            : 'bg-sfm-navy text-white hover:bg-sfm-azure'
                          }`}
                      >
                        {tier.cta}
                        <ArrowRight 
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                          aria-hidden="true" 
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Payment Note */}
          <footer className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 
              bg-sfm-cream rounded-2xl border border-gray-100">
              <Shield className="w-5 h-5 text-sfm-azure" aria-hidden="true" />
              <p className="text-gray-500 text-sm font-body">
                Cash-pay memberships via Stripe. HSA/FSA accepted. 
                Annual prepayment held in patient trust account.
              </p>
            </div>
            <p className="mt-4">
              <Link 
                href="/faq" 
                className="text-sfm-azure hover:text-sfm-navy text-sm underline underline-offset-4
                  decoration-sfm-azure/30 hover:decoration-sfm-navy/50 transition-colors font-body"
              >
                View payment FAQ
              </Link>
            </p>
          </footer>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="py-16 bg-sfm-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(188,152,51,0.1),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '24hr', label: 'Maximum response time', sublabel: 'Usually much faster' },
              { value: '100%', label: 'Virtual convenience', sublabel: 'Washington State' },
              { value: '0', label: 'Insurance hassles', sublabel: 'Direct care model' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="font-display text-5xl text-sfm-gold mb-2">{stat.value}</p>
                <p className="text-white font-medium mb-1 font-body">{stat.label}</p>
                <p className="text-white/50 text-sm font-body">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Programs */}
      <section className="py-28 bg-gradient-to-b from-sfm-cream to-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <header className="text-center mb-16">
            <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium font-body">
              Transformation Programs
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">
              Targeted Health Outcomes
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-body">
              Intensive programs designed for measurable transformation. 
              Available to members and non-members.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <article 
                  key={program.name}
                  className={`group relative bg-white border border-gray-200 p-8 
                    hover:border-gray-300 hover:shadow-xl transition-all duration-300
                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg 
                      ${program.color === 'sfm-azure' ? 'bg-sfm-azure/10' : 'bg-sfm-gold/10'} 
                      flex items-center justify-center`}>
                      <Icon 
                        className={`w-5 h-5 ${program.color === 'sfm-azure' ? 'text-sfm-azure' : 'text-sfm-gold'}`} 
                        strokeWidth={1.5} 
                        aria-hidden="true" 
                      />
                    </div>
                    <span className={`text-xs tracking-wider font-semibold font-body
                      ${program.color === 'sfm-azure' ? 'text-sfm-azure' : 'text-sfm-gold'}`}>
                      {program.duration}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl text-sfm-navy mb-3">{program.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed font-body">
                    {program.description}
                  </p>
                  
                  <div className="border-t border-gray-100 pt-5 mb-6">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-body">
                      {program.name === 'Genomic Insight' ? 'What You Get' : 'Expected Outcomes'}
                    </p>
                    {program.outcomes.map((outcome) => (
                      <p key={outcome} className="text-sm text-gray-600 mb-1 font-body">{outcome}</p>
                    ))}
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-gray-400 font-body">$</span>
                      <span className="font-display text-3xl text-sfm-navy">
                        {program.price.toLocaleString()}
                      </span>
                    </div>
                    <ArrowRight 
                      className="w-5 h-5 text-gray-300 group-hover:text-sfm-azure 
                        group-hover:translate-x-1 transition-all duration-300" 
                      aria-hidden="true"
                    />
                  </div>
                </article>
              )
            })}
          </div>

          <div className="text-center mt-14">
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-sfm-navy text-white 
                font-semibold tracking-wide hover:bg-sfm-azure transition-all duration-300
                shadow-lg shadow-sfm-navy/10 hover:shadow-xl font-body"
            >
              Enroll in a Program
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Non-Member Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <header className="text-center mb-14">
            <p className="text-gray-400 text-sm tracking-[0.25em] uppercase mb-4 font-body">
              Non-Member Visits
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sfm-navy mb-4">
              Individual Visit Pricing
            </h2>
            <p className="text-gray-400 font-body">
              Not ready for membership? Individual consultations available.
            </p>
          </header>

          <div className="space-y-3">
            {[
              { name: 'Primary Care Visit', duration: '30 minutes', price: 179 },
              { name: 'Complex Visit', duration: '45 minutes', price: 249 },
              { name: 'Comprehensive Visit', duration: '60 minutes', price: 349 },
              { name: 'Genetic Interpretation', duration: 'Full session', price: 395 },
            ].map((item, index) => (
              <div 
                key={item.name} 
                className={`flex items-center justify-between p-5 bg-sfm-cream border border-gray-100
                  hover:bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300
                  ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div>
                  <p className="text-sfm-navy font-medium font-body">{item.name}</p>
                  <p className="text-gray-400 text-sm font-body">{item.duration}</p>
                </div>
                <p className="font-display text-2xl text-sfm-navy">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-14 bg-sfm-cream border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-sfm-azure" aria-hidden="true" />
              <div>
                <p className="text-sfm-navy font-medium font-body">HIPAA Compliant</p>
                <p className="text-gray-400 text-sm font-body">End-to-end encryption</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-sfm-azure" aria-hidden="true" />
              <div>
                <p className="text-sfm-navy font-medium font-body">RCW 48.150 Compliant</p>
                <p className="text-gray-400 text-sm font-body">Washington State DPC</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-sfm-azure" aria-hidden="true" />
              <div>
                <p className="text-sfm-navy font-medium font-body">HSA/FSA Eligible</p>
                <p className="text-gray-400 text-sm font-body">Tax-advantaged payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-sfm-navy relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(188,152,51,0.15),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sfm-gold/30 to-transparent" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 border border-sfm-gold/20 
            rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sfm-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sfm-gold" />
            </span>
            <span className="text-sfm-gold text-sm font-medium font-body">Limited founding spots available</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
            Ready to Transform<br />Your Healthcare?
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto font-body">
            Join the founding cohort and lock in Tier 3 benefits at Tier 2 pricing for life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-10 py-5 
                bg-gradient-to-r from-sfm-gold to-yellow-600 text-sfm-navy 
                font-semibold tracking-wide hover:from-yellow-500 hover:to-sfm-gold 
                transition-all duration-300 shadow-lg shadow-sfm-gold/25 
                hover:shadow-xl hover:shadow-sfm-gold/40 font-body"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-5 text-white/70 hover:text-white 
                font-medium transition-colors duration-300 font-body"
            >
              Meet Dr. Nkrumah
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
