import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Plate Bending and Shell Rolling Service',
  description:
    'High-precision plate bending and shell rolling services for MS and SS plates up to 36 mm thickness and 3000 mm width capacity.',
  path: '/services/plate-bending-shell-rolling',
  keywords: ['plate bending service', 'shell rolling service', 'MS SS plate rolling', 'industrial shell fabrication'],
});

export default function PlateBendingShellRollingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-cyan-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Plate Bending and Shell Rolling</h1>
            <p className="mt-4 text-cyan-100 text-lg max-w-4xl">
              High-precision rolling services for demanding fabrication projects with reliable dimensional accuracy.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                We provide high-precision Plate Bending and Shell Rolling services designed to meet the demanding requirements of industrial fabrication projects. Using advanced rolling equipment and skilled technicians, we ensure accurate curvature, consistent quality, and reliable performance for every job.
              </p>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Our facility is capable of handling both MS and SS plates, delivering strong and precise cylindrical or conical shells suitable for tanks, pressure vessels, structural components, and various heavy engineering applications.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Our Capabilities</h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li>MS Plates: Up to 36 mm thickness</li>
                <li>SS Plates: Up to 36 mm thickness</li>
                <li>Plate Width Capacity: Up to 3000 mm</li>
              </ul>
              <p className="mt-6 text-gray-700 leading-relaxed">
                With advanced machinery and experienced operators, we ensure smooth rolling, minimal distortion, and high dimensional accuracy, meeting strict industrial fabrication standards.
              </p>
            </article>

            <aside className="self-start bg-white rounded-2xl border border-gray-200 p-3 shadow-sm">
              <div className="h-64 md:h-72 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/shell_rolling.jpg"
                  alt="Plate Bending and Shell Rolling"
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
