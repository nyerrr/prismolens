import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/chat'],
    },
    sitemap: 'https://www.prismolens.ph/sitemap.xml',
  }
}