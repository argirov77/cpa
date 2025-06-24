import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt section--contact">
      <div className="container">
        <h2 className="section-heading">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-card" data-reveal>
            <Mail size={40} className="contact-icon" />
            <h3 className="contact-title">Email</h3>
            <a href="mailto:main@teletron.digital" className="contact-link">
              main@teletron.digital
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}