"use client";
import Navbar from "../../common/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
   "/Image/hero_bg_1.jpg",
   "/Image/hero_bg_2.jpg",
   "/Image/hero_bg_3.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    // Load RealScout web components (defer to improve initial load)
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="realscout-web-components"]')) {
      // Use requestIdleCallback to defer loading until browser is idle
      const loadScript = () => {
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      };
      
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadScript, { timeout: 2000 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(loadScript, 1000);
      }
    }

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700  ${index === currentImage ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={src}
                alt={index === 0 ? "Mesquite Estates - Beautiful homes in Mesquite, Nevada" : `Mesquite Estates background image ${index + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                sizes="100vw"
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
          <div className="relative z-20 p-4 text-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-white mb-2 leading-relaxed bg-black/50 rounded-md p-2">
              Enjoy a Unique Getaway in Mesquite, Nevada
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-4 bg-black/50 rounded-md p-2 mx-auto max-w-3xl">
              Find Your Dream Home in Mesquite Estates | About an Hour North of Las Vegas
            </p>

            <div className="flex items-center justify-center mb-4 max-w-4xl mx-auto w-full px-4">
              <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
