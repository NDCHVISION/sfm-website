import ComingSoon from '@/components/ComingSoon'
import { Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Partnerships | Sankofa Family Medicine',
  description: 'Partnership opportunities with Sankofa Family Medicine. Collaborate on virtual primary care, employer health benefits, and healthcare innovation in Washington State.',
  keywords: ['healthcare partnerships', 'employer health benefits', 'telehealth partnerships', 'corporate wellness', 'healthcare collaboration'],
  openGraph: {
    title: 'Healthcare Partnerships | Sankofa Family Medicine',
    description: 'Partner with us to transform healthcare delivery.',
  },
}

export default function PartnershipsPage() {
  return (
    <ComingSoon
      title="Healthcare Partnerships"
      description="We're building relationships with organizations that share our commitment to patient-centered care. Partnership opportunities for employers, health systems, and wellness companies."
      icon={<Users size={48} strokeWidth={1.5} />}
      expectedDate="2026"
    />
  )
}
