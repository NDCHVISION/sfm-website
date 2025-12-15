'use client'

import { useState, useEffect } from 'react'
import { TrendingDown } from 'lucide-react'

export default function SpotsCounter() {
  // State to track remaining spots
  // In production, this would come from an API or CMS
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null)
  const totalSpots = 10

  useEffect(() => {
    // Simulate fetching from API/CMS
    // In production: const response = await fetch('/api/founding-spots')
    // const data = await response.json()
    // setSpotsLeft(data.remaining)
    
    // For demo, set to 7
    setSpotsLeft(7)
  }, [])

  if (spotsLeft === null) return null

  const percentageFilled = ((totalSpots - spotsLeft) / totalSpots) * 100
  const isLowStock = spotsLeft <= 3

  return (
    <div className="group cursor-pointer transition-all duration-300">
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
        isLowStock
          ? 'bg-red-50 border border-red-200 text-red-700'
          : 'bg-sfm-gold/10 border border-sfm-gold/30 text-sfm-gold'
      }`}>
        <TrendingDown className={`w-4 h-4 ${isLowStock ? 'animate-pulse' : ''}`} aria-hidden="true" />
        <span className="font-bold">{spotsLeft}</span>
        <span className="text-xs">founding {spotsLeft === 1 ? 'spot' : 'spots'} left</span>
      </div>

      {/* Progress bar (visible on hover) */}
      <div className="mt-2 hidden group-hover:block max-w-xs">
        <div className="text-xs text-gray-500 mb-1">
          {totalSpots - spotsLeft} of {totalSpots} claimed
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              isLowStock
                ? 'bg-gradient-to-r from-red-400 to-red-600'
                : 'bg-gradient-to-r from-sfm-gold to-sfm-gold-light'
            }`}
            style={{ width: `${percentageFilled}%` }}
            role="progressbar"
            aria-valuenow={totalSpots - spotsLeft}
            aria-valuemin={0}
            aria-valuemax={totalSpots}
            aria-label={`${spotsLeft} founding spots remaining`}
          />
        </div>
      </div>
    </div>
  )
}
