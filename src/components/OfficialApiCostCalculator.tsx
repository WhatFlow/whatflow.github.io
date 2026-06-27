"use client";

import { useMemo, useState } from "react";

type MetaMarket = {
  market: string;
  emoji: string;
  marketing: number;
  utility: number;
  authentication: number;
  authInternational: number | null;
};

type AppPlanResult = {
  name: "Free to Install" | "Starter" | "Growth" | "Scale";
  basePrice: number;
  usageCost: number;
  total: number;
};

const metaRates: MetaMarket[] = [
  { market: "India", emoji: "🇮🇳", marketing: 0.0118, utility: 0.0014, authentication: 0.0014, authInternational: 0.0304 },
  { market: "Pakistan", emoji: "🇵🇰", marketing: 0.0473, utility: 0.01, authentication: 0.01, authInternational: 0.075 },
  { market: "USA & Canada", emoji: "🇺🇸", marketing: 0.025, utility: 0.0034, authentication: 0.0034, authInternational: null },
  { market: "United Kingdom", emoji: "🇬🇧", marketing: 0.0529, utility: 0.022, authentication: 0.022, authInternational: null },
  { market: "UAE", emoji: "🇦🇪", marketing: 0.0499, utility: 0.0157, authentication: 0.0157, authInternational: 0.051 },
  { market: "Saudi Arabia", emoji: "🇸🇦", marketing: 0.0501, utility: 0.0107, authentication: 0.0107, authInternational: 0.0598 },
  { market: "Germany", emoji: "🇩🇪", marketing: 0.1365, utility: 0.055, authentication: 0.055, authInternational: null },
  { market: "France", emoji: "🇫🇷", marketing: 0.0859, utility: 0.03, authentication: 0.03, authInternational: null },
  { market: "Brazil", emoji: "🇧🇷", marketing: 0.0625, utility: 0.0068, authentication: 0.0068, authInternational: null },
  { market: "Indonesia", emoji: "🇮🇩", marketing: 0.0411, utility: 0.025, authentication: 0.025, authInternational: 0.136 },
  { market: "Malaysia", emoji: "🇲🇾", marketing: 0.086, utility: 0.014, authentication: 0.014, authInternational: 0.0418 },
  { market: "South Africa", emoji: "🇿🇦", marketing: 0.0379, utility: 0.0076, authentication: 0.0076, authInternational: 0.02 },
  { market: "Nigeria", emoji: "🇳🇬", marketing: 0.0516, utility: 0.0067, authentication: 0.0067, authInternational: 0.075 },
  { market: "Egypt", emoji: "🇪🇬", marketing: 0.0644, utility: 0.0036, authentication: 0.0036, authInternational: 0.065 },
  { market: "Turkey", emoji: "🇹🇷", marketing: 0.0109, utility: 0.0009, authentication: 0.0009, authInternational: null },
];

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const integer = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const planDetails = {
  "Free to Install": {
    displayName: "Free Plan",
    subtitle: "Perfect for your current volume",
    bullets: [
      "Up to 100 messages/month included",
      "Pay only for extra messages",
      "No monthly subscription fee"
    ],
    limit: 100,
    excessRate: "$0.01",
    whyText: "Your estimated volume is below 1,000 messages, so the Free Plan is the most cost-effective."
  },
  "Starter": {
    displayName: "Starter Plan",
    subtitle: "Perfect for growing stores",
    bullets: [
      "Up to 5,000 messages/month included",
      "Lower per-message rate above limit",
      "Perfect for growing Shopify stores"
    ],
    limit: 5000,
    excessRate: "$0.004",
    whyText: "Your volume fits perfectly within the Starter limit, minimizing excess costs."
  },
  "Growth": {
    displayName: "Growth Plan",
    subtitle: "Best for established businesses",
    bullets: [
      "Up to 20,000 messages/month included",
      "Even lower per-message rate",
      "Standard WhatFlow features included"
    ],
    limit: 20000,
    excessRate: "$0.0025",
    whyText: "The Growth Plan is ideal for your volume, balancing base price and unit costs."
  },
  "Scale": {
    displayName: "Scale Plan",
    subtitle: "Designed for high-volume stores",
    bullets: [
      "Up to 75,000 messages/month included",
      "Volume-based discounted rates",
      "Highest feature limit and performance"
    ],
    limit: 75000,
    excessRate: "Graduated Scale",
    whyText: "For high volume, the Scale plan offers the lowest per-unit rate to maximize savings."
  }
};

