import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Janak Engineers
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Established in <span className="font-bold">1980</span>, Janak Engineers is a trusted name in heavy engineering and industrial fabrication with <span className="font-bold">over 40 years of experience</span>.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We specialize in manufacturing plate bending machines, hydraulic presses, and welding rotators, along with complete fabrication of storage tanks, pressure vessels, and heat exchangers.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Serving pharmaceutical, chemical, refinery, petrochemical, and power industries across India, we deliver precision-built solutions in MS, CS, SS, and selected non-ferrous metals, backed by strong technical expertise and reliable performance.
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 text-lg">
                <span className="text-cyan-600 font-bold mr-3">✓</span>
                <span>40+ years of proven expertise and excellence</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <span className="text-cyan-600 font-bold mr-3">✓</span>
                <span>Serving 5+ major industries across India</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <span className="text-cyan-600 font-bold mr-3">✓</span>
                <span>Precision-built solutions in multiple materials</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <span className="text-cyan-600 font-bold mr-3">✓</span>
                <span>Quality, efficiency, and reliability guaranteed</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl font-bold text-cyan-600 mt-8 italic">
              Engineering excellence driven by quality, efficiency, and reliability.
            </p>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 overflow-hidden border border-blue-200 shadow-lg">
                <Image
                  src="/about.jpg"
                  alt="About Janak Engineers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
