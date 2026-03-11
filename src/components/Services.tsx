import { Zap, Wrench, Hammer, Shield } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Plate Bending & Shell Rolling',
    description: 'High-quality plate bending & shell rolling with MS & SS plates up to 36mm thickness and 3000mm width capacity.',
    specs: ['MS Plates - 36mm thickness', 'SS Plates - 36mm thickness', '3000mm width capacity']
  },
  {
    icon: Wrench,
    title: 'Section Bending',
    description: 'Professional section bending services for MS and SS flats of various sizes tailored to your specifications.',
    specs: ['MS Flats', 'SS Flats', 'Custom sizes available']
  },
  {
    icon: Shield,
    title: 'Tanks & Vessel Fabrication',
    description: 'Comprehensive fabrication for Buffer Vessels, Storage Tanks, Jacketed Vessels, Pressure Vessels, and Industrial Chimneys.',
    specs: ['Buffer Vessels', 'Storage Tanks', 'Pressure Vessels', 'Ladle Furnaces']
  },
  {
    icon: Hammer,
    title: 'Furnace Repair & Maintenance',
    description: 'Expert repair, maintenance, and support services for melting furnaces, ladle furnaces, and industrial equipment.',
    specs: ['Melting Furnaces', 'Ladle Furnaces', 'Furnace Maintenance', 'Equipment Support']
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Complete industrial fabrication and equipment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl hover:shadow-lg transition transform hover:scale-105 border border-gray-200"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                {service.specs && (
                  <ul className="text-xs text-gray-500 space-y-1">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
