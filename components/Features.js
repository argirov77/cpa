// src/components/Features.js
'use client'

import { useEffect } from 'react'

export default function Features() {
  // Только на клиенте регистрируем <lottie-player>
  useEffect(() => {
    import('@lottiefiles/lottie-player').catch(err =>
      console.error('Failed to load lottie-player', err)
    )
  }, [])

  // У нас теперь два JSON-файла в public/lotties
  const cards = [
    {
      src: '/lotties/a1.json',
      title: 'Campaign Audit',
      desc: 'Deep dive into your current Google Ads setup.'
    },
    {
      src: '/lotties/a2.json',
      title: 'Keyword Strategy',
      desc: 'High-intent keyword mapping & grouping.'
    }
  ]

  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <h2 className="section-heading">Our Services</h2>
        <div className="grid-4">
          {cards.map(card => (
            <div key={card.title} className="card">
              <div style={{ width: 120, height: 120, margin: '0 auto' }}>
                <lottie-player
                  src={card.src}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
