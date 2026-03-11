
'use client';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import React, { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-600 py-16 border-t-4 border-red-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <img src="/Janak_logo.png" alt="Janak Engineers Logo" className="h-20 w-auto mx-auto" />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              We are a prominent Manufacturer and Supplier of Plate Bending Machines, Hydraulic Press Machines and Welding Rotators which are a basic requirement in any fabrication industry in the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-red-600 transition text-gray-600 text-sm">Home</a></li>
              <li><a href="#about" className="hover:text-red-600 transition text-gray-600 text-sm">About Us</a></li>
              <li><a href="#services" className="hover:text-red-600 transition text-gray-600 text-sm">Services</a></li>
              <li><a href="#products" className="hover:text-red-600 transition text-gray-600 text-sm">Products</a></li>
              <li><a href="#infrastructure" className="hover:text-red-600 transition text-gray-600 text-sm">Infrastructure</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition text-gray-600 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Shell Rolling</a></li>
              <li><a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Section Bending</a></li>
              <li><a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Tanks & Vessels</a></li>
              <li><a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Hydraulic Press</a></li>
              <li><a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Welding Rotators</a></li>
              <li><a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Furnace Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed">921/A1, GIDC Estate, Makarpura, Vadodara, Gujarat - 390010</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">+91-9978849525</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">janakeng@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} <span className="text-red-600 font-bold">Janak Engineers</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition text-gray-600 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
