import ComingSoon from '@/components/ComingSoon'
import { BookOpen } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Resources',
  description: 'Coming soon: Educational resources, health guides, and patient tools from Sankofa Family Medicine.',
}

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Patient Resources"
      description="Educational guides, health tools, and resources to support your wellness journey. We're building a comprehensive library for our patients."
      icon={<BookOpen size={48} strokeWidth={1.5} />}
      expectedDate="2025"
    />
  )
}
