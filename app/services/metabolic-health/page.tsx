import Link from 'next/link'

export default function MetabolicHealthPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-sfm-navy mb-4">Metabolic Health</h1>
      <p className="text-gray-600 mb-6">
        Targeted programs for weight management, insulin resistance, and metabolic optimization. Our approach blends
        nutrition, medication when appropriate, and longitudinal monitoring to improve metabolic outcomes.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Structured programs with measurable metabolic targets</li>
        <li>Lab-driven optimization and iterative care plans</li>
        <li>Behavioral and pharmacologic tools when indicated</li>
      </ul>

      <p className="text-gray-600 mb-8">Explore program options and outcomes with our care team.</p>

      <Link href="/contact" className="btn-primary inline-block">Explore Programs</Link>
    </main>
  )
}
