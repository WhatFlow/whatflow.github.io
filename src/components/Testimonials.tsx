"use client";
import FadeInSection from "./FadeIn";
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "As the owner of Republic by Omar Farooq, a premium menswear brand, I’ve been using WhatFlow for WhatsApp automation on my Shopify store, and the results have been outstanding. Since integrating the app, I've seen a sales recovery rate of up to 70%. The automation has streamlined our customer communication, improved response times, and allowed us to engage with potential buyers in a much more personalized way. It’s been a game-changer for converting abandoned carts into actual sales. The user interface is intuitive and easy to set up, and the customer support team is always available and responsive. I highly recommend WhatFlow for any Shopify store looking to boost sales and enhance customer interaction through WhatsApp.",
      name: "Republic by Omar Farooq",
      country: "Pakistan",
      rating: 5,
      initials: "OF",
      highlight: true,
    },
    {
      quote:
        "This app is a lifesaver for my business! The abandoned checkout retrieval has significantly boosted my conversions, and the automated order confirmation, fulfillment, and cancellation messages keep everything running smoothly. No more manual follow-ups--WhatFlow does it all for me! Easy to set up, reliable, and the support team is always helpful. If you run a Shopify store, this is a must-have!",
      name: "SKNS.PK",
      country: "United States",
      rating: 5,
      initials: "SK",
    },
    {
      quote:
        "Just started using this app, and honestly it's very easy to use, I was previously using another app which does same work but thought I'd try this one, and honestly Whatflow is way too easy to manage and thanks to Tags feature, catering the orders daily is pretty simple, easy and manageable now!",
      name: "Dhaka Dash",
      country: "Bangladesh",
      rating: 5,
      initials: "DD",
    },
    {
      quote:
        "A must-have app if you're serious about scaling your store. Manually confirming hundreds or thousands of orders daily is simply not feasible, and this app takes that burden off. Setup is quick, and support is responsive. Highly recommended for any store looking to streamline operations",
      name: "Go To Cart",
      country: "Pakistan",
      rating: 5,
      initials: "GC",
    },
    {
      quote:
        "WhatFlow is a great tool for WhatsApp automation. It’s easy to use and works smoothly. The best part is their support team — very responsive, helpful, and always ready to guide you properly. Highly recommended for anyone looking to manage WhatsApp communication more efficiently.",
      name: "BiBi Boutiques",
      country: "Pakistan",
      rating: 5,
      initials: "BB",
    },
  ];

  return (
    <div className="py-24 relative isolate overflow-hidden bg-chat-cream border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeInSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink border border-border shadow-sm">
              TESTIMONIALS
            </span>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-ink sm:text-4xl">
              See how businesses grow with <span className="text-primary-mid font-semibold">WhatsApp Automation</span>
            </h2>
            <p className="mt-3 text-text-muted">
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
              speed={60}
              pauseOnHover
              pauseOnClick
              autoFill={false}
              className="py-2"
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="mx-4">
                  <div
                    className={[
                      "w-[85vw] sm:min-w-[360px] max-w-sm flex-shrink-0 mb-7 mt-4 relative",
                      "rounded-[20px] p-6 sm:p-7 min-h-[320px] sm:h-[330px]",
                      "bg-white shadow-sm border border-border flex flex-col",
                      "transition-all duration-400 hover:-translate-y-0.5 hover:shadow-md",
                    ].join(" ")}
                  >
                    <div className="absolute -top-4 left-7">
                      <div className="bg-primary-mid rounded-full p-2">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1.5 mb-4 text-amber-500 mt-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <IconStarFilled
                          key={i}
                          size={18}
                          className="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-text-muted leading-relaxed flex-grow line-clamp-6 text-sm">
                      “{t.quote}”
                    </p>

                    {/* Person info */}
                    <div className="mt-6 flex items-center gap-3">
                      <Link
                        href="https://apps.shopify.com/whatflow/reviews?ratings%5B%5D=5"
                        target="_blank"
                      >
                        <div className="h-10 w-10 shrink-0 rounded-full bg-primary-mid text-white grid place-items-center font-semibold">
                          {t.initials}
                        </div>
                      </Link>
                      <div className="min-w-0">
                        <Link
                          href="https://apps.shopify.com/whatflow/reviews?ratings%5B%5D=5"
                          target="_blank"
                        >
                          <p className="text-sm font-semibold text-ink truncate">
                            {t.name}
                          </p>
                        </Link>
                        <p className="text-xs text-text-muted">{t.country}</p>
                      </div>
                      <Link
                        href="https://apps.shopify.com/whatflow/reviews?ratings%5B%5D=5"
                        target="_blank"
                        className="ml-auto"
                      >
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-chat-green px-2 py-1 text-[10px] font-medium text-ink border border-border/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-mid" />
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
