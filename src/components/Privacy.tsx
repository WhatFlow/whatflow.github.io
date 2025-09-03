"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Privacy Policy
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
                At <span className="font-semibold text-emerald-600">WhatFlow</span>, 
                your privacy and security are our top priorities. This Privacy Policy explains 
                how we collect, use, and protect your data when you use our full-stack WhatsApp automation suite.
              </p>
            </div>

            {/* Privacy Policy Sections */}
            <div className="space-y-10">
              {/* Section 1 */}
              <section id="information-collected" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                  Information We Collect
                </h2>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-900">WhatsApp Account Access:</span> When you connect your WhatsApp account, 
                    you log into our backend engine as a linked device. This allows us to securely manage all automated messaging 
                    on your behalf, including order confirmations, abandoned checkout retrieval, order fulfillment, and cancellation 
                    notifications. We have full access to your WhatsApp account for the purpose of sending these automated messages, 
                    but we do not interact with or access other features (e.g., chats, media).
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Order & Customer Data:</span> We collect information related to Shopify 
                    orders and customers, such as customer details, cart contents, order statuses, and checkout activities, to send the 
                    appropriate messages via WhatsApp at various stages of the customer journey.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Usage Data:</span> We collect basic app usage data to enhance performance 
                    and functionality of our automation suite.
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section id="information-usage" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-900">Comprehensive Message Automation:</span> WhatFlow uses your WhatsApp account 
                    to send various automated messages to customers throughout their shopping journey, including order confirmations, 
                    abandoned cart reminders, fulfillment updates, and cancellation notifications. Although we have access to your account 
                    as a linked device, our interaction is strictly limited to automated message transmission. No other WhatsApp data, such 
                    as conversations or media, is accessed.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Data Security:</span> All communications between your WhatsApp account, 
                    our servers, and Shopify are encrypted using secure protocols. We ensure that your WhatsApp data is used only for its 
                    intended purpose and is never exposed or shared with third parties.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="browserless" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                  Browserless & Account Confidentiality
                </h2>
                <p className="text-gray-700">
                  Our full-stack automation suite runs browserless, meaning there is no interface to access your WhatsApp data beyond 
                  sending HTTP requests for message delivery across all automation types. Your account remains completely confidential, 
                  and no sensitive information (chats, media, or contacts) is stored or accessed.
                </p>
              </section>

              {/* Section 4 */}
              <section id="customer-control" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                  Customer Control
                </h2>
                <p className="text-gray-700 mb-4">
                  You have full control of your WhatsApp account:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Disconnect your WhatsApp account at any time from the app.</li>
                  <li>Delete the app from your Shopify store, and all access to your WhatsApp account will be revoked immediately. We do not retain any personal data after disconnection or deletion.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="security-measures" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">5</span>
                  Data Security Measures
                </h2>
                <p className="text-gray-700">
                  We follow industry-standard security measures, including encryption and secure data storage. Although we access your 
                  WhatsApp as a linked device, the scope of interaction is strictly limited to what is necessary for our automation 
                  suite's functionality, including order confirmations, abandoned cart recovery, fulfillment notifications, and 
                  cancellation updates.
                </p>
              </section>

              {/* Section 6 */}
              <section id="gdpr" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">6</span>
                  GDPR Compliance
                </h2>
                <p className="text-gray-700 mb-4">
                  If you are located in the European Economic Area (EEA), you have certain data protection rights under the General 
                  Data Protection Regulation (GDPR). WhatFlow ensures compliance with GDPR by providing you with the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Right to Access:</span> You may request access to the personal data we hold about you at any time.</li>
                  <li><span className="font-semibold">Right to Rectification:</span> You have the right to request corrections to any inaccurate or incomplete personal data.</li>
                  <li><span className="font-semibold">Right to Erasure:</span> You may request the deletion of your personal data under certain conditions.</li>
                  <li><span className="font-semibold">Right to Restrict Processing:</span> You may request a limitation on how we process your personal data.</li>
                  <li><span className="font-semibold">Right to Data Portability:</span> You may request a copy of your personal data in a structured, machine-readable format.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  If you wish to exercise any of these rights, please contact us through the support information provided. We respond 
                  to all requests in accordance with GDPR timelines and regulations. Please note that disconnecting your WhatsApp 
                  account or uninstalling the app automatically removes all access to your data.
                </p>
              </section>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}