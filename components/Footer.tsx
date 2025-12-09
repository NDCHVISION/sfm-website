'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Active social links
  const activeSocialLinks = [
    {
      name: 'LinkedIn (Dr. Nkrumah)',
      href: 'https://www.linkedin.com/in/yawnkrumahmd/',
      icon: Linkedin,
      label: 'Dr. Nkrumah on LinkedIn'
    },
    {
      name: 'LinkedIn (SFM)',
      href: 'https://www.linkedin.com/company/109183000/',
      icon: Linkedin,
      label: 'Sankofa Family Medicine on LinkedIn'
    },
  ]

  // Hidden/coming soon social links (kept in code for future use)
  // const futureSocialLinks = [
  //   { name: 'Facebook', href: '#', icon: Facebook },
  //   { name: 'YouTube', href: '#', icon: Youtube },
  //   { name: 'TikTok', href: '#', icon: null }, // Custom SVG needed
  // ]

  return (
    <footer className="bg-sfm-navy text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">
              <Image 
                src="/images/sfm-logo.png" 
                alt="Sankofa Family Medicine" 
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-4 text-sm max-w-sm">
              Premium virtual primary care built on memory, dignity, and relationship. 
              HIPAA-compliant telehealth serving Washington State.
            </p>
            <p className="font-display text-lg text-sfm-gold italic mb-6">
              Medicine That Remembers™
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Connect:</span>
              <div className="flex gap-3">
                {activeSocialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="p-2 rounded-lg bg-sfm-gold/10 text-sfm-gold hover:bg-sfm-gold hover:text-sfm-navy transition-all duration-300 transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold"
                      aria-label={social.label}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h4 className="font-display text-lg text-sfm-gold mb-6">Main</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">About SFM</Link></li>
              <li><Link href="/founder" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Dr. Nkrumah</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Services & Pricing</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Contact</Link></li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div>
            <h4 className="font-display text-lg text-sfm-gold mb-6">Coming Soon</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-400 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Blog & Insights</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Patient Resources</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Patient Stories</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Careers</Link></li>
              <li><Link href="/partnerships" className="text-gray-400 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Partnerships</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg text-sfm-gold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">Terms of Service</Link></li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/yawnkrumahmd/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-sfm-gold transition-colors text-sm flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded"
                >
                  Dr. Nkrumah <Linkedin size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-700">
          <div>
            <h5 className="text-sfm-gold text-sm font-semibold mb-2">Email</h5>
            <a href="mailto:sfm@ndchvision.com" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">
              sfm@ndchvision.com
            </a>
          </div>
          <div>
            <h5 className="text-sfm-gold text-sm font-semibold mb-2">Phone</h5>
            <a href="tel:+18032267795" className="text-gray-300 hover:text-sfm-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold rounded">
              (803) 226-7795
            </a>
          </div>
          <div>
            <h5 className="text-sfm-gold text-sm font-semibold mb-2">Service Area</h5>
            <p className="text-gray-300 text-sm">Washington State • Virtual Care</p>
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="border-t border-gray-700 bg-sfm-navy/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-gray-400 text-xs mb-4 max-w-3xl mx-auto leading-relaxed">
            This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition. 
            Sankofa Family Medicine is a HIPAA-compliant virtual primary care practice. All consultations are conducted via secure telehealth.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} Sankofa Family Medicine™. All rights reserved.</p>
            <span className="hidden md:inline text-gray-600">•</span>
            <p className="flex items-center gap-1">
              Built with <Heart size={14} className="text-sfm-gold" aria-hidden="true" /> <span className="sr-only">love</span> for patients
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
