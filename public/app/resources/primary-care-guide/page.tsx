import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, BookOpen, Shield, Heart, Users, Clock } from 'lucide-react'

// FORMSPREE CONFIGURATION
// Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
// Example: if your endpoint is https://formspree.io/f/xyzabcde, use 'xyzabcde'
const FORMSPREE_ID = 'xjgbllpe'

export default function PrimaryCareGuidePage() {
  const learningPoints = [
    'Why normal labs can still miss real problems',
    'The difference between a true physician partner and an overloaded system',
    'How continuity changes outcomes before symptoms appear',
    'What questions to ask before committing to a doctor',
    'How to identify the type of primary care relationship you currently have',
  ]

  return (
    <>
      {/* Pre-Gate Page */}
      <section className="min-h-screen pt-40 pb-20 bg-gradient-to-b from-white via-sfm-cream/30 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-sfm-azure" strokeWidth={1.5} />
                <span className="text-sfm-azure text-sm tracking-[0.2em] uppercase font-medium">
                  Free Guide
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl text-sfm-navy mb-4 leading-[1.1]">
                How Healthy Is Your Relationship With Your Primary Care Doctor?
              </h1>
              
              <p className="text-sfm-azure text-lg font-medium italic mb-8">
                A physician&apos;s guide to continuity, prevention, and what most patients never see.
              </p>

              <div className="space-y-4 text-muted leading-relaxed mb-10">
                <p>
                  Most people assume primary care is about lab results, referrals, and annual visits. In reality, the most powerful part of primary care is whether someone is actually watching your health over time.
                </p>
                <p>
                  This guide explains what good primary care looks like in practice and how to recognize when it is quietly failing you.
                </p>
              </div>

              {/* What You Will Learn */}
              <div className="bg-sfm-cream rounded-2xl p-6 mb-10">
                <p className="text-sfm-navy font-medium mb-4">What you will learn:</p>
                <ul className="space-y-3">
                  {learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-sfm-gold" strokeWidth={2} />
                      </div>
                      <span className="text-muted text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Authority Line */}
              <div className="flex items-center gap-3 text-sm text-muted">
                <Shield className="w-4 h-4 text-sfm-azure" strokeWidth={1.5} />
                <span>Written by a board-eligible family physician practicing longitudinal, relationship-based care.</span>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/sfm-logo-full.png"
                    alt="Sankofa Family Medicine"
                    width={180}
                    height={120}
                    className="h-auto w-auto max-h-24"
                  />
                </div>

                <h2 className="font-display text-2xl text-sfm-navy mb-6 text-center">
                  Access the Full Guide
                </h2>

                {/* Formspree Form */}
                <form 
                  action={`https://formspree.io/f/${FORMSPREE_ID}`}
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden field for redirect after submission */}
                  <input 
                    type="hidden" 
                    name="_next" 
                    value="https://sankofafamilymedicine.com/resources/primary-care-guide/success" 
                  />
                  
                  {/* Hidden field to identify form source */}
                  <input 
                    type="hidden" 
                    name="_subject" 
                    value="New Primary Care Guide Download Request" 
                  />

                  {/* Honeypot for spam prevention */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sfm-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center"
                  >
                    Get the Guide
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    No spam. No sales sequences. Just the guide.
                  </p>
                </form>

                {/* Trust Signals */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-gray-400 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      HIPAA Mindful
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5" />
                      No Obligation
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted mb-3">
                  Prefer to talk directly?
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-navy font-medium text-sm transition-colors"
                >
                  Schedule a conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
            The Continuity Crisis
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
            Most patients do not realize their primary care is broken until it is too late.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Clock,
                stat: '15 min',
                label: 'Average visit length in traditional care',
              },
              {
                icon: Users,
                stat: '2,300+',
                label: 'Patients per doctor in typical practices',
              },
              {
                icon: Heart,
                stat: '62%',
                label: 'Feel their doctor does not know them',
              },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <item.icon className="w-8 h-8 text-sfm-gold mx-auto mb-4" strokeWidth={1.5} />
                <p className="font-display text-3xl text-white mb-2">{item.stat}</p>
                <p className="text-white/60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm mt-12">
            This guide helps you understand what to look for and what questions to ask.
          </p>
        </div>
      </section>
    </>
  )
}
