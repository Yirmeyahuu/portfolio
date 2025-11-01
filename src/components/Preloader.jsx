// src/components/Preloader.jsx
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time - you can adjust this or tie it to actual content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0a0a0a] transition-all duration-500">
      {/* Animated logo/icon */}
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sky-500 animate-spin"></div>
        
        {/* Inner content */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Pulsing gradient circle */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 animate-pulse flex items-center justify-center">
            <span className="text-white font-bold text-xl">JP</span>
          </div>
        </div>
      </div>
    </div>
  )
}