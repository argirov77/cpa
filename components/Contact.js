'use client'

import { Mail, Phone, Calendar } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt section--contact">
      <div className="container">
        <h2 className="section-heading">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-card" data-reveal>
            <Mail size={40} className="contact-icon" />
            <h3 className="contact-title">Email</h3>
            <a href="mailto:info@teletron.com" className="contact-link">
              info@teletron.com
            </a>
          </div>
          <div className="contact-card" data-reveal>
            <Phone size={40} className="contact-icon" />
            <h3 className="contact-title">Phone</h3>
            <a href="tel:+441234567890" className="contact-link">
              +44 1234 567890
            </a>
          </div>
          <div className="contact-card" data-reveal>
            <Calendar size={40} className="contact-icon" />
            <h3 className="contact-title">Schedule a Call</h3>
            <a href="#home" className="contact-link">
              Book your free consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
