'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AppScreenshot() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-beige/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green">Simple and Powerful</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See WhatFlow in action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            An intuitive dashboard that gives you complete control over your WhatsApp automation.
            Connect your account, customize templates, and watch your customer engagement soar.
          </p>
        </div>
        
        <div className="mt-16 relative mx-auto">
          <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="bg-teal-dark h-10 w-full flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/app-screenshot.png"
                alt="WhatFlow App Dashboard" 
                width={1200} 
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -z-10 -inset-y-4 -inset-x-8 bg-gradient-to-r from-teal/5 to-green/5 rounded-3xl transform -rotate-1"></div>
          <div className="absolute -z-10 -inset-y-8 -inset-x-4 bg-gradient-to-l from-teal/10 to-green/10 rounded-3xl transform rotate-1"></div>
        </div>

        {/* Feature callouts */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-teal/10 p-3 mb-4">
              <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Simple Setup</h3>
            <p className="mt-2 text-sm text-gray-600">Connect your WhatsApp in seconds with our intuitive interface</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-teal/10 p-3 mb-4">
              <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Full Customization</h3>
            <p className="mt-2 text-sm text-gray-600">Tailor automations and message templates to match your brand voice</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-teal/10 p-3 mb-4">
              <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Detailed Analytics</h3>
            <p className="mt-2 text-sm text-gray-600">Track performance with comprehensive delivery and engagement metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
} 