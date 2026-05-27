import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://prismolens-faah.vercel.app'),
  title: {
    default: 'PrismoLens Photo Booth Services Philippines',
    template: '%s | PrismoLens Photo Booth',
  },
  description: 'Premium photo booth rental services for weddings, debuts, corporate events, and parties across the Philippines. Based in Quezon City, available nationwide.',
  keywords: [
    'photo booth Philippines',
    'photo booth rental',
    'photo booth Quezon City',
    'photo booth wedding Philippines',
    'photo booth debut',
    'photo booth corporate event',
    'photo booth Metro Manila',
    'PrismoLens',
  ],
  authors: [{ name: 'PrismoLens Photo Booth Services' }],
  creator: 'PrismoLens',
  openGraph: {
  type: 'website',
  locale: 'en_PH',
  url: 'https://prismolens-faah.vercel.app',
  siteName: 'PrismoLens Photo Booth Services',
  title: 'PrismoLens Photo Booth Services Philippines',
  description: 'Premium photo booth rental services for weddings, debuts, corporate events, and parties across the Philippines.',
},
twitter: {
  card: 'summary_large_image',
  title: 'PrismoLens Photo Booth Services Philippines',
  description: 'Premium photo booth rental services across the Philippines.',
},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}