import Link from 'next/link'

export default function PreventiveCarePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-sfm-navy mb-4">Preventive Care & Screening</h1>
      <p className="text-gray-600 mb-6">
        Proactive prevention reduces downstream risk. We provide age- and risk-appropriate screening, vaccine
        management, and personalized prevention plans informed by genetics and clinical risk factors.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Screening plans tailored to age, family history, and risk</li>
        <li>Vaccine scheduling and reminders</li>
        <li>Preventive counseling and health optimization roadmaps</li>
      </ul>

      <p className="text-gray-600 mb-8">Learn how we tailor prevention to your risk profile.</p>

      <Link href="/contact" className="btn-primary inline-block">Start Prevention</Link>
    </main>
  )
}
