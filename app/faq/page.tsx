'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, CreditCard, Shield, Video, Users, Clock, HelpCircle } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string | React.ReactNode
}

type FAQSection = {
  title: string
  icon: React.ElementType
  items: FAQItem[]
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const faqSections: FAQSection[] = [
    {
      title: 'Payment & Insurance',
      icon: CreditCard,
      items: [
        {
          question: 'Do you accept insurance?',
          answer: 'Sankofa Family Medicine is currently a direct-pay (cash-pay) practice. We do not bill insurance directly. This model allows us to spend more time with patients, avoid insurance restrictions, and provide truly personalized care. We may expand to accept insurance in the future.'
        },
        {
          question: 'How do I pay for services?',
          answer: (
            <div className="space-y-3">
              <p>We accept payment via credit card, debit card, and HSA/FSA cards through our secure payment system powered by Stripe.</p>
              <p>Membership fees are billed monthly. Individual visits and programs are billed at the time of service.</p>
              {/* Stripe payment link placeholder - uncomment when ready */}
              {/* <a href="YOUR_STRIPE_LINK_HERE" className="inline-flex items-center text-sfm-azure hover:text-sfm-navy font-medium">
                Make a Payment <ArrowRight className="ml-2 w-4 h-4" />
              </a> */}
            </div>
          )
        },
        {
          question: 'Can I use my HSA or FSA?',
          answer: 'Yes! Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can be used for membership fees, visits, and programs at Sankofa Family Medicine. These are qualified medical expenses.'
        },
        {
          question: 'Can you provide documentation for insurance reimbursement?',
          answer: 'Yes. We can provide a superbill (itemized receipt with procedure codes) that you can submit to your insurance company for potential out-of-network reimbursement. Reimbursement rates vary by plan.'
        },
        {
          question: 'What if I need to cancel my membership?',
          answer: 'Memberships can be cancelled at any time with 30 days notice. There are no cancellation fees. Founding member pricing is locked for the duration of continuous membership.'
        },
      ]
    },
    {
      title: 'Virtual Care',
      icon: Video,
      items: [
        {
          question: 'How do virtual visits work?',
          answer: 'Virtual visits are conducted via secure, HIPAA-compliant video conferencing. You\'ll receive a link before your appointment and can join from any device with a camera and internet connection. No special software is required.'
        },
        {
          question: 'What can be treated virtually?',
          answer: 'Most primary care concerns can be effectively addressed via telehealth, including: acute illnesses (cold, flu, infections), chronic disease management, medication refills and adjustments, mental health support, preventive care planning, lab result reviews, and health coaching. Some conditions may require in-person evaluation, and we will coordinate referrals when needed.'
        },
        {
          question: 'Is telehealth as effective as in-person care?',
          answer: 'For most primary care needs, yes. Research shows that telehealth delivers comparable outcomes for many conditions, often with greater convenience and continuity. The key advantage of our model is that you see the same physician every time. This continuity actually improves outcomes compared to fragmented in-person care.'
        },
        {
          question: 'What if I need in-person care?',
          answer: 'We maintain relationships with trusted local specialists and facilities in Washington State. If you need labs, imaging, procedures, or specialist care, we\'ll coordinate referrals and ensure your records follow you.'
        },
      ]
    },
    {
      title: 'Membership',
      icon: Users,
      items: [
        {
          question: 'What\'s included in membership?',
          answer: 'All membership tiers include unlimited virtual visits with Dr. Nkrumah, secure messaging with 24-48 hour response times, care coordination, and prescription management. Higher tiers add genetic testing, AI-powered health insights, and direct physician access. See our Services page for full details.'
        },
        {
          question: 'What\'s the founding member offer?',
          answer: 'The first 30 members receive Tier 3 (Legacy Health) benefits at Tier 2 (Precision Care) pricing: $249/month instead of $449/month. This includes genetic testing, direct physician cell access, and same-day appointments. This pricing is locked for life as long as membership remains continuous.'
        },
        {
          question: 'Can I change my membership tier?',
          answer: 'Yes. You can upgrade or downgrade your membership tier at any time. Changes take effect at the start of your next billing cycle. Note: founding member pricing applies only to the original tier selected.'
        },
        {
          question: 'Do you see families?',
          answer: 'Yes! Sankofa Family Medicine serves patients of all ages. Family memberships and multi-member discounts may be available. Contact us for details.'
        },
      ]
    },
    {
      title: 'Getting Started',
      icon: Clock,
      items: [
        {
          question: 'How do I become a patient?',
          answer: (
            <div className="space-y-3">
              <p>Join our waitlist by completing the contact form. We\'ll reach out to schedule an intro call, discuss your health goals, and get you enrolled.</p>
              <Link href="/contact" className="inline-flex items-center text-sfm-azure hover:text-sfm-navy font-medium">
                Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          )
        },
        {
          question: 'What happens during the first visit?',
          answer: 'Your first visit is a comprehensive intake (45-60 minutes) where we review your complete health history, discuss your goals, and develop a personalized care plan. This is the foundation of "Medicine That Remembers": we take the time to truly understand you.'
        },
        {
          question: 'Do I need to transfer my medical records?',
          answer: 'We\'ll help you request records from previous providers. Having your history helps us provide better care, but you can start as a patient before records arrive.'
        },
        {
          question: 'Where do you practice?',
          answer: 'Sankofa Family Medicine is a virtual practice serving patients throughout Washington State. Dr. Nkrumah is licensed in Washington. We plan to expand to additional states in the future.'
        },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        {
          question: 'Is my health information secure?',
          answer: 'Yes. We are fully HIPAA-compliant. All video visits, messaging, and health records are encrypted and stored securely. We use enterprise-grade security practices and never sell or share your data.'
        },
        {
          question: 'Who can see my medical records?',
          answer: 'Only Dr. Nkrumah and authorized clinical staff have access to your records. We will never share your information with third parties without your explicit consent, except as required by law.'
        },
        {
          question: 'How does AI fit into your practice?',
          answer: 'We use AI tools to support clinical workflows, helping with documentation, surfacing relevant history, and identifying potential health insights. AI never makes clinical decisions; it\'s a tool that helps your physician focus on you. All AI systems we use are HIPAA-compliant.'
        },
      ]
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Support</p>
          <h1 className="font-display text-5xl text-sfm-navy mb-6">
            Frequently Asked Questions
          </h1>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Everything you need to know about Sankofa Family Medicine, from payment to virtual care to getting started.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-4xl mx-auto px-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-6 h-6 text-sfm-azure" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="font-display text-2xl text-sfm-navy">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.items.map((item, itemIndex) => {
                  const itemId = `${sectionIndex}-${itemIndex}`
                  const isOpen = openItems[itemId]

                  return (
                    <div key={itemId} className="bg-white border border-gray-100">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-inset"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${itemId}`}
                      >
                        <span className="font-medium text-sfm-navy pr-4">{item.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-sfm-azure flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      <div 
                        id={`faq-answer-${itemId}`}
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                        role="region"
                        aria-labelledby={`faq-question-${itemId}`}
                      >
                        <div className="px-5 pb-5 text-muted leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HelpCircle className="w-12 h-12 text-sfm-azure mx-auto mb-6" strokeWidth={1.5} aria-hidden="true" />
          <h2 className="font-display text-3xl text-sfm-navy mb-4">Still Have Questions?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            We&apos;re happy to answer any questions not covered here. Reach out and we&apos;ll respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <a href="mailto:sfm@ndchvision.com" className="btn-secondary">
              Email: sfm@ndchvision.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Join the founding member waitlist and experience care that remembers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary-white">
              View Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Accessibility: Announce state changes */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        FAQ section loaded
      </div>
    </>
  )
}

