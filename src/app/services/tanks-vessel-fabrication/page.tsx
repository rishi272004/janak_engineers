import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Tanks and Vessels Fabrication Service',
  description:
    'Comprehensive tanks and vessels fabrication services including buffer vessels, storage tanks, and pressure vessels for industrial applications.',
  path: '/services/tanks-vessel-fabrication',
  keywords: ['tank fabrication', 'pressure vessel fabrication', 'industrial vessel manufacturer', 'storage tank fabrication'],
});

export default function TanksVesselFabricationPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-cyan-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Tanks and Vessels Fabrication</h1>
            <p className="mt-4 text-cyan-100 text-lg max-w-4xl">
              End-to-end fabrication of tanks and vessels with strong quality and safety focus.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
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

            <aside className="self-start bg-white rounded-2xl border border-gray-200 p-3 shadow-sm">
              <div className="h-64 md:h-72 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/tanks_vessel.png"
                  alt="Tanks and Vessels Fabrication"
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
