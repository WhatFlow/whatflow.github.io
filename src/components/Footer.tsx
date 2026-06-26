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
