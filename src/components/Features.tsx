"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import FadeInSection from "./FadeIn";
import {
  Package,
  MessageCircle,
  Megaphone,
  ShoppingCart,
  Receipt,
  Sparkles,
} from "lucide-react";

type Category = {
  name: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
};

export default function Features() {
  const templateCategories: Category[] = [
    {
      name: "Order Updates",
      icon: <Package className="w-5 h-5" />,
      description: "Real-time shipping, delivery, and order status alerts.",
      details: [
        "Payment confirmation",
        "Shipped & out-for-delivery alerts",
        "Delivery confirmation + feedback",
      ],
    },
    {
      name: "Customer Support",
      icon: <MessageCircle className="w-5 h-5" />,
      description: "Turn support into loyalty with fast, contextual replies.",
      details: [
        "Smart triage & routing",
        "Saved replies & macros",
        "SLA timers & escalation",
      ],
    },
    {
      name: "Marketing",
      icon: <Megaphone className="w-5 h-5" />,
      description: "Convert with campaigns that feel 1:1, not spammy.",
      details: [
        "Segmented broadcasts",
        "A/B testing + insights",
        "UTM tracking & attribution",
      ],
    },
    {
      name: "Abandoned Cart",
      icon: <ShoppingCart className="w-5 h-5" />,
      description: "Recover lost revenue with timely reminders.",
      details: [
        "Tiered nudges with incentives",
        "Live cart context",
        "One-tap checkout links",
      ],
    },
    {
      name: "Product Catalog",
      icon: <Receipt className="w-5 h-5" />,
      description: "Showcase products natively inside WhatsApp.",
      details: [
        "Rich product cards",
        "Variant & stock sync",
        "Quick add-to-cart",
      ],
    },
    {
      name: "Welcome Series",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Onboard and delight from day zero.",
      details: [
        "First-message incentives",
        "Progressive profiling",
        "Nurture sequences",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="features"
      className="relative isolate overflow-hidden py-24 sm:py-32 bg-chat-cream border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection>
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink border border-border shadow-sm">
              FEATURES
            </span>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-ink sm:text-4xl">
              Complete{" "}
              <span className="text-primary-mid font-semibold">WhatsApp Automation</span>{" "}
              for every stage of the customer journey
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              WhatFlow connects to your existing WhatsApp account to provide a
              comprehensive suite of automations that engage customers
              throughout their shopping experience, maximizing revenue and
              satisfaction.
            </p>
          </div>
        </FadeInSection>
        
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-14 items-start mt-16">
            {/* Template Categories */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {templateCategories.map((category, index) => {
                  const opened = activeIndex === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setActiveIndex((prev) =>
                          prev === index ? null : index
                        )
                      }
                      className={[
                        "group relative text-left w-full",
                        "rounded-[20px] p-6 transition-all duration-300 cursor-pointer",
                        "border border-border",
                        "bg-white",
                        "hover:-translate-y-0.5 hover:shadow-md",
                        opened
                          ? "ring-2 ring-primary border-transparent shadow-md"
                          : "shadow-sm",
                      ].join(" ")}
                      aria-expanded={opened}
                      aria-controls={`feature-panel-${index}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={[
                            "flex h-11 w-11 items-center justify-center rounded-xl",
                            "bg-chat-cream border border-border text-primary-mid",
                            "group-hover:bg-primary/20 transition-colors duration-300",
                          ].join(" ")}
                        >
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-semibold text-ink">
                              {category.name}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-text-muted">
                            {category.description}
                          </p>
                          <div
                            id={`feature-panel-${index}`}
                            className={[
                              "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                              opened
                                ? "grid-rows-[1fr] opacity-100 mt-3"
                                : "grid-rows-[0fr] opacity-0",
                            ].join(" ")}
                          >
                            <div className="overflow-hidden">
                              <ul className="space-y-2 text-sm text-ink font-normal mt-3">
                                {category.details.map((d, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary-mid" />
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-3">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary text-ink border border-ink font-semibold transition-all duration-300 hover:bg-ink hover:text-white hover:border-ink shadow-sm"
                >
                  Explore all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Templates Preview */}
            <div className="relative mt-8 lg:mt-4">
              <div className="relative flex justify-center">
                <div className="relative z-10 overflow-hidden rounded-[24px] max-w-5xl w-full border border-border bg-white shadow-md">
                  {/* Browser Header Bar */}
                  <div className="bg-surface-muted border-b border-border h-10 w-full flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>

                  {/* Main image */}
                  <Image
                    src="/app-screenshot.png"
                    alt="WhatFlow App Dashboard"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
