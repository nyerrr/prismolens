import type { Metadata } from 'next'
import PageTransition from '@/components/PageTransition'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServicesCTA from '@/components/services/ServicesCTA'

export const metadata: Metadata = {
  title: 'Photo Booth Services',
  description: 'From weddings and debuts to corporate events and graduations — PrismoLens offers premium photo booth setups for every occasion across the Philippines.',
  alternates: { canonical: 'https://www.prismolens.ph/services' },
  openGraph: {
    title: 'Photo Booth Services | PrismoLens',
    description: 'Premium photo booth setups for weddings, debuts, corporate events, and more.',
    url: 'https://www.prismolens.ph/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageTransition delay={0}><ServicesHero /></PageTransition>
      <PageTransition delay={150}><ServicesGrid /></PageTransition>
      <PageTransition delay={300}><HowItWorks /></PageTransition>
      <PageTransition delay={450}><ServicesCTA /></PageTransition>
    </>
  )
}