// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Block API routes
          '/_next/',         // Block Next.js internal files
          '/admin/',         // Block admin area (if exists)
          '/.well-known/',   // Block system files
          '/private/',       // Block private folders
          '*.json$',         // Block JSON files
          '/temp/',          // Block temporary files
        ],
      },
      // Allow specific bots better access
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Bingbot', 
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      }
    ],
    sitemap: 'https://travasstineni.cz/sitemap.xml',
    host: 'https://travasstineni.cz'
  }
}