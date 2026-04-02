'use client';

import Image from 'next/image';
import { type TouchEventHandler, useEffect, useMemo, useState } from 'react';

type ServiceImageSliderProps = {
  images: string[];
  altPrefix: string;
  autoPlayMs?: number;
  emptyMessage?: string;
};

function encodePublicPath(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  return `/${cleanPath.split('/').map(encodeURIComponent).join('/')}`;
}

export default function ServiceImageSlider({
  images,
  altPrefix,
  autoPlayMs = 3500,
  emptyMessage = 'Project images will be added soon.',
}: ServiceImageSliderProps) {
  const sliderImages = useMemo(() => images.map(encodePublicPath), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
    if (sliderImages.length <= 1 || !isAutoPlayEnabled) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % sliderImages.length);
    }, autoPlayMs);

    return () => window.clearInterval(timerId);
  }, [autoPlayMs, isAutoPlayEnabled, sliderImages.length]);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % sliderImages.length);
  };

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    if (touchStartX === null || sliderImages.length <= 1) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX;
    if (touchEndX === undefined) {
      return;
    }

    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) < 45) {
      return;
    }

    if (swipeDistance > 0) {
      showNext();
      return;
    }

    showPrevious();
  };

  return (
    <div
      className="overflow-hidden rounded-3xl border border-cyan-100 bg-white p-2.5 sm:p-3 shadow-[0_22px_70px_-26px_rgba(8,47,73,0.55)]"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${altPrefix} image gallery`}
    >
      <div
        className="relative h-[260px] sm:h-[340px] lg:h-[470px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-cyan-900 to-slate-900 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {sliderImages.length === 0 ? (
          <div className="flex h-full items-center justify-center px-6 text-center">
            <p className="text-base sm:text-lg text-cyan-100">{emptyMessage}</p>
          </div>
        ) : (
          <>
            {sliderImages.map((imagePath, index) => (
              <div
                key={imagePath}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <Image
                  src={imagePath}
                  alt={`${altPrefix} - image ${index + 1}`}
                  fill
                  sizes="(max-width: 1279px) 100vw, 52vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {sliderImages.length > 1 && (
              <>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-2 text-xl text-white backdrop-blur-sm transition hover:bg-black/50"
                  aria-label="Show previous image"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-2 text-xl text-white backdrop-blur-sm transition hover:bg-black/50"
                  aria-label="Show next image"
                >
                  &#8250;
                </button>

                <div className="absolute bottom-3 sm:bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-2.5 sm:px-3 py-2 backdrop-blur-sm">
                  {sliderImages.map((imagePath, index) => (
                    <button
                      key={`${imagePath}-dot`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === activeIndex ? 'bg-cyan-200' : 'bg-white/45 hover:bg-white/75'
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}