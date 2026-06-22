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
      icon: "🌱",
    },
    {
      name: "Starter",
      description: "Up to 1,500 messages, then auto-upgrades to Growth plan.",
      price: "$4.99",
      limit: "1,500 messages",
      nextTier: "Up to 1,500 messages, then auto-upgrades to Growth plan.",
      featured: false,
      additionalFeature: "3-day free trial",
      icon: "🚀",
    },
    {
      name: "Growth",
      description: "Up to 5,000 messages, then auto-upgrades to Professional plan.",
      price: "$14.99",
      limit: "5,000 messages",
      nextTier: "Up to 5,000 messages, then auto-upgrades to Professional plan.",
      featured: true,
      popular: "Most Popular",
      icon: "📈",
    },
    {
      name: "Enterprise",
      description: "Up to 10,000 messages, then auto-upgrades to Ultimate plan.",
      price: "$24.99",
      limit: "10,000 messages",
      nextTier: "Up to 10,000 messages, then auto-upgrades to Ultimate plan.",
      featured: false,
      icon: "🏢",
    },
    {
      name: "Professional",
      description: "Up to 25,000 messages, then auto-upgrades to Enterprise plan.",
      price: "$49.99",
      limit: "25,000 messages",
      nextTier: "Up to 25,000 messages, then auto-upgrades to Enterprise plan.",
      featured: false,
      icon: "💼",
    },
    {
      name: "Ultimate",
      description: "No limits! Maximum automation for large businesses.",
      price: "$99.99",
      limit: "No limits!",
      nextTier: "",
      featured: false,
      icon: "🌟",
    },
  ];

  const PlanCard = ({ plan, accent }: { plan: typeof plans[0]; accent: "emerald" | "teal" }) => (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white/90 backdrop-blur-md p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        plan.featured
          ? "border-emerald-500 ring-2 ring-emerald-500"
          : `border-gray-200 hover:border-${accent}-300`
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-1.5 text-xs font-semibold uppercase text-white shadow-lg shadow-emerald-500/30">
            {plan.popular}
          </span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{plan.icon}</span>
        <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${accent}-600 to-teal-600`}>
          {plan.name}
        </h3>
      </div>

      <p className="mt-2 text-sm text-gray-600 min-h-[60px]">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-x-2">
        <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
        <span className="text-sm font-medium text-gray-500">/month</span>
      </div>

      <div className={`mt-4 rounded-xl bg-gradient-to-r from-${accent}-50 to-teal-50 px-4 py-3 text-sm font-medium text-${accent}-700 border border-${accent}-100/50`}>
        {plan.limit}
      </div>

      {plan.nextTier && (
        <p className="mt-3 text-xs text-gray-500">{plan.nextTier}</p>
      )}

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <ul className="space-y-4 text-sm text-gray-700">
        {commonFeatures.map((feature) => (
          <li key={feature.name} className="flex items-start gap-x-3">
            <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-${accent}-50 text-${accent}-600`}>
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.7 4.15a.75.75 0 01.14 1.05l-8 10.5a.75.75 0 01-1.13.08l-4.5-4.5a.75.75 0 011.06-1.06l3.9 3.89 7.48-9.82a.75.75 0 011.05-.14z" clipRule="evenodd" />
              </svg>
            </span>
            {feature.name}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button className={`cursor-pointer w-full rounded-xl py-3.5 font-medium transition-all duration-200 ${
          plan.featured
            ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            : "bg-white text-emerald-600 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50"
        }`}>
          Get Started
        </button>
      </div>

      {plan.additionalFeature && (
        <div className="mt-4 text-center text-sm font-semibold text-emerald-600">
          ✨ {plan.additionalFeature}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-teal-50 to-green-50 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-teal-100/30 to-teal-300/20 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100/20 to-indigo-200/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-gradient-to-br from-purple-100/20 to-pink-200/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 ring-1 ring-emerald-200 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur mb-3">
            <span className="text-base">📡</span> OFFICIAL API PRICING
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Official API Pricing Plans
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Use the WhatsApp Official Business API for verified, high-volume messaging.
            Select the plan that fits your business scale.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(0, 3).map((plan) => (
            <PlanCard key={plan.name} plan={plan} accent="emerald" />
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium tracking-wide shadow-lg shadow-emerald-500/20">
            Advanced Options
          </div>
          <h3 className="text-2xl font-bold text-gray-900">High-Volume Business Solutions</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            For businesses that need more scale & flexibility with enterprise-grade solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(3).map((plan) => (
            <PlanCard key={plan.name} plan={plan} accent="teal" />
          ))}
        </div>
      </div>
    </div>
  );
}
