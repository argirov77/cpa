// src/components/TrafficSources.js
'use client'

import { useEffect } from 'react'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineComputerDesktop,
  HiOutlineBolt,
  HiOutlineChartBar
} from 'react-icons/hi2'

export default function TrafficSources() {
  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const sources = [
    {
      icon: <HiOutlineMagnifyingGlass size={36} className="modern-icon" />,
      title: 'Search Ads',
      desc: 'High-intent keyword targeting for immediate conversions.',
    },
    {
      icon: <HiOutlineComputerDesktop size={36} className="modern-icon" />,
      title: 'Display & YouTube',
      desc: 'Brand awareness & retargeting across Google’s network.',
    },
    {
      icon: <HiOutlineBolt size={36} className="modern-icon" />,
      title: 'Performance Max',
      desc: 'All-in-one automation for cross-channel reach.',
    },
    {
      icon: <HiOutlineChartBar size={36} className="modern-icon" />,
      title: 'Analytics & Optimization',
      desc: 'A/B testing, budget reallocation & ROI tracking.',
    },
  ]

  return (
    <section id="traffic-sources" className="section section--alt section--traffic">
      <div className="container">
        <h2 className="section-heading">Traffic Sources</h2>
        <div className="grid-4">
          {sources.map(src => (
            <div key={src.title} className="card" data-reveal>
              <div className="card-icon">{src.icon}</div>
              <h3 className="card-title">{src.title}</h3>
              <p className="card-desc">{src.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Section background */
        .section--traffic {
          background: var(--bg-light-2);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-sm);
        }
        .section-heading {
          font-family: var(--font-heading);
          font-size: 2rem;
          text-align: center;
          margin-bottom: var(--space-md);
        }
        .grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
          gap: var(--space-md);
        }

        /* Card styles */
        .card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: saturate(180%) blur(12px);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          text-align: center;
          transition: transform .2s, box-shadow .2s;
          opacity: 0;
          transform: translateY(20px);
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .card[data-reveal].is-visible {
          opacity: 1;
          transform: none;
        }

        .card-icon {
          margin-bottom: var(--space-sm);
        }
        :global(.modern-icon) {
          color: var(--color-primary);
          transition: transform .3s, color .3s;
        }
        .card:hover :global(.modern-icon) {
          transform: scale(1.1);
          color: var(--color-secondary);
        }
        .card-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--text-dark);
          margin: 0;
        }
        .card-desc {
          margin-top: var(--space-xxs);
          font-size: .95rem;
          color: #555;
        }
      `}</style>
    </section>
  )
}
