import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-16 sm:mt-24 lg:mt-8">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-teal/10 px-3 py-1 text-sm font-semibold leading-6 text-teal ring-1 ring-inset ring-teal/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just launched v2.0</span>
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Complete <span className="text-teal">WhatsApp</span> Automation Suite
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            WhatFlow helps businesses boost revenue and engagement by connecting to your existing WhatsApp account to deliver automated messages - from order confirmations and abandoned cart recovery to fulfillment notifications and cancellation updates.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <span className="font-semibold">Simple integration:</span> No complex API setup or business account required - connect in minutes using WhatsApp's "link a device" feature.
          </div>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <Link
              href="/get-started"
              className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              Get started
            </Link>
            <Link href="https://whatsappconnectdemo.myshopify.com/" className="text-sm font-semibold leading-6 text-gray-900" target="_blank" rel="noopener noreferrer">
              Live demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="relative -z-10 w-[57rem] h-[31rem] -mr-[45rem] overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:-mr-[38rem] sm:rounded-2xl lg:-mr-0 lg:rounded-3xl lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full items-center">
              <div className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-4 bg-teal flex items-center">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <div className="ml-4 text-white text-lg font-semibold">Order Confirmation</div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[90%] shadow-sm">
                        <p className="text-sm">Hello Jane! Your order #45789 has been confirmed. Thank you for shopping with us!</p>
                        <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-light rounded-lg p-3 max-w-[90%] shadow-sm">
                        <p className="text-sm">Great! When will it be delivered?</p>
                        <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[90%] shadow-sm">
                        <p className="text-sm">Your order is estimated to arrive within 3-5 business days. We'll send you an update when it ships!</p>
                        <p className="text-xs text-gray-500 mt-1">10:33 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hidden sm:block">
                <div className="p-4 bg-teal flex items-center">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <div className="ml-4 text-white text-lg font-semibold">Abandoned Cart Recovery</div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[90%] shadow-sm">
                        <p className="text-sm">Hi John! We noticed you left some items in your cart. Would you like to complete your purchase?</p>
                        <p className="text-xs text-gray-500 mt-1">3:45 PM</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-light rounded-lg p-3 max-w-[90%] shadow-sm">
                        <p className="text-sm">I was wondering about the shipping cost</p>
                        <p className="text-xs text-gray-500 mt-1">4:02 PM</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-white rounded-lg p-3 max-w-[90%] shadow-sm">
                        <p className="text-sm">Good news! We're offering free shipping on all orders today. Would you like to complete your order now?</p>
                        <p className="text-xs text-gray-500 mt-1">4:03 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 