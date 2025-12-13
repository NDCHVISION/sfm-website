import Link from 'next/link'

export default function MensHealthPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-sfm-navy mb-4">Men’s Health</h1>
      <p className="text-gray-600 mb-6">
        Comprehensive men’s health care addressing hormonal health, sexual function, energy, and long-term vitality.
        We combine evidence-based interventions with careful monitoring and shared decision-making.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hormonal assessment and tailored treatment plans</li>
        <li>Sexual health evaluation and treatment</li>
        <li>Performance, energy optimization, and preventive screening</li>
      </ul>

      <p className="text-gray-600 mb-8">Book a focused consultation to review symptoms and testing options.</p>

      <Link href="/contact" className="btn-primary inline-block">Request Consultation</Link>
    </main>
  )
}
