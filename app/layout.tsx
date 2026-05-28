import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

const BASE_URL = 'https://prismolens.vercel.app'


export const metadata: Metadata = {

  icons: {
    icon: '/favicon-32x32.png',
  },

  metadataBase: new URL(BASE_URL),
  title: {
    default: 'PrismoLens Photo Booth Services Philippines',
    template: '%s | PrismoLens',
  },
  description:
    'Premium photo booth rental services for weddings, debuts, corporate events, and parties across the Philippines. Based in Quezon City, available nationwide.',
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
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: BASE_URL,
    siteName: 'PrismoLens Photo Booth Services',
    title: 'PrismoLens Photo Booth Services Philippines',
    description:
      'Premium photo booth rental services for weddings, debuts, corporate events, and parties across the Philippines.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrismoLens Photo Booth Services Philippines',
    description:
      'Premium photo booth rental services across the Philippines.',
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