'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'precision-care',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setStatusMessage('Submitting your information...')

    try {
      const response = await fetch('https://formspree.io/f/manrdjyn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setStatusMessage('Success! You have been added to our waitlist.')
      } else {
        setError('Something went wrong. Please try again or email us directly.')
        setStatusMessage('Error submitting form. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      setStatusMessage('Error submitting form. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-white via-sfm-cream/20 to-sfm-cream/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sfm-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sfm-azure/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sfm-gold/10 border border-sfm-gold/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" />
            <span className="text-sfm-gold text-sm font-medium">Now Accepting Founding Members</span>
          </div>
          
          <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">Contact Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-sfm-navy mb-8 leading-[1.1]">
            Join the Waitlist
          </h1>
          <div className="divider-gold mx-auto mb-10" />
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Interested in becoming a founding member? Have questions about our services? 
            We respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-sfm-cream relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 pattern-dots opacity-30" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">Get In Touch</h2>
              <p className="text-muted leading-relaxed mb-12 text-lg">
                Ready to experience primary care that remembers? Reach out to learn more 
                about membership, programs, or partnership opportunities.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-sfm-azure" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sfm-navy font-medium mb-1">Email</p>
                    <a 
                      href="mailto:appointments@sankofafamilymedicine.com" 
                      className="text-muted hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                    >
                      appointments@sankofafamilymedicine.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-sfm-azure" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sfm-navy font-medium mb-1">Phone</p>
                    <a 
                      href="tel:(425) 285-7390" 
                      className="text-muted hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                    >
                      (425) 285-7390
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-sfm-azure" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sfm-navy font-medium mb-1">Service Area</p>
                    <p className="text-sfm-azure">Washington State</p>
                    <p className="text-gray-400 text-sm">HIPAA-Compliant Virtual Care</p>
                  </div>
                </div>
              </div>

              {/* Founding Member Reminder */}
              <div className="mt-10 p-6 bg-gradient-to-br from-sfm-navy to-sfm-azure/90 rounded-2xl text-white relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sfm-gold/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-sfm-gold rounded-full animate-pulse" />
                    <p className="font-display text-lg">Founding Member Offer</p>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    First 30 members receive Tier 3 benefits at Tier 2 pricing, locked for life.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sfm-gold via-sfm-azure to-sfm-gold" />
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 border-2 border-sfm-gold rounded-xl flex items-center justify-center mb-6">
                    <Send className="w-6 h-6 text-sfm-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl text-sfm-navy mb-4">You&apos;re On the List</h3>
                  <p className="text-muted mb-2">
                    Thank you for your interest in Sankofa Family Medicine.
                  </p>
                  <p className="text-gray-400 text-sm">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl text-sfm-navy mb-2">Join the Waitlist</h3>
                  <p className="text-gray-400 text-sm mb-8">
                    Tell us a bit about yourself and what you&apos;re interested in.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sfm-navy text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input"
                        placeholder="Your name"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sfm-navy text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="your@email.com"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sfm-navy text-sm font-medium mb-2">
                        I&apos;m interested in...
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="input"
                      >
                        <option value="precision-care">Precision Care Membership (Founding Offer)</option>
                        <option value="continuity-care">Continuity Care Membership</option>
                        <option value="legacy-health">Legacy Health Membership</option>
                        <option value="cardiometabolic">Cardiometabolic Reset Program</option>
                        <option value="weight-metabolic">Weight & Metabolic Program</option>
                        <option value="genomic-insight">Genomic Insight Session</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sfm-navy text-sm font-medium mb-2">
                        Message <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input resize-none"
                        placeholder="Tell us more about your health goals or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-describedby="form-status"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    {error && (
                      <p className="text-red-600 text-sm text-center" role="alert">{error}</p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Screen reader status announcements */}
      <div 
        id="form-status" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {statusMessage}
      </div>
    </>
  )
}

