import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Virtual Care With the Right Physician Is More Personal, Not Less | Sankofa Family Medicine',
  description: 'There is a common assumption that virtual medicine is impersonal. After years of practicing both models, I have found the opposite is often true. Virtual care can deepen the relationship.',
  keywords: ['virtual care', 'telehealth', 'telemedicine', 'direct primary care', 'physician relationship'],
}

export default function BlogPost() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sfm-navy via-sfm-navy to-sfm-azure/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-sfm-azure/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-sfm-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold border bg-cyan-100 text-cyan-700 border-cyan-200 mb-6">
            Virtual Care
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Why Virtual Care With the Right Physician Is More Personal, Not Less
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Dr. Yaw Nkrumah</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 22, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/blog-virtual-care.png"
            alt="Patient having a virtual care appointment with their physician"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-sfm">
          <p className="text-xl text-muted leading-relaxed">
            There is a common assumption that virtual medicine is impersonal.
            A screen instead of a handshake. Pixels instead of presence.
          </p>

          <p>
            I understand the instinct. But after years of practicing both in-person and virtual primary care, I have found the opposite is often true.
          </p>

          <p>
            <strong>When done correctly, virtual care does not reduce the relationship. It deepens it.</strong>
          </p>

          <h2>The Real Barrier to Good Primary Care</h2>

          <p>For most people, the problem with primary care is not quality. It is friction.</p>

          <p>
            The 45-minute commute. The waiting room. The half-day blocked for a 12-minute visit. The slow realization that seeing your doctor requires so much effort that you only do it when something is already wrong.
          </p>

          <p>
            Friction delays follow-up. Delayed follow-up breaks continuity. Broken continuity means your physician is always working from a snapshot instead of a full picture.
          </p>

          <p>The issue is not that people do not value their health.</p>

          <p>
            <strong>The issue is that the system makes consistent engagement unreasonably hard.</strong>
          </p>

          <h2>What Changes When Access Is Easy</h2>

          <p>When I can see a patient virtually within days instead of weeks, something shifts.</p>

          <p>
            They reach out earlier. Not just when symptoms are severe, but when something feels slightly off. When sleep has been disrupted for a week. When stress is affecting their body in ways they cannot name. When they notice a change and want to talk it through before it becomes a problem.
          </p>

          <p>
            <strong>This is not convenience medicine. This is medicine the way it should work.</strong>
          </p>

          <p>
            Frequency builds context. Context builds trust. Trust builds honesty. Honesty builds accuracy.
          </p>

          <p>That sequence matters more than whether we are in the same room.</p>

          <h2>A Different Kind of Visit</h2>

          <p>
            I had a patient message me on a Thursday evening. She had been having headaches for a few days. Not the worst of her life, but persistent in a way that felt unfamiliar.
          </p>

          <p>
            In a traditional model, she probably would have waited. Taken ibuprofen. Hoped it passed. Maybe gone to urgent care if it got bad enough, where a provider with no context would have started from zero.
          </p>

          <p>
            Instead, we talked for ten minutes that night. I knew her history. I knew she had been under significant stress at work. I knew her blood pressure had been creeping up over the past year.
          </p>

          <p>
            We adjusted her management. The headaches resolved. No urgent care. No ER. No unnecessary imaging. Just continuity doing what it is supposed to do.
          </p>

          <h2>What Virtual Care Is Not</h2>

          <p>
            I am not arguing that virtual medicine replaces all in-person care. Some things require hands-on examination. Some diagnoses need imaging, labs, or procedures.
          </p>

          <p>
            But the majority of primary care is not procedural. It is conversational. It is pattern recognition. It is listening carefully, asking the right questions, and knowing what to do with the answers.
          </p>

          <p>
            <strong>Virtual care fails when it replaces judgment. It succeeds when it removes friction around it.</strong>
          </p>

          <p>
            The danger is not the screen. The danger is care without memory, without context, without someone who knows your story and can interpret new information against everything that came before.
          </p>

          <h2>Why the Physician Still Matters</h2>

          <p>
            Virtual care has expanded access. That is a good thing. But it has also flooded the market with episodic, transactional encounters that feel like customer service, not medicine.
          </p>

          <p>The differentiator is not technology. It is who is on the other side.</p>

          <p>
            A physician trained to manage uncertainty. To hold broad differentials even when symptoms are vague. To treat when appropriate and refer when necessary, but not reflexively. To integrate mental, metabolic, and lifestyle factors rather than siloing each into a separate specialty visit.
          </p>

          <p>
            That kind of thinking does not come from an algorithm or a protocol. It comes from years of training and accumulated judgment.
          </p>

          <p>
            <strong>When that is present, virtual care becomes an amplifier. When it is absent, virtual care becomes a vending machine.</strong>
          </p>

          <h2>What This Looks Like in Practice</h2>

          <p>The best care I have delivered combines:</p>

          <ul>
            <li>Continuity over time</li>
            <li>Physician-level clinical reasoning</li>
            <li>Reduced friction through virtual access</li>
            <li>Responsiveness that matches how people actually live</li>
          </ul>

          <p>
            Primary care should not feel rushed, reactive, or transactional. It should feel steady, contextual, and responsive.
          </p>

          <p>
            <strong>If you have been settling for less, you do not have to.</strong>
          </p>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-4">
            Experience Virtual Care That Feels Personal
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Discover how physician-led virtual primary care can offer the continuity and depth you deserve.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
