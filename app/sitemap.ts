// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://travasstineni.cz'
  const lastModified = new Date('2025-08-12')
  
  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Main sections (current single-page app)
    {
      url: `${baseUrl}/#sluzby`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#kontakt`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#recenze`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#omne`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    
    // Service category pages (if you add them later)
    {
      url: `${baseUrl}/stinici-technika`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/garazova-vrata`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stinici-technika/venkovni-stineni/markyzy`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: `${baseUrl}/site-proti-hmyzu`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Detailed service pages (nested)
    {
      url: `${baseUrl}/stinici-technika/venkovni-stineni`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/stinici-technika/interierove-stineni`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
