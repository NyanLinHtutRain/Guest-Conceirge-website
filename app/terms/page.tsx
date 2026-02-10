'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import Header from '@/components/Header'

export default function TermsAndConditions() {
  const { t } = useLanguage()
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-brand-cream py-16 px-6 pt-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-brand-orange hover:text-brand-red transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('termsConditions')}</h1>
        <p className="text-gray-600 mb-8">Last Updated: February 8, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using HostFlow AI ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms and Conditions, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p>
              HostFlow AI provides an AI-powered chatbot service designed for hotels, Airbnb hosts, and accommodation providers. The Service enables automated guest communication through:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>24/7 AI-powered chat responses</li>
              <li>Visual guide delivery (photos, maps, instructions)</li>
              <li>Multi-language support</li>
              <li>QR code access for guests</li>
              <li>Custom bot configuration and setup</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="mb-3">As a user of HostFlow AI, you agree to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate and complete information about your property</li>
              <li>Upload only photos and content you have the right to use</li>
              <li>Ensure uploaded content does not violate any laws or third-party rights</li>
              <li>Not use the Service for any illegal or unauthorized purpose</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Review AI responses periodically to ensure accuracy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="mb-3">
              <strong>One-Time Setup Fee:</strong> SGD 50 (promotional price, regular SGD 100)
            </p>
            <p className="mb-3">
              <strong>Monthly Maintenance:</strong> SGD 6.99 per month
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Setup fee is non-refundable once bot configuration begins</li>
              <li>Monthly maintenance covers server hosting and AI API costs</li>
              <li>You may cancel the monthly maintenance at any time</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>No refunds for partial months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Availability</h2>
            <p>
              While we strive for 99.9% uptime, we do not guarantee uninterrupted service. The Service may be temporarily unavailable due to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Scheduled maintenance</li>
              <li>Emergency repairs</li>
              <li>Third-party service disruptions (AI API providers, hosting services)</li>
              <li>Force majeure events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. AI Response Accuracy</h2>
            <p>
              HostFlow AI uses advanced AI technology to respond to guest inquiries. However:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>We do not guarantee 100% accuracy of AI responses</li>
              <li>You are responsible for reviewing and updating bot information regularly</li>
              <li>Critical information should be verified by property staff</li>
              <li>We are not liable for guest dissatisfaction due to AI response errors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="mb-3">
              <strong>Your Content:</strong> You retain all rights to photos, text, and content you upload. By uploading content, you grant us a license to use, store, and display it solely for providing the Service.
            </p>
            <p>
              <strong>Our Platform:</strong> HostFlow AI, including its software, design, and branding, is our intellectual property and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, HostFlow AI shall not be liable for:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Guest complaints or negative reviews</li>
              <li>Data loss or corruption</li>
              <li>Damages exceeding the amount paid for the Service in the past 3 months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="mb-3">
              We reserve the right to suspend or terminate your account if:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>You violate these Terms and Conditions</li>
              <li>You fail to pay monthly maintenance fees</li>
              <li>You use the Service for illegal activities</li>
              <li>You upload inappropriate or harmful content</li>
            </ul>
            <p className="mt-3">
              You may terminate your account at any time by contacting us at acidr37@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued use of the Service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p><strong>Email:</strong> acidr37@gmail.com</p>
              <p><strong>WhatsApp:</strong> Available via website</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600">
              By using HostFlow AI, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  )
}
