import Link from 'next/link'

export default function PrimaryCarePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-sfm-navy mb-4">Primary Care — Continuity First</h1>
      <p className="text-gray-600 mb-6">
        Our Primary Care membership centers on a continuous, relationship-driven model: unlimited virtual visits,
        proactive screening, care coordination, and medication management under one predictable monthly fee.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Same-week or same-day virtual visits with your dedicated physician</li>
        <li>Comprehensive preventive screening and annual care planning</li>
        <li>Secure messaging for rapid clinical questions and prescription renewals</li>
      </ul>

      <p className="text-gray-600 mb-8">Interested in starting care? Our team will guide enrollment and insurance-free payment.</p>

      <Link href="/contact" className="btn-primary inline-block">Get Started</Link>
    </main>
  )
}
