'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we're on the home page
  const isHomePage = pathname === '/';

  // Helper function to create the correct link URL
  const getLinkUrl = (section: string): string => {
    if (isHomePage) {
      return `#${section}`; // Anchor link on home page
    } else {
      return `/#${section}`; // Link to home page with anchor
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-dark to-green bg-clip-text text-transparent">WhatFlow</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link 
            href={getLinkUrl("features")}
            className={`text-sm font-semibold leading-6 ${
              pathname === '/features' || (isHomePage && pathname.includes('#features'))
                ? 'text-teal border-b-2 border-green' 
                : 'text-gray-900 hover:text-teal'
            }`}
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className={`text-sm font-semibold leading-6 ${
              pathname === '/pricing' 
                ? 'text-teal border-b-2 border-green' 
                : 'text-gray-900 hover:text-teal'
            }`}
          >
            Pricing
          </Link>
          <Link 
            href={getLinkUrl("about")} 
            className={`text-sm font-semibold leading-6 ${
              pathname === '/about' || (isHomePage && pathname.includes('#about'))
                ? 'text-teal border-b-2 border-green' 
                : 'text-gray-900 hover:text-teal'
            }`}
          >
            About
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/get-started" className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-dark to-green bg-clip-text text-transparent">WhatFlow</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href={getLinkUrl("features")}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === '/features' || (isHomePage && pathname.includes('#features'))
                        ? 'text-teal bg-green-light/50' 
                        : 'text-gray-900 hover:bg-green-light'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === '/pricing' 
                        ? 'text-teal bg-green-light/50' 
                        : 'text-gray-900 hover:bg-green-light'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href={getLinkUrl("about")}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === '/about' || (isHomePage && pathname.includes('#about'))
                        ? 'text-teal bg-green-light/50' 
                        : 'text-gray-900 hover:bg-green-light'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/get-started"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-green-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 