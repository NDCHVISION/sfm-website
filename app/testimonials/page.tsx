import ComingSoon from '@/components/ComingSoon'
import { MessageSquare } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Reviews & Testimonials | Sankofa Family Medicine',
  description: 'Patient stories and testimonials from Sankofa Family Medicine. Real experiences with virtual primary care, Dr. Yaw Nkrumah, and our "Medicine That Remembers" approach in Washington State.',
  keywords: ['patient testimonials', 'doctor reviews', 'Sankofa reviews', 'Dr. Nkrumah reviews', 'virtual care testimonials'],
  openGraph: {
    title: 'Patient Reviews & Testimonials | Sankofa Family Medicine',
    description: 'Real stories from patients about care that remembers.',
  },
}

export default function TestimonialsPage() {
  return (
    <ComingSoon
      title="Patient Stories"
      description="Real stories from our patients about their experience with care that remembers. We'll share testimonials once we've had the privilege of serving our founding members."
      icon={<MessageSquare size={48} strokeWidth={1.5} />}
      expectedDate="After Launch"
    />
  )
}
