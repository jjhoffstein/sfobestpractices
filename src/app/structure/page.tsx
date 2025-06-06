'use client';

import { useEffect, useRef } from 'react';
import EntityStructureDiagram from '@/components/EntityStructureDiagram';
import { trackContentInteraction } from '@/utils/analytics';

export default function StructurePage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trackScrollDepth = () => {
      if (!contentRef.current) return;

      const element = contentRef.current;
      const elementHeight = element.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const visibleHeight = viewportHeight + scrollPosition;
      const scrollPercentage = (visibleHeight / elementHeight) * 100;

      // Track at 25%, 50%, 75%, and 100%
      const thresholds = [25, 50, 75, 100];

      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !element.dataset[`scrolled${threshold}`]) {
          trackContentInteraction('structure_page', 'scroll', { percent: threshold });
          element.dataset[`scrolled${threshold}`] = 'true'; // Mark threshold as reached
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', trackScrollDepth);
    // Initial check in case the page is shorter than viewport or already scrolled
    trackScrollDepth();

    // Clean up scroll listener on component unmount
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div ref={contentRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Example Entity Structure
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
            Explore this interactive diagram showing a common structure used by family offices.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto px-4">
            Note: This is a simplified illustration for educational purposes. Actual structures should be developed with qualified legal and tax professionals based on specific circumstances.
          </p>
        </div>

        <div className="relative mx-4 sm:mx-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 opacity-50 rounded-2xl sm:rounded-3xl" />
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 lg:p-12">
            <EntityStructureDiagram />
          </div>
        </div>
      </div>
    </div>
  );
} 