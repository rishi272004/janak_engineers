import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Plate Bending Machine',
  description:
    'High-performance plate bending machines including screw pressured, mechanically pressured, and hydraulic pressured variants up to 100 mm capacity.',
  path: '/products/plate-bending-machines',
  keywords: ['plate bending machine', 'hydraulic plate bending machine', 'industrial bending machine'],
});

export default function PlateBendingMachinesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-slate-900 to-cyan-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Plate Bending Machine</h1>
            <p className="mt-4 text-cyan-100 text-lg max-w-4xl">
              We offer a range of high-performance Plate Bending Machines designed to deliver precision, strength, and efficiency for industrial fabrication needs.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Built with advanced technology and robust construction, our machines ensure smooth operation and accurate bending for various plate thicknesses. Whether for light, medium, or heavy-duty applications, our solutions are tailored to provide reliable performance and consistent results across different industries.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Our Machine Range</h2>
              <ul className="mt-5 space-y-4 text-gray-700">
                <li>
                  <p className="font-semibold text-gray-900">1. Screw Pressured Plate Bending Machines</p>
                  <p>Capacity: Up to 25 mm</p>
                  <p>Ideal for light to medium fabrication work with precise control</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">2. Mechanically Pressured Plate Bending Machines</p>
                  <p>Capacity: Up to 50 mm</p>
                  <p>Suitable for heavy-duty applications with high efficiency</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">3. Hydraulic Pressured Plate Bending Machines</p>
                  <p>Capacity: Up to 100 mm</p>
                  <p>Designed for large-scale and high-thickness plate bending with maximum power</p>
                </li>
              </ul>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Our plate bending machines are engineered for durability, accuracy, and ease of operation, making them a dependable choice for modern fabrication requirements.
              </p>
            </article>

            <aside className="self-start bg-white rounded-2xl border border-gray-200 p-3 shadow-sm">
              <div className="h-64 md:h-72 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/plate_bending.JPG"
                  alt="Plate Bending Machine"
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
