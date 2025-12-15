import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Join Waitlist | Sankofa Family Medicine | Virtual Direct Primary Care',
  description: 'Join the Sankofa Family Medicine waitlist. Virtual-first direct primary care (DPC) for patients across Washington State. Medicine That Remembers solves healthcare fragmentation through continuity, genetic testing, and precision medicine.',
  keywords: [
    'Sankofa Family Medicine contact',
    'join DPC waitlist',
    'direct primary care Washington',
    'virtual DPC signup',
    'Medicine That Remembers',
    'healthcare fragmentation solution',
    'founding member',
  ],
  openGraph: {
    title: 'Contact | Join Waitlist | Sankofa Family Medicine',
    description: 'Join the waitlist for virtual-first direct primary care (DPC) in Washington State. Founding members get exclusive pricing locked for life.',
    url: 'https://sankofafamilymedicine.com/contact',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Sankofa Family Medicine',
    description: 'Join our waitlist for premium virtual primary care in Washington State.',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
