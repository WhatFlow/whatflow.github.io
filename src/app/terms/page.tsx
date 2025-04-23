import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - WhatFlow',
  description: 'WhatFlow terms of service and usage conditions for our complete WhatsApp automation suite',
};

export default function Terms() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Welcome to WhatFlow! By using our full-stack WhatsApp automation suite, you agree to these Terms of Service ("Terms"). Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By installing and using WhatFlow on your Shopify store, you agree to be bound by these Terms. If you do not agree, please discontinue use of the app immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. WhatFlow Connection & Usage</h2>
            <p className="text-gray-600 mb-4">
              When you connect your WhatsApp account, you log into our backend engine as a linked device, granting us full access to your account. However, this access is strictly controlled:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We use your account exclusively to send automated messages to customers at various stages of their shopping journey, including order confirmations, abandoned checkout reminders, fulfillment notifications, and cancellation updates.</li>
              <li>We do not access your personal chats, contacts, or media. Our interaction with your WhatsApp account is limited to secure, automated message transmission.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Connection Maintenance:</strong> You are responsible for maintaining a secure connection to your WhatsApp account. Ensure that your account remains active and accessible for our automation suite to function properly.</li>
              <li><strong>Compliance:</strong> You agree to use WhatFlow in compliance with all applicable laws and regulations, including WhatsApp's terms of service and commerce policies.</li>
              <li><strong>Message Content:</strong> You are responsible for ensuring that the content of automated messages complies with relevant regulations, including those concerning marketing communications and privacy.</li>
              <li><strong>Number Warming:</strong> You acknowledge that using a WhatsApp number that has not been properly "warmed up" (active for at least six months with a regular messaging history) carries significant risk. WhatsApp may permanently ban numbers that suddenly send high volumes of messages without an established history. To mitigate this risk, you should either: (1) use an established, active WhatsApp number, or (2) if using a newer number, start with lower message volumes and gradually increase the load over several weeks. WhatFlow is not responsible for WhatsApp-imposed restrictions or bans resulting from using non-warmed up numbers.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Customer Control</h2>
            <p className="text-gray-600 mb-4">
              You retain full control of your WhatsApp account while using WhatFlow. You may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disconnect your WhatsApp account from the app at any time.</li>
              <li>Delete the app from Shopify, which will immediately revoke all access to your WhatsApp account and data.</li>
              <li>Modify which automation features (confirmations, abandoned cart, fulfillment, cancellation) are active through your dashboard.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-600">
              WhatFlow utilizes websockets to send messages on your behalf, without interacting with your WhatsApp interface or data beyond what is necessary to deliver our full suite of automated communications. We ensure your account data is kept secure and is not shared with third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Privacy</h2>
            <p className="text-gray-600">
              We only use your WhatsApp account for sending automated messages related to e-commerce transactions. We do not store or share your WhatsApp data, and we follow industry-standard encryption protocols to protect your information during transmission throughout all stages of customer communication.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Termination</h2>
            <p className="text-gray-600">
              You may terminate your use of WhatFlow at any time by uninstalling the app from your Shopify store. Upon termination, all access to your WhatsApp account will cease, all automation processes will stop, and we will delete any associated data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600">
              WhatFlow is provided on an "as is" and "as available" basis. We are not liable for any damages or losses arising from your use of the app, including but not limited to messaging failures, automation errors, or missed customer communications across any of our service features.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Modifications to Terms</h2>
            <p className="text-gray-600">
              We may revise these Terms at any time. Continued use of the app after any changes constitutes your acceptance of the updated Terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 