import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export const metadata: Metadata = {
  metadataBase: new URL('https://sankofafamilymedicine.com'),
  title: {
    default: 'Sankofa Family Medicine | Virtual Primary Care Washington',
    template: '%s | Sankofa Family Medicine'
  },
  description: 'Premium virtual primary care in Washington State. Medicine That Remembers™: one physician who knows your history, every visit. Telehealth doctor, concierge medicine, and direct primary care.',
  keywords: [
    'virtual primary care Washington',
    'telehealth doctor WA',
    'online doctor Washington',
    'concierge medicine Seattle',
    'direct primary care Washington',
    'virtual family physician Washington',
    'virtual urgent care WA',
    'primary care telemedicine Washington',
  ],
  authors: [{ name: 'Dr. Yaw Nkrumah, MD' }],
  creator: 'Sankofa Family Medicine',
  publisher: 'Sankofa Family Medicine',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sankofafamilymedicine.com',
    siteName: 'Sankofa Family Medicine',
    title: 'Sankofa Family Medicine | Virtual Primary Care Washington',
    description: 'Premium virtual primary care in Washington State. Medicine That Remembers™: one physician who knows your history, every visit.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Medicine That Remembers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankofa Family Medicine | Virtual Primary Care Washington',
    description: 'Premium virtual primary care in Washington State. Medicine That Remembers™',
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
}

// Schema.org structured data for medical practice
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://sankofafamilymedicine.com/#organization',
      name: 'Sankofa Family Medicine',
      alternateName: 'SFM',
      description: 'Premium virtual primary care practice in Washington State offering telehealth services, genetic testing, and personalized medicine.',
      url: 'https://sankofafamilymedicine.com',
      logo: 'https://sankofafamilymedicine.com/images/sfm-logo.png',
      image: 'https://sankofafamilymedicine.com/images/og-image.png',
      telephone: '+1-425-285-7390',
      email: 'info@sankofafamilymedicine.com',
      areaServed: {
        '@type': 'State',
        name: 'Washington',
        addressCountry: 'US'
      },
      medicalSpecialty: 'PrimaryCare',
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Virtual Primary Care',
          description: 'Comprehensive telehealth primary care services'
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Genetic Testing and Interpretation',
          description: 'DNA analysis and pharmacogenomic guidance'
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Cardiometabolic Health',
          description: 'Blood pressure, cholesterol, and metabolic optimization'
        }
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
      description: 'Family medicine physician specializing in virtual primary care, cardiometabolic health, and precision medicine.',
      image: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
      url: 'https://sankofafamilymedicine.com/founder',
      worksFor: {
        '@id': 'https://sankofafamilymedicine.com/#organization'
      },
      medicalSpecialty: 'PrimaryCare',
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
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      
      {/* Google Analytics */}
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
      
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}

