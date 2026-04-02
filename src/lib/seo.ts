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

type ServiceStructuredDataInput = {
  name: string;
  description: string;
  path: string;
  imagePaths?: string[];
};

export function getCanonicalUrl(path: string): string {
  const baseUrl = siteConfig.siteUrl.endsWith('/')
    ? siteConfig.siteUrl
    : `${siteConfig.siteUrl}/`;
  return new URL(path.replace(/^\//, ''), baseUrl).toString();
}

export function getServiceStructuredData({
  name,
  description,
  path,
  imagePaths = [],
}: ServiceStructuredDataInput): Record<string, unknown> {
  const pageUrl = getCanonicalUrl(path);
  const homeUrl = getCanonicalUrl('/');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name,
        description,
        url: pageUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: siteConfig.name,
          url: homeUrl,
        },
      },
      {
        '@type': 'Service',
        name,
        serviceType: name,
        description,
        url: pageUrl,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: homeUrl,
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        image: imagePaths.map((imagePath) => getCanonicalUrl(imagePath)),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: getCanonicalUrl('/services'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
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
