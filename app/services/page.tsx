import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServicesCTA from '@/components/services/ServicesCTA'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <HowItWorks />
      <ServicesCTA />
    </>
  )
}