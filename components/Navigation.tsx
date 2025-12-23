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

  // Grouped navigation structure - FINAL LOCKED VERSION
  const navGroups = {
    about: {
      label: 'About',
      columns: [
        {
          title: 'About Us',
          items: [
            { href: '/founder', label: 'Meet Our Founder', desc: 'Board Certified Family Physician' },
            { href: '/about', label: 'How It Works', desc: 'Virtual care model' },
            { href: '/faq', label: 'FAQs', desc: 'Common questions' },
          ],
        },
      ],
    },
    services: {
      label: 'Services',
      columns: [
        {
          title: 'Services',
          items: [
            { href: '/compare', label: 'Our Standard', desc: 'Philosophy & safeguards' },
            { href: '/services/what-we-cover', label: 'Conditions We Treat', desc: 'Scope of care' },
            { href: '/services', label: 'Membership', desc: 'Pricing & tiers' },
          ],
        },
      ],
    },
    resources: {
      label: 'Resources',
      columns: [
        {
          title: 'Learn & Explore',
          items: [
            { href: '/blog', label: 'Blog', desc: 'Health insights & updates' },
          ],
        },
      ],
    },
  }

  // Mobile navigation - FINAL LOCKED VERSION
  const mobileNav = [
    { href: '/', label: 'Home' },
    { href: '/founder', label: 'Meet Our Founder' },
    { href: '/about', label: 'How It Works' },
    { href: '/faq', label: 'FAQs' },
    { href: '/compare', label: 'Our Standard' },
    { href: '/services/what-we-cover', label: 'Conditions We Treat' },
    { href: '/services', label: 'Membership' },
    { href: '/blog', label: 'Blog' },
  ]

  const mobileSecondary = [
    { href: '/careers', label: 'Careers' },
    { href: '/partnerships', label: 'Partnerships' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled 
            ? 'bg-white/98 shadow-xl shadow-sfm-navy/5 backdrop-blur-lg' 
            : 'bg-white/95 backdrop-blur-md'}`}
      >
        {/* Top bar - visible on desktop */}
        <div className="hidden lg:block bg-gradient-to-r from-sfm-navy via-sfm-navy to-sfm-azure/90 text-white">
          <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="tel:+14252857390" className="flex items-center gap-2 text-sm hover:text-sfm-gold transition-colors group">
                <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                +1 (425) 285-7390
              </a>
              <a href="mailto:info@sankofafamilymedicine.com" className="flex items-center gap-2 text-sm hover:text-sfm-gold transition-colors group">
                <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                info@sankofafamilymedicine.com
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/70">Serving Washington State</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sfm-gold animate-pulse" />
              <span className="text-white/70">Virtual Care Available</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center group relative">
              <div className="relative py-2">
                <span className="font-display text-lg sm:text-xl lg:text-2xl text-sfm-navy block leading-tight group-hover:text-sfm-azure transition-colors duration-200">
                  Sankofa Family Medicine
                </span>
                <span className="text-[10px] sm:text-xs lg:text-sm text-sfm-gold font-medium tracking-wider uppercase">
                  Medicine That Remembers™
                </span>
                {/* Subtle underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sfm-gold to-sfm-azure group-hover:w-full transition-all duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation" ref={dropdownRef}>
              <Link
                href="/"
                className="text-sfm-navy hover:text-sfm-azure transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure focus-visible:ring-offset-2 rounded px-1 py-1"
              >
                Home
              </Link>
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
                  className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${activeDropdown === 'about' 
                      ? 'text-sfm-azure' 
                      : 'text-sfm-navy hover:text-sfm-azure'}`}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-sfm-azure transition-all duration-200 ${activeDropdown === 'about' ? 'w-3/4' : 'w-0'}`} />
                </button>

                {/* Bridge element to prevent gap */}
                <div className="absolute -left-4 -right-4 h-8 top-full bg-transparent" />

                <div
                  role="menu"
                  aria-label="About menu"
                  onMouseEnter={() => handleDropdownEnter('about')}
                  onMouseLeave={handleDropdownLeave}
                  className={`absolute left-0 pt-4 w-[320px]
                    transition-all duration-200 origin-top
                    ${activeDropdown === 'about' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
                >
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-1 gap-6">
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
                  className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${activeDropdown === 'services' 
                      ? 'text-sfm-azure' 
                      : 'text-sfm-navy hover:text-sfm-azure'}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-sfm-azure transition-all duration-200 ${activeDropdown === 'services' ? 'w-3/4' : 'w-0'}`} />
                </button>

                {/* Bridge element to prevent gap */}
                <div className="absolute -left-4 -right-4 h-8 top-full bg-transparent" />

                {/* Mega Menu */}
                <div
                  role="menu"
                  aria-label="Services menu"
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={handleDropdownLeave}
                  className={`absolute left-0 pt-4 w-[520px]
                    transition-all duration-200 origin-top
                    ${activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
                >
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8">
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

              {/* Blog - Direct Link */}
              <Link
                href="/blog"
                className="relative px-4 py-2 text-sm font-medium text-sfm-navy hover:text-sfm-azure rounded-lg transition-colors duration-200"
              >
                Blog
              </Link>

              {/* Direct Links */}
              <Link
                href="/contact"
                className="relative px-4 py-2 text-sm font-medium text-sfm-navy hover:text-sfm-azure rounded-lg transition-colors duration-200 group"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-sfm-azure group-hover:w-3/4 transition-all duration-200" />
              </Link>

              {/* Primary CTA */}
              <Link
                href="/contact"
                className="ml-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sfm-gold via-amber-400 to-sfm-gold bg-[length:200%_100%] 
                  text-sfm-navy text-sm font-bold rounded-full shadow-lg shadow-sfm-gold/25
                  hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-sfm-gold/40 hover:scale-[1.02]
                  active:scale-[0.98] transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10">Join Waitlist</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
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
                +1 (425) 285-7390
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

