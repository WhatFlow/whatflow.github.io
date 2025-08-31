"use client";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Last updated: August 31, 2025
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"></div>
          
          <div className="p-6 sm:p-8 md:p-10">
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg text-gray-700">
                Welcome to <span className="font-semibold text-emerald-600">WhatFlow</span>! 
                By using our full-stack WhatsApp automation suite, you agree to these Terms of Service ("Terms"). 
                Please read them carefully.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-10">
              {/* Section 1 */}
              <section id="acceptance" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700">
                  By installing and using WhatFlow on your Shopify store, you agree to be bound by these Terms. 
                  If you do not agree, please discontinue use of the app immediately.
                </p>
              </section>

              {/* Section 2 */}
              <section id="connection" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                  WhatFlow Connection & Usage
                </h2>
                <p className="text-gray-700 mb-4">
                  When you connect your WhatsApp account, you log into our backend engine as a linked device, granting us full access to your account. However, this access is strictly controlled:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We use your account exclusively to send automated messages to customers at various stages of their shopping journey, including order confirmations, abandoned checkout reminders, fulfillment notifications, and cancellation updates.</li>
                  <li>We do not access your personal chats, contacts, or media. Our interaction with your WhatsApp account is limited to secure, automated message transmission.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="responsibilities" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                  User Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-900">Connection Maintenance:</span> You are responsible for maintaining a secure connection to your WhatsApp account. Ensure that your account remains active and accessible for our automation suite to function properly.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Compliance:</span> You agree to use WhatFlow in compliance with all applicable laws and regulations, including WhatsApp's terms of service and commerce policies.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Message Content:</span> You are responsible for ensuring that the content of automated messages complies with relevant regulations, including those concerning marketing communications and privacy.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Number Warming:</span> You acknowledge that using a WhatsApp number that has not been properly "warmed up" (active for at least six months with a regular messaging history) carries significant risk. WhatsApp may permanently ban numbers that suddenly send high volumes of messages without an established history. To mitigate this risk, you should either: (1) use an established, active WhatsApp number, or (2) if using a newer number, start with lower message volumes and gradually increase the load over several weeks. WhatFlow is not responsible for WhatsApp-imposed restrictions or bans resulting from using non-warmed up numbers.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Custom API Implementation Risks:</span> You acknowledge that WhatFlow uses our own implementation of the WhatsApp API, not the official WhatsApp Business API. Although we simulate human behavior (like typing for approximately 25 seconds before sending each message) to minimize detection risks, there remains a possibility of your WhatsApp account getting restricted. The official WhatsApp API costs approximately 3 cents per conversation, while our app offers 2,500 messages for $5 and up to 25,000 messages for $25. This price difference reflects the alternative implementation method which, despite our risk minimization efforts, remains at the user's own responsibility. You accept that the risk of account restriction can never be completely eliminated and agree to use our service with this understanding.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="control" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                  Customer Control
                </h2>
                <p className="text-gray-700 mb-4">
                  You retain full control of your WhatsApp account while using WhatFlow. You may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Disconnect your WhatsApp account from the app at any time.</li>
                  <li>Delete the app from Shopify, which will immediately revoke all access to your WhatsApp account and data.</li>
                  <li>Modify which automation features (confirmations, abandoned cart, fulfillment, cancellation) are active through your dashboard.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="security" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">5</span>
                  Data Security
                </h2>
                <p className="text-gray-700">
                  WhatFlow utilizes websockets to send messages on your behalf, without interacting with your WhatsApp interface or data beyond what is necessary to deliver our full suite of automated communications. We ensure your account data is kept secure and is not shared with third parties.
                </p>
              </section>

              {/* Section 6 */}
              <section id="privacy" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">6</span>
                  Data Privacy
                </h2>
                <p className="text-gray-700">
                  We only use your WhatsApp account for sending automated messages related to e-commerce transactions. We do not store or share your WhatsApp data, and we follow industry-standard encryption protocols to protect your information during transmission throughout all stages of customer communication.
                </p>
              </section>

              {/* Section 7 */}
              <section id="termination" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">7</span>
                  Termination
                </h2>
                <p className="text-gray-700">
                  You may terminate your use of WhatFlow at any time by uninstalling the app from your Shopify store. Upon termination, all access to your WhatsApp account will cease, all automation processes will stop, and we will delete any associated data.
                </p>
              </section>

              {/* Section 8 */}
              <section id="liability" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">8</span>
                  Limitation of Liability
                </h2>
                <p className="text-gray-700">
                  WhatFlow is provided on an "as is" and "as available" basis. We are not liable for any damages or losses arising from your use of the app, including but not limited to messaging failures, automation errors, or missed customer communications across any of our service features.
                </p>
              </section>

              {/* Section 9 */}
              <section id="modifications" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">9</span>
                  Modifications to Terms
                </h2>
                <p className="text-gray-700">
                  We may revise these Terms at any time. Continued use of the app after any changes constitutes your acceptance of the updated Terms.
                </p>
              </section>
            </div>

            {/* Footer */}
            
          </div>
        </div>
      </div>
    </div>
  );
}