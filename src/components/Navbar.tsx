'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">WhatFlow</span>
            <Image
              src="public\logo.png"
              alt="WhatFlow Logo"
              width={125}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link 
            href="/features" 
            className={pathname === '/features' 
              ? 'text-teal border-b-2 border-green text-sm font-semibold leading-6' 
              : 'text-gray-900 hover:text-teal text-sm font-semibold leading-6'
            }
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className={pathname === '/pricing' 
              ? 'text-teal border-b-2 border-green text-sm font-semibold leading-6' 
              : 'text-gray-900 hover:text-teal text-sm font-semibold leading-6'
            }
          >
            Pricing
          </Link>
          <Link 
            href="/resources" 
            className={pathname === '/resources' 
              ? 'text-teal border-b-2 border-green text-sm font-semibold leading-6' 
              : 'text-gray-900 hover:text-teal text-sm font-semibold leading-6'
            }
          >
            Resources
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' 
              ? 'text-teal border-b-2 border-green text-sm font-semibold leading-6' 
              : 'text-gray-900 hover:text-teal text-sm font-semibold leading-6'
            }
          >
            About
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://apps.shopify.com/whatflow" className="text-sm font-semibold leading-6 text-gray-900" target="_blank" rel="noopener noreferrer">
            Install Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">WhatFlow</span>
                <Image
                  src="public\logo.png"
                  alt="WhatFlow Logo"
                  width={125}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
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
                    href="/features"
                    className={pathname === '/features' 
                      ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-teal bg-gray-50' 
                      : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className={pathname === '/pricing' 
                      ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-teal bg-gray-50' 
                      : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/resources"
                    className={pathname === '/resources' 
                      ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-teal bg-gray-50' 
                      : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/about"
                    className={pathname === '/about' 
                      ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-teal bg-gray-50' 
                      : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="https://apps.shopify.com/whatflow"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Install Now
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