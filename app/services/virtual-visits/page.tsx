import Link from 'next/link'

export default function VirtualVisitsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-sfm-navy mb-4">Virtual Visits</h1>
      <p className="text-gray-600 mb-6">
        HIPAA-compliant virtual care for same-day concerns, routine follow-ups, and longitudinal management. Our
        platform ensures secure video visits and timely follow-through.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Secure video visits with your assigned physician</li>
        <li>Asynchronous messaging for quick questions and refills</li>
        <li>Easy scheduling and integration with care plans</li>
      </ul>

      <p className="text-gray-600 mb-8">Sign up to access virtual care with continuity and reliability.</p>

      <Link href="/contact" className="btn-primary inline-block">Access Virtual Care</Link>
    </main>
  )
}
