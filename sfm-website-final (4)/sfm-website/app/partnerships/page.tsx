import ComingSoon from '@/components/ComingSoon'
import { Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partnerships',
  description: 'Coming soon: Partnership opportunities with Sankofa Family Medicine. Collaborate on the future of virtual primary care.',
}

export default function PartnershipsPage() {
  return (
    <ComingSoon
      title="Partnerships"
      description="We're building relationships with organizations that share our commitment to patient-centered care. Partnership details coming soon."
      icon={<Users size={48} strokeWidth={1.5} />}
      expectedDate="2025"
    />
  )
}
