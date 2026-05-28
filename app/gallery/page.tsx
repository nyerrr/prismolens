import type { Metadata } from 'next'
import PageTransition from '@/components/PageTransition'
import GalleryHero from '@/components/gallery/GalleryHero'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import GalleryCTA from '@/components/gallery/GalleryCTA'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse PrismoLens photo booth moments from weddings, debuts, corporate events, and parties all over the Philippines.',
  alternates: { canonical: 'https://www.prismolens.ph/gallery' },
  openGraph: {
    title: 'Gallery | PrismoLens Photo Booth',
    description: 'See our photo booth setups from events across the Philippines.',
    url: 'https://www.prismolens.ph/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <FadeIn delay={0.1}><GalleryGrid /></FadeIn>
      <FadeIn delay={0.2}><GalleryCTA /></FadeIn>
    </>
  )
}