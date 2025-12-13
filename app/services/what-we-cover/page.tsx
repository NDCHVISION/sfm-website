import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WhatWeCoverPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-sfm-navy mb-4">What We Cover</h1>
      <p className="text-muted mb-6">
        Sankofa Family Medicine provides comprehensive virtual primary care across a wide range
        of conditions traditionally managed in family medicine. Below is a detailed overview of
        the clinical areas we manage, our care boundaries, and how to engage our team for
        assessment and treatment.
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-sfm-navy mb-3">Scope Highlights</h2>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>Cardiometabolic and endocrine care: hypertension, diabetes, thyroid disorders</li>
          <li>Medical weight management and metabolic optimization</li>
          <li>Mental health within primary care scope: depression, anxiety, sleep disturbances</li>
          <li>Musculoskeletal conditions and chronic pain management (non-operative)</li>
          <li>Acute telemedicine care for same-day needs and urgent symptom checks</li>
          <li>Preventive care, screening, and longitudinal care coordination</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-sfm-navy mb-3">Clinical Boundaries</h2>
        <p className="text-muted mb-3">Certain conditions require in-person evaluation or specialist care. Examples include:</p>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>Emergencies and life-threatening conditions (call 911)</li>
          <li>Inpatient hospital care or surgical procedures</li>
          <li>Obstetric care, pediatric care for children under 12, and complex psychiatric stabilization</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-sfm-navy mb-3">How to Get Started</h2>
        <p className="text-muted mb-6">Request an intake visit and our team will guide onboarding, testing, and personalized care planning.</p>
        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
          Request Care
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Link href="/services" className="btn-secondary">
        Back to Services
      </Link>
    </main>
  )
}
