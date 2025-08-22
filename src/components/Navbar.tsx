"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path: string) =>
    pathname === path
      ? "relative text-green-600 font-semibold after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:bg-gradient-to-r after:from-green-500 after:to-emerald-400 after:rounded-full after:transition-all"
      : "relative text-gray-800 text-lg font-semibold hover:text-green-600 transition duration-300 after:absolute after:left-1/2 after:bottom-[-4px] after:h-[3px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-gradient-to-r after:from-green-500 after:to-emerald-400 after:rounded-full after:transition-all";

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-background/60 backdrop-blur-lg shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 items-center"
        >
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="WhatFlow Logo"
              width={150}
              height={32}
              className="h-8"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex lg:gap-x-10 relative">
          {["/features", "/pricing", "/resources", "/about"].map((path, i) => (
            <Link key={i} href={path} className={linkClasses(path)}>
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Link
            href="https://apps.shopify.com/whatflow"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Install Now
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 bg-black/40"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="WhatFlow Logo"
                  width={110}
                  height={28}
                  className="h-7 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-green-600 transition"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {["/features", "/pricing", "/resources", "/about"].map(
                  (path, i) => (
                    <Link
                      key={i}
                      href={path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`${linkClasses(path)} block text-lg`}
                    >
                      {path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href="https://apps.shopify.com/whatflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-5 py-2.5 rounded-full bg-green-600 text-white font-medium shadow-md hover:bg-green-700 transition"
                >
                  Install Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
