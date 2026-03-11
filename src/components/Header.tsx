'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={isScrolled ? "/Janak_logo.png" : "/logo_white.png"}
              alt="Janak Engineers Logo"
              width={180}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-medium text-base transition ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium text-base transition ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`font-medium text-base transition ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium text-base transition ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('infrastructure')}
              className={`font-medium text-base transition ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white hover:text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'
              }`}
            >
              Infrastructure
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium px-5 py-2 rounded-full border-2 transition text-base ${
                isScrolled 
                  ? 'border-gray-400 text-gray-600 hover:border-red-600 hover:text-red-600' 
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-bold px-6 py-2.5 rounded-full transition shadow-lg text-base ${
                isScrolled
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
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
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-4 space-y-2 transition ${
            isScrolled ? 'bg-white' : 'bg-black bg-opacity-50'
          }`}>
            <button
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-red-50' 
                  : 'text-white hover:bg-red-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-red-50' 
                  : 'text-white hover:bg-red-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-red-50' 
                  : 'text-white hover:bg-red-600'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-red-50' 
                  : 'text-white hover:bg-red-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('infrastructure')}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-red-50' 
                  : 'text-white hover:bg-red-600'
              }`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-red-50' 
                  : 'text-white hover:bg-red-600'
              }`}
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
