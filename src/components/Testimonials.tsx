import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "WhatFlow has completely transformed our customer confirmation process. We've reduced no-shows by 45% and saved countless hours on manual follow-ups.",
      author: {
        name: 'Sarah Johnson',
        role: 'Office Manager, Dental Clinic',
        imageUrl: '/testimonial-1.jpg',
      },
    },
    {
      content:
        "Our clients love receiving confirmation messages via WhatsApp. It's more personal than email and more effective than phone calls. WhatFlow made implementation so easy.",
      author: {
        name: 'Michael Chen',
        role: 'CEO, Beauty Salon Chain',
        imageUrl: '/testimonial-2.jpg',
      },
    },
    {
      content:
        "The automated follow-up feature has helped us collect more customer feedback than ever before. Our service quality has improved significantly thanks to these insights.",
      author: {
        name: 'Emma Rodriguez',
        role: 'Customer Success Manager',
        imageUrl: '/testimonial-3.jpg',
      },
    },
  ];

  return (
    <div className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-teal">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See what our customers say
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