import type { Metadata } from 'next'
import PageTransition from '@/components/PageTransition'
import PackagesHero from '@/components/packages/PackagesHero'
import PackagesGrid from '@/components/packages/PackagesGrid'
import PackagesCompare from '@/components/packages/PackagesCompare'
import PackagesCTA from '@/components/packages/PackagesCTA'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description: 'Transparent photo booth rental pricing. Classic (₱5,500), Gold (₱9,500), or Prismo Elite (₱16,000). No hidden fees.',
  alternates: { canonical: 'https://www.prismolens.ph/packages' },
  openGraph: {
    title: 'Packages & Pricing | PrismoLens Photo Booth',
    description: 'Transparent photo booth pricing — Classic, Gold, and Prismo Elite packages.',
    url: 'https://www.prismolens.ph/packages',
  },
}

export default function PackagesPage() {
  return (
    <>
     <PackagesHero />
      <FadeIn delay={0.1}><PackagesGrid /></FadeIn>
      <FadeIn delay={0.2}><PackagesCompare /></FadeIn>
      <FadeIn delay={0.3}><PackagesCTA /></FadeIn>
    </>
  )
}