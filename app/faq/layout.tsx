import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Virtual Direct Primary Care | Washington State',
  description:
    'Frequently asked questions about Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State. Learn about membership pricing, telehealth visits, genetic testing, and how Medicine That Remembers works.',
  keywords: [
    'direct primary care FAQ',
    'DPC questions Washington',
    'virtual primary care FAQ',
    'telehealth questions',
    'genetic testing FAQ',
    'precision medicine FAQ',
    'Sankofa Family Medicine',
    'Medicine That Remembers',
  ],
  openGraph: {
    title: 'FAQ | Sankofa Family Medicine | Virtual Direct Primary Care',
    description:
      'Everything you need to know about Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State.',
    url: 'https://sankofafamilymedicine.com/faq',
    siteName: 'Sankofa Family Medicine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Sankofa Family Medicine | Virtual Direct Primary Care',
    description:
      'Everything you need to know about Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State.',
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/faq',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}

