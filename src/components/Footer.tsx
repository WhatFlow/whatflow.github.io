// "use client"
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer aria-labelledby="site-footer-heading" className="relative text-white bg-gradient-to-br from-black via-teal-950 to-teal-900">
//       {/* Top divider accent */}
//       <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//       <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
//         {/* Header strip: logo + short blurb */}
//         < className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
//           <div className="flex items-center gap-3">
//             <Link href="/" aria-label="WhatFlow home" className="shrink-0">
//               <Image
//                 src="/logo.png"
//                 alt="WhatFlow"
//                 width={150}
//                 height={40}
//                 className="h-9 w-auto"
//                 priority
//               />
//             </Link>
//             <span className="hidden sm:inline-block h-5 w-px bg-white/15" aria-hidden="true" />
//             <p className="text-sm text-white/70 max-w-prose">
//               Build, automate, and scale your workflows with WhatFlow.
//             </p>
//           </div>
//           {/* Socials */}
// <div className="mt-2 sm:mt-0 flex items-center gap-4">
//   <SocialLink href="https://twitter.com" label="Twitter">
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
//       <path fill="currentColor" d="M22 5.92c-.77.34-1.6.56-2.47.66a4.27 4.27 0 0 0 1.87-2.35 8.53 8.53 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.36 2.9c0 .33.04.65.11.95a12.06 12.06 0 0 1-8.76-4.44 4.25 4.25 0 0 0 1.31 5.67 4.18 4.18 0 0 1-1.92-.53v.06a4.25 4.25 0 0 0 3.41 4.17c-.46.12-.94.18-1.44.07a4.26 4.26 0 0 0 3.97 2.95A8.52 8.52 0 0 1 2 18.57a12.03 12.03 0 0 0 6.52 1.91c7.83 0 12.11-6.49 12.11-12.11 0-.18 0-.36-.01-.54.83-.6 1.55-1.35 2.12-2.2z"/>
//     </svg>
//   </SocialLink>
//   <SocialLink href="https://instagram.com" label="Instagram">
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
//       <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//     </svg>
//   </SocialLink>
//   <SocialLink href="https://facebook.com" label="Facebook">
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
//       <path fill="currentColor" d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9V12.1h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.97h2.76l-.44 2.87h-2.32V22c4.78-.75 8.44-4.92 8.44-9.94z"/>
//     </svg>
//   </SocialLink>
//   <SocialLink href="https://linkedin.com/company/whatflow" label="LinkedIn">
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
//       <path fill="currentColor" d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97v5.7H9.3V9.5h3.41v1.49h.05c.47-.88 1.63-1.81 3.36-1.81 3.6 0 4.26 2.37 4.26 5.46v5.81zM6.02 8.01a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.8 20.45H4.23V9.5H7.8v10.95z"/>
//     </svg>
//   </SocialLink>
// </div>

//         {/* Grid nav + newsletter */}
//         <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           <FooterCol title="Product">
//             <FooterLink href="/features">Features</FooterLink>
//             <FooterLink href="/pricing">Pricing</FooterLink>
//             <FooterLink href="/changelog">Changelog</FooterLink>
//             <FooterLink href="/status">Status</FooterLink>
//           </FooterCol>

//           <FooterCol title="Resources">
//             <FooterLink href="/resources">Blog & Guides</FooterLink>
//             <FooterLink href="/docs">Documentation</FooterLink>
//             <FooterLink href="/templates">Templates</FooterLink>
//             <FooterLink href="/community">Community</FooterLink>
//           </FooterCol>

//           <FooterCol title="Company">
//             <FooterLink href="/about">About</FooterLink>
//             <FooterLink href="/careers">Careers</FooterLink>
//             <FooterLink href="/contact">Contact</FooterLink>
//             <FooterLink href="/press">Press Kit</FooterLink>
//           </FooterCol>

//           <div>
//             <h3 className="text-sm font-semibold tracking-wide text-white">Stay in the loop</h3>
//             <p className="mt-3 text-sm text-white/70">
//               Get product updates, tips, and the occasional meme.
//             </p>
//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="mt-4 flex w-full max-w-sm gap-2"
//               noValidate
//             >
//               <label htmlFor="footer-email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="footer-email"
//                 type="email"
//                 inputMode="email"
//                 placeholder="you@company.com"
//                 className="flex-1 rounded-md bg-white/10 px-3 py-2 text-sm placeholder-white/40 text-white outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-400"
//               />
//               <button
//                 type="submit"
//                 className="rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-teal-900"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom legal strip */}
//         <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//           <p className="text-xs text-white/60">
//             © {year} WhatFlow. All rights reserved.
//           </p>
//           <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/70">
//             <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
//               Privacy Policy
//             </Link>
//             <span className="h-3 w-px bg-white/15" aria-hidden="true" />
//             <Link href="/terms" className="hover:text-emerald-400 transition-colors">
//               Terms of Service
//             </Link>
//             <span className="h-3 w-px bg-white/15" aria-hidden="true" />
//             <Link href="/security" className="hover:text-emerald-400 transition-colors">
//               Security
//             </Link>
//             <span className="h-3 w-px bg-white/15" aria-hidden="true" />
//             <Link href="/accessibility" className="hover:text-emerald-400 transition-colors">
//               Accessibility
//             </Link>
//             <span className="h-3 w-px bg-white/15" aria-hidden="true" />
//             <Link href="#faq" className="hover:text-emerald-400 transition-colors">
//               FAQ
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* Helpers */

// function FooterCol({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <h3 className="text-sm font-semibold tracking-wide text-white">{title}</h3>
//       <ul className="mt-4 space-y-2">{children}</ul>
//     </div>
//   );
// }

// function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <li>
//       <Link
//         href={href}
//         className="text-sm text-white/70 hover:text-emerald-400 transition-colors"
//       >
//         {children}
//       </Link>
//     </li>
//   );
// }

// function SocialLink({
//   href,
//   label,
//   children,
// }: {
//   href: string;
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <Link
//       href={href}
//       aria-label={label}
//       className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-white/25 hover:bg-white/10 transition"
//     >
//       <span className="sr-only">{label}</span>
//       <span className="text-white/70 group-hover:text-emerald-400 transition-colors">
//         {children}
//       </span>
//     </Link>
//   );
// }

"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white bg-gradient-to-br from-black via-teal-950 to-teal-900">
      {/* Top Divider */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
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
            <Link href="/resources" className="hover:text-emerald-400 transition">
              Resources
            </Link>
            <Link href="/terms" className="hover:text-emerald-400 transition">
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-emerald-400 transition"
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
      <span className="text-white/70 group-hover:text-emerald-400 transition-colors">
        {children}
      </span>
    </Link>
  );
}
