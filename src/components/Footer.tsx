import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 py-14 border-t-4 border-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3">
              <img src="/Janak_logo.png" alt="Janak Engineers Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
              We are a prominent Manufacturer and Supplier of Plate Bending Machines, Hydraulic Press Machines and Welding Rotators which are a basic requirement in any fabrication industry in the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-gray-900 mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/#hero" className="hover:text-cyan-600 transition text-gray-600 text-sm">Home</Link></li>
              <li><Link href="/#about" className="hover:text-cyan-600 transition text-gray-600 text-sm">About Us</Link></li>
              <li><Link href="/services" className="hover:text-cyan-600 transition text-gray-600 text-sm">Services</Link></li>
              <li><Link href="/products" className="hover:text-cyan-600 transition text-gray-600 text-sm">Products</Link></li>
              <li><Link href="/#infrastructure" className="hover:text-cyan-600 transition text-gray-600 text-sm">Infrastructure</Link></li>
              <li><Link href="/#contact" className="hover:text-cyan-600 transition text-gray-600 text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-gray-900 mb-5 tracking-wide">Our Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/services/plate-bending-shell-rolling" className="hover:text-cyan-600 transition text-gray-600 text-sm">Plate Bending & Shell Rolling</Link></li>
              <li><Link href="/services/section-bending" className="hover:text-cyan-600 transition text-gray-600 text-sm">Section Bending</Link></li>
              <li><Link href="/services/tanks-vessel-fabrication" className="hover:text-cyan-600 transition text-gray-600 text-sm">Tanks & Vessels Fabrication</Link></li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-gray-900 mb-5 tracking-wide">Our Products</h4>
            <ul className="space-y-2.5">
              <li><Link href="/products/plate-bending-machines" className="hover:text-cyan-600 transition text-gray-600 text-sm">Plate Bending Machine</Link></li>
              <li><Link href="/products/hydraulic-press" className="hover:text-cyan-600 transition text-gray-600 text-sm">Hydraulic Press</Link></li>
              <li><Link href="/products/welding-rotators" className="hover:text-cyan-600 transition text-gray-600 text-sm">Welding Rotators</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-gray-900 mb-5 tracking-wide">Contact Info</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://share.google/dtkmTxfYW4y61uDXH" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm leading-relaxed hover:text-cyan-600 transition">921/A1, GIDC Estate, Makarpura, Vadodara, Gujarat - 390010</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919978849525" className="text-gray-600 text-sm hover:text-cyan-600 transition">+91-9978849525</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:janakeng@hotmail.com" className="text-gray-600 text-sm hover:text-cyan-600 transition">janakeng@hotmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left gap-2">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} <span className="text-cyan-600 font-bold">Janak Engineers</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Created and Designed by{' '}
            <a
              href="https://www.digikentro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 font-semibold hover:underline"
            >
              Digikentro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
