'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="text-white font-extrabold text-2xl drop-shadow">✈</span>
              </div>
              <span className="font-extrabold text-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent tracking-tight drop-shadow">BookAir</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-blue-700 font-medium transition-colors text-lg px-2 py-1 rounded-lg hover:bg-blue-100/40"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-700 hover:bg-blue-100/60 rounded-xl shadow"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2 bg-white/80 rounded-b-xl shadow-lg fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100/60 font-semibold"
                className="block px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
