export default function Features() {
  const features = [
    {
      name: 'Automated Confirmations',
      description:
        'Automatically send confirmation messages to your customers via WhatsApp and track their responses.',
      icon: (
        <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Appointment Reminders',
      description:
        'Send automated appointment reminders to reduce no-shows and improve customer experience.',
      icon: (
        <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Customer Follow-ups',
      description:
        'Follow up with customers after appointments or purchases to ensure satisfaction and gather feedback.',
      icon: (
        <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6.8 2.4 1.5 3.07A5.782 5.782 0 0010.5 19.5a.75.75 0 00.75-.75V16.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.37a19.244 19.244 0 01-3.01-2.77A1.903 1.903 0 013 13.5V12c0-.267.017-.533.05-.795.099-.078.2-.149.303-.214A6.71 6.71 0 017.5 10.25a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75 8.25 8.25 0 00-5.467 2.059A.75.75 0 001.5 10v1.5c0 1.765.37 3.116.856 4.143a.866.866 0 01.08.34zm10.114-3.01a1.893 1.893 0 01.526 1.334c0 .466-.19.89-.526 1.175A11.006 11.006 0 0114.341 19.5a.75.75 0 00.75.75h3.09a.75.75 0 00.651-1.127c-.306-.674-.776-1.443-1.357-2.177a7.987 7.987 0 00-1.135-1.197A1.903 1.903 0 0116.5 13.5v-1.25a.75.75 0 00-1.199-.6zM5.828 10.75a9.958 9.958 0 00-.438-.293 5.822 5.822 0 00-.532-.29 7.165 7.165 0 011.905-.408 9 9 0 01.932.044.75.75 0 00.84-.69v-.522c0-.166-.037-.328-.11-.477-.136-.271-.36-.488-.641-.587a8.236 8.236 0 00-1.888-.308 9.755 9.755 0 00-2.656.281c-.189.06-.33.19-.4.334C2.756 7.442 2.25 8.258 2.25 9a2.41 2.41 0 001.4 2.187 9.63 9.63 0 002.726.764.75.75 0 00.84-.69v-.358c0-.166-.037-.327-.11-.477a1.106 1.106 0 00-.278-.392z" />
        </svg>
      ),
    },
    {
      name: 'Message Templates',
      description:
        'Create custom message templates for different scenarios and automate their delivery to the right customers.',
      icon: (
        <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      name: 'Analytics Dashboard',
      description:
        'Track message delivery, open rates, response rates, and customer engagement with our comprehensive analytics.',
      icon: (
        <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp Business API',
      description:
        'Seamlessly integrate with WhatsApp Business API to enable automated business communication at scale.',
      icon: (
        <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green">Efficient Communication</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to automate your WhatsApp communication
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools you need to streamline your customer communication through WhatsApp, saving you time and improving engagement.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 