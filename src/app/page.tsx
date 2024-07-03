import Analytics from '@/components/home/Analytics'
import CustomerReview from '@/components/home/CustomerReview'
import HeroSection from '@/components/home/HeroSection'
import TrustedBy from '@/components/home/TrustedBy'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <TrustedBy />
      <Analytics />
      <CustomerReview />
    </div>
  )
}

