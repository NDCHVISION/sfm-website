import ComingSoon from '@/components/ComingSoon'
import { Briefcase } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Coming soon: Career opportunities at Sankofa Family Medicine. Join our team building the future of primary care.',
}

export default function CareersPage() {
  return (
    <ComingSoon
      title="Careers"
      description="Join our team building the future of primary care. We're looking for people who believe in continuity, precision, and dignity in medicine."
      icon={<Briefcase size={48} strokeWidth={1.5} />}
      expectedDate="Early 2026"
    />
  )
}

