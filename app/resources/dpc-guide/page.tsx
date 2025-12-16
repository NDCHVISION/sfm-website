'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Mail, Shield } from 'lucide-react'

export default function DPCGuideLandingPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - in production, connect to email service
    // For now, open mailto with pre-filled content
    const mailtoLink = `mailto:info@sankofafamilymedicine.com?subject=DPC%20Guide%20Request&body=Please%20send%20me%20the%20free%20guide%3A%20%22How%20Healthy%20Is%20Your%20Relationship%20With%20Your%20Primary%20Care%20Doctor%3F%22%0A%0AMy%20email%3A%20${encodeURIComponent(email)}`
    
    // Short delay for UX
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.location.href = mailtoLink
    }, 500)
  }

  const diagnosticQuestions = [
    'Have you seen the same primary care doctor consistently for more than two years?',
    'Has anyone compared your labs across multiple years, not just to a reference range?',
    'Do you know how your doctor tracks risk trends, not just results?',
    'Can you message your physician directly when something comes up?',
    'Do you feel comfortable bringing up vague or minor concerns?',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-azure/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border bg-sfm-gold/20 text-sfm-gold border-sfm-gold/30 mb-8">
            Free Guide
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            How Healthy Is Your Relationship With Your Primary Care Doctor?
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Most people think they have a primary care doctor.<br />
            <strong className="text-sfm-gold">Fewer actually have someone watching.</strong>
          </p>
        </div>
      </section>

      {/* Diagnostic Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy text-center mb-4">
            Answer Honestly
          </h2>
          <p className="text-muted text-center mb-10">
            These five questions reveal the truth about your primary care relationship.
          </p>

          <div className="space-y-4">
            {diagnosticQuestions.map((question, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-sfm-cream/50 rounded-xl border border-sfm-cream"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sfm-azure/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-sfm-azure">{index + 1}</span>
                </div>
                <p className="text-sfm-navy leading-relaxed pt-1">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-sfm-cream/30">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xl text-sfm-navy leading-relaxed mb-8 text-center">
            <strong>If you hesitated on more than one, you are not alone.</strong>
          </p>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-lg text-muted leading-relaxed mb-6">
              A few months ago, a woman in her early forties came to see me. She had been to three different doctors in the past year. At each visit, she mentioned fatigue. Each time, labs came back normal. By the third visit, she had stopped bringing it up.
            </p>
            
            <p className="text-lg text-muted leading-relaxed mb-6">
              When I looked at her chart, I saw something none of them had seen. Her thyroid numbers were technically normal. But compared to four years earlier, they had shifted in a direction that explained everything she had been feeling.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 bg-sfm-gold/10 p-4 rounded-lg border-l-4 border-sfm-gold">
              <strong className="text-sfm-navy">The problem was never her body. The problem was that no one had been watching.</strong>
            </p>
            
            <p className="text-lg text-muted leading-relaxed">
              We made an adjustment. Six weeks later, she felt like herself again.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition + Email Capture */}
      <section className="py-20 bg-gradient-to-b from-sfm-navy to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sfm-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              I wrote a guide to help you understand what good primary care actually looks like—and how to tell if your current doctor is a <strong className="text-white">true partner</strong>, <strong className="text-white">stretched too thin</strong>, or simply <strong className="text-white">not the right fit</strong>.
            </p>
            <p className="text-sfm-gold font-medium">
              It includes a self-assessment you can use today.
            </p>
          </div>

          {/* Email Capture Form */}
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl text-white text-center mb-2">
              Get the Free Guide
            </h3>
            <p className="text-white/60 text-center mb-8">
              How Healthy Is Your Relationship With Your Primary Care Doctor?<br />
              <span className="text-white/40 text-sm">A Guide to What Good Primary Care Really Looks Like</span>
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sfm-gold/50 focus:border-sfm-gold transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-sfm-gold hover:bg-sfm-gold-light text-sfm-navy font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sfm-gold/25 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Me the Guide'}
                  </button>
                </div>
                
                <p className="text-white/40 text-xs text-center mt-4 flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3" />
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-display text-white mb-2">Check Your Email!</h4>
                <p className="text-white/60">
                  Your guide request has been sent. We&apos;ll email you the guide shortly.
                </p>
              </div>
            )}
          </div>

          {/* What's Inside */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Self-Assessment', desc: 'Discover which of the three types of primary care you currently have' },
              { title: 'Warning Signs', desc: 'Know when your doctor relationship needs attention' },
              { title: 'Action Steps', desc: 'What to do if you want something better' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 rounded-full bg-sfm-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5 text-sfm-gold" />
                </div>
                <h4 className="font-display text-white mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-sfm-cream/50 rounded-2xl">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-sfm-navy flex items-center justify-center">
              <span className="text-2xl font-display text-white">YN</span>
            </div>
            <div>
              <h3 className="font-display text-xl text-sfm-navy mb-2">Yaw Nkrumah, MD</h3>
              <p className="text-muted leading-relaxed">
                Board-eligible family medicine physician and founder of Sankofa Family Medicine. Dr. Nkrumah practices direct primary care because he believes medicine works best when your doctor actually knows you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-4">
            Ready to Talk Now?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            If you already know you want a different kind of primary care relationship, schedule a conversation. No pressure, no obligation.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-sfm-navy hover:bg-sfm-navy/90 text-white font-semibold rounded-xl transition-all"
          >
            Schedule a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
