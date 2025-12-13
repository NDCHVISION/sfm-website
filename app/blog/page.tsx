import ComingSoon from '@/components/ComingSoon'
import { FileText } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Coming soon: Health insights, medical updates, and wellness guidance from Dr. Nkrumah and Sankofa Family Medicine.',
}

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog & Insights"
      description="Health insights, precision medicine updates, and wellness guidance from Dr. Nkrumah. We're preparing thoughtful content to support your health journey."
      icon={<FileText size={48} strokeWidth={1.5} />}
      expectedDate="Early 2026"
    />
  )
}

