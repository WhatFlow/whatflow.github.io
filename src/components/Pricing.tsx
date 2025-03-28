import Link from 'next/link';

export default function Pricing() {
  // Common features for all plans since they don't vary
  const commonFeatures = [
    { name: 'Connect with your regular WhatsApp account', included: true },
    { name: 'Order confirmation automations', included: true },
    { name: 'Abandoned cart recovery', included: true },
    { name: 'Order fulfillment notifications', included: true },
    { name: 'Cancellation management', included: true },
    { name: 'Custom message templates', included: true },
    { name: 'Advanced analytics dashboard', included: true }
  ];

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for testing our full automation suite with limited message volume.',
      price: '$0',
      limit: '50 messages',
      nextTier: 'Up to 50 messages, then auto-upgrades to Starter plan.',
      featured: false
    },
    {
      name: 'Starter',
      description: 'Ideal for small businesses beginning to leverage WhatsApp automation.',
      price: '$4.99',
      limit: '2,500 messages',
      nextTier: 'Up to 2,500 messages, then auto-upgrades to Growth plan.',
      featured: false,
      additionalFeature: '3-day free trial'
    },
    {
      name: 'Growth',
      description: 'Perfect for growing businesses with increasing automation needs.',
      price: '$9.99',
      limit: '5,000 messages',
      nextTier: 'Up to 5,000 messages, then auto-upgrades to Professional plan.',
      featured: true,
      popular: 'Most Popular'
    },
    {
      name: 'Professional',
      description: 'Designed for established businesses with substantial customer communication.',
      price: '$14.99',
      limit: '10,000 messages',
      nextTier: 'Up to 10,000 messages, then auto-upgrades to Enterprise plan.',
      featured: false
    },
    {
      name: 'Enterprise',
      description: 'For high-volume businesses that need extensive automation capabilities.',
      price: '$24.99',
      limit: '25,000 messages',
      nextTier: 'Up to 25,000 messages, then auto-upgrades to Ultimate plan.',
      featured: false
    },
    {
      name: 'Ultimate',
      description: 'Unlimited messaging for large businesses with maximum automation needs.',
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
            Choose the perfect plan for your WhatsApp automation needs. All plans include our complete suite of automation features.
          </p>
        </div>

        <div className="mt-10 bg-white rounded-3xl p-8 ring-1 ring-gray-200 shadow-sm">
          <p className="text-center text-gray-600 mb-4">All plans include the same powerful features with Shopify subscription management. The only difference is the number of messages you can send per month.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-12 w-12 rounded-md bg-teal/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Boost Conversion Rates</h4>
              <p className="text-gray-600">Recover abandoned carts and increase purchase completion with timely WhatsApp messages.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-12 w-12 rounded-md bg-teal/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Complete Customer Journey</h4>
              <p className="text-gray-600">Engage customers at every stage from browsing to post-purchase with a seamless communication experience.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-12 w-12 rounded-md bg-teal/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Customer Experience</h4>
              <p className="text-gray-600">Provide timely updates and personalized communication that builds trust and loyalty with your customers.</p>
            </div>
          </div>
        </div>

        {/* Note about Shopify subscription */}
        <div className="mx-auto max-w-4xl mt-12 text-center">
          <div className="rounded-lg bg-teal-dark/5 p-6">
            <h3 className="text-lg font-semibold text-teal-dark mb-2">Seamless Flex Billing Through Shopify</h3>
            <p className="text-sm text-gray-600 mb-3">
              All plans include the same features. Subscriptions are managed through the Shopify app store with our flexible billing system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-teal-dark font-medium mb-1">Automatic Upgrades</div>
                <p className="text-xs text-gray-600">Your plan automatically adjusts based on your messaging volume, with no manual intervention required.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-teal-dark font-medium mb-1">Continuous Service</div>
                <p className="text-xs text-gray-600">No interruptions when you hit usage limits - smoothly transition between plans without service gaps.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-teal-dark font-medium mb-1">Predictable Billing</div>
                <p className="text-xs text-gray-600">Remain on your upgraded plan for the next cycle with clear communication about all changes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto max-w-4xl mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
          <dl className="space-y-6 divide-y divide-gray-200">
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">How does the message limit work?</dt>
              <dd className="mt-2 text-sm text-gray-600">Each plan includes a set number of messages per month across all automation types. If you exceed your limit, you'll automatically be upgraded to the next tier to ensure uninterrupted service.</dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">What happens if I exceed my plan's message limit?</dt>
              <dd className="mt-2 text-sm text-gray-600">We use flex billing, which automatically upgrades you to the next tier when you reach your limit. Your service continues without interruption, and you'll receive a notification about the change. You don't need to manually upgrade or worry about service disruptions.</dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">How does your flex billing system work?</dt>
              <dd className="mt-2 text-sm text-gray-600">Unlike traditional subscription models that require manual upgrades, our flex billing system automatically moves you to higher tiers when usage thresholds are met. Your usage doesn't reset monthly, and transitions between billing cycles are smooth with no interruption in service. You'll always remain on your upgraded plan for the next cycle, ensuring predictable billing.</dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">Can I downgrade my plan?</dt>
              <dd className="mt-2 text-sm text-gray-600">Yes, you can downgrade your plan at any time through Shopify. Changes will take effect at the start of your next billing cycle.</dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">Are all automation features available on every plan?</dt>
              <dd className="mt-2 text-sm text-gray-600">Yes, all plans include our complete suite of automation features. The only difference between plans is the number of messages you can send per month.</dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold text-gray-900">Do I need to pay for Shopify separately?</dt>
              <dd className="mt-2 text-sm text-gray-600">Yes, WhatFlow is a Shopify app that requires an active Shopify subscription. Our pricing is for the WhatFlow service only and is billed through your Shopify account.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 