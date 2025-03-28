import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-teal-dark">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your customer engagement
            <br />
            Start using WhatFlow today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-light">
            Join hundreds of businesses already using WhatFlow to automate their WhatsApp communications and improve customer satisfaction.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/get-started"
              className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              Get started
            </Link>
            <Link href="/demo" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 