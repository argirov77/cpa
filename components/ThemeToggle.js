'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const saved = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved === 'dark' || (!saved && prefers)
    setIsDark(dark)
    root.classList.toggle('dark', dark)
  }, [])

  const toggle = () => {
    const root = document.documentElement
    root.classList.toggle('dark', !isDark)
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="theme-toggle"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
