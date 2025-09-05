"use client";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
// import CTA from '@/components/CTA';
import Footer from "@/components/Footer";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// export const metadata = {
//   title: 'Pricing - WhatFlow',
//   description: 'Choose the perfect WhatFlow pricing plan for your complete WhatsApp automation needs - order confirmations, abandoned cart recovery, fulfillment updates, and more',
// };

export default function PricingPage() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Trigger loading bar whenever route changes
    setProgress(40);
    const timer = setTimeout(() => setProgress(100), 300);

    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <main>
      <LoadingBar
        color="teal"
        progress={progress}
        waitingTime={600}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Pricing />
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}

{
  /* Why choose WhatFlow */
}
{
  /* <div className="mt-20 rounded-2xl bg-beige p-10">
          <h3 className="text-2xl font-bold text-teal-dark text-center mb-8">
            Why Choose WhatFlow?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-12 w-12 rounded-md bg-teal/10 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Boost Conversion Rates
              </h4>
              <p className="text-gray-600">
                Recover abandoned carts and increase purchase completion with
                timely WhatsApp messages.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-12 w-12 rounded-md bg-teal/10 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Complete Customer Journey
              </h4>
              <p className="text-gray-600">
                Engage customers at every stage from browsing to post-purchase
                with a seamless communication experience.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-12 w-12 rounded-md bg-teal/10 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Enhanced Customer Experience
              </h4>
              <p className="text-gray-600">
                Provide timely updates and personalized communication that
                builds trust and loyalty with your customers.
              </p>
            </div>
          </div>
        </div> */
}

{
  /* Note about Shopify subscription */
}
{
  /* <div className="mx-auto max-w-4xl mt-12 text-center">
          <div className="rounded-lg bg-teal-dark/5 p-6">
            <h3 className="text-lg font-semibold text-teal-dark mb-2">
              Seamless Flex Billing Through Shopify
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              All plans include the same features. Subscriptions are managed
              through the Shopify app store with our flexible billing system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-teal-dark font-medium mb-1">
                  Automatic Upgrades
                </div>
                <p className="text-xs text-gray-600">
                  Your plan automatically adjusts based on your messaging
                  volume, with no manual intervention required.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-teal-dark font-medium mb-1">
                  Continuous Service
                </div>
                <p className="text-xs text-gray-600">
                  No interruptions when you hit usage limits - smoothly
                  transition between plans without service gaps.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-teal-dark font-medium mb-1">
                  Predictable Billing
                </div>
                <p className="text-xs text-gray-600">
                  Remain on your upgraded plan for the next cycle with clear
                  communication about all changes.
                </p>
              </div>
            </div>
          </div>
        </div> */
}

{
  /* FAQ section */
}
{
  /* <div className="mx-auto max-w-4xl mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <dl className="space-y-6 divide-y divide-gray-200">
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">
                How does the message limit work?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                Each plan includes a set number of messages per month across all
                automation types. If you exceed your limit, you'll automatically
                be upgraded to the next tier to ensure uninterrupted service.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">
                What happens if I exceed my plan's message limit?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                We use flex billing, which automatically upgrades you to the
                next tier when you reach your limit. Your service continues
                without interruption, and you'll receive a notification about
                the change. You don't need to manually upgrade or worry about
                service disruptions.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">
                How does your flex billing system work?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                Unlike traditional subscription models that require manual
                upgrades, our flex billing system automatically moves you to
                higher tiers when usage thresholds are met. Your usage doesn't
                reset monthly, and transitions between billing cycles are smooth
                with no interruption in service. You'll always remain on your
                upgraded plan for the next cycle, ensuring predictable billing.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">
                Can I downgrade my plan?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                Yes, you can downgrade your plan at any time through Shopify.
                Changes will take effect at the start of your next billing
                cycle.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">
                Are all automation features available on every plan?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                Yes, all plans include our complete suite of automation
                features. The only difference between plans is the number of
                messages you can send per month.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">
                Do I need to pay for Shopify separately?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                Yes, WhatFlow is a Shopify app that requires an active Shopify
                subscription. Our pricing is for the WhatFlow service only and
                is billed through your Shopify account.
              </dd>
            </div>
          </dl>
        </div> */
}
