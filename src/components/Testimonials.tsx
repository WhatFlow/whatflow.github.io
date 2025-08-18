"use client";
import FadeInSection from "./FadeIn";
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "As the owner of Republic by Omar Farooq, a premium menswear brand, I’ve been using WhatFlow for WhatsApp automation on my Shopify store, and the results have been outstanding. Since integrating the app, I've seen a sales recovery rate of up to 70%. The automation has streamlined our customer communication, improved response times, and allowed us to engage with potential buyers in a much more personalized way. It’s been a game-changer for converting abandoned carts into actual sales. The user interface is intuitive and easy to set up, and the customer support team is always available and responsive. I highly recommend WhatFlow for any Shopify store looking to boost sales and enhance customer interaction through WhatsApp.",
      name: "Republic by Omar Farooq",
      country: "🇵🇰 Pakistan",
      rating: 5,
      initials: "OF",
      highlight: true,
    },
    {
      quote:
        "This app is a lifesaver for my business! The abandoned checkout retrieval has significantly boosted my conversions, and the automated order confirmation, fulfillment, and cancellation messages keep everything running smoothly. No more manual follow-ups--WhatFlow does it all for me! Easy to set up, reliable, and the support team is always helpful. If you run a Shopify store, this is a must-have!",
      name: "SKNS.PK",
      country: "🇺🇸 United States",
      rating: 5,
      initials: "SK",
    },
    {
      quote:
        "Just started using this app, and honestly it's very easy to use, I was previously using another app which does same work but thought I'd try this one, and honestly Whatflow is way too easy to manage and thanks to Tags feature, catering the orders daily is pretty simple, easy and manageable now!",
      name: "Dhaka Dash",
      country: "🇧🇩 Bangladesh",
      rating: 5,
      initials: "DD",
    },
    {
      quote:
        "A must-have app if you're serious about scaling your store. Manually confirming hundreds or thousands of orders daily is simply not feasible, and this app takes that burden off. Setup is quick, and support is responsive. Highly recommended for any store looking to streamline operations",
      name: "Go To Cart",
      country: "🇵🇰 Pakistan",
      rating: 5,
      initials: "GC",
    },
    {
      quote:
        "WhatFlow is a great tool for WhatsApp automation. It’s easy to use and works smoothly. The best part is their support team — very responsive, helpful, and always ready to guide you properly. Highly recommended for anyone looking to manage WhatsApp communication more efficiently.",
      name: "BiBi Boutiques",
      country: "🇵🇰 Pakistan",
      rating: 5,
      initials: "BB",
    },
  ];

  return (
    <div className="py-24 relative isolate overflow-hidden bg-gradient-to-br from-white via-teal-50 to-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeInSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800 shadow-sm">
              💬 TESTIMONIALS
            </h2>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              See how businesses grow with{" "}
              <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
                WhatsApp automation
              </span>
            </h2>
            <p className="mt-3 text-gray-600">
              Real stories from our customers about how automation made their
              work easier, faster, and more profitable.
            </p>
          </div>
        </FadeInSection>

        {/* Marquee Carousel */}
        <FadeInSection>
          <div className="mt-16 overflow-hidden">
            <Marquee
              gradient={false}
              speed={60} // slightly slower = smoother
              pauseOnHover
              pauseOnClick
              autoFill={false}
              className="py-2" // vertical breathing room
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="mx-4">
                  {" "}
                  {/* horizontal spacing between cards */}
                  <div
                    className={[
                      "w-[85vw] sm:min-w-[360px] max-w-sm flex-shrink-0 mb-7",
                      "rounded-2xl p-6 sm:p-7 min-h-[320px] sm:h-[330px]",
                      "bg-white/80 backdrop-blur-sm shadow-xl",
                      "ring-1 ring-gray-200/70 hover:ring-emerald-200/70",
                      "transition-all duration-400 hover:-translate-y-0.5",
                      t.highlight
                        ? "bg-gradient-to-br from-white via-white/85 to-emerald-50/70"
                        : "bg-gradient-to-br from-white via-white/80 to-slate-50/60",
                    ].join(" ")}
                  >
                    {/* Subtle corner sheen */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-px -right-px h-20 w-20 rounded-tr-2xl bg-gradient-to-bl from-emerald-200/40 via-transparent to-transparent"
                    />

                    {/* Stars */}
                    <div className="flex items-center gap-1.5 mb-4 text-amber-500">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <IconStarFilled
                          key={i}
                          size={18}
                          className="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed flex-grow line-clamp-6">
                      “{t.quote}”
                    </p>

                    {/* Person info */}
                    <div className="mt-6 flex items-center gap-3">
                      <Link
                        href="https://apps.shopify.com/whatflow/reviews?ratings%5B%5D=5"
                        target="_blank"
                      >
                        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white grid place-items-center font-semibold">
                          {t.initials}
                        </div>
                      </Link>
                      <div className="min-w-0">
                        <Link
                          href="https://apps.shopify.com/whatflow/reviews?ratings%5B%5D=5"
                          target="_blank"
                        >
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {t.name}
                          </p>
                        </Link>

                        <p className="text-xs text-gray-500">{t.country}</p>
                      </div>
                      <Link
                        href="https://apps.shopify.com/whatflow/reviews?ratings%5B%5D=5"
                        target="_blank"
                        className="ml-auto"
                      >
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Verified
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
