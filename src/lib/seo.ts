import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Janak Engineers',
  description:
    'Janak Engineers is a trusted heavy engineering and industrial fabrication company manufacturing plate bending machines, hydraulic presses, welding rotators, tanks, and pressure vessels.',
  defaultTitle: 'Janak Engineers | Heavy Engineering and Industrial Fabrication',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'en_IN',
  defaultOgImage: '/hero-background.jpg',
};

export function getCanonicalUrl(path: string): string {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const imageUrl = getCanonicalUrl(siteConfig.defaultOgImage);

  return {
    title,
    description,
    keywords,
    category: 'industrial engineering',
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
