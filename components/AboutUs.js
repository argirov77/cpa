'use client'

export default function About() {
  return (
    <section id="about" className="section section--alt section--about">
      <div className="container">
        <h2 className="section-heading">About Teletron Media </h2>

        {/* Краткое введение */}
        <p className="about-intro">
          At Teletron, we combine deep Google Ads expertise with cutting-edge AI automation to drive measurable growth.  
          Our mission is simple: maximize your ROI through transparent, data-driven strategies and hands-on collaboration.
        </p>

        {/* Две карточки с изображениями и расширенным текстом */}
        <div className="about-grid">
          <div className="about-card" data-reveal>
            <img
              src="/images/team.jpg"
              alt="Team collaborating"
              className="about-img"
            />
            <h3 className="about-title">Expert Team</h3>
            <p className="about-text">
              We’re a dedicated group of Google Ads specialists, analysts, and strategists—each certified and continually trained 
              to stay ahead of platform changes. Together, we audit, plan, and optimize every aspect of your account.
            </p>
            <p className="about-quote">
              “We believe that real partnerships and clear communication are the keys to sustainable success.”
            </p>
          </div>

          <div className="about-card" data-reveal>
            <img
              src="/images/data.jpg"
              alt="Data-driven optimization"
              className="about-img"
            />
            <h3 className="about-title">Data-Driven Optimization</h3>
            <p className="about-text">
              Leveraging AI-powered bidding algorithms and continuous A/B testing, we fine-tune your campaigns 
              for the lowest CPA and highest conversion volume—24/7, automatically.
            </p>
            <p className="about-quote">
              “Every click is an insight—our systems learn in real time to make your budget work harder.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
