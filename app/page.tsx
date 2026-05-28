import type { Metadata } from 'next'
import Hero from '@/components/home/hero'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  description:
    'Premium photo booth experiences for weddings, debuts, corporate events, and parties across the Philippines. Based in Quezon City, available nationwide.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn><Features /></FadeIn>
      <FadeIn delay={0.1}><Testimonials /></FadeIn>
      <FadeIn delay={0.2}><HomeCTA /></FadeIn>
    </>
  )
}