"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white bg-ink py-16 px-10 border-t border-border/20">
      <div className="mx-auto max-w-7xl">
        {/* Brand + Socials */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" aria-label="WhatFlow home" className="shrink-0">
              <Image
                src="/logo.png"
                alt="WhatFlow"
                width={160}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-white/70 text-center md:text-left max-w-sm">
              Automate WhatsApp, grow faster, and deliver seamless customer
              experiences.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <SocialLink href="https://twitter.com" label="Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M22 5.92c-.77.34-1.6.56-2.47.66a4.27 4.27 0 0 0 1.87-2.35 8.53 8.53 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.36 2.9c0 .33.04.65.11.95a12.06 12.06 0 0 1-8.76-4.44 4.25 4.25 0 0 0 1.31 5.67 4.18 4.18 0 0 1-1.92-.53v.06a4.25 4.25 0 0 0 3.41 4.17c-.46.12-.94.18-1.44.07a4.26 4.26 0 0 0 3.97 2.95A8.52 8.52 0 0 1 2 18.57a12.03 12.03 0 0 0 6.52 1.91c7.83 0 12.11-6.49 12.11-12.11 0-.18 0-.36-.01-.54.83-.6 1.55-1.35 2.12-2.2z"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://instagram.com" label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://facebook.com" label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9V12.1h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.97h2.76l-.44 2.87h-2.32V22c4.78-.75 8.44-4.92 8.44-9.94z"
                />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/whatflow"
              label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97v5.7H9.3V9.5h3.41v1.49h.05c.47-.88 1.63-1.81 3.36-1.81 3.6 0 4.26 2.37 4.26 5.46v5.81zM6.02 8.01a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.8 20.45H4.23V9.5H7.8v10.95z"
                />
              </svg>
            </SocialLink>
          </div>
        </div>

        {/* Links + Legal */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 md:flex-row md:justify-between">
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <Link
              href="/resources"
              className="hover:text-primary transition"
            >
              Resources
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition"
            >
              Privacy Policy
            </Link>
          </nav>
          <p className="text-xs text-white/60">
            © {year} WhatFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-white/25 hover:bg-white/10 transition"
    >
      <span className="sr-only">{label}</span>
      <span className="text-white/70 group-hover:text-primary transition-colors">
        {children}
      </span>
    </Link>
  );
}
