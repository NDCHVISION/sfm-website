import ComingSoon from '@/components/ComingSoon'
import { FileText } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Blog & Medical Insights | Sankofa Family Medicine',
  description: 'Expert health insights, precision medicine updates, and wellness guidance from Dr. Yaw Nkrumah. Evidence-based articles on cardiometabolic health, preventive care, and virtual primary care in Washington State.',
  keywords: ['health blog', 'medical insights', 'wellness tips', 'Dr. Nkrumah', 'Washington healthcare blog', 'primary care articles'],
  openGraph: {
    title: 'Health Blog & Medical Insights | Sankofa Family Medicine',
    description: 'Expert health insights and wellness guidance from Dr. Yaw Nkrumah.',
  },
}

export default function BlogPage() {
  return (
    <ComingSoon
      title="Health Blog & Insights"
      description="Expert health insights, precision medicine updates, and wellness guidance from Dr. Nkrumah. We're preparing thoughtful, evidence-based content to support your health journey."
      icon={<FileText size={48} strokeWidth={1.5} />}
      expectedDate="Early 2026"
    />
  )
}

