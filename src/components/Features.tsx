// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// type Category = {
//   name: string;
//   icon: string; // emoji or symbol
//   description: string;
//   details: string[];
// };

// export default function Features() {
//   const templateCategories: Category[] = [
//     {
//       name: "Order Updates",
//       icon: "📦",
//       description: "Real-time shipping, delivery, and order status alerts.",
//       details: [
//         "Payment confirmation",
//         "Shipped & out-for-delivery alerts",
//         "Delivery confirmation + feedback",
//       ],
//     },
//     {
//       name: "Customer Support",
//       icon: "💬",
//       description: "Turn support into loyalty with fast, contextual replies.",
//       details: [
//         "Smart triage & routing",
//         "Saved replies & macros",
//         "SLA timers & escalation",
//       ],
//     },
//     {
//       name: "Marketing",
//       icon: "🚀",
//       description: "Convert with campaigns that feel 1:1, not spammy.",
//       details: [
//         "Segmented broadcasts",
//         "A/B testing + insights",
//         "UTM tracking & attribution",
//       ],
//     },
//     {
//       name: "Abandoned Cart",
//       icon: "🛒",
//       description: "Recover lost revenue with timely reminders.",
//       details: [
//         "Tiered nudges with incentives",
//         "Live cart context",
//         "One-tap checkout links",
//       ],
//     },
//     {
//       name: "Product Catalog",
//       icon: "🧾",
//       description: "Showcase products natively inside WhatsApp.",
//       details: [
//         "Rich product cards",
//         "Variant & stock sync",
//         "Quick add-to-cart",
//       ],
//     },
//     {
//       name: "Welcome Series",
//       icon: "✨",
//       description: "Onboard and delight from day zero.",
//       details: [
//         "First-message incentives",
//         "Progressive profiling",
//         "Nurture sequences",
//       ],
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <section id="features" className="relative isolate overflow-hidden py-24 sm:py-32">
//       {/* Keep existing background concept */}
//       <div className="absolute -top-52 left-1/2 -z-10">
//         <svg
//           viewBox="0 0 1155 678"
//           xmlns="http://www.w3.org/2000/svg"
//           width="500"
//           height="400"
//           className="fill-teal-100/50 opacity-30"
//         >
//           <path d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
//         </svg>
//       </div>
//       {/* Animated Gradient Glow */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15),transparent_60%)] animate-pulse" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/80 ring-1 ring-emerald-200 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
//             <span className="text-base">🎯</span> FEATURES
//           </span>
//           <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             Complete{" "}
//             <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
//               WhatsApp automation
//             </span>{" "}
//             for every stage of the customer journey
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             WhatFlow connects to your existing WhatsApp account to provide a comprehensive suite of automations that engage customers throughout their shopping experience, maximizing revenue and satisfaction.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
//           {/* Template Categories */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-gray-900">Workflows for every scenario</h3>
//               <p className="text-gray-600">
//                 Choose from proven automation templates, each optimized for a specific moment in the customer journey.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {templateCategories.map((category, index) => {
//                 const opened = activeIndex === index;
//                 return (
//                   <button
//                     key={index}
//                     type="button"
//                     onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
//                     className={[
//                       "group relative text-left w-full",
//                       "rounded-2xl p-5 transition-all duration-300",
//                       "border border-emerald-900/10",
//                       "bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50",
//                       "hover:-translate-y-0.5 hover:shadow-xl",
//                       opened ? "ring-2 ring-emerald-300/60 shadow-emerald-100" : "shadow-sm",
//                     ].join(" ")}
//                     aria-expanded={opened}
//                     aria-controls={`feature-panel-${index}`}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div
//                         className={[
//                           "flex h-10 w-10 items-center justify-center rounded-xl",
//                           "bg-gradient-to-br from-emerald-50 to-teal-50",
//                           "ring-1 ring-emerald-200 text-lg",
//                           "group-hover:from-emerald-100 group-hover:to-teal-100 transition-colors",
//                         ].join(" ")}
//                         aria-hidden="false"
//                       >
//                         <span className="select-none">{category.icon}</span>
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between gap-3">
//                           <span className="font-semibold text-gray-900">{category.name}</span>
//                           <span
//                             className={[
//                               "inline-flex h-6 w-6 items-center justify-center rounded-full",
//                               "bg-emerald-50 text-emerald-700 text-sm",
//                               "ring-1 ring-emerald-200 transition-transform",
//                               opened ? "rotate-45" : "",
//                             ].join(" ")}
//                             aria-hidden="false"
//                             title={opened ? "Collapse" : "Expand"}
//                           >
//                             +
//                           </span>
//                         </div>
//                         <p className="mt-1 text-sm text-gray-600">{category.description}</p>
//                         <div
//                           id={`feature-panel-${index}`}
//                           className={[
//                             "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
//                             opened ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0",
//                           ].join(" ")}
//                         >
//                           <div className="overflow-hidden">
//                             <ul className="space-y-2 text-sm text-gray-700">
//                               {category.details.map((d, i) => (
//                                 <li key={i} className="flex items-center gap-2">
//                                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                                   {d}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="pt-2">
//               <Link
//                 href="/features"
//                 className={[
//                   "inline-flex items-center gap-2 rounded-full px-5 py-2.5",
//                   "bg-emerald-600 text-white font-medium",
//                   "shadow-lg shadow-emerald-600/20",
//                   "hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
//                   "transition-colors",
//                 ].join(" ")}
//               >
//                 Explore all features
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0-5 5m5-5H6" />
//                 </svg>
//               </Link>
//             </div>
//           </div>