function scaleUsageCost(messages: number) {
  let remaining = Math.max(0, messages - 75_000);
  const tierOne = Math.min(remaining, 125_000) * 0.0015;
  remaining = Math.max(0, remaining - 125_000);
  const tierTwo = Math.min(remaining, 300_000) * 0.001;
  remaining = Math.max(0, remaining - 300_000);
  return tierOne + tierTwo + remaining * 0.0008;
}

function calculateAppPlans(messages: number): AppPlanResult[] {
  return [
    {
      name: "Free to Install",
      basePrice: 0,
      usageCost: Math.max(0, messages - 100) * 0.01,
      total: 0 + Math.max(0, messages - 100) * 0.01
    },
    {
      name: "Starter",
      basePrice: 9.99,
      usageCost: Math.max(0, messages - 5_000) * 0.004,
      total: 9.99 + Math.max(0, messages - 5_000) * 0.004
    },
    {
      name: "Growth",
      basePrice: 29,
      usageCost: Math.max(0, messages - 20_000) * 0.0025,
      total: 29 + Math.max(0, messages - 20_000) * 0.0025
    },
    {
      name: "Scale",
      basePrice: 99,
      usageCost: scaleUsageCost(messages),
      total: 99 + scaleUsageCost(messages)
    }
  ];
}

function displayRate(rate: number) {
  return `$${rate.toFixed(4)}`;
}

