import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Services',
  description:
    'Explore Janak Engineers fabrication services including plate bending and shell rolling, section bending, and tanks and vessels fabrication.',
  path: '/services',
  keywords: ['industrial fabrication services', 'plate bending services', 'section bending services', 'tank fabrication India'],
});

const coreServices = [
  {
    title: 'Plate Bending & Shell Rolling',
    href: '/services/plate-bending-shell-rolling',
    image: '/shell_rolling.jpg',
    intro:
      'We provide high-precision plate bending and shell rolling services for demanding industrial fabrication projects, ensuring accurate curvature and reliable performance.',
    points: ['MS Plates: Up to 36 mm thickness', 'SS Plates: Up to 36 mm thickness', 'Plate Width Capacity: Up to 3000 mm'],
  },
  {
    title: 'Section Bending',
    href: '/services/section-bending',
    image: '/section_bending/section_bending.jpg',
    intro:
      'Professional section bending services for MS and SS flats with precise curves, circular rings, and custom profiles for structural and industrial applications.',
    points: ['MS Flats', 'SS Flats', 'Custom sizes available'],
  },
  {
    title: 'Tanks & Vessels Fabrication',
    href: '/services/tanks-vessel-fabrication',
    image: '/tanks_vessel.png',
    intro:
      'Comprehensive fabrication for industrial tanks and vessels with a focus on structural strength, precision fabrication, and dependable performance.',
    points: [
      'Buffer Vessels',
      'Oxygen Storage Tanks',
      'Nitrogen Storage Tanks',
      'Storage Tanks',
      'Pressure Vessels',
      'Industrial Chimneys',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-950 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-cyan-100 max-w-4xl leading-relaxed">
              Janak Engineers delivers fabrication services for pharmaceutical, chemical, refinery, petrochemical, and power industries with quality-driven execution and strong technical expertise.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {coreServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">{service.intro}</p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start text-gray-700">
                          <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-cyan-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 px-5 py-3 text-white font-semibold shadow-[0_10px_24px_-10px_rgba(8,145,178,0.75)] hover:from-cyan-500 hover:to-sky-500 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        Explore Service Details
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-base leading-none transition group-hover:bg-white/30">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-4 lg:p-6 bg-gradient-to-br from-cyan-50 to-white border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="rounded-xl overflow-hidden border border-gray-200 h-56 sm:h-64 lg:h-full min-h-[230px] bg-white">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={1200}
                        height={700}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-700 via-cyan-600 to-sky-700 p-8 md:p-10 text-white shadow-xl">
              <p className="text-cyan-100 text-sm uppercase tracking-[0.22em] font-semibold">Ready To Start</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold">Need a custom fabrication solution for your project?</h2>
              <p className="mt-3 text-cyan-100 max-w-3xl leading-relaxed">
                Share your requirement and our team will suggest the right process, material handling, and delivery plan for your industry.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-semibold text-cyan-700 hover:bg-cyan-50 transition"
                >
                  Get Project Consultation
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Explore Related Products
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
