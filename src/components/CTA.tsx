"use client"

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-black overflow-hidden bg-fixed">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400/10 via-transparent to-teal-300/10 animate-pulse"></div>

      <div className="relative px-6 py-24 sm:px-8 sm:py-32 lg:px-12 flex justify-center">
        <div className="mx-auto max-w-3xl text-center rounded-2xl backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 p-10">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
            Transform your e-commerce business
            <br />
            with simple WhatsApp automation
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-200">
            Join hundreds of businesses already using{" "}
            <span className="font-semibold text-white">WhatFlow</span> to
            seamlessly connect WhatsApp, increase conversions, and deliver
            exceptional customer experiences.
          </p>

          {/* Sub note */}
          <div className="mt-4 text-sm text-white/70 italic">
            No special business accounts needed · Secure · Private · Easy setup
          </div>

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://apps.shopify.com/whatflow"
              className="rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-500/30 hover:scale-105 hover:bg-green-400 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Get Started
            </Link>
            <Link
              href="https://whatsappconnectdemo.myshopify.com/"
              className="text-base font-medium leading-6 text-white hover:text-green-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
