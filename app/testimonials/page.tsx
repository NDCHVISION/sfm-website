import ComingSoon from '@/components/ComingSoon'
import { MessageSquare } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Stories',
  description: 'Coming soon: Stories and testimonials from Sankofa Family Medicine patients about their care experience.',
}

export default function TestimonialsPage() {
  return (
    <ComingSoon
      title="Patient Stories"
      description="Real stories from our patients about their experience with care that remembers. We'll share these once we've had the privilege of serving our founding members."
      icon={<MessageSquare size={48} strokeWidth={1.5} />}
      expectedDate="After Launch"
    />
  )
}
