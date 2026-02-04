import { MetadataRoute } from 'next';

// ⬇️ ADD THIS LINE to force static generation
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.indiaelevate.co.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}