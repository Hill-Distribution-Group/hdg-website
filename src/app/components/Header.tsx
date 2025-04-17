'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Handle scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when navigating
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <header className={`${
      scrollPosition > 10 ? 'bg-white shadow-md' : 'bg-white shadow-sm'
    } sticky top-0 z-40 transition-shadow duration-300`}>
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-blue-900">HDG</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm lg:text-base font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-touch-target p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-3 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 