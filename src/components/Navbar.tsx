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
      ? "relative text-primary text-base font-normal py-2 px-3 border-b-2 border-primary"
      : "relative text-ink text-base font-normal py-2 px-3 hover:text-primary transition duration-300";

  // Navigation links (shared between desktop & mobile)
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/official-api-pricing", label: "Official API Pricing" },
    { path: "/resources", label: "Resources" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white border-b border-border shadow-sm"
          : "bg-white"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 items-center">
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
            className="inline-flex items-center justify-center rounded-md p-2.5 text-ink hover:bg-chat-cream hover:text-primary transition"
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
        <div className="hidden lg:flex lg:gap-x-8 relative">
          {navLinks.map(({ path, label }, i) => (
            <Link key={i} href={path} className={linkClasses(path)}>
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://apps.shopify.com/whatflow"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 inline-flex items-center px-7 py-3 rounded-full bg-primary text-ink border border-ink font-semibold transition-all duration-300 hover:bg-ink hover:text-white hover:border-ink"
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
            className="lg:hidden fixed inset-0 z-50 bg-ink/40"
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
                  className="p-2 text-ink hover:text-primary transition"
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
                {navLinks.map(({ path, label }, i) => (
                  <Link
                    key={i}
                    href={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${linkClasses(path)} block text-lg`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href="https://apps.shopify.com/whatflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-5 py-3 rounded-full bg-primary text-ink border border-ink font-semibold transition-all duration-300 hover:bg-ink hover:text-white"
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
