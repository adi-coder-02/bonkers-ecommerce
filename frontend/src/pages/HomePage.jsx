import React from 'react'
import HeroSection from '../components/HeroSection'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'
import LatestCollections from '../components/LatestCollections'


function HomePage() {
  return (
    <div>
      <HeroSection />
      <LatestCollections />
      <OurPolicy />
      <Newsletter />
    </div>
  )
}

export default HomePage
