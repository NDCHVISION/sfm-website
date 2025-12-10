'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ReactNode, ElementType } from 'react'
import { ArrowRight, ChevronDown, CreditCard, Shield, Video, Users, Clock, HelpCircle } from 'lucide-react'

// Configuration
const FOUNDING_MEMBER_SPOTS = 30

type FAQItem = {
  question: string
  answer: string | ReactNode
  answerText?: string
}

type FAQSection = {
  title: string
  icon: ElementType
  items: FAQItem[]
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [announcement, setAnnouncement] = useState('')

  const toggleItem = (id: string, question: string) => {
    const willOpen = !openItems[id]
    setOpenItems(prev => ({ ...prev, [id]: willOpen }))
    setAnnouncement(willOpen ? `${question} expanded` : `${question} collapsed`)
  }

  const faqSections: FAQSection[] = [
    {
      title: 'Payment & Insurance',
      icon: CreditCard,
      items: [
        {
          question: 'Do you accept insurance?',
          answer:
            'Sankofa Family Medicine™ is currently a direct-pay (cash-pay) virtual primary care practice based in Washington State. We do not bill insurance directly. This structure allows for longer visits, fewer restrictions, and a more personalized care experience. Future insurance participation may be considered.'
        },
        {
          question: 'How do I pay for services?',
          answer: (
            <div className="space-y-3">
              <p>
                We accept payment via credit card, debit card, and HSA/FSA cards through our secure online payment
                system powered by Stripe.
              </p>
              <p>
                Membership fees are billed monthly. Individual visits and programs are billed at the time of service.
              </p>
              <p>
                Membership tiers and visit pricing are available on our
                <Link
                  href="/services"
                  className="text-sfm-azure hover:text-sfm-navy ml-1 underline"
                >
                  Services &amp; Pricing page
                </Link>
                .
              </p>
            </div>
          ),
          answerText:
            'We accept payment via credit card, debit card, and HSA/FSA cards through our secure online payment system powered by Stripe. Membership fees are billed monthly. Individual visits and programs are billed at the time of service. Membership tiers and visit pricing are available on our Services & Pricing page.'
        },
        {
          question: 'Can I use my HSA or FSA?',
          answer:
            'Yes. Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can be used for membership fees, virtual visits, and programs at Sankofa Family Medicine™.'
        },
        {
          question: 'Can you provide documentation for insurance reimbursement?',
          answer:
            'Yes. We can provide a superbill (itemized receipt with diagnosis and procedure codes) for potential out-of-network reimbursement. Reimbursement varies by insurance plan.'
        },
        {
          question: 'What if I need to cancel my membership?',
          answer:
            'Memberships may be cancelled at any time with 30 days notice. No cancellation fees apply. Founding member pricing remains locked as long as membership is continuous.'
        },
      ]
    },
    {
      title: 'Virtual Care',
      icon: Video,
      items: [
        {
          question: 'How do virtual visits work?',
          answer:
            'Virtual visits occur through HIPAA-compliant encrypted video conferencing. You will receive a secure link and can join from any device with a camera and internet connection. No special app installation is required.'
        },
        {
          question: 'What can be treated virtually?',
          answer: (
            <div className="space-y-3">
              <p>
                Most primary care concerns can be addressed through telehealth, including acute illnesses, chronic
                condition management, preventive care, mental health support, medication adjustments, lab reviews,
                and health coaching. If in-person evaluation is necessary, we help coordinate appropriate referrals.
              </p>
              <p>
                You can see examples of what we treat on our
                <Link
                  href="/services"
                  className="text-sfm-azure hover:text-sfm-navy ml-1 underline"
                >
                  Services page
                </Link>
                .
              </p>
            </div>
          ),
          answerText:
            'Most primary care concerns can be addressed through telehealth, including acute illnesses, chronic condition management, preventive care, mental health support, medication adjustments, lab reviews, and health coaching. If in-person evaluation is necessary, we help coordinate appropriate referrals. You can see examples of what we treat on our Services page.'
        },
        {
          question: 'Is telehealth as effective as in-person care?',
          answer:
            'For many primary care needs, yes. Telehealth has been shown to provide comparable outcomes with the added benefit of convenience and continuity. A key advantage of Sankofa Family Medicine™ is that you see the same physician every visit, which strengthens long-term care and decision-making.'
        },
        {
          question: 'What if I need in-person care?',
          answer:
            'We coordinate with trusted regional labs, imaging centers, and specialists throughout Washington. If in-person services are needed, we provide referrals and ensure your records follow you seamlessly.'
        },
      ]
    },
    {
      title: 'Membership',
      icon: Users,
      items: [
        {
          question: 'What\'s included in membership?',
          answer: (
            <div className="space-y-3">
              <p>
                All membership tiers include unlimited virtual visits with Dr. Nkrumah, secure messaging with typical
                24-48 hour response times, care coordination, and prescription management. Higher tiers offer enhanced
                services such as genetic testing, expanded support, and AI-augmented health insights.
              </p>
              <p>
                Full details are available on the
                <Link
                  href="/services"
                  className="text-sfm-azure hover:text-sfm-navy ml-1 underline"
                >
                  Services &amp; Pricing page
                </Link>
                .
              </p>
            </div>
          ),
          answerText:
            'All membership tiers include unlimited virtual visits with Dr. Nkrumah, secure messaging with typical 24-48 hour response times, care coordination, and prescription management. Higher tiers offer enhanced services such as genetic testing, expanded support, and AI-augmented health insights. Full details are available on the Services & Pricing page.'
        },
        {
          question: 'What\'s the founding member offer?',
          answer:
            `The first ${FOUNDING_MEMBER_SPOTS} patients receive Tier 3 (Legacy Health) benefits at Tier 2 (Precision Care) pricing: $249/month instead of $449/month. This package includes genetic testing, priority access, and same-day or next-day appointment availability. Pricing remains locked as long as membership is continuous.`
        },
        {
          question: 'Can I change my membership tier?',
          answer:
            'Yes. You may upgrade or downgrade at any time. Changes take effect at the next billing cycle. Founding member pricing applies only to the initially selected tier.'
        },
        {
          question: 'Do you see families?',
          answer:
            'Yes. Sankofa Family Medicine™ serves patients of all ages throughout Washington. Family memberships or multi-member arrangements may be available, and you can contact us directly for details.'
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
              <p>
                Begin by joining the waitlist through our contact form. We will reach out to schedule an introductory
                consultation, review your needs, and confirm that our model is the right fit for you.
              </p>
              <Link href="/contact" className="inline-flex items-center text-sfm-azure hover:text-sfm-navy font-medium">
                Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ),
          answerText:
            'Begin by joining the waitlist through our contact form. We will reach out to schedule an introductory consultation, review your needs, and confirm that our model is the right fit for you.'
        },
        {
          question: 'What happens during the first visit?',
          answer:
            'Your first visit is a 45-60 minute comprehensive intake. We review your medical history, medications, lifestyle, and health goals, then build a personalized care plan. This is the foundation of Medicine That Remembers™.'
        },
        {
          question: 'Do I need to transfer my medical records?',
          answer:
            'We assist with requesting past records. You may begin as a patient before your records arrive, though having them helps us provide more informed care.'
        },
        {
          question: 'Where do you practice?',
          answer:
            'Sankofa Family Medicine™ is a virtual primary care practice serving patients across Washington State. Care is available to adults and families statewide, including communities in Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, and surrounding areas. As long as a patient is physically located in Washington during the visit, they may be seen. Expansion to additional states is planned.'
        },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        {
          question: 'Is my health information secure?',
          answer:
            'Yes. We maintain full HIPAA compliance. All messaging, video visits, and health records are encrypted and stored using enterprise-grade security standards. Your data is never sold or shared.'
        },
        {
          question: 'Who can see my medical records?',
          answer:
            'Only Dr. Nkrumah and authorized clinical support personnel have access to your records. Information is not shared without your consent unless required by law.'
        },
        {
          question: 'How does AI fit into your practice?',
          answer:
            'AI tools assist with documentation, relevant history retrieval, and pattern recognition. AI never replaces clinical decision-making or patient interaction. All AI systems are configured to meet HIPAA and security requirements.'
        },
      ]
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSections
      .flatMap(section => section.items)
      .map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: typeof item.answer === 'string' ? item.answer : item.answerText
        }
      }))
      .filter(item => item.acceptedAnswer.text)
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Sankofa Family Medicine',
    legalName: 'Sankofa Family Medicine',
    description:
      'Virtual primary care clinic serving patients across Washington State with personalized, continuous telehealth visits.',
    url: 'https://sankofafamilymedicine.com',
    logo: 'https://sankofafamilymedicine.com/images/logo.png',
    areaServed: {
      '@type': 'State',
      name: 'Washington'
    },
    serviceArea: [
      { '@type': 'City', name: 'Seattle' },
      { '@type': 'City', name: 'Bellevue' },
      { '@type': 'City', name: 'Redmond' },
      { '@type': 'City', name: 'Kirkland' },
      { '@type': 'City', name: 'Tacoma' },
      { '@type': 'City', name: 'Spokane' },
    ],
    medicalSpecialty: ['PrimaryCare', 'FamilyMedicine', 'Telemedicine']
  }

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* MedicalOrganization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Support</p>
          <h1 className="font-display text-5xl text-sfm-navy mb-6">
            Frequently Asked Questions
          </h1>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Everything you need to know about Sankofa Family Medicine™, a virtual primary care clinic serving patients
            across Washington State. This includes major metropolitan regions such as Seattle, Bellevue, Redmond, and
            Kirkland, as well as surrounding communities statewide. Learn about membership options, telehealth visits,
            privacy, and how to get started.
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
                        onClick={() => toggleItem(itemId, item.question)}
                        className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-inset"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${itemId}`}
                      >
                        <span id={`faq-question-${itemId}`} className="font-medium text-sfm-navy pr-4">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-sfm-azure flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        id={`faq-answer-${itemId}`}
                        className={`grid transition-all duration-300 ${
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                        role="region"
                        aria-labelledby={`faq-question-${itemId}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-5 text-muted leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Bottom SEO paragraph */}
          <p className="text-center text-muted text-sm mt-12 max-w-xl mx-auto">
            Sankofa Family Medicine™ provides virtual primary care for patients across Washington State, including
            Seattle, Bellevue, Redmond, Kirkland, Tacoma, Spokane, and surrounding regions. We support adults and
            families with telehealth visits, preventive care, chronic disease management, mental health support,
            and long-term continuity of care.
          </p>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HelpCircle className="w-12 h-12 text-sfm-azure mx-auto mb-6" strokeWidth={1.5} aria-hidden="true" />
          <h2 className="font-display text-3xl text-sfm-navy mb-4">Still Have Questions?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            We are happy to answer any questions not covered here. Our team responds within one business day.
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
            Join the founding member waitlist and experience Medicine That Remembers™.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary-white">
              View Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Accessibility: live region for accordion state changes */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
    </>
  )
}
