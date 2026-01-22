"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  type: string;
  headline?: string;
  content: React.ReactNode;
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = useMemo(
    () => [
      {
        type: "intro",
        content: (
          <div className="text-center max-w-5xl mx-auto px-4">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8">
              If your company agree and desire to do business with us we will
              ensure{" "}
              <span className="text-green-400 font-bold">
                quality and random goods services
              </span>
              . Because Quality Product is our commitment, we believe in{" "}
              <span className="text-green-400 font-bold">
                &quot;Quality is never an accident&quot;
              </span>
              . Will also ensure your desire standard of works. Your
              co-operation in these regards will highly be appreciated.
            </p>
            <p className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-bold mt-12">
              Since : 2010
            </p>
          </div>
        ),
      },
      {
        type: "company",
        headline: "Company Background",
        content: (
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Company Background
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              We produce printing and packaging accessories for pharmaceutical
              companies and also for export oriented garments manufacture based
              in Bangladesh...
            </p>
          </div>
        ),
      },
      {
        type: "vision",
        headline: "Our Vision",
        content: (
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Our Vision
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              We are embarking on a mission to develop and diversify the range
              of our clients and activities...
            </p>
          </div>
        ),
      },
    ],
    [],
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/otherImages/Hero banner.png"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center">
          <span className="text-green-400">TOP TEN ACCESSORIES</span>
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-4xl px-4">
          Pharmaceutical&apos;s and Garments Accessories Manufacturer & Supplier
        </p>

        <div className="relative w-full max-w-6xl mx-auto mb-12">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-green-400 hover:bg-green-500 text-white p-2 sm:p-3 rounded-full transition shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-green-400 hover:bg-green-500 text-white p-2 sm:p-3 rounded-full transition shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden px-12 sm:px-16">
            <div className="relative min-h-[300px] flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  {slide.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-3 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-green-400 w-10" : "bg-gray-500 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
