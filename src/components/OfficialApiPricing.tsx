<<<<<<< HEAD
type UsageTier = {
  usage: string;
  cost: string;
};

type Plan = {
  name: string;
  price: string;
  usageTiers: UsageTier[];
  tierNote?: string;
  featured?: boolean;
};

const features = [
  "Automated Order Fulfillment Alerts",
  "Custom WhatsApp Message Templates",
  "Template Library with Quick Setup",
  "WhatsApp Chat Button for Storefront",
  "Meta Business API Integration",
  "Live Delivery & Read Rate Analytics",
  "WhatsApp Order Confirmations",
  "Smart Auto-Reply Rules",
];

const plans: Plan[] = [
  {
    name: "Free to Install",
    price: "$0",
    usageTiers: [
      { usage: "First 100 Messages Sent", cost: "Free" },
      { usage: "101+ Messages Sent", cost: "$0.01" },
    ],
  },
  {
    name: "Starter",
    price: "$9.99",
    usageTiers: [
      { usage: "First 5,000 Messages Sent", cost: "Free" },
      { usage: "5,001+ Messages Sent", cost: "$0.004" },
    ],
  },
  {
    name: "Growth",
    price: "$29",
    usageTiers: [
      { usage: "First 20,000 Messages Sent", cost: "Free" },
      { usage: "20,001+ Messages Sent", cost: "$0.0025" },
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "$99",
    usageTiers: [
      { usage: "First 75,000 Messages Sent", cost: "Free" },
      { usage: "75,001 to 200,000 Messages Sent", cost: "$0.0015" },
      { usage: "200,001 to 500,000 Messages Sent", cost: "$0.001" },
      { usage: "500,001+ Messages Sent", cost: "$0.0008" },
    ],
    tierNote: "Each tier’s cost per unit only applies to usage within that tier.",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        plan.featured
          ? "border-emerald-500 ring-2 ring-emerald-500/20"
          : "border-gray-200"
      }`}
    >
      {plan.featured && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-white">
          Most Popular
        </div>
      )}

      <div className="px-6 pb-4 pt-6">
        <h3 className="text-base font-medium text-gray-700">{plan.name}</h3>
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-4xl font-bold tracking-tight text-gray-950">
            {plan.price}
=======
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
>>>>>>> 908b3178e43f26ee3c1217d681a66b3b63ee95bf
          </span>
          <span className="text-sm text-gray-500">/ month</span>
        </div>
<<<<<<< HEAD
        <p className="mt-1 text-sm text-gray-600">Plus usage charges</p>
      </div>

      <div className="border-y border-gray-200 bg-gray-50/70">
        <div className="grid grid-cols-[1.25fr_1fr] text-xs font-semibold text-gray-700">
          <div className="px-4 py-3">Monthly usage tier</div>
          <div className="border-l border-gray-200 px-4 py-3">Cost per unit</div>
        </div>

        {plan.usageTiers.map((tier) => (
          <div
            key={tier.usage}
            className="grid grid-cols-[1.25fr_1fr] border-t border-dashed border-gray-200 bg-white text-sm text-gray-600"
          >
            <div className="px-4 py-3">{tier.usage}</div>
            <div className="border-l border-dashed border-gray-200 px-4 py-3 font-medium text-gray-700">
              {tier.cost}
            </div>
          </div>
        ))}

        {plan.tierNote && (
          <p className="border-t border-gray-200 bg-white px-4 py-3 text-xs leading-5 text-gray-600">
            {plan.tierNote}
          </p>
        )}
=======
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
          <h1 className="text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Official API Pricing Plans
          </h1>
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
>>>>>>> 908b3178e43f26ee3c1217d681a66b3b63ee95bf
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="font-semibold text-gray-950">Features</h4>
        <ul className="mt-3 space-y-2.5 text-sm leading-5 text-gray-700">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <svg
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://apps.shopify.com/whatflow"
          className={`mt-7 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
            plan.featured
              ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:from-emerald-700 hover:to-teal-700"
              : "border border-emerald-200 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-50"
          }`}
        >
          Get Started
        </a>
      </div>
    </article>
  );
}

export default function OfficialApiPricing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-green-50 py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-36 -top-36 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-36 top-1/3 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
            <span aria-hidden="true">📡</span> OFFICIAL API PRICING
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Official API Pricing Plans
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Use the WhatsApp Official Business API for verified, high-volume messaging.
            Choose the plan that fits your business.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
