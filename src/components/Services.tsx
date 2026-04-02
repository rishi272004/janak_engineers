import Link from 'next/link';
import Image from 'next/image';
import { Zap, Wrench, Shield } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Plate Bending & Shell Rolling',
    image: '/shell_rolling.jpg',
    href: '/services/plate-bending-shell-rolling',
    description: 'High-quality plate bending & shell rolling with MS & SS plates up to 36mm thickness and 3000mm width capacity.',
    specs: ['MS Plates - 36mm thickness', 'SS Plates - 36mm thickness', '3000mm width capacity']
  },
  {
    icon: Wrench,
    title: 'Section Bending',
    image: '/section_bending/1198.jpg',
    href: '/services/section-bending',
    description: 'Professional section bending services for MS and SS flats of various sizes tailored to your specifications.',
    specs: ['MS Flats', 'SS Flats', 'Custom sizes available']
  },
  {
    icon: Shield,
    title: 'Tanks & Vessel Fabrication',
    image: '/tanks_vessel.png',
    href: '/services/tanks-vessel-fabrication',
    description: 'Comprehensive fabrication services for buffer vessels, storage tanks, pressure vessels, oxygen/nitrogen tanks, and industrial chimneys.',
    specs: ['Buffer Vessels', 'Storage Tanks', 'Pressure Vessels', 'Oxygen & Nitrogen Tanks']
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 via-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Complete industrial fabrication and equipment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="block bg-white rounded-xl shadow-[0_16px_35px_-20px_rgba(15,23,42,0.45)] hover:shadow-[0_24px_45px_-22px_rgba(8,47,73,0.45)] transition transform hover:scale-[1.02] border border-cyan-100 overflow-hidden"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 w-11 h-11 bg-cyan-600/95 rounded-lg flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  {service.specs && (
                    <ul className="text-xs text-gray-500 space-y-1">
                      {service.specs.map((spec, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
          >
            View Detailed Services
          </Link>
        </div>
      </div>
    </section>
  );
}
