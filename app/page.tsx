import type { Metadata } from 'next'
import Hero from '@/components/home/hero'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  description:
    'Premium photo booth experiences for weddings, debuts, corporate events, and parties across the Philippines. Based in Quezon City, available nationwide.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <HomeCTA />
    </>
  )
}