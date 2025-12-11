'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 600px)
      const scrollThreshold = 600
      setIsVisible(window.scrollY > scrollThreshold)
    }

    // Check initial position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Gradient fade above the bar */}
      <div className="h-6 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
      
      {/* CTA Bar */}
      <div className="bg-white border-t border-gray-100 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <Link 
          href="/contact" 
          className="btn-primary w-full text-center flex items-center justify-center"
        >
          Join Waitlist
          <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
