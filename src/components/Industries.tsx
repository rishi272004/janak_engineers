'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const industries = [
  {
    title: 'Pharmaceutical Industry',
    image: '/industry/pharma.jpg',
    description:
      'Precision fabrication support for sterile processing systems, clean utility pipelines, and compliant production equipment.',
  },
  {
    title: 'Chemical Industry',
    image: '/industry/chemical.jpg',
    description:
      'Durable fabrication solutions for reactors, heavy process vessels, and chemical handling infrastructure with robust build quality.',
  },
  {
    title: 'Refinery Industry',
    image: '/industry/refinery.jpg',
    description:
      'Heavy-duty fabrication for refinery-grade equipment where reliability, pressure handling, and long service life are essential.',
  },
  {
    title: 'Petrochemical Industry',
    image: '/industry/petrochemical.jpg',
    description:
      'Engineered fabrication for high-load petrochemical operations, including structural and process-critical fabricated components.',
  },
  {
    title: 'Power Industry',
    image: '/industry/power%20industry.jpg',
    description:
      'Strong fabrication capabilities for power sector applications requiring precision, thermal durability, and operational safety.',
  },
];

export default function Industries() {
  const [visibleCards, setVisibleCards] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const maxIndex = Math.max(0, industries.length - visibleCards);
  const activeIndex = Math.min(currentIndex, maxIndex);

  const getVisibleCardsByViewport = () => {
    if (window.innerWidth < 640) {
      return 1;
    }
    if (window.innerWidth < 1024) {
      return 2;
    }
    return 3;
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCardsByViewport());
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateAutoPlayPreference = () => {
      setIsAutoPlayEnabled(!mediaQuery.matches);
    };

    updateAutoPlayPreference();
    mediaQuery.addEventListener('change', updateAutoPlayPreference);

    return () => mediaQuery.removeEventListener('change', updateAutoPlayPreference);
  }, []);

  useEffect(() => {
    if (!isAutoPlayEnabled || isPaused || maxIndex === 0) {
      return;
    }

    const timerId = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const clampedIndex = Math.min(previousIndex, maxIndex);
        return clampedIndex >= maxIndex ? 0 : clampedIndex + 1;
      });
    }, 3500);

    return () => window.clearInterval(timerId);
  }, [isAutoPlayEnabled, isPaused, maxIndex]);

  const slide = (direction: 'left' | 'right') => {
    setCurrentIndex((previousIndex) => {
      const clampedIndex = Math.min(previousIndex, maxIndex);
      if (direction === 'left') {
        return clampedIndex === 0 ? maxIndex : clampedIndex - 1;
      }

      return clampedIndex >= maxIndex ? 0 : clampedIndex + 1;
    });
  };

  return (
    <section id="industries" className="py-16 sm:py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">Industries We Work For</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver precision fabrication and equipment support for critical sectors with high standards of quality and reliability.
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={() => slide('left')}
            className="h-10 w-10 rounded-full border border-cyan-200 bg-white text-cyan-700 hover:bg-cyan-50 transition"
            aria-label="Slide industries left"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={() => slide('right')}
            className="h-10 w-10 rounded-full border border-cyan-200 bg-white text-cyan-700 hover:bg-cyan-50 transition"
            aria-label="Slide industries right"
          >
            &#8250;
          </button>
        </div>

        <div
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
          >
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <article className="h-full bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition">
                  <div className="h-2 bg-gradient-to-r from-cyan-600 to-slate-800" />
                  <div className="relative h-44 sm:h-48 w-full">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-semibold tracking-wider text-cyan-700 uppercase">Industry Focus</p>
                    <h3 className="mt-2 text-xl font-bold text-gray-900">{industry.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{industry.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to industries slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex ? 'w-6 bg-cyan-700' : 'w-2.5 bg-cyan-200 hover:bg-cyan-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}