import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | QR Code Generator Malaysia',
  description: 'Privacy policy for QR Code Generator Malaysia. Learn how we protect your data and privacy when using our free QR code generation service.',
  robots: 'index, follow'
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: August 23, 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              QR Code Generator Malaysia is designed with privacy in mind. We do not store or collect any personal data from the QR codes you generate. All QR code generation happens locally in your browser.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Data We May Collect</h2>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Anonymous usage statistics through Google Analytics</li>
              <li>Technical information like browser type, device type, and IP address</li>
              <li>Cookies for website functionality and advertising</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Information</h2>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>To improve our service and user experience</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To display relevant advertisements through Google AdSense</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Google AdSense and Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to this site and other sites on the Internet. You can opt out of personalized advertising by visiting Google's Ad Settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your QR Code Data</h2>
            <p className="text-gray-600 mb-6">
              <strong>Important:</strong> We do NOT store, save, or have access to any content you input into our QR code generator. All QR code generation happens entirely in your browser. Your data never leaves your device.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              We use the following third-party services:
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
              <li><strong>Vercel:</strong> For website hosting</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Security</h2>
            <p className="text-gray-600 mb-6">
              Since we don't store your QR code data, there's no risk of your personal information being compromised. The website uses HTTPS encryption for all communications.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our service is suitable for all ages. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us through our website or social media channels.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Summary</h3>
              <p className="text-blue-700">
                Your privacy is important to us. We don't store your QR code data, use minimal tracking for improvement purposes, and are transparent about our use of Google AdSense for advertisements.
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