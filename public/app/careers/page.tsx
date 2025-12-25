import ComingSoon from '@/components/ComingSoon'
import { Briefcase } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Careers | Join Sankofa Family Medicine',
  description: 'Career opportunities at Sankofa Family Medicine in Washington State. Join our team building the future of virtual primary care with Dr. Yaw Nkrumah. Positions in telehealth, healthcare operations, and patient care.',
  keywords: ['healthcare careers Washington', 'telehealth jobs', 'medical careers', 'primary care jobs', 'Sankofa careers'],
  openGraph: {
    title: 'Healthcare Careers | Join Sankofa Family Medicine',
    description: 'Career opportunities building the future of virtual primary care.',
  },
}

export default function CareersPage() {
  return (
    <ComingSoon
      title="Healthcare Careers"
      description="Join our team building the future of virtual primary care. We're looking for people who believe in continuity, precision, and dignity in medicine."
      icon={<Briefcase size={48} strokeWidth={1.5} />}
      expectedDate="2026"
    />
  )
}

