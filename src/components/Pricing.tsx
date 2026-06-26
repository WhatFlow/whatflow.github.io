"use client";

import {
  Sprout,
  TrendingUp,
  LineChart,
  Briefcase,
  Building,
  Star,
} from "lucide-react";

export default function Pricing() {
  const commonFeatures = [
    { name: "Connect with your regular WhatsApp account", included: true },
    { name: "Order confirmation automations", included: true },
    { name: "Abandoned cart recovery", included: true },
    { name: "Order fulfillment notifications", included: true },
    { name: "Cancellation management", included: true },
    { name: "Custom message templates", included: true },
    { name: "Advanced analytics dashboard", included: true },
  ];

  const plans = [
    {
      name: "Free",
      description: "Perfect for testing our full automation suite with limited message volume.",
      price: "$0",
      limit: "50 messages",
      nextTier: "Up to 50 messages, then auto-upgrades to Starter plan.",
      featured: false,
      icon: <Sprout className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Starter",
      description: "Ideal for small businesses beginning to leverage WhatsApp automation.",
      price: "$4.99",
      limit: "1,500 messages",
      nextTier: "Up to 1,500 messages, then auto-upgrades to Growth plan.",
      featured: false,
      additionalFeature: "3-day free trial",
      icon: <TrendingUp className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Growth",
      description: "Perfect for growing businesses with increasing automation needs.",
      price: "$9.99",
      limit: "3,000 messages",
      nextTier: "Up to 3,000 messages, then auto-upgrades to Professional plan.",
      featured: true,
      popular: "Most Popular",
      icon: <LineChart className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Professional",
      description: "Designed for established businesses with substantial customer communication.",
      price: "$14.99",
      limit: "5,000 messages",
      nextTier: "Up to 5,000 messages, then auto-upgrades to Enterprise plan.",
      featured: false,
      icon: <Briefcase className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Enterprise",
      description: "For high-volume businesses that need extensive automation capabilities.",
      price: "$24.99",
      limit: "12,500 messages",
      nextTier: "Up to 12,500 messages, then auto-upgrades to Ultimate plan.",
      featured: false,
      icon: <Building className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Ultimate",
      description: "Unlimited messaging for large businesses with maximum automation needs.",
      price: "$49.99",
      limit: "No limits!",
      nextTier: "",
      featured: false,
      icon: <Star className="w-6 h-6 text-primary-mid" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-chat-cream py-24 sm:py-32 overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink border border-border shadow-sm mb-3">
            PRICING PLANS
          </span>
          <h2 className="text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            All plans include our full suite of automation features.
            Select the option that best suits your business needs.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(0, 3).map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[24px] border p-8 bg-white transition-all duration-300 hover:shadow-md ${
                plan.featured
                  ? "border-primary-mid ring-2 ring-primary-mid shadow-md"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary-mid px-5 py-1.5 text-xs font-semibold uppercase text-white border border-primary-mid shadow-sm">
                    {plan.popular}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-chat-cream border border-border rounded-xl">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-ink">
                  {plan.name}
                </h3>
              </div>
              
              <p className="mt-2 text-sm text-text-muted min-h-[60px]">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-extrabold text-ink">{plan.price}</span>
                <span className="text-sm font-medium text-text-muted">/month</span>
              </div>

              <div className="mt-4 rounded-xl bg-chat-cream px-4 py-3 text-sm font-semibold text-primary-dark border border-border">
                {plan.limit}
              </div>

              {plan.nextTier && (
                <p className="mt-3 text-xs text-text-muted">{plan.nextTier}</p>
              )}

              <div className="my-6 h-px bg-border"></div>

              <ul className="space-y-4 text-sm text-ink font-normal">
                {commonFeatures.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-x-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-chat-green text-primary-dark border border-border/20">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.7 4.15a.75.75 0 01.14 1.05l-8 10.5a.75.75 0 01-1.13.08l-4.5-4.5a.75.75 0 011.06-1.06l3.9 3.89 7.48-9.82a.75.75 0 011.05-.14z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {feature.name}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className={`cursor-pointer w-full rounded-[14px] py-3.5 font-semibold transition-all duration-300 border border-ink ${
                  plan.featured
                    ? "bg-primary text-ink hover:bg-ink hover:text-white"
                    : "bg-white text-ink hover:bg-chat-cream"
                }`}>
                  Get Started
                </button>
              </div>

              {plan.additionalFeature && (
                <div className="mt-4 text-center text-sm font-semibold text-primary-dark">
                  {plan.additionalFeature}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Advanced Plans */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 rounded-full bg-white text-ink border border-border text-sm font-medium tracking-wide shadow-sm">
            Advanced Options
          </div>
          <h3 className="text-2xl font-light text-ink">
            High-Volume Business Solutions
          </h3>
          <p className="mt-3 text-text-muted max-w-2xl mx-auto">
            For businesses that need more scale & flexibility with enterprise-grade solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(3).map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-[24px] border border-border p-8 bg-white transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-chat-cream border border-border rounded-xl">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-ink">
                  {plan.name}
                </h3>
              </div>
              
              <p className="mt-2 text-sm text-text-muted min-h-[60px]">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-extrabold text-ink">{plan.price}</span>
                <span className="text-sm font-medium text-text-muted">/month</span>
              </div>

              <div className="mt-4 rounded-xl bg-chat-cream px-4 py-3 text-sm font-semibold text-primary-dark border border-border">
                {plan.limit}
              </div>

              {plan.nextTier && (
                <p className="mt-3 text-xs text-text-muted">{plan.nextTier}</p>
              )}

              <div className="my-6 h-px bg-border"></div>

              <ul className="space-y-4 text-sm text-ink font-normal">
                {commonFeatures.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-x-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-chat-green text-primary-dark border border-border/20">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.7 4.15a.75.75 0 01.14 1.05l-8 10.5a.75.75 0 01-1.13.08l-4.5-4.5a.75.75 0 011.06-1.06l3.9 3.89 7.48-9.82a.75.75 0 011.05-.14z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {feature.name}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="cursor-pointer w-full rounded-[14px] py-3.5 font-semibold transition-all duration-300 border border-ink bg-white text-ink hover:bg-chat-cream">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}