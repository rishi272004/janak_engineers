import { Building2, Zap, Forklift, Shield } from 'lucide-react';

const infrastructureFeatures = [
  {
    icon: Building2,
    title: '30,000 Sq. Ft.',
    description: 'Fabrication plot with full covered shed',
    details: 'Generously dimensioned for large-scale fabrication'
  },
  {
    icon: Forklift,
    title: 'Material Handling',
    description: '10-ton & 5-ton electric gantry cranes',
    details: 'Zip cranes and hook chucks for efficient lifting'
  },
  {
    icon: Shield,
    title: 'Safety & Efficiency',
    description: 'Well-planned facility layout',
    details: 'Enhanced safety with consistent productivity'
  },
  {
    icon: Zap,
    title: 'Heavy Equipment',
    description: 'Hydra and mobile cranes as required',
    details: 'Flexibility for oversized components'
  }
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Infrastructure
          </h2>
          <p className="text-xl text-gray-600">
            State-of-the-art facility equipped for precision fabrication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {infrastructureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200"
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2">{feature.description}</p>
                <p className="text-sm text-gray-600">{feature.details}</p>
              </div>
            );
          })}
        </div>

        {/* Main Infrastructure Overview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Left side */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Modern Manufacturing Facility
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our infrastructure is spread across a <span className="font-bold">30,000 sq. ft. plot</span> with full covered fabrication shed. Each shed is designed with generous dimensions to accommodate large-scale fabrication and seamless material movement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                  <span className="text-gray-700">High-capacity material handling systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                  <span className="text-gray-700">Electric gantry cranes (10-ton and 5-ton)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                  <span className="text-gray-700">Zip cranes and hook chucks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                  <span className="text-gray-700">Hydra and mobile crane support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                  <span className="text-gray-700">Safe and efficient lifting operations</span>
                </li>
              </ul>
            </div>

            {/* Right side - Visualization */}
            <div className="flex justify-center items-center w-full py-12">
              <img
                src="/infra.jpg"
                alt="Infrastructure Facility"
                className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ maxWidth: '500px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
