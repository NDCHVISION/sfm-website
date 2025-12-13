import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Sankofa Family Medicine | Virtual Primary Care Washington State',
  description:
    'Frequently asked questions about Sankofa Family Medicine, a virtual primary care practice serving patients across Washington State. Learn about membership, telehealth visits, insurance, privacy, and how to get started.',
  keywords: [
    'virtual primary care FAQ',
    'telehealth questions',
    'Washington State telemedicine',
    'direct primary care membership',
    'Sankofa Family Medicine',
    'Seattle virtual doctor',
    'Bellevue telehealth',
  ],
  openGraph: {
    title: 'FAQ | Sankofa Family Medicine',
    description:
      'Everything you need to know about Sankofa Family Medicine, a virtual primary care clinic serving patients across Washington State.',
    url: 'https://sankofafamilymedicine.com/faq',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Sankofa Family Medicine',
    description:
      'Everything you need to know about Sankofa Family Medicine, a virtual primary care clinic serving patients across Washington State.',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/faq',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}

