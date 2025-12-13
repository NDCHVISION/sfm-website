import Link from 'next/link'

export default function ChronicConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-sfm-navy mb-4">Chronic Conditions Care</h1>
      <p className="text-gray-600 mb-6">
        Focused, evidence-based management for diabetes, hypertension, and lipid disorders. We combine frequent
        virtual follow-ups, medication optimization, and outcome tracking to reduce risk and simplify care.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Individualized treatment plans and guideline-driven targets</li>
        <li>Remote monitoring support and lab coordination</li>
        <li>Pharmacogenomic-informed medication decisions (when indicated)</li>
      </ul>

      <p className="text-gray-600 mb-8">To discuss management goals and enrollment, schedule a consult.</p>

      <Link href="/contact" className="btn-primary inline-block">Request Care</Link>
    </main>
  )
}
