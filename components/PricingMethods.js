'use client'

export default function PricingMethods() {
  const plans = [
    {
      name: 'Starter',
      price: '$49/mo',
      features: [
        'Up to 10 campaigns',
        'Basic reporting',
        'Email support'
      ],
      highlight: false
    },
    {
      name: 'Growth',
      price: '$149/mo',
      features: [
        'Up to 50 campaigns',
        'Advanced analytics',
        'Priority support'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited campaigns',
        'Dedicated manager',
        '24/7 support'
      ],
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="section section--dark">
      <div className="container">
        <h2 className="section-heading">Pricing Plans</h2>
        <div className="grid-4 pricing-grid">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}
            >
              <h3 className="pricing-title">{plan.name}</h3>
              <p className="pricing-price">{plan.price}</p>
              <ul className="pricing-features">
                {plan.features.map(f => (
                  <li key={f} className="pricing-feature">{f}</li>
                ))}
              </ul>
              <button className="cta pricing-cta">
                {plan.highlight ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
