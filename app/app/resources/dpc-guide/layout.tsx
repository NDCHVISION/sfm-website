import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Healthy Is Your Relationship With Your Primary Care Doctor? | Free Guide',
  description: 'A guide to what good primary care really looks like. Learn the three types of primary care relationships and discover if continuity-driven care is right for you.',
  keywords: ['primary care guide', 'direct primary care', 'DPC guide', 'physician relationship', 'healthcare continuity'],
  openGraph: {
    title: 'How Healthy Is Your Relationship With Your Primary Care Doctor?',
    description: 'A guide to what good primary care really looks like. Free resource from Sankofa Family Medicine.',
    url: 'https://sankofafamilymedicine.com/resources/dpc-guide',
  },
}

export default function DPCGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
