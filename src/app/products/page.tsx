import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Products',
  description:
    'Discover Janak Engineers products including plate bending machines, hydraulic presses, and welding rotators for modern fabrication industries.',
  path: '/products',
  keywords: ['plate bending machine', 'hydraulic press machine', 'welding rotator', 'fabrication machinery India'],
});

const productGroups = [
  {
    title: 'Plate Bending Machine',
    href: '/products/plate-bending-machines',
    image: '/plate_bending.JPG',
    subtitle: 'Precision-engineered machines built for strength, efficiency, and reliable operation.',
    variants: [
      'Screw Pressured Plate Bending Machines: Capacity up to 25 mm',
      'Mechanically Pressured Plate Bending Machines: Capacity up to 50 mm',
      'Hydraulic Pressured Plate Bending Machines: Capacity up to 100 mm',
    ],
  },
  {
    title: 'Hydraulic Press',
    href: '/products/hydraulic-press',
    image: '/hydraulic_press_v2.png',
    subtitle: 'Heavy-duty presses designed for forming, shaping, punching, and pressing operations.',
    variants: [
      'D-Type Hydraulic Press: Capacity 100 to 2000 Ton',
      'C-Type Hydraulic Press: Capacity 100 to 500 Ton',
      'Die Punch solutions for precision cutting, shaping, and forming',
    ],
  },
  {
    title: 'Welding Rotators',
    href: '/products/welding-rotators',
    image: '/welding%20rotator.jpg',
    subtitle: 'High-precision rotators for smooth rotation and consistent weld quality.',
    variants: ['Capacity: 10 Ton to 100 Ton', 'Configuration: Set of 2 & Set of 3', 'Units: 1 Drive Unit & Idler Units'],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-cyan-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-cyan-100 max-w-4xl leading-relaxed">
              We manufacture precision-engineered machines designed for durability, operational safety, and reliable output in modern fabrication environments.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {productGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden h-full flex flex-col"
              >
                <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 p-6 text-white min-h-[152px]">
                  <h2 className="text-2xl font-bold leading-tight">{group.title}</h2>
                  <p className="mt-3 text-cyan-100 text-sm leading-relaxed">{group.subtitle}</p>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <ul className="space-y-3 grow">
                    {group.variants.map((variant) => (
                      <li key={variant} className="text-gray-700 text-[1.05rem] leading-relaxed border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                        {variant}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 h-44 bg-white">
                    <Image
                      src={group.image}
                      alt={group.title}
                      width={1000}
                      height={700}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-6 pt-1">
                    <Link
                      href={group.href}
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-800 to-cyan-700 px-5 py-3 text-white font-semibold shadow-[0_10px_24px_-10px_rgba(14,116,144,0.7)] hover:from-slate-700 hover:to-cyan-600 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      View Product Specifications
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-base leading-none transition group-hover:bg-white/30">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 p-8 md:p-10 text-white shadow-xl">
              <p className="text-cyan-200 text-sm uppercase tracking-[0.22em] font-semibold">Machine Selection Help</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold">Looking for the right machine capacity and configuration?</h2>
              <p className="mt-3 text-slate-200 max-w-3xl leading-relaxed">
                Discuss your material thickness, duty cycle, and production target with our experts to finalize the best-fit machine for your plant.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-400 transition"
                >
                  Request Expert Callback
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Explore Fabrication Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
