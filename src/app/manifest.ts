import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tailwind Growth',
    short_name: 'Tailwind Growth',
    description: 'A people-first, AI-native B2B growth partner for ambitious founders.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a14',
    theme_color: '#4C20FF',
    icons: [
      {
        src: '/assets/logos/logo-feature-fullcolour.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
