import type { Metadata } from 'next'
import PageTransition from '@/components/PageTransition'
import ContactHero from '@/components/contact/ContactHero'
import ContactSection from '@/components/contact/ContactSection'

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book PrismoLens photo booth for your event. Based in Quezon City, available nationwide.',
  alternates: { canonical: 'https://www.prismolens.ph/contact' },
  openGraph: {
    title: 'Book Now | PrismoLens Photo Booth',
    description: 'Reserve your photo booth slot today. 50% downpayment to lock in your date.',
    url: 'https://www.prismolens.ph/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTransition delay={0}><ContactHero /></PageTransition>
      <PageTransition delay={150}><ContactSection /></PageTransition>
    </>
  )
}