//           {/* Templates Preview */}
//           <div className="relative">
//             {/* Dark green gradient stage behind screenshot */}
//             <div className="absolute -inset-6 -z-10">
//               <div className="h-full w-full rounded-3xl bg-[radial-gradient(120%_120%_at_80%_20%,_rgba(16,68,54,0.9),_rgba(16,68,54,0.6)_45%,_rgba(16,68,54,0.2)_70%,_transparent_75%)]" />
//             </div>

//             {/* Soft ambient glow */}
//             <div className="absolute -inset-10 -z-10 blur-3xl opacity-70">
//               <div className="h-full w-full rounded-[2rem] bg-gradient-to-r from-emerald-300/20 via-teal-300/20 to-emerald-200/20" />
//             </div>

//             <div className="mt-6 relative flex justify-center">
//               <div className="relative z-10 rounded-2xl overflow-hidden max-w-5xl border border-white/40 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(16,185,129,0.35)]">
//                 <div className="bg-gradient-to-r from-teal-600 to-emerald-600 h-10 w-full flex items-center px-4">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-400/90" />
//                     <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
//                     <div className="w-3 h-3 rounded-full bg-green-400/90" />
//                   </div>
//                 </div>
//                 <Image
//                   src="/app-screenshot.png"
//                   alt="WhatFlow App Dashboard"
//                   width={1200}
//                   height={800}
//                   className="w-full h-auto"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import FadeInSection from "./FadeIn";

type Category = {
  name: string;
  icon: string;
  description: string;
  details: string[];
};

