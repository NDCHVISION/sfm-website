'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Top-level navigation tuned for clinical conversions
  const topNav = [
    { href: '/about', label: 'Care Model' },
    // Services will be a controlled dropdown
    { href: '/faq', label: 'How It Works' },
    { href: '/founder', label: 'About' },
    { href: '/resources', label: 'Resources' },
  ]

  const servicesMenu = [
    { href: '/services#primary-care', label: 'Primary Care' },
    { href: '/services#chronic-conditions', label: 'Chronic Conditions' },
    { href: '/services#preventive-care', label: 'Preventive Care' },
    { href: '/services#mens-health', label: "Men’s Health" },
    { href: '/services#metabolic-health', label: 'Metabolic Health' },
    { href: '/services#virtual-visits', label: 'Virtual Visits' },
  ]

  // Coming soon items (consolidated)
  const comingSoonLinks = [
    { href: '/blog', label: 'Blog & Insights' },
    { href: '/resources', label: 'Patient Resources' },
    { href: '/testimonials', label: 'Patient Stories' },
    { href: '/careers', label: 'Careers' },
    { href: '/partnerships', label: 'Partnerships' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded">
              <Image 
                src="/images/sfm-logo.png" 
                alt="Sankofa Family Medicine" 
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-display text-lg text-sfm-navy hidden sm:block">
                Sankofa Family Medicine<span className="tm text-sfm-gold">™</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              <Link
                href="/about"
                className="text-sfm-navy hover:text-sfm-azure transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded px-1 py-1"
              >
                Care Model
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  className="flex items-center gap-2 text-sm font-medium text-sfm-navy hover:text-sfm-azure focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded px-1 py-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  role="menu"
                  className={`absolute left-0 mt-3 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 transition-opacity duration-200 ${servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                >
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/faq"
                className="text-sfm-navy hover:text-sfm-azure transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded px-1 py-1"
              >
                How It Works
              </Link>

              <Link
                href="/founder"
                className="text-sfm-navy hover:text-sfm-azure transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded px-1 py-1"
              >
                About
              </Link>

              <Link
                href="/resources"
                className="text-sfm-navy hover:text-sfm-azure transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded px-1 py-1"
              >
                Resources
              </Link>

              <Link
                href="/contact"
                className="btn-primary text-sm py-2 px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold focus-visible:ring-offset-2"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-sfm-gold hover:text-sfm-gold/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded"
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-50 lg:hidden transition-visibility ${isOpen ? 'visible' : 'invisible'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-sfm-navy/30 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
        
        {/* Slide-out Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 motion-reduce:transition-none overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          
            <nav className="px-12 py-2" aria-label="Mobile navigation">
            {/* Primary CTA */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-gold focus-visible:ring-offset-2"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Main Links */}
            <div className="mb-10">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="block font-display text-3xl text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="block font-display text-3xl text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                  >
                    Care Model
                  </Link>
                </li>

                {/* Services expand inline on mobile */}
                <li>
                  <button
                    onClick={() => setServicesOpen((s) => !s)}
                    className="w-full flex items-center justify-between font-display text-3xl text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services"
                  >
                    Services
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div id="mobile-services" className={`${servicesOpen ? 'mt-6 max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300`}> 
                    <ul className="space-y-4 pl-2">
                      {servicesMenu.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => { setIsOpen(false); setServicesOpen(false) }}
                            className="text-gray-500 hover:text-sfm-azure transition-colors text-sm font-medium flex items-center gap-2"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    href="/faq"
                    onClick={() => setIsOpen(false)}
                    className="block font-display text-3xl text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                  >
                    How It Works
                  </Link>
                </li>

                <li>
                  <Link
                    href="/founder"
                    onClick={() => setIsOpen(false)}
                    className="block font-display text-3xl text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/resources"
                    onClick={() => setIsOpen(false)}
                    className="block font-display text-3xl text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coming Soon Section */}
            <div className="border-t border-gray-100 pt-6 mb-10">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-full flex items-center justify-between text-sfm-navy hover:text-sfm-azure transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded px-1 py-1"
                aria-expanded={moreOpen}
                aria-controls="more-links"
              >
                <span className="font-display text-xl">Coming Soon</span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 motion-reduce:transition-none ${moreOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              
              <div 
                id="more-links"
                className={`overflow-hidden transition-all duration-300 motion-reduce:transition-none ${moreOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
              >
                <ul className="space-y-4 pl-2">
                  {comingSoonLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-sfm-azure transition-colors text-sm font-medium flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
                      >
                        {link.label}
                        <span className="text-xs bg-sfm-cream text-sfm-azure px-2 py-0.5 rounded">Soon</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-100 pt-6 text-sm text-gray-500">
              <p className="font-semibold text-sfm-navy mb-2">Contact</p>
              <p><a href="mailto:info@sankofafamilymedicine.com" className="hover:text-sfm-azure focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded">info@sankofafamilymedicine.com</a></p>
              <p><a href="tel:+14252857390" className="hover:text-sfm-azure focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded">(425) 285-7390</a></p>
              <p className="mt-3 text-sfm-azure text-xs">Serving Washington State</p>
            </div>
          </nav>
        </div>
      </div>

      {/* Screen reader announcement for menu state */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isOpen ? 'Navigation menu opened' : ''}
      </div>
    </>
  )
}

