// src/components/Footer.js
'use client'

import { useState } from 'react'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-address">
            5 South Charlotte Street, Edinburgh, Scotland, EH2 4AN

          </p>
          <button
            className="footer-link"
            onClick={() => setIsOpen(true)}
          >
            Privacy Policy
          </button>
        </div>
        <p className="footer-copy">© 2025 Teletron Systems LP. All rights reserved.</p>
      </footer>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h2>Privacy Policy</h2>
            <p><em>Last revised: June 17, 2025</em></p>

            <h3>1. Purpose</h3>
            <p>
              This Privacy Policy explains how Teletron Media Ltd. (“Teletron”, “we”, “our” or “us”) collects, uses,
              shares, and protects your personal data when you visit https://teletron.com (the “Website”). By using
              the Website, you agree to the terms below.
            </p>

            <h3>2. What We Collect</h3>
            <ul>
              <li>
                <strong>Data You Provide:</strong> Name, email, phone number, company name, and any message when you
                contact us.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type/version, pages viewed, timestamps, device IDs.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> Cookies, local storage, pixel tags to remember preferences and
                analyze traffic.
              </li>
            </ul>

            <h3>3. How We Use Your Data</h3>
            <ul>
              <li>Respond to your inquiries and provide support.</li>
              <li>Operate, secure, and improve our Website through analytics.</li>
              <li>Send you marketing communications (only if you opt in).</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>

            <h3>4. Sharing Your Data</h3>
            <ul>
              <li>
                <strong>Service Providers:</strong> Hosting, analytics, email platforms under confidentiality agreements.
              </li>
              <li>
                <strong>Business Transfers:</strong> In merger or acquisition events (you will be notified).
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or valid government request.
              </li>
            </ul>

            <h3>5. Cookies & Similar Technologies</h3>
            <p>
              We use essential, performance, preference, and marketing cookies to make the site work and improve your
              experience. You can disable cookies in browser settings, but some features may not function.
            </p>

            <h3>6. Children’s Privacy</h3>
            <p>
              Our Website is not for anyone under 18. We do not knowingly collect data from minors. If you believe
              we have, please contact us and we will delete it.
            </p>

            <h3>7. Data Retention</h3>
            <p>
              We keep your personal data only as long as necessary for the purposes described—responding to you,
              legal compliance, or analytics. Usage Data is retained for a shorter period unless needed for security.
            </p>

            <h3>8. International Transfers</h3>
            <p>
              Your data may be processed in the UK, EU, or other countries. When data leaves the EEA, we rely on
              approved safeguards (e.g. Standard Contractual Clauses).
            </p>

            <h3>9. Security</h3>
            <p>
              We implement industry-standard technical and organizational measures to protect your data, but no
              system is completely secure.
            </p>

            <h3>10. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy at any time. The “Last revised” date will change at the top. Continued
              use after changes means you accept them.
            </p>

            <h3>11. Your Rights</h3>
            <p>
              <strong>EU/UK:</strong> Access, correct, erase, restrict, object, data portability, withdraw consent.<br/>
              <strong>California/Virginia:</strong> Disclosure, deletion, opt-out of sale or sharing, non-discrimination.
            </p>

            <h3>12. Contact Us</h3>
            <p>
              Email: <a href="mailto:main@teletron.digital">main@teletron.digital</a><br/>
              Address: 5 South Charlotte Street, Edinburgh, Scotland, EH2 4AN

            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .footer {
          background: var(--bg-dark-alt);
          color: var(--text-light);
          text-align: center;
          padding: var(--space-lg) var(--space-sm);
        }
        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-xs);
        }
        .footer-address {
          font-size: 0.95rem;
        }
        .footer-link {
          background: none;
          border: none;
          color: var(--color-primary);
          text-decoration: underline;
          cursor: pointer;
          font-size: 0.95rem;
          padding: 0;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--color-secondary);
        }
        .footer-copy {
          margin-top: var(--space-sm);
          font-size: 0.8rem;
        }

        /* Modal overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 300;
        }
        .modal {
          background: #fff;
          border-radius: var(--radius-md);
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          padding: var(--space-lg);
          position: relative;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .modal h2 {
          margin-top: 0;
          font-family: var(--font-heading);
        }
        .modal-close {
          position: absolute;
          top: var(--space-sm);
          right: var(--space-sm);
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #333;
        }
        .modal h3 {
          margin-top: var(--space-md);
          font-family: var(--font-heading);
        }
        .modal p, .modal ul {
          line-height: 1.6;
          margin-bottom: var(--space-md);
          color: #444;
        }
        .modal ul {
          padding-left: var(--space-md);
        }
        .modal a {
          color: var(--color-primary);
          text-decoration: underline;
        }
        .modal a:hover {
          color: var(--color-secondary);
        }
      `}</style>
    </>
  )
}
