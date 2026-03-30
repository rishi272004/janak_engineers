import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

const routes = [
  '/',
  '/services',
  '/services/plate-bending-shell-rolling',
  '/services/section-bending',
  '/services/tanks-vessel-fabrication',
  '/products',
  '/products/plate-bending-machines',
  '/products/hydraulic-press',
  '/products/welding-rotators',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
