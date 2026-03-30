import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Section Bending Service',
  description:
    'Professional section bending services for MS and SS flats with precise custom profiles for structural and industrial applications.',
  path: '/services/section-bending',
  keywords: ['section bending service', 'MS flat bending', 'SS flat bending', 'custom profile bending'],
});

export default function SectionBendingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-cyan-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Section Bending</h1>
            <p className="mt-4 text-cyan-100 text-lg max-w-4xl">
              Precision section bending for MS and SS flats with custom profiles for industrial and structural use.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                We offer professional section bending services for MS and SS flats, delivering precise curves and consistent quality for a wide range of fabrication and structural applications. Using advanced bending equipment and experienced operators, we ensure accurate shaping while maintaining the strength and integrity of the material.
              </p>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Our services are tailored to meet your exact project specifications, whether you require simple bends, circular rings, or custom profiles for industrial use.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Our Capabilities</h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li>MS Flats</li>
                <li>SS Flats</li>
                <li>Custom Sizes Available</li>
              </ul>
              <p className="mt-6 text-gray-700 leading-relaxed">
                We focus on precision, durability, and high-quality workmanship, making our section bending services suitable for various industrial and structural applications.
              </p>
            </article>

            <aside className="self-start bg-white rounded-2xl border border-gray-200 p-3 shadow-sm">
              <div className="h-64 md:h-72 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/section_bending.jpg"
                  alt="Section Bending"
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
