'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TrueCheck</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/demo" className="text-gray-600 hover:text-gray-900 transition-colors">
              Try Our Product
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Documentation
            </Link>
          </nav>

          {/* Empty div for spacing */}
          <div className="hidden md:block w-32">
            {/* This creates equal spacing on the right to balance the logo on the left */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link href="/demo" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Try Our Product
              </Link>
              <Link href="/features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="/docs" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Documentation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 