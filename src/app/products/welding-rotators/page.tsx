import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Welding Rotators',
  description:
    'High-precision welding rotators with 10 to 100 ton capacity range, set of 2 and set of 3 configurations, and drive-idler unit options.',
  path: '/products/welding-rotators',
  keywords: ['welding rotator', 'welding rotator manufacturer', 'fabrication welding equipment'],
});

export default function WeldingRotatorsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-slate-900 to-cyan-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Welding Rotators</h1>
            <p className="mt-4 text-cyan-100 text-lg max-w-4xl">
              We specialize in the manufacturing of high-precision Welding Rotators designed to simplify and enhance fabrication component work.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Our rotators are engineered for smooth rotation, consistent weld quality, and reliable performance, making them ideal for heavy industrial fabrication.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Features and Capabilities</h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li>Capacity Range: 10 Ton to 100 Ton</li>
                <li>Configuration: Set of 2 and Set of 3</li>
                <li>Units: 1 Drive Unit and Idler Units</li>
              </ul>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Our welding rotators are built to handle large tanks, pressure vessels, and other fabrication components with ease, reducing manual handling and improving welding efficiency. With robust construction and precise control, our rotators ensure uniform welds, increased productivity, and enhanced operator safety.
              </p>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Whether for small-scale fabrication or heavy-duty industrial projects, our welding rotators provide a dependable solution for all your fabrication component work.
              </p>
            </article>

            <aside className="self-start bg-white rounded-2xl border border-gray-200 p-3 shadow-sm">
              <div className="h-64 md:h-72 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/welding%20rotator.jpg"
                  alt="Welding Rotators"
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
