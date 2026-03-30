import Link from 'next/link';

const productCategories = [
  {
    title: 'Plate Bending Machine',
    href: '/products/plate-bending-machines',
    description: 'High-performance plate bending machines designed for precision, strength, and efficiency.',
    variants: [
      {
        name: 'Screw Pressured Plate Bending Machines',
        specs: 'Capacity: Up to 25 mm | Ideal for light to medium fabrication work'
      },
      {
        name: 'Mechanically Pressured Plate Bending Machines',
        specs: 'Capacity: Up to 50 mm | Suitable for heavy-duty applications'
      },
      {
        name: 'Hydraulic Pressured Plate Bending Machines',
        specs: 'Capacity: Up to 100 mm | Designed for large-scale high-thickness bending'
      }
    ]
  },
  {
    title: 'Hydraulic Press',
    href: '/products/hydraulic-press',
    description: 'Heavy-duty hydraulic press solutions for high-performance industrial applications.',
    variants: [
      {
        name: 'D-Type Hydraulic Press',
        specs: 'Capacity: 100 to 2000 Ton | Ideal for large-scale heavy-duty pressing'
      },
      {
        name: 'C-Type Hydraulic Press',
        specs: 'Capacity: 100 to 500 Ton | Suitable for medium-duty operations'
      },
      {
        name: 'Die Punch',
        specs: 'Precision cutting, shaping, and forming for hydraulic press applications'
      }
    ]
  },
  {
    title: 'Welding Rotators',
    href: '/products/welding-rotators',
    description: 'High-precision welding rotators for smooth rotation and consistent weld quality.',
    variants: [
      {
        name: 'Capacity Range',
        specs: '10 Ton to 100 Ton'
      },
      {
        name: 'Configuration',
        specs: 'Set of 2 & Set of 3'
      },
      {
        name: 'Units',
        specs: '1 Drive Unit & Idler Units'
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
          {productCategories.map((category) => {
            return (
              <Link
                key={category.title}
                href={category.href}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-200"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6">
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
              </Link>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-cyan-200">
          <p className="text-center text-xl text-gray-700">
            <span className="font-bold">Janak Engineers</span> is a <span className="font-bold">prominent Manufacturer and Supplier</span> of Plate Bending Machines, Hydraulic Press Machines, and Welding Rotators which are <span className="text-cyan-600">basic requirements in any fabrication industry</span> in the world.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
            >
              View Detailed Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
