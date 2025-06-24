// src/components/Header.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'home',     label: 'Home'      },
  { id: 'services', label: 'Services'  },
  { id: 'pricing',  label: 'Pricing'   },
  { id: 'about',    label: 'About Us'  },
  { id: 'contact',  label: 'Contact'   },
]

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [active,  setActive]        = useState('home')
  const [menuOpen, setMenuOpen]     = useState(false)

  // — Shrink & solidify header on scroll —
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // — Scroll-spy for active link —
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )
    navItems.forEach(item => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <Link href="#home" className="logo">
          Teletron Media 
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={`nav-link ${active === item.id ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right controls: theme toggle + mobile menu button */}
        <div className="header-actions">
          <ThemeToggle />

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
)
}
