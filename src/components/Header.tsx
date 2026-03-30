'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const homeAboutLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
];

const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: 'Plate Bending & Shell Rolling', href: '/services/plate-bending-shell-rolling' },
  { label: 'Section Bending', href: '/services/section-bending' },
  { label: 'Tanks & Vessels Fabrication', href: '/services/tanks-vessel-fabrication' },
];

const productLinks = [
  { label: 'All Products', href: '/products' },
  { label: 'Plate Bending Machine', href: '/products/plate-bending-machines' },
  { label: 'Hydraulic Press', href: '/products/hydraulic-press' },
  { label: 'Welding Rotators', href: '/products/welding-rotators' },
];

type HeaderProps = {
  isHomePage?: boolean;
};

export default function Header({ isHomePage = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomeTransparent = isHomePage && !isScrolled && !isOpen;

  const navigateToContact = () => {
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.href = '/#contact';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isHomeTransparent ? 'bg-transparent' : 'bg-white shadow-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={isHomeTransparent ? '/logo_white.png' : '/Janak_logo.png'}
              alt="Janak Engineers Logo"
              width={220}
              height={90}
              className="object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-5 items-center">
            {homeAboutLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium text-sm transition ${
                  isHomeTransparent
                    ? 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <Link
                href="/services"
                className={`font-medium text-sm transition ${
                  isHomeTransparent
                    ? 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                Services
              </Link>
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-gray-200 bg-white shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 p-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <Link
                href="/products"
                className={`font-medium text-sm transition ${
                  isHomeTransparent
                    ? 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                Products
              </Link>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-gray-200 bg-white shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 p-2">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={navigateToContact}
              className="font-bold px-6 py-2.5 rounded-full transition shadow-lg text-base bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer"
            >
              Contact
            </button>
          </div>

          <button
            className={`md:hidden transition ${
              isHomeTransparent ? 'text-white' : 'text-gray-600'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl max-h-[70vh] overflow-y-auto">
              <div className="space-y-1">
                {homeAboutLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    navigateToContact();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition cursor-pointer"
                >
                  Contact
                </button>
              </div>

              <div className="my-3 h-px bg-gray-200" />

              <div>
                <div className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Services
                </div>
                <div className="space-y-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="my-3 h-px bg-gray-200" />

              <div>
                <div className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Products
                </div>
                <div className="space-y-1">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
