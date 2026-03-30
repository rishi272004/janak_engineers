export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen md:h-screen w-full flex items-start md:items-center justify-center overflow-hidden -mt-20 pt-24 md:pt-0 pb-10 md:pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero-background.JPG)',
          backgroundPosition: 'center',
        }}>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Janak Engineers
        </h1>
        
        <p className="text-lg sm:text-2xl text-white mb-6 leading-relaxed">
          Leading Manufacturer of Plate Bending Machines, Hydraulic Presses & Welding Rotators
        </p>

        <p className="text-base sm:text-lg text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          Trusted name in heavy engineering and industrial fabrication since 1980. Delivering precision-built solutions in MS, CS, SS, and non-ferrous metals to pharmaceutical, chemical, refinery, petrochemical, and power industries.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="px-8 py-3.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore Services
          </a>
          <a href="#contact" className="px-8 py-3.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition font-bold text-lg">
            Get in Touch
          </a>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden mt-10 bg-black/35 border border-white/40 rounded-3xl py-5 px-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">40+</h3>
              <p className="text-white/90 mt-2 text-sm">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">500+</h3>
              <p className="text-white/90 mt-2 text-sm">Machines Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
              <p className="text-white/90 mt-2 text-sm">Major Industries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section at Bottom */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-500">40+</h3>
              <p className="text-gray-300 mt-2">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-500">500+</h3>
              <p className="text-gray-300 mt-2">Machines Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-500">5+</h3>
              <p className="text-gray-300 mt-2">Major Industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
