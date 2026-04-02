import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceImageSlider from '@/components/ServiceImageSlider';
import { getPageMetadata, getServiceStructuredData } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Tanks and Vessels Fabrication Service',
  description:
    'Comprehensive tanks and vessels fabrication services including buffer vessels, storage tanks, and pressure vessels for industrial applications.',
  path: '/services/tanks-vessel-fabrication',
  keywords: ['tank fabrication', 'pressure vessel fabrication', 'industrial vessel manufacturer', 'storage tank fabrication'],
});

export default function TanksVesselFabricationPage() {
  const serviceImages = [
    'Tanks & vessels/24f254cb-db4b-4c30-9d2f-7aa8aa43a9f3.JPG',
    'Tanks & vessels/IMG_20210602_092645 - Copy.jpg',
    'Tanks & vessels/IMG_20221028_085458 - Copy.jpg',
    'Tanks & vessels/IMG_20221110_095628 - Copy.jpg',
    'Tanks & vessels/IMG_20230628_093021 - Copy.jpg',
    'Tanks & vessels/IMG_20230628_093102 - Copy.jpg',
    'Tanks & vessels/IMG_20241126_123812.jpg',
    'Tanks & vessels/Photo0274.jpg',
    'Tanks & vessels/Photo0276.jpg',
    'Tanks & vessels/Photo0342.jpg',
    'Tanks & vessels/Photo0344.jpg',
    'Tanks & vessels/WhatsApp Image 2024-03-02 at 12.17.21 PM(1).jpeg',
    'Tanks & vessels/WhatsApp Image 2024-03-02 at 12.17.26 PM(2).jpeg',
  ];
  const serviceStructuredData = getServiceStructuredData({
    name: 'Tanks and Vessels Fabrication Service',
    description:
      'Comprehensive tanks and vessels fabrication services including buffer vessels, storage tanks, and pressure vessels for industrial applications.',
    path: '/services/tanks-vessel-fabrication',
    imagePaths: serviceImages,
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
        />

        <section className="bg-gradient-to-r from-cyan-800 to-slate-900 text-white py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold">Tanks and Vessels Fabrication</h1>
            <p className="mt-4 text-cyan-100 text-base sm:text-lg max-w-4xl">
              End-to-end fabrication of tanks and vessels with strong quality and safety focus.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-6 sm:gap-8 xl:gap-10 items-start">
            <article className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                We provide comprehensive Tanks and Vessels Fabrication services for a wide range of industrial applications. With advanced fabrication capabilities and skilled workmanship, we manufacture high-quality vessels and tanks that meet strict industry standards and project specifications.
              </p>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Our team ensures precision fabrication, structural strength, and reliable performance, making our equipment suitable for demanding industrial environments.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Our Fabrication Capabilities</h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li>Buffer Vessels</li>
                <li>Storage Tanks</li>
                <li>Pressure Vessels</li>
              </ul>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Each project is executed with a strong focus on quality, safety, and durability, ensuring dependable solutions for various industrial processes.
              </p>
            </article>

            <aside className="self-start xl:sticky xl:top-24">
              <ServiceImageSlider
                images={serviceImages}
                altPrefix="Tanks and Vessels Fabrication"
              />
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
