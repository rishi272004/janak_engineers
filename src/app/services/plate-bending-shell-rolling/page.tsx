import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceImageSlider from '@/components/ServiceImageSlider';
import { getPageMetadata, getServiceStructuredData } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Plate Bending and Shell Rolling Service',
  description:
    'High-precision plate bending and shell rolling services for MS and SS plates up to 36 mm thickness and 3000 mm width capacity.',
  path: '/services/plate-bending-shell-rolling',
  keywords: ['plate bending service', 'shell rolling service', 'MS SS plate rolling', 'industrial shell fabrication'],
});

export default function PlateBendingShellRollingPage() {
  const serviceImages = [
    'Shell-rolling/9b54c817-c883-444d-acc8-659915f736fb.JPG',
    'Shell-rolling/IMG_20240319_140938.jpg',
    'Shell-rolling/IMG_20240607_175915.jpg',
    'Shell-rolling/IMG_20240823_121106.jpg',
    'Shell-rolling/IMG_20240831_175623.jpg',
  ];
  const serviceStructuredData = getServiceStructuredData({
    name: 'Plate Bending and Shell Rolling Service',
    description:
      'High-precision plate bending and shell rolling services for MS and SS plates up to 36 mm thickness and 3000 mm width capacity.',
    path: '/services/plate-bending-shell-rolling',
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
            <h1 className="text-3xl sm:text-5xl font-bold">Plate Bending and Shell Rolling</h1>
            <p className="mt-4 text-cyan-100 text-base sm:text-lg max-w-4xl">
              High-precision rolling services for demanding fabrication projects with reliable dimensional accuracy.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-6 sm:gap-8 xl:gap-10 items-start">
            <article className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 shadow-sm">
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

            <aside className="self-start xl:sticky xl:top-24">
              <ServiceImageSlider
                images={serviceImages}
                altPrefix="Plate Bending and Shell Rolling"
              />
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
