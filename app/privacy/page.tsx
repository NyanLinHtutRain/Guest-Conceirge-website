'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import Header from '@/components/Header'

export default function PrivacyPolicy() {
  const { t } = useLanguage()
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-brand-cream py-16 px-6 pt-24 sm:pt-28">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-brand-orange hover:text-brand-red transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('privacyPolicy')}</h1>
        <p className="text-gray-600 mb-8">Last Updated: February 8, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              HostFlow AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI chatbot service for hotels and accommodation providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, phone number, property details</li>
              <li><strong>Property Content:</strong> Photos, descriptions, house rules, amenity information</li>
              <li><strong>Payment Information:</strong> Processed securely through third-party payment processors (we do not store credit card details)</li>
              <li><strong>Communication Data:</strong> Messages sent to us via email or WhatsApp</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">2.2 Guest Interaction Data</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Chat Logs:</strong> Conversations between guests and the AI chatbot</li>
              <li><strong>Usage Data:</strong> Frequency of questions, common inquiries, response times</li>
              <li><strong>Device Information:</strong> Browser type, device type, IP address (anonymized)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">2.3 Automatically Collected Information</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Log data (access times, pages viewed)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Analytics data (aggregated and anonymized)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the collected information for:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Service Delivery:</strong> Operating and maintaining your AI chatbot</li>
              <li><strong>Customization:</strong> Training the AI with your property-specific information</li>
              <li><strong>Communication:</strong> Sending service updates, maintenance notifications, and support responses</li>
              <li><strong>Improvement:</strong> Analyzing usage patterns to enhance AI accuracy and features</li>
              <li><strong>Billing:</strong> Processing payments and maintaining transaction records</li>
              <li><strong>Legal Compliance:</strong> Meeting legal obligations and protecting our rights</li>
              <li><strong>Analytics:</strong> Understanding service performance and user behavior (aggregated data only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">4.1 Third-Party Service Providers</h3>
            <p className="mb-2">We share data with trusted third parties who assist in operating our service:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>AI API Providers:</strong> For natural language processing and response generation</li>
              <li><strong>Cloud Hosting:</strong> For secure data storage and service delivery</li>
              <li><strong>Payment Processors:</strong> For handling transactions securely</li>
              <li><strong>Analytics Tools:</strong> For service improvement (anonymized data only)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">4.2 We Do NOT Share Your Data With:</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Advertisers or marketing companies</li>
              <li>Data brokers</li>
              <li>Social media platforms</li>
              <li>Any party for purposes unrelated to providing the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order, or government request, or to protect our rights and safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Guest Privacy</h2>
            <p className="mb-3">
              <strong>Guest Data Protection:</strong> We treat guest chat data with the highest level of privacy:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Guest chats are stored securely and encrypted</li>
              <li>No personally identifiable guest information is required to use the chatbot</li>
              <li>Chat logs are accessible only to you (the property owner) and our technical team for support purposes</li>
              <li>Guest data is never sold or shared with third parties for marketing</li>
              <li>Guests can request deletion of their chat history by contacting you directly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="mb-3">We implement industry-standard security measures:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted data storage</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure backup systems</li>
            </ul>
            <p className="mt-3 text-sm">
              <em>Note: While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</em>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Account Data:</strong> Retained while your account is active and for 90 days after cancellation</li>
              <li><strong>Chat Logs:</strong> Retained for 12 months for service improvement, then automatically deleted</li>
              <li><strong>Payment Records:</strong> Retained for 7 years for tax and legal compliance</li>
              <li><strong>Analytics Data:</strong> Retained indefinitely in anonymized, aggregated form</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Export:</strong> Receive your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restriction:</strong> Request limitation of data processing</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at acidr37@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking</h2>
            <p className="mb-3">We use cookies and similar technologies for:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Essential functionality (login sessions, preferences)</li>
              <li>Analytics (understanding usage patterns)</li>
              <li>Performance optimization</li>
            </ul>
            <p className="mt-3">
              You can control cookies through your browser settings. Disabling cookies may affect service functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p>
              HostFlow AI is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p>
              Your data may be processed in countries outside of Singapore where our service providers operate. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or through the Service. Your continued use after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="mb-3">
              For questions, concerns, or requests regarding this Privacy Policy or your data:
            </p>
            <div className="space-y-1">
              <p><strong>Email:</strong> acidr37@gmail.com</p>
              <p><strong>WhatsApp:</strong> Available via our website</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600">
              By using HostFlow AI, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  )
}
