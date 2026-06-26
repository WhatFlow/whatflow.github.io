"use client";

import Link from "next/link";
import FadeInSection from "./FadeIn";

export default function CTA() {
  return (
    <section className="relative bg-ink overflow-hidden border-b border-border">
      <div className="relative px-6 py-24 sm:px-8 sm:py-32 lg:px-12 flex justify-center">
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center p-8 sm:p-12">
            {/* Heading */}
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Transform your e-commerce business
              <br />
              with <span className="text-primary font-bold">simple WhatsApp automation</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-muted">
              Join hundreds of businesses already using{" "}
              <span className="font-semibold text-white">WhatFlow</span> to
              seamlessly connect WhatsApp, increase conversions, and deliver
              exceptional customer experiences.
            </p>

            {/* Sub note */}
            <div className="mt-4 text-sm text-surface-muted/70 italic">
              No special business accounts needed · Secure · Private · Easy
              setup
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://apps.shopify.com/whatflow"
                className="px-7 py-3.5 rounded-full bg-primary text-ink border border-primary font-semibold transition-all duration-300 hover:bg-white hover:border-white hover:text-ink shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
              <Link
                href="https://whatsappconnectdemo.myshopify.com/"
                className="text-base font-semibold leading-6 text-white hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo →
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
