import ComingSoon from '@/components/ComingSoon'
import { BookOpen } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Resources & Health Guides | Sankofa Family Medicine',
  description: 'Educational health resources, patient guides, and wellness tools from Sankofa Family Medicine. Free health information for Washington State residents on preventive care, chronic disease management, and telehealth.',
  keywords: ['patient resources', 'health guides', 'wellness tools', 'patient education', 'health information Washington'],
  openGraph: {
    title: 'Patient Resources & Health Guides | Sankofa Family Medicine',
    description: 'Educational resources and tools to support your wellness journey.',
  },
}

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Patient Resources"
      description="Educational guides, health tools, and resources to support your wellness journey. We're building a comprehensive library for our patients and the community."
      icon={<BookOpen size={48} strokeWidth={1.5} />}
      expectedDate="2026"
    />
  )
}
