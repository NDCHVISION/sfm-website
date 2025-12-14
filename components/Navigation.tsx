'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Dropdown handlers with delay to prevent flicker
  const handleDropdownEnter = useCallback((dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(dropdown)
  }, [])

  const handleDropdownLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }, [])

  // Handle scroll for header style change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Grouped navigation structure
  const navGroups = {
    services: {
      label: 'Services',
      columns: [
        {
          title: 'Membership',
          items: [
            { href: '/services', label: 'Membership Tiers', desc: 'Continuity, Precision & Legacy plans' },
            { href: '/services/what-we-cover', label: 'Scope of Care', desc: '100+ conditions we treat virtually' },
          ],
        },
        {
          title: 'Clinical Areas',
          items: [
            { href: '/services#cardiometabolic', label: 'Cardiometabolic Health', desc: 'Diabetes, hypertension, cholesterol' },
            { href: '/services#weight-management', label: 'Weight Management', desc: 'Medical weight loss & GLP-1s' },
            { href: '/services#mental-health', label: 'Mental Wellness', desc: 'Anxiety, depression, stress' },
          ],
        },
        {
          title: 'Specialty Care',
          items: [
            { href: '/services#mens-health', label: "Men's Health", desc: 'Hormones, sexual health, vitality' },
            { href: '/services#womens-health', label: "Women's Health", desc: 'Menopause, HRT, contraception' },
            { href: '/services#preventive', label: 'Preventive Care', desc: 'Screenings & wellness visits' },
          ],
        },
      ],
    },
    about: {
      label: 'About',
      columns: [
        {
          title: 'Our Practice',
          items: [
            { href: '/about', label: 'Care Model', desc: 'How our DPC model works' },
            { href: '/founder', label: 'Dr. Yaw Nkrumah', desc: 'Meet your physician' },
            { href: '/faq', label: 'FAQs', desc: 'Common questions answered' },
          ],
        },
        {
          title: 'Learn More',
          items: [
            { href: '/resources', label: 'Patient Resources', desc: 'Guides & health information' },
          ],
        },
      ],
    },
  }

  // Mobile navigation
  const mobileNav = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Membership & Pricing' },
    { href: '/services/what-we-cover', label: 'What We Treat' },
    { href: '/about', label: 'Care Model' },
    { href: '/founder', label: 'Our Founder' },
    { href: '/faq', label: 'How It Works' },
    { href: '/resources', label: 'Resources' },
  ]

  const mobileSecondary = [
    { href: '/careers', label: 'Careers' },
    { href: '/partnerships', label: 'Partnerships' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}
      >
        {/* Top bar - visible on desktop */}
        <div className="hidden lg:block bg-sfm-navy text-white">
          <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="tel:+14252857390" className="flex items-center gap-2 text-sm hover:text-sfm-gold transition-colors">
                <Phone className="w-3.5 h-3.5" />
                (425) 285-7390
              </a>
              <a href="mailto:info@sankofafamilymedicine.com" className="flex items-center gap-2 text-sm hover:text-sfm-gold transition-colors">
                <Mail className="w-3.5 h-3.5" />
                info@sankofafamilymedicine.com
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/60">Serving Washington State</span>
              <span className="w-1 h-1 rounded-full bg-sfm-gold" />
              <span className="text-white/60">Virtual Care Available</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Enlarged */}
            <Link href="/" className="flex items-center group">
              <div>
                <span className="font-display text-xl lg:text-2xl text-sfm-navy block leading-tight">
                  Sankofa Family Medicine
                </span>
                <span className="text-xs lg:text-sm text-sfm-gold font-medium tracking-wide">
                  Medicine That Remembers™
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation" ref={dropdownRef}>
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  aria-haspopup="menu"
                  aria-expanded={activeDropdown === 'services'}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                    ${activeDropdown === 'services' 
                      ? 'bg-sfm-cream text-sfm-azure' 
                      : 'text-sfm-navy hover:bg-sfm-cream/50'}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {/* Bridge element to prevent gap */}
                <div className="absolute -left-4 -right-4 h-8 top-full bg-transparent" />

                {/* Mega Menu */}
                <div
                  role="menu"
                  aria-label="Services menu"
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={handleDropdownLeave}
                  className={`absolute left-1/2 -translate-x-1/2 pt-4 w-[720px]
                    transition-all duration-200 origin-top
                    ${activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
                >
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl">
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {navGroups.services.columns.map((column) => (
                        <div key={column.title}>
                          <h3 className="text-xs font-bold text-sfm-azure uppercase tracking-wider mb-4">
                            {column.title}
                          </h3>
                          <ul className="space-y-1">
                            {column.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                  className="block px-3 py-3 rounded-xl hover:bg-sfm-cream transition-all duration-200 group"
                                >
                                  <span className="text-sm font-semibold text-sfm-navy group-hover:text-sfm-azure transition-colors">
                                    {item.label}
                                  </span>
                                  <span className="text-xs text-gray-500 block mt-0.5">{item.desc}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        <span className="text-sfm-gold font-semibold">Founding Member:</span> Tier 3 benefits at Tier 2 pricing
                      </p>
                      <Link
                        href="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sfm-azure hover:text-sfm-navy transition-colors"
                      >
                        Get Started <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('about')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  aria-haspopup="menu"
                  aria-expanded={activeDropdown === 'about'}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                    ${activeDropdown === 'about' 
                      ? 'bg-sfm-cream text-sfm-azure' 
                      : 'text-sfm-navy hover:bg-sfm-cream/50'}`}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {/* Bridge element to prevent gap */}
                <div className="absolute -left-4 -right-4 h-8 top-full bg-transparent" />

                <div
                  role="menu"
                  aria-label="About menu"
                  onMouseEnter={() => handleDropdownEnter('about')}
                  onMouseLeave={handleDropdownLeave}
                  className={`absolute left-1/2 -translate-x-1/2 pt-4 w-[500px]
                    transition-all duration-200 origin-top
                    ${activeDropdown === 'about' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
                >
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {navGroups.about.columns.map((column) => (
                        <div key={column.title}>
                          <h3 className="text-xs font-bold text-sfm-azure uppercase tracking-wider mb-4">
                            {column.title}
                          </h3>
                          <ul className="space-y-1">
                            {column.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                  className="block px-3 py-3 rounded-xl hover:bg-sfm-cream transition-all duration-200 group"
                                >
                                  <span className="text-sm font-semibold text-sfm-navy group-hover:text-sfm-azure transition-colors">
                                    {item.label}
                                  </span>
                                  <span className="text-xs text-gray-500 block mt-0.5">{item.desc}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <Link
                href="/faq"
                className="px-4 py-2.5 text-sm font-medium text-sfm-navy hover:bg-sfm-cream/50 rounded-lg transition-all duration-200"
              >
                How It Works
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2.5 text-sm font-medium text-sfm-navy hover:bg-sfm-cream/50 rounded-lg transition-all duration-200"
              >
                Contact
              </Link>

              {/* Primary CTA */}
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sfm-gold to-amber-500 
                  text-sfm-navy text-sm font-semibold rounded-xl shadow-lg shadow-sfm-gold/25
                  hover:shadow-xl hover:shadow-sfm-gold/30 hover:scale-[1.02] transition-all duration-300"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-3 text-sfm-navy hover:bg-sfm-cream rounded-xl transition-colors"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-visibility ${isOpen ? 'visible' : 'invisible'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-sfm-navy/50 backdrop-blur-sm transition-opacity duration-300 
            ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl 
            transition-transform duration-300 ease-out overflow-y-auto
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <Image src="/images/sfm-logo.png" alt="SFM" width={44} height={44} className="h-11 w-auto" />
              <div>
                <span className="font-display text-lg text-sfm-navy block leading-tight">SFM</span>
                <span className="text-xs text-sfm-gold">Medicine That Remembers™</span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-sfm-navy hover:bg-sfm-cream rounded-xl transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          <nav className="p-6" aria-label="Mobile navigation">
            {/* Primary CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-sfm-gold to-amber-500 
                text-sfm-navy font-semibold rounded-xl shadow-lg mb-8"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Main Links */}
            <div className="space-y-1 mb-8">
              {mobileNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3.5 text-sfm-navy hover:bg-sfm-cream hover:text-sfm-azure rounded-xl transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Secondary Links */}
            <div className="border-t border-gray-100 pt-6 mb-8">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sfm-navy hover:bg-sfm-cream rounded-xl transition-colors"
                aria-expanded={moreOpen}
              >
                <span className="font-medium text-sm">More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${moreOpen ? 'max-h-48 mt-2' : 'max-h-0'}`}>
                {mobileSecondary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 ml-4 text-sm text-gray-600 hover:text-sfm-azure hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-gray-100 pt-6 space-y-3">
              <a href="tel:+14252857390" className="flex items-center gap-3 px-4 py-2 text-sm text-sfm-navy hover:text-sfm-azure">
                <Phone className="w-4 h-4 text-sfm-gold" />
                (425) 285-7390
              </a>
              <a href="mailto:info@sankofafamilymedicine.com" className="flex items-center gap-3 px-4 py-2 text-sm text-sfm-navy hover:text-sfm-azure">
                <Mail className="w-4 h-4 text-sfm-gold" />
                info@sankofafamilymedicine.com
              </a>
              <p className="px-4 text-xs text-gray-500">
                Serving Washington State • Virtual Care
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