export default function Features() {
  const templateCategories: Category[] = [
    {
      name: "Order Updates",
      icon: "📦",
      description: "Real-time shipping, delivery, and order status alerts.",
      details: [
        "Payment confirmation",
        "Shipped & out-for-delivery alerts",
        "Delivery confirmation + feedback",
      ],
    },
    {
      name: "Customer Support",
      icon: "💬",
      description: "Turn support into loyalty with fast, contextual replies.",
      details: [
        "Smart triage & routing",
        "Saved replies & macros",
        "SLA timers & escalation",
      ],
    },
    {
      name: "Marketing",
      icon: "🚀",
      description: "Convert with campaigns that feel 1:1, not spammy.",
      details: [
        "Segmented broadcasts",
        "A/B testing + insights",
        "UTM tracking & attribution",
      ],
    },
    {
      name: "Abandoned Cart",
      icon: "🛒",
      description: "Recover lost revenue with timely reminders.",
      details: [
        "Tiered nudges with incentives",
        "Live cart context",
        "One-tap checkout links",
      ],
    },
    {
      name: "Product Catalog",
      icon: "🧾",
      description: "Showcase products natively inside WhatsApp.",
      details: [
        "Rich product cards",
        "Variant & stock sync",
        "Quick add-to-cart",
      ],
    },
    {
      name: "Welcome Series",
      icon: "✨",
      description: "Onboard and delight from day zero.",
      details: [
        "First-message incentives",
        "Progressive profiling",
        "Nurture sequences",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="features"
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      {/* Background decorative shape */}
      <div className="absolute -top-52 left-1/2 -z-10">
        <svg
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="400"
          className="fill-emerald-200/40 opacity-30"
        >
          <path d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        </svg>
      </div>

      {/* Subtle emerald pulse background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),transparent_70%)] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection>
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 ring-1 ring-emerald-200 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
              <span className="text-base">🎯</span> FEATURES
            </span>
            <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Complete{" "}
              <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
                WhatsApp automation
              </span>{" "}
              for every stage of the customer journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              WhatFlow connects to your existing WhatsApp account to provide a
              comprehensive suite of automations that engage customers
              throughout their shopping experience, maximizing revenue and
              satisfaction.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-14 items-start mt-16">
            {/* Template Categories */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {templateCategories.map((category, index) => {
                  const opened = activeIndex === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setActiveIndex((prev) =>
                          prev === index ? null : index
                        )
                      }
                      className={[
                        "group relative text-left w-full",
                        "rounded-2xl p-5 transition-all duration-300 cursor-pointer",
                        "border border-teal-200",
                        "bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50",
                        "hover:-translate-y-1 hover:shadow-2xl",
                        opened
                          ? "ring-2 ring-emerald-400/60 shadow-lg shadow-emerald-200/40"
                          : "shadow-sm shadow-gray-100/40",
                      ].join(" ")}
                      aria-expanded={opened}
                      aria-controls={`feature-panel-${index}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={[
                            "flex h-11 w-11 items-center justify-center rounded-xl",
                            "bg-gradient-to-br from-emerald-50 to-teal-50",
                            "ring-1 ring-emerald-200 text-lg font-medium",
                            "group-hover:from-emerald-100 group-hover:to-teal-100 transition-colors",
                          ].join(" ")}
                        >
                          <span className="select-none">{category.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-semibold text-gray-900">
                              {category.name}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">
                            {category.description}
                          </p>
                          <div
                            id={`feature-panel-${index}`}
                            className={[
                              "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                              opened
                                ? "grid-rows-[1fr] opacity-100 mt-3"
                                : "grid-rows-[0fr] opacity-0",
                            ].join(" ")}
                          >
                            <div className="overflow-hidden">
                              <ul className="space-y-2 text-sm text-gray-700">
                                {category.details.map((d, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-3">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-600/25 hover:scale-[1.02] hover:shadow-xl transition-all"
                >
                  Explore all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Premium Templates Preview */}
            <div className="relative mt-4">
              {/* Inner radial gradient */}
              <div className="absolute -inset-6 -z-10">
                <div className="h-full w-full rounded-3xl bg-[radial-gradient(120%_120%_at_80%_20%,rgba(6,95,70,0.95),rgba(5,46,22,0.9)_45%,rgba(16,185,129,0.6)_70%,rgba(163,230,53,0.25)_95%)]" />
              </div>

              {/* Outer blur gradient */}
              <div className="absolute -inset-10 -z-20 blur-3xl opacity-50">
                <div className="h-full w-full rounded-[2.5rem] bg-gradient-to-r from-emerald-500/30 via-lime-400/20 to-teal-600/30" />
              </div>

              <div className="relative flex justify-center animate-slide-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-lime-300/20 rounded-2xl blur-2xl opacity-30" />

                <div className="relative z-10 overflow-hidden rounded-2xl max-w-5xl w-full border border-white/20 bg-white/80 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(16,185,129,0.4)]">
                  <div className="bg-gradient-to-r from-teal-600 to-emerald-600 h-10 w-full flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>

                  {/* Main image */}
                  <Image
                    src="/app-screenshot.png"
                    alt="WhatFlow App Dashboard"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Overlay Stats */}
              {/* <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20 w-[95%] max-w-3xl">
    <div className="bg-white/80 backdrop-blur-[2px] border border-emerald-100/40 shadow-lg shadow-emerald-500/10 rounded-2xl px-3 py-2">
      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-2xl font-extrabold text-gray-900">100+</div>
          <div className="text-sm text-gray-600">Workflows</div>
        </div>
        <div>
          <div className="text-2xl font-extrabold text-gray-900">6+</div>
          <div className="text-sm text-gray-600">Features</div>
        </div>
        <div>
          <div className="text-2xl font-extrabold text-gray-900">24/7</div>
          <div className="text-sm text-gray-600">Automation</div>
        </div>
      </div>
    </div>
  </div> */}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
