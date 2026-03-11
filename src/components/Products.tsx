import { Zap, Gauge, Cog } from 'lucide-react';

const productCategories = [
  {
    icon: Zap,
    title: 'Plate Bending Machines',
    description: 'Premium plate bending solutions for industrial fabrication',
    variants: [
      {
        name: 'Screw Pressured',
        specs: 'Up to 25mm capacity'
      },
      {
        name: 'Mechanically Pressured',
        specs: 'Up to 50mm capacity'
      },
      {
        name: 'Hydraulic Pressured',
        specs: 'Up to 100mm capacity'
      }
    ]
  },
  {
    icon: Gauge,
    title: 'Hydraulic Press',
    description: 'Heavy-duty hydraulic pressing solutions',
    variants: [
      {
        name: 'D-Type',
        specs: '100 to 2000 ton capacity'
      },
      {
        name: 'C-Type',
        specs: '100 to 500 ton capacity'
      },
      {
        name: 'Die Punch',
        specs: 'For hydraulic press applications'
      }
    ]
  },
  {
    icon: Cog,
    title: 'Welding Rotators',
    description: 'Precision welding rotation equipment',
    variants: [
      {
        name: 'Capacity Range',
        specs: '10 Ton to 100 Ton'
      },
      {
        name: 'Configuration',
        specs: 'Set of 2 & set of 3'
      },
      {
        name: 'Units',
        specs: '1 drive unit & Idler units'
      }
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600">
            Industry-leading machines and equipment manufactured with precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-200"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-cyan-100 mt-2">{category.description}</p>
                </div>

                {/* Variants */}
                <div className="p-6">
                  <div className="space-y-4">
                    {category.variants.map((variant, i) => (
                      <div key={i} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <p className="font-bold text-gray-900">{variant.name}</p>
                        <p className="text-sm text-cyan-600 font-medium">{variant.specs}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-cyan-200">
          <p className="text-center text-xl text-gray-700">
            <span className="font-bold">Janak Engineers</span> is a <span className="font-bold">prominent Manufacturer and Supplier</span> of Plate Bending Machines, Hydraulic Press Machines, and Welding Rotators which are <span className="text-cyan-600">basic requirements in any fabrication industry</span> in the world.
          </p>
        </div>
      </div>
    </section>
  );
}
