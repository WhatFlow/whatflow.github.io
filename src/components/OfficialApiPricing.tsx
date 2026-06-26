"use client";

import {
  Sprout,
  TrendingUp,
  LineChart,
  Briefcase,
  Building,
  Star,
} from "lucide-react";

export default function OfficialApiPricing() {
  const commonFeatures = [
    { name: "WhatsApp Official Business API access" },
    { name: "Order confirmation automations" },
    { name: "Abandoned cart recovery" },
    { name: "Order fulfillment notifications" },
    { name: "Cancellation management" },
    { name: "Custom message templates" },
    { name: "Advanced analytics dashboard" },
  ];

  const plans = [
    {
      name: "Free",
      description: "Up to 100 messages, then auto-upgrades to Starter plan.",
      price: "$0",
      limit: "100 messages",
      nextTier: "Up to 100 messages, then auto-upgrades to Starter plan.",
      featured: false,
      icon: <Sprout className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Starter",
      description: "Up to 1,500 messages, then auto-upgrades to Growth plan.",
      price: "$4.99",
      limit: "1,500 messages",
      nextTier: "Up to 1,500 messages, then auto-upgrades to Growth plan.",
      featured: false,
      additionalFeature: "3-day free trial",
      icon: <TrendingUp className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Growth",
      description: "Up to 5,000 messages, then auto-upgrades to Professional plan.",
      price: "$14.99",
      limit: "5,000 messages",
      nextTier: "Up to 5,000 messages, then auto-upgrades to Professional plan.",
      featured: true,
      popular: "Most Popular",
      icon: <LineChart className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Enterprise",
      description: "Up to 10,000 messages, then auto-upgrades to Ultimate plan.",
      price: "$24.99",
      limit: "10,000 messages",
      nextTier: "Up to 10,000 messages, then auto-upgrades to Ultimate plan.",
      featured: false,
      icon: <Building className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Professional",
      description: "Up to 25,000 messages, then auto-upgrades to Enterprise plan.",
      price: "$49.99",
      limit: "25,000 messages",
      nextTier: "Up to 25,000 messages, then auto-upgrades to Enterprise plan.",
      featured: false,
      icon: <Briefcase className="w-6 h-6 text-primary-mid" />,
    },
    {
      name: "Ultimate",
      description: "No limits! Maximum automation for large businesses.",
      price: "$99.99",
      limit: "No limits!",
      nextTier: "",
      featured: false,
      icon: <Star className="w-6 h-6 text-primary-mid" />,
    },
  ];

  const PlanCard = ({ plan }: { plan: typeof plans[0] }) => (
    <div
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
                <path fillRule="evenodd" d="M16.7 4.15a.75.75 0 01.14 1.05l-8 10.5a.75.75 0 01-1.13.08l-4.5-4.5a.75.75 0 011.06-1.06l3.9 3.89 7.48-9.82a.75.75 0 011.05-.14z" clipRule="evenodd" />
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
  );

  return (
    <div className="relative min-h-screen bg-chat-cream py-24 sm:py-32 overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink border border-border shadow-sm mb-3">
            OFFICIAL API PRICING
          </span>
          <h2 className="text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Official API Pricing Plans
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Use the WhatsApp Official Business API for verified, high-volume messaging.
            Select the plan that fits your business scale.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(0, 3).map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 rounded-full bg-white text-ink border border-border text-sm font-medium tracking-wide shadow-sm">
            Advanced Options
          </div>
          <h3 className="text-2xl font-light text-ink">High-Volume Business Solutions</h3>
          <p className="mt-3 text-text-muted max-w-2xl mx-auto">
            For businesses that need more scale & flexibility with enterprise-grade solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(3).map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
