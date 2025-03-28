import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-teal-dark">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transform your e-commerce business
            <br />
            with complete WhatsApp automation
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-light">
            Join hundreds of businesses already using WhatFlow's full automation suite to increase conversions, boost revenue, and deliver exceptional customer experiences throughout the entire shopping journey.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/get-started"
              className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              Get started
            </Link>
            <Link href="https://whatsappconnectdemo.myshopify.com/" className="text-sm font-semibold leading-6 text-white" target="_blank" rel="noopener noreferrer">
              View live demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 