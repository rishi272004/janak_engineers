import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Hydraulic Press',
  description:
    'Heavy-duty hydraulic press machines including D-Type and C-Type variants with die punch solutions for industrial forming and pressing operations.',
  path: '/products/hydraulic-press',
  keywords: ['hydraulic press machine', 'D type hydraulic press', 'C type hydraulic press', 'die punch'],
});

export default function HydraulicPressPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-slate-900 to-cyan-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Hydraulic Press</h1>
            <p className="mt-4 text-cyan-100 text-lg max-w-4xl">
              We provide heavy-duty Hydraulic Press solutions designed for high-performance industrial applications.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Engineered for strength, precision, and durability, our presses are suitable for a wide range of operations including forming, shaping, punching, and pressing of metal components.
              </p>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Built with robust construction and advanced hydraulic systems, our machines ensure consistent pressure, smooth operation, and reliable output even under demanding workloads.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Our Machine Range</h2>
              <ul className="mt-5 space-y-4 text-gray-700">
                <li>
                  <p className="font-semibold text-gray-900">D-Type Hydraulic Press</p>
                  <p>Capacity: 100 to 2000 Ton</p>
                  <p>Ideal for large-scale and heavy-duty pressing applications</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">C-Type Hydraulic Press</p>
                  <p>Capacity: 100 to 500 Ton</p>
                  <p>Suitable for medium-duty operations with easy accessibility</p>
                </li>
              </ul>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Die Punch</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We also offer Die Punch solutions specifically designed for hydraulic press applications. Our die punches are manufactured for precision cutting, shaping, and forming, ensuring high accuracy and repeatability in production processes.
              </p>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Our hydraulic press systems and accessories are built to deliver efficiency, safety, and long-lasting performance across various industrial sectors.
              </p>
            </article>

            <aside className="self-start bg-white rounded-2xl border border-gray-200 p-3 shadow-sm">
              <div className="h-64 md:h-72 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/hydraulic_press_v2.png"
                  alt="Hydraulic Press"
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
