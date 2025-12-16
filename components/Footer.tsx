'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { label: 'Meet Our Founder', href: '/founder' },
      { label: 'How It Works', href: '/about' },
      { label: 'FAQs', href: '/faq' },
    ],
    services: [
      { label: 'Our Standard', href: '/compare' },
      { label: 'Conditions We Treat', href: '/services/what-we-cover' },
      { label: 'Membership', href: '/services' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    {
      name: 'LinkedIn (Dr. Nkrumah)',
      href: 'https://www.linkedin.com/in/yawnkrumahmd/',
      icon: Linkedin,
    },
    {
      name: 'LinkedIn (Practice)',
      href: 'https://www.linkedin.com/company/109183000/',
      icon: Linkedin,
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-sfm-navy to-[#020d1a] relative overflow-hidden z-10" role="contentinfo">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sfm-navy to-[#020d1a]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sfm-gold/5 rounded-full blur-3xl" />
      </div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image 
                    src="/images/sankofa-bird.png" 
                    alt="Sankofa Family Medicine" 
                    width={64}
                    height={64}
                    className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-3xl lg:text-4xl text-white leading-none tracking-tight">
                    Sankofa Family Medicine
                  </span>
                  <span className="text-sfm-gold text-sm font-medium tracking-widest uppercase mt-1">
                    Medicine That Remembers™
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              Premium virtual primary care built on memory, dignity, and the physician-patient relationship. 
              HIPAA-compliant telehealth serving patients throughout Washington State.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a 
                href="tel:+14252857390" 
                className="flex items-center gap-3 text-gray-300 hover:text-sfm-gold transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-sfm-gold/10 transition-colors">
                  <Phone className="w-4 h-4 text-sfm-gold" />
                </div>
                +1 (425) 285-7390
              </a>
              <a 
                href="mailto:info@sankofafamilymedicine.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-sfm-gold transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-sfm-gold/10 transition-colors">
                  <Mail className="w-4 h-4 text-sfm-gold" />
                </div>
                info@sankofafamilymedicine.com
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-sfm-gold/60" />
                </div>
                Serving Washington State (Virtual)
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 
                    hover:bg-sfm-gold hover:text-sfm-navy transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              {/* About */}
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                  About
                </h4>
                <ul className="space-y-3">
                  {footerLinks.about.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-sfm-gold transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                  Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-sfm-gold transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal + CTA */}
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                  Legal
                </h4>
                <ul className="space-y-3 mb-8">
                  {footerLinks.legal.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-sfm-gold transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mini CTA */}
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sfm-gold to-amber-400 text-sfm-navy text-sm font-semibold rounded-lg
                    hover:shadow-lg hover:shadow-sfm-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/sfm-logo.png" 
                alt="Sankofa" 
                width={24}
                height={24}
                className="h-6 w-auto opacity-60"
              />
              <p className="text-gray-500 text-xs">
                © {currentYear} Sankofa Family Medicine™. All rights reserved.
              </p>
            </div>
            <p className="text-gray-500 text-xs text-center md:text-right max-w-xl">
              This website is for informational purposes only and does not constitute medical advice. 
              Always consult a qualified healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

