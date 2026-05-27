import PackagesHero from '@/components/packages/PackagesHero'
import PackagesGrid from '@/components/packages/PackagesGrid'
import PackagesCompare from '@/components/packages/PackagesCompare'
import PackagesCTA from '@/components/packages/PackagesCTA'

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