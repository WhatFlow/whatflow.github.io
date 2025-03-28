import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - WhatFlow',
  description: 'WhatFlow terms of service and usage conditions',
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
              Welcome to WhatFlow! By using our app, you agree to these Terms of Service ("Terms"). Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By installing and using WhatFlow on your Shopify store, you agree to be bound by these Terms. If you do not agree, please discontinue use of the app immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. WhatFlowion & Usage</h2>
            <p className="text-gray-600 mb-4">
              When you connect your WhatsApp account, you log into our backend engine as a linked device, granting us full access to your account. However, this access is strictly controlled:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We use your account exclusively to send order confirmation messages to customers.</li>
              <li>We do not access your personal chats, contacts, or media. Our interaction with your WhatsApp account is limited to secure, automated message transmission.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>WhatFlowion:</strong> You are responsible for maintaining a secure connection to your WhatsApp account. Ensure that your account remains active and accessible to send confirmation messages.</li>
              <li><strong>Compliance:</strong> You agree to use WhatFlow in compliance with all applicable laws and regulations.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Customer Control</h2>
            <p className="text-gray-600 mb-4">
              You retain full control of your WhatsApp account while using WhatFlow. You may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disconnect your WhatsApp account from the app at any time.</li>
              <li>Delete the app from Shopify, which will immediately revoke all access to your WhatsApp account and data.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-600">
              WhatFlow utilizes NoWeb technology to send messages on your behalf, without interacting with your WhatsApp interface or data beyond what is necessary to deliver order confirmations. We ensure your account data is kept secure and is not shared with third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Privacy</h2>
            <p className="text-gray-600">
              We only use your WhatsApp account for sending confirmation messages. We do not store or share your WhatsApp data, and we follow industry-standard encryption protocols to protect your information during transmission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Termination</h2>
            <p className="text-gray-600">
              You may terminate your use of WhatFlow at any time by uninstalling the app from your Shopify store. Upon termination, all access to your WhatsApp account will cease, and we will delete any associated data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600">
              WhatFlow is provided on an "as is" and "as available" basis. We are not liable for any damages or losses arising from your use of the app, including but not limited to order mismanagement or message delivery failures.
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