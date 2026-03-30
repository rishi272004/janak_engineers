import type { Metadata } from 'next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Infrastructure from "@/components/Infrastructure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPageMetadata, siteConfig } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Janak Engineers',
  description:
    'Janak Engineers delivers plate bending machines, hydraulic presses, welding rotators, and precision fabrication solutions for pharmaceutical, chemical, refinery, petrochemical, and power industries.',
  path: '/',
  keywords: [
    'Janak Engineers',
    'heavy engineering India',
    'industrial fabrication Vadodara',
    'plate bending machine manufacturer',
    'hydraulic press manufacturer',
    'welding rotator manufacturer',
  ],
});

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  email: 'mailto:janakeng@hotmail.com',
  telephone: '+91-9978849525',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '921/A1, GIDC Estate, Makarpura',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    postalCode: '390010',
    addressCountry: 'IN',
  },
};

export default function Home() {
  return (
    <div className="bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header isHomePage />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
