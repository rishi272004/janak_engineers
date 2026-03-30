import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Janak Engineers',
    short_name: 'Janak Engineers',
    description:
      'Heavy engineering and industrial fabrication company for plate bending machines, hydraulic presses, welding rotators, tanks, and vessels.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0891b2',
    lang: 'en-IN',
    icons: [
      {
        src: '/favicon-round.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-round.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
