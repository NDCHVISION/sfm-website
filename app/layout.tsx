import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-V9M27XXYYB'

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),
  title: {
    default: 'Sankofa Family Medicine | Virtual Direct Primary Care | Washington State',
    template: '%s | Sankofa Family Medicine'
  },
  description: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Medicine That Remembers: one physician who knows your history, solving healthcare fragmentation through continuity, genetic testing, and precision medicine.',
  keywords: [
    'direct primary care Washington',
    'virtual primary care WA',
    'telehealth doctor Washington State',
    'DPC Washington',
    'Medicine That Remembers',
    'genetic testing primary care',
    'precision medicine Washington',
    'cardiometabolic health',
    'Dr. Yaw Nkrumah',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  verification: {
    google: 'U2dIh49_8poa8rcQgoKH6Gr2RZBr-6q_XFLCFelN8XY',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    title: 'Sankofa Family Medicine | Virtual Direct Primary Care | Washington State',
    description: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Medicine That Remembers: solving healthcare fragmentation through continuity, genetic testing, and precision medicine.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Virtual Direct Primary Care',
      },
      {
        url: '/images/sfm-logo.png',
        width: 800,
        height: 800,
        alt: 'Sankofa Family Medicine - Medicine That Remembers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa Family Medicine | Virtual Direct Primary Care | Washington State',
    description: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Medicine That Remembers: solving healthcare fragmentation through continuity, genetic testing, and precision medicine.',
    images: ['/images/og-image.png'],
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
  // Additional metadata for AI crawlers and rich results
  other: {
    'ai-content-declaration': 'human-written',
    'content-language': 'en-US',
    'geo.region': 'US-WA',
    'geo.placename': 'Washington State',
    'ICBM': '47.6062, -122.3321',
    'medical-specialty': 'Primary Care, Family Medicine',
    'service-area': 'Washington State, USA',
  },
  category: 'Healthcare',
  classification: 'Medical Practice',
}

// Schema.org structured data for medical practice - optimized for AI and search
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      alternateName: ['SFM', 'Medicine That Remembers'],
      description: 'Sankofa Family Medicine is a virtual-first direct primary care (DPC) practice serving patients across Washington State. Founded by Dr. Yaw Nkrumah, MD, the practice solves healthcare fragmentation through Medicine That Remembers - a care model built on continuity, genetic testing, precision medicine, and cardiometabolic health optimization.',
      slogan: 'Medicine That Remembers™',
      url: 'https://sankofafamilymedicine.com',
      logo: 'https://sankofafamilymedicine.com/images/sfm-logo.png',
      image: 'https://sankofafamilymedicine.com/images/og-image.png',
      telephone: '+1-425-285-7390',
      email: 'info@sankofafamilymedicine.com',
      priceRange: '$149-$449/month',
      currenciesAccepted: 'USD',
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA'],
      areaServed: {
        '@type': 'State',
        name: 'Washington',
        addressCountry: 'US'
      },
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'WA',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 47.6062,
        longitude: -122.3321
      },
      medicalSpecialty: ['PrimaryCare', 'FamilyMedicine', 'PreventiveMedicine'],
      isAcceptingNewPatients: true,
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Virtual Primary Care',
          description: 'Comprehensive telehealth primary care services with unlimited visits'
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Genetic Testing and Interpretation',
          description: 'DNA analysis and pharmacogenomic guidance for personalized treatment'
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Cardiometabolic Health',
          description: 'Blood pressure, cholesterol, diabetes, and metabolic optimization'
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Weight Management',
          description: 'Medical weight loss including GLP-1 medications'
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Mental Health',
          description: 'Anxiety, depression, and stress management support'
        }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Membership Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Continuity Care',
            description: 'Essential virtual primary care membership',
            price: '149',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '149',
              priceCurrency: 'USD',
              unitText: 'month'
            }
          },
          {
            '@type': 'Offer',
            name: 'Precision Care',
            description: 'Advanced care with genetic testing and AI insights',
            price: '249',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '249',
              priceCurrency: 'USD',
              unitText: 'month'
            }
          },
          {
            '@type': 'Offer',
            name: 'Legacy Health',
            description: 'Concierge-level care with direct physician access',
            price: '449',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '449',
              priceCurrency: 'USD',
              unitText: 'month'
            }
          }
        ]
      },
      knowsAbout: [
        'Direct Primary Care',
        'Telemedicine',
        'Virtual Healthcare',
        'Precision Medicine',
        'Genetic Testing',
        'Pharmacogenomics',
        'Cardiometabolic Health',
        'Weight Management',
        'Preventive Care',
        'Chronic Disease Management'
      ],
      sameAs: [
        'https://www.linkedin.com/company/109183000/'
      ]
    },
    {
      '@type': 'Physician',
      '@id': 'https://sankofafamilymedicine.com/#physician',
      name: 'Dr. Yaw Nkrumah',
      givenName: 'Yaw',
      familyName: 'Nkrumah',
      honorificSuffix: 'MD',
      jobTitle: 'Founder & Medical Director',
      description: 'Board-certified family medicine physician specializing in virtual primary care, cardiometabolic health, and precision medicine. Founder of Sankofa Family Medicine.',
      image: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
      url: 'https://sankofafamilymedicine.com/founder',
      worksFor: {
        '@id': 'https://sankofafamilymedicine.com/#organization'
      },
      medicalSpecialty: ['PrimaryCare', 'FamilyMedicine'],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Medical School'
      },
      sameAs: [
        'https://www.linkedin.com/in/yawnkrumahmd/'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sankofafamilymedicine.com/#website',
      url: 'https://sankofafamilymedicine.com',
      name: 'Sankofa Family Medicine',
      publisher: {
        '@id': 'https://sankofafamilymedicine.com/#organization'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Google Analytics - must be in head for Search Console verification */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}

