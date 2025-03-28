export default function Testimonials() {
  const testimonials = [
    {
      content:
        "WhatFlow has transformed how we connect with customers. The integration was incredibly simple - we just linked our existing WhatsApp account and set up the automations. The abandoned cart recovery feature alone increased our monthly revenue by 23%.",
      author: {
        name: 'Sarah Johnson',
        role: 'E-commerce Manager, Fashion Retailer',
        imageUrl: '/testimonial-1.jpg',
      },
    },
    {
      content:
        "What I love about WhatFlow is how fast we got it running. No complex API setup - just connected our regular WhatsApp account and we were sending automated updates in minutes. Our customer satisfaction scores have increased by 35%.",
      author: {
        name: 'Michael Chen',
        role: 'COO, Electronics Store',
        imageUrl: '/testimonial-2.jpg',
      },
    },
    {
      content:
        "We were hesitant about connecting our WhatsApp to a third party, but WhatFlow&apos;s security approach won us over. The setup was easy, our conversations remain private, and we&apos;ve boosted our repeat purchase rate by 28% with automated follow-ups.",
      author: {
        name: 'Emma Rodriguez',
        role: 'Digital Marketing Director',
        imageUrl: '/testimonial-3.jpg',
      },
    },
  ];

  return (
    <div id="about" className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-teal">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See how businesses are growing with simple WhatsApp automation
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.content}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="relative h-10 w-10 rounded-full bg-gray-50">
                      {/* Placeholder for testimonial images */}
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-teal to-green"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 