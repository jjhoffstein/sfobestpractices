'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackContentInteraction } from '@/utils/analytics';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMenuClick = (menuItem: string) => {
    trackContentInteraction('navigation', 'click', {
      menu_item: menuItem,
      is_mobile: window.innerWidth < 640
    });
  };

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
    trackContentInteraction('mobile_menu', isOpen ? 'close' : 'open', {
      viewport_width: window.innerWidth
    });
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/"
              className="flex-shrink-0 flex items-center group"
              aria-label="SFOBestPractices.com Home"
              onClick={() => handleMenuClick('home')}
            >
              <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-blue-950 transition-all duration-200">
                SFOBestPractices.com
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              href="/structure"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === '/structure'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
              onClick={() => handleMenuClick('structure')}
            >
              Structure
            </Link>
            <Link
              href="/operations"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === '/operations'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
              onClick={() => handleMenuClick('operations')}
            >
              Operations
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/structure"
            className={`block px-3 py-2 rounded-lg text-base font-medium ${
              pathname === '/structure'
                ? 'text-blue-700 bg-blue-50'
                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
            }`}
            onClick={() => handleMenuClick('structure_mobile')}
          >
            Structure
          </Link>
          <Link
            href="/operations"
            className={`block px-3 py-2 rounded-lg text-base font-medium ${
              pathname === '/operations'
                ? 'text-blue-700 bg-blue-50'
                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
            }`}
            onClick={() => handleMenuClick('operations_mobile')}
          >
            Operations
          </Link>
        </div>
      </div>
    </nav>
  );
} 