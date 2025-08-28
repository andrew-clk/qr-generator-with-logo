import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | QR Code Generator Malaysia',
  description: 'Terms of service for QR Code Generator Malaysia. Free QR code generation service terms and conditions.',
  robots: 'index, follow'
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: August 23, 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using QR Code Generator Malaysia, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              QR Code Generator Malaysia provides a free online service for generating QR codes for URLs, text, and contact information with custom logo support. The service is provided "as is" without warranties of any kind.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">You agree NOT to use this service for:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Illegal activities or content</li>
              <li>Generating QR codes that contain malicious links</li>
              <li>Spamming or unsolicited communications</li>
              <li>Copyright or trademark infringement</li>
              <li>Any activity that could harm or disable our service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The QR codes you generate belong to you. Our website design, code, and branding are protected by intellectual property laws. The QR code generation technology uses open-source libraries.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy and Data</h2>
            <p className="text-gray-600 mb-6">
              We do not store or have access to the content you put into QR codes. All generation happens in your browser. Please refer to our Privacy Policy for detailed information about data handling.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted service. We may perform maintenance or updates that temporarily affect availability.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              This service is provided free of charge. We are not liable for any damages, direct or indirect, arising from the use of this service. Use at your own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Advertising</h2>
            <p className="text-gray-600 mb-6">
              We display advertisements through Google AdSense to support this free service. By using our service, you agree to see these advertisements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Modifications to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use constitutes acceptance of modified terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms are governed by the laws of Malaysia. Any disputes will be resolved in Malaysian courts.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about these Terms of Service, please contact us through our website.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Simple Summary</h3>
              <p className="text-green-700">
                Use our free QR generator responsibly and legally. We don't store your data, and we show ads to keep the service free. Be respectful and follow Malaysian law.
              </p>
            </div>

            <div className="text-center mt-8">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium"
              >
                ← Back to QR Generator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}