export default function OfficialApiCostCalculator() {
  const [orders, setOrders] = useState<number>(650);
  const [messagesPerOrder, setMessagesPerOrder] = useState<number>(1);
  const [marketIndex, setMarketIndex] = useState<number>(1); // Pakistan by default
  const [messageType, setMessageType] = useState<"utility" | "marketing" | "authentication" | "mixed">("utility");

  // Checkboxes for Mixed/Advanced Mode
  const [useConfirmation, setUseConfirmation] = useState<boolean>(true);
  const [useFulfillment, setUseFulfillment] = useState<boolean>(false);
  const [useNotification, setUseNotification] = useState<boolean>(false);

  // Derive counts & categories based on selected mode
  const derivedMessagesPerOrder = useMemo(() => {
    if (messageType !== "mixed") {
      return messagesPerOrder;
    }
    return (useConfirmation ? 1 : 0) + (useFulfillment ? 1 : 0) + (useNotification ? 1 : 0);
  }, [messageType, messagesPerOrder, useConfirmation, useFulfillment, useNotification]);

  const messageSplit = useMemo(() => {
    const totalOrders = Math.max(0, Math.floor(orders));
    if (messageType === "utility") {
      return { utility: totalOrders * derivedMessagesPerOrder, marketing: 0, authentication: 0 };
    }
    if (messageType === "marketing") {
      return { utility: 0, marketing: totalOrders * derivedMessagesPerOrder, authentication: 0 };
    }
    if (messageType === "authentication") {
      return { utility: 0, marketing: 0, authentication: totalOrders * derivedMessagesPerOrder };
    }
    // Mixed Mode
    const utilityPerOrder = (useConfirmation ? 1 : 0) + (useFulfillment ? 1 : 0);
    const marketingPerOrder = (useNotification ? 1 : 0);
    return {
      utility: totalOrders * utilityPerOrder,
      marketing: totalOrders * marketingPerOrder,
      authentication: 0
    };
  }, [orders, messageType, derivedMessagesPerOrder, useConfirmation, useFulfillment, useNotification]);

  const totalMessageCount = useMemo(() => {
    return messageSplit.utility + messageSplit.marketing + messageSplit.authentication;
  }, [messageSplit]);

  const market = useMemo(() => {
    return metaRates[marketIndex] ?? metaRates[0];
  }, [marketIndex]);

  const metaCharges = useMemo(() => {
    const utilityCost = messageSplit.utility * market.utility;
    const marketingCost = messageSplit.marketing * market.marketing;
    const authenticationCost = messageSplit.authentication * market.authentication;
    const total = utilityCost + marketingCost + authenticationCost;
    return { utilityCost, marketingCost, authenticationCost, total };
  }, [messageSplit, market]);

  const appPlanOptions = useMemo(() => {
    return calculateAppPlans(totalMessageCount);
  }, [totalMessageCount]);

  const recommendedPlan = useMemo(() => {
    const eligiblePlans = totalMessageCount > 100
      ? appPlanOptions.filter((plan) => plan.name !== "Free to Install")
      : appPlanOptions;
    return eligiblePlans.reduce((best, plan) => (plan.total < best.total ? plan : best));
  }, [appPlanOptions, totalMessageCount]);

  const planInfo = useMemo(() => {
    return planDetails[recommendedPlan.name];
  }, [recommendedPlan]);

  const overallTotal = useMemo(() => {
    return recommendedPlan.total + metaCharges.total;
  }, [recommendedPlan, metaCharges]);

  // Determine standard upgrade recommendation tip
  const optimizationTip = useMemo(() => {
    if (recommendedPlan.name === "Free to Install" && totalMessageCount > 1000) {
      return "As your volume grows, upgrading to the Starter Plan ($9.99/month for up to 5,000 messages) can save you more on extra usage costs!";
    }
    if (recommendedPlan.name === "Starter" && totalMessageCount > 10000) {
      return "As your volume grows, upgrading to the Growth Plan ($29/month for up to 20,000 messages) can save you more on extra usage costs!";
    }
    if (recommendedPlan.name === "Growth" && totalMessageCount > 40000) {
      return "As your volume grows, upgrading to the Scale Plan ($99/month for up to 75,000 messages) can save you more on extra usage costs!";
    }
    return null;
  }, [recommendedPlan, totalMessageCount]);

  return (
    <section className="bg-slate-50 py-20" aria-labelledby="cost-calculator-heading">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-center">
          <div>
            <h2 id="cost-calculator-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Calculate Your <span className="text-emerald-600">Monthly Cost</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Get an instant estimate and find the perfect plan for your store.
            </p>
          </div>
          
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4 text-sm text-emerald-950">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white font-bold">✦</span>
            <div>
              <p className="font-semibold text-gray-900">No hidden fees. Pay only for what you use.</p>
              <p className="text-xs text-gray-600">WhatFlow charges + Meta (WhatsApp) charges.</p>
            </div>
          </div>
        </div>

        {/* 1. Enter Your Details Form */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-bold text-gray-900">1. Enter Your Details</h3>
          
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {/* Orders Input */}
            <div className="flex flex-col">
              <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-600">
                Monthly Orders
                <span className="inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-400" title="Expected total checkout orders from your store per month.">i</span>
              </label>
              <input
                type="number"
                min="0"
                value={orders}
                onChange={(e) => setOrders(Math.max(0, parseInt(e.target.value) || 0))}
                className="mt-2 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
              />
              <span className="mt-1 text-[11px] text-gray-400">Required</span>
            </div>

            {/* Messages per Order */}
            <div className="flex flex-col">
              <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-600">
                Average Messages per Order
                <span className="inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-400" title="The number of automated WhatsApp alerts sent for each order.">i</span>
              </label>
              <input
                type="number"
                min="1"
                disabled={messageType === "mixed"}
                value={derivedMessagesPerOrder}
                onChange={(e) => setMessagesPerOrder(Math.max(1, parseInt(e.target.value) || 1))}
                className="mt-2 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 disabled:bg-gray-50 disabled:text-gray-400"
              />
              <span className="mt-1 text-[11px] text-gray-400">
                {messageType === "mixed" ? "Calculated from options" : "Default is 1"}
              </span>
            </div>

            {/* Message Type Selector tabs */}
            <div className="flex flex-col lg:col-span-2">
              <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-600">
                Message Type
                <span className="inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-400" title="Meta separates pricing depending on template category (Utility, Marketing, or Authentication).">i</span>
              </label>
              
              <div className="mt-2 grid grid-cols-4 rounded-xl border border-gray-200 p-1 bg-gray-50/50">
                <button
                  type="button"
                  onClick={() => setMessageType("utility")}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold transition ${
                    messageType === "utility"
                      ? "bg-white text-emerald-700 shadow-sm border border-emerald-100"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Utility
                </button>

                <button
                  type="button"
                  onClick={() => setMessageType("marketing")}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold transition ${
                    messageType === "marketing"
                      ? "bg-white text-emerald-700 shadow-sm border border-emerald-100"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  Marketing
                </button>

                <button
                  type="button"
                  onClick={() => setMessageType("authentication")}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold transition ${
                    messageType === "authentication"
                      ? "bg-white text-emerald-700 shadow-sm border border-emerald-100"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Authentication
                </button>

                <button
                  type="button"
                  onClick={() => setMessageType("mixed")}
                  className={`relative flex flex-col items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold transition ${
                    messageType === "mixed"
                      ? "bg-white text-emerald-700 shadow-sm border border-emerald-100"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <span className="absolute -top-2 right-1 rounded bg-indigo-100 px-1 text-[8px] font-bold uppercase tracking-wider text-indigo-700">Advanced</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                  Mixed
                </button>
              </div>
              <span className="mt-1 text-[11px] text-gray-400">Choose the type of WhatsApp messages you'll send.</span>
            </div>
          </div>

          {/* Mixed Category Options / Checkboxes */}
          {messageType === "mixed" && (
            <div className="mt-6 border-t border-dashed border-gray-200 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600">Select Messaging Features</h4>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                <label className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition ${useConfirmation ? "border-emerald-200 bg-emerald-50/20" : "border-gray-200 hover:bg-gray-50"}`}>
                  <input
                    type="checkbox"
                    checked={useConfirmation}
                    onChange={(e) => setUseConfirmation(e.target.checked)}
                    className="mt-1 rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Order Confirmation</p>
                    <p className="text-xs text-gray-500">+1 Utility Message per order</p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition ${useFulfillment ? "border-emerald-200 bg-emerald-50/20" : "border-gray-200 hover:bg-gray-50"}`}>
                  <input
                    type="checkbox"
                    checked={useFulfillment}
                    onChange={(e) => setUseFulfillment(e.target.checked)}
                    className="mt-1 rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Fulfillment & Shipping Alerts</p>
                    <p className="text-xs text-gray-500">+1 Utility Message per order</p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition ${useNotification ? "border-emerald-200 bg-emerald-50/20" : "border-gray-200 hover:bg-gray-50"}`}>
                  <input
                    type="checkbox"
                    checked={useNotification}
                    onChange={(e) => setUseNotification(e.target.checked)}
                    className="mt-1 rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Marketing Notifications</p>
                    <p className="text-xs text-gray-500">+1 Marketing Message per order</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Country Selection */}
          <div className="mt-6 border-t border-gray-100 pt-6 max-w-sm">
            <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-600">
              Country (Optional)
              <span className="inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-400" title="WhatsApp Meta rates differ by recipient country. Select your main market.">i</span>
            </label>
            <select
              value={marketIndex}
              onChange={(e) => setMarketIndex(parseInt(e.target.value))}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-emerald-500"
            >
              {metaRates.map((rate, index) => (
                <option key={rate.market} value={index}>
                  {rate.emoji} {rate.market}
                </option>
              ))}
            </select>
            <span className="mt-1 block text-[11px] text-gray-400">Used for Meta pricing</span>
          </div>
        </div>

        {/* 4 Column Cards Layout */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          
          {/* RECOMMENDED PLAN CARD */}
          <div className="relative flex flex-col rounded-3xl border border-emerald-500 bg-white p-6 shadow-sm ring-2 ring-emerald-500/10">
            <span className="absolute -top-3.5 right-6 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Best Value</span>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">🏆 Recommended Plan</p>
            
            <h4 className="mt-3 text-2xl font-bold text-gray-900">{planInfo.displayName}</h4>
            <p className="text-xs text-gray-500">{planInfo.subtitle}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {planInfo.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                  <svg className="h-4 w-4 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-800">Why this plan?</p>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{planInfo.whyText}</p>
            </div>
          </div>

          {/* MONTHLY MESSAGE ESTIMATE CARD */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">2. Monthly Message Estimate</p>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gray-50 p-4 text-center">
                  <div className="flex justify-center mb-1 text-gray-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Estimated Orders</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-600 tabular-nums">{integer.format(orders)}</p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4 text-center">
                  <div className="flex justify-center mb-1 text-gray-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Estimated Messages</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-600 tabular-nums">{integer.format(totalMessageCount)}</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-gray-500 font-medium">
              {integer.format(orders)} orders × {derivedMessagesPerOrder} messages per order
            </p>
          </div>

          {/* WHATFLOW CHARGES CARD */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">3. WhatFlow Charges</p>
              
              <dl className="mt-6 space-y-3.5 text-xs">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Subscription Fee</dt>
                  <dd className="font-semibold text-gray-900 tabular-nums">{usd.format(recommendedPlan.basePrice)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Included Messages</dt>
                  <dd className="font-semibold text-gray-900 tabular-nums">{integer.format(planInfo.limit)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Extra Messages</dt>
                  <dd className="font-semibold text-gray-900 tabular-nums">
                    {integer.format(Math.max(0, totalMessageCount - planInfo.limit))}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Extra Usage Cost ({planInfo.excessRate}/msg)</dt>
                  <dd className="font-semibold text-gray-900 tabular-nums">{usd.format(recommendedPlan.usageCost)}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-4 flex justify-between items-center">
              <span className="text-xs font-bold text-gray-900">Total WhatFlow</span>
              <span className="text-lg font-bold text-emerald-600 tabular-nums">{usd.format(recommendedPlan.total)}</span>
            </div>
          </div>

          {/* META CHARGES CARD */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">4. Meta (WhatsApp) Charges</p>
              
              <dl className="mt-6 space-y-3.5 text-[11px]">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Utility Messages<br/><span className="text-[10px] text-gray-400">{integer.format(messageSplit.utility)} × {displayRate(market.utility)}</span></dt>
                  <dd className="font-semibold text-gray-900 self-center tabular-nums">{usd.format(metaCharges.utilityCost)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Marketing Messages<br/><span className="text-[10px] text-gray-400">{integer.format(messageSplit.marketing)} × {displayRate(market.marketing)}</span></dt>
                  <dd className="font-semibold text-gray-900 self-center tabular-nums">{usd.format(metaCharges.marketingCost)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Authentication Messages<br/><span className="text-[10px] text-gray-400">{integer.format(messageSplit.authentication)} × {displayRate(market.authentication)}</span></dt>
                  <dd className="font-semibold text-gray-900 self-center tabular-nums">{usd.format(metaCharges.authenticationCost)}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-gray-900">Total Meta Charges</span>
                <span className="text-lg font-bold text-emerald-600 tabular-nums">{usd.format(metaCharges.total)}</span>
              </div>
              <div className="rounded-lg bg-blue-50 p-2.5 text-[10px] text-blue-800 leading-normal">
                ℹ️ Meta charges are billed separately by WhatsApp based on message type.
              </div>
            </div>
          </div>
        </div>

        {/* 5. Total Estimated Monthly Cost & Upgrade Tip */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          
          {/* Total Monthly Cost bar */}
          <div className="lg:col-span-2 rounded-3xl bg-amber-50/50 border border-amber-200/60 p-6 flex flex-col justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">5. Total Estimated Monthly Cost</h4>
            <p className="text-[11px] text-gray-400 mt-1">All costs in USD</p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Formula Breakdown */}
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-900">
                <div className="rounded-xl bg-white border border-gray-200 px-4 py-2.5 shadow-sm text-center">
                  <p className="text-[10px] text-gray-400 font-medium">WhatFlow Charges</p>
                  <p className="text-base font-bold tabular-nums">{usd.format(recommendedPlan.total)}</p>
                </div>
                <span className="text-gray-400 font-bold text-lg">+</span>
                <div className="rounded-xl bg-white border border-gray-200 px-4 py-2.5 shadow-sm text-center">
                  <p className="text-[10px] text-gray-400 font-medium">Meta (WhatsApp) Charges</p>
                  <p className="text-base font-bold tabular-nums">{usd.format(metaCharges.total)}</p>
                </div>
              </div>

              <span className="hidden sm:inline text-gray-400 font-bold text-lg">=</span>

              {/* Total green pill */}
              <div className="rounded-2xl bg-emerald-600 px-6 py-4 text-white shadow-md text-center sm:text-right">
                <p className="text-[10px] text-emerald-100 font-bold uppercase tracking-wider">Total Monthly Cost</p>
                <p className="text-2xl font-extrabold tabular-nums mt-0.5">{usd.format(overallTotal)} <span className="text-sm font-medium">/ month</span></p>
              </div>

            </div>
          </div>

          {/* Tips Box */}
          <div className="rounded-3xl bg-indigo-50/50 border border-indigo-100 p-6 flex flex-col">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider">
              <span className="text-base">💡</span> Tip
            </div>
            
            <p className="mt-3 text-xs leading-relaxed text-indigo-950 flex-1">
              {optimizationTip ? (
                optimizationTip
              ) : (
                "Monitor your average delivery and read rates. High template engagement reduces overall customer communication overhead."
              )}
            </p>
          </div>

        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-[11px] text-gray-400 leading-normal max-w-2xl mx-auto">
          Note: Estimates assume approximately {derivedMessagesPerOrder} WhatsApp message(s) per order. Actual costs may vary based on your message types, template categories, and actual delivery rates.
        </p>

      </div>
    </section>
  );
}
