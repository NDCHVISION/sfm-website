import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services & Pricing | Premium Virtual Primary Care',
  description: 'Sankofa Family Medicine membership tiers and pricing. Premium virtual primary care starting at $149/month or $1,609/year. Founding members get Tier 3 (Legacy Health) benefits at Tier 2 (Precision Care) pricing - locked for life. Direct primary care in Washington State.',
  keywords: [
    'direct primary care Washington',
    'DPC membership pricing',
    'virtual primary care',
    'telehealth Washington State',
    'concierge medicine Seattle',
    'genetic testing primary care',
    'pharmacogenomics',
    'precision medicine',
    'family medicine membership',
    'HSA eligible healthcare',
    'cash pay doctor',
    'unlimited doctor visits',
    'same day appointments',
    'direct physician access',
  ],
  openGraph: {
    title: 'Services & Pricing | Sankofa Family Medicine',
    description: 'Premium virtual primary care starting at $149/month. Founding members get Tier 3 benefits at Tier 2 pricing - locked for life.',
    url: 'https://sankofafamilymedicine.com/services',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Sankofa Family Medicine - Premium Virtual Primary Care Membership Tiers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Pricing | Sankofa Family Medicine',
    description: 'Premium virtual primary care starting at $149/month. Founding members get Tier 3 benefits at Tier 2 pricing - locked for life.',
    images: ['/images/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/services',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
