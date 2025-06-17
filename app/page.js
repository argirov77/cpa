// src/app/page.js

import Hero from '../components/Hero'
import Features from '../components/Features'
import TrafficSources from '../components/TrafficSources'
import PricingMethods from '../components/PricingMethods'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <TrafficSources />
      <PricingMethods />
      <AboutUs />
      <Contact />
    </>
  )
}
