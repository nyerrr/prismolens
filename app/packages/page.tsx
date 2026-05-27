import type { Metadata } from 'next'
import PackagesHero from '@/components/packages/PackagesHero'
import PackagesGrid from '@/components/packages/PackagesGrid'
import PackagesCompare from '@/components/packages/PackagesCompare'
import PackagesCTA from '@/components/packages/PackagesCTA'

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description: 'Transparent photo booth rental pricing with no hidden fees. Choose from Classic (₱5,500), Gold (₱9,500), or Prismo Elite (₱16,000). Available across the Philippines.',
  alternates: {
    canonical: 'https://www.prismolens.ph/packages',
  },
  openGraph: {
    title: 'Packages & Pricing | PrismoLens Photo Booth',
    description: 'Transparent photo booth pricing — Classic, Gold, and Prismo Elite packages. No hidden fees.',
    url: 'https://www.prismolens.ph/packages',
  },
}

export default function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <PackagesGrid />
      <PackagesCompare />
      <PackagesCTA />
    </>
  )
}