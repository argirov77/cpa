'use client'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* 1) video tag */}
      <video
        className="video-bg"
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 2) overlay */}
      <div className="overlay" />

      {/* 3) content */}
      <div className="hero-content container">
        <h1 className="title" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', margin: 0 }}>
          Performance Traffic Agency
        </h1>
        <p className="subtitle" style={{ marginTop: '1rem', fontSize: '1.25rem', maxWidth: '600px' }}>
          Maximize your Google Ads ROI with data-driven automation.
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="cta bg-primary-grad"
        >
          Book Free Audit
        </button>
      </div>
    </section>
  )
}
