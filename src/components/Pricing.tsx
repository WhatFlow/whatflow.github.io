import Link from 'next/link';

export default function Pricing() {
  // Common features for all plans since they don't vary
  const commonFeatures = [
    { name: 'WhatsApp Business API integration', included: true },
    { name: 'Custom templates', included: true },
    { name: 'Automated workflows', included: true },
    { name: 'Advanced reporting & analytics', included: true },
    { name: 'Priority support', included: true }
  ];

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for small needs! Send up to 50 messages per month at no cost.',
      price: '$0',
      limit: '50 messages',
      nextTier: 'Up to 50 messages, then auto-upgrades to Starter plan.',
      featured: false
    },
    {
      name: 'Starter',
      description: 'Ideal for small-scale users, offering up to 2,500 messages before automatic upgrades.',
      price: '$4.99',
      limit: '2,500 messages',
      nextTier: 'Up to 2,500 messages, then auto-upgrades to Growth plan.',
      featured: false,
      additionalFeature: '3-day free trial'
    },
    {
      name: 'Growth',
      description: 'Perfect for expanding businesses, allowing up to 5,000 messages before upgrading',
      price: '$9.99',
      limit: '5,000 messages',
      nextTier: 'Up to 5,000 messages, then auto-upgrades to Professional plan.',
      featured: true,
      popular: 'Most Popular'
    },
    {
      name: 'Professional',
      description: 'Designed for growing businesses, handling up to 10,000 messages with seamless scaling.',
      price: '$14.99',
      limit: '10,000 messages',
      nextTier: 'Up to 10,000 messages, then auto-upgrades to Enterprise plan.',
      featured: false
    },
    {
      name: 'Enterprise',
      description: 'Perfect for high-demand operations, supporting up to 25,000 messages before upgrading.',
      price: '$24.99',
      limit: '25,000 messages',
      nextTier: 'Up to 25,000 messages, then auto-upgrades to Ultimate plan.',
      featured: false
    },
    {
      name: 'Ultimate',
      description: 'The all-inclusive plan with unlimited messaging, ensuring maximum reach with no limits.',
      price: '$49.99',
      limit: 'No limits!',
      nextTier: '',
      featured: false
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green">Pricing Plans</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Select a plan</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your business needs. Scale as you grow with our flexible pricing options.
          </p>
        </div>

        {/* Plan comparison cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.slice(0, 3).map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl p-8 ring-1 shadow-sm xl:p-10 ${
                plan.featured
                  ? 'bg-white ring-2 ring-green shadow-xl relative'
                  : 'ring-gray-200 bg-white/60'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32">
                  <div className="py-1 px-3 text-xs font-medium tracking-wide text-white bg-green rounded-full text-center">
                    {plan.popular}
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between gap-x-4">
                <h3 
                  className={`text-2xl font-bold leading-8 ${
                    plan.featured ? 'text-teal-dark' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">{plan.description}</p>
              <div className={`mt-6 flex items-baseline gap-x-1 ${plan.featured ? 'text-teal-dark' : ''}`}>
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/ mo</span>
              </div>
              <div className="mt-4 rounded-md bg-green-light/20 px-3 py-2">
                <p className="text-sm font-medium text-teal-dark">
                  + {plan.limit}
                </p>
              </div>
              <p className="mt-4 text-xs leading-6 text-gray-500">
                {plan.nextTier}
              </p>
              
              {/* Features list */}
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {commonFeatures.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature.name}</span>
                  </li>
                ))}
              </ul>
              
              {plan.additionalFeature && (
                <div className="mt-8 flex items-center justify-center text-sm text-teal">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {plan.additionalFeature}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Advanced plans */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Advanced Plans</h3>
          <p className="mt-2 text-sm text-gray-500">For businesses that need more power and flexibility</p>
        </div>
        
        <div className="isolate mx-auto mt-6 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.slice(3).map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-3xl p-8 ring-1 ring-gray-200 shadow-sm bg-white/60 xl:p-10"
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-2xl font-bold leading-8 text-gray-900">
                  {plan.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/ mo</span>
              </div>
              <div className="mt-4 rounded-md bg-green-light/20 px-3 py-2">
                <p className="text-sm font-medium text-teal-dark">
                  + {plan.limit}
                </p>
              </div>
              {plan.nextTier && (
                <p className="mt-4 text-xs leading-6 text-gray-500">
                  {plan.nextTier}
                </p>
              )}
              
              {/* Features list */}
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {commonFeatures.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why choose WhatFlow */}
        <div className="mt-20 rounded-2xl bg-beige p-10">
          <h3 className="text-2xl font-bold text-teal-dark text-center mb-8">Why Choose WhatFlow?</h3>
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-x-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-green/10">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">Simple Integration</h4>
                <p className="mt-2 text-sm text-gray-600">Set up in minutes with our easy-to-use dashboard</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-green/10">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">Lightning Fast</h4>
                <p className="mt-2 text-sm text-gray-600">Messages delivered instantly, ensuring timely communication</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-green/10">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">Secure & Reliable</h4>
                <p className="mt-2 text-sm text-gray-600">Enterprise-grade security for all your messages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note about Shopify subscription */}
        <div className="mx-auto max-w-4xl mt-12 text-center">
          <div className="rounded-lg bg-teal-dark/5 p-6">
            <h3 className="text-lg font-semibold text-teal-dark mb-2">Manage your subscription through Shopify</h3>
            <p className="text-sm text-gray-600">
              All plans include the same features. Subscriptions are managed through the Shopify app store.
              Your plan will automatically adjust based on your messaging volume.
            </p>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto max-w-4xl mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
          <dl className="space-y-6 divide-y divide-gray-200">
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">How does the message limit work?</dt>
              <dd className="mt-2 text-sm text-gray-600">Each plan includes a set number of messages per month. If you exceed your limit, you'll automatically be upgraded to the next tier to ensure uninterrupted service.</dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">Can I downgrade my plan?</dt>
              <dd className="mt-2 text-sm text-gray-600">Yes, you can downgrade your plan at any time through Shopify. Changes will take effect at the start of your next billing cycle.</dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">Are all features available on every plan?</dt>
              <dd className="mt-2 text-sm text-gray-600">Yes, all plans include the same feature set. The only difference between plans is the number of messages you can send per month.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 