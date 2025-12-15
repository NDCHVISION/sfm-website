import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sankofa Family Medicine',
  description: 'Privacy policy and HIPAA compliance information for Sankofa Family Medicine. We protect your health information and follow strict medical privacy standards.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-40 pb-16 bg-sfm-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-5xl text-sfm-navy mb-4">Privacy Policy</h1>
          <p className="text-muted text-lg">Last updated: December 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-muted">
          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Introduction</h2>
            <p>
              Sankofa Family Medicine ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Information We Collect</h2>
            <h3 className="text-2xl text-sfm-azure mb-3">Personal Information</h3>
            <p>
              We collect information you voluntarily provide through our contact forms, including:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Name and email address</li>
              <li>Phone number</li>
              <li>Medical history and health information</li>
              <li>Insurance information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-2xl text-sfm-azure mb-3 mt-6">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Pages visited and time spent</li>
              <li>Device information</li>
              <li>Referral source</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Providing and improving our services</li>
              <li>Responding to your inquiries</li>
              <li>Processing membership applications</li>
              <li>Sending service updates and communications</li>
              <li>Complying with legal obligations</li>
              <li>Protecting against fraud and security threats</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Data Protection and Security</h2>
            <p>
              We implement appropriate technical, administrative, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Medical Information (HIPAA)</h2>
            <p>
              Health information collected through our services is protected under the Health Insurance Portability and Accountability Act (HIPAA). All protected health information is handled in strict compliance with HIPAA regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of promotional communications</li>
              <li>Request a copy of your health records</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg border border-sfm-gold/20">
              <p><strong>Email:</strong> <a href="mailto:info@sankofafamilymedicine.com" className="text-sfm-azure hover:text-sfm-navy">info@sankofafamilymedicine.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+14252857390" className="text-sfm-azure hover:text-sfm-navy">+1 (425) 285-7390</a></p>
            </div>
          </section>

          <section className="mb-12 pb-8 border-t border-gray-300">
            <p className="text-gray-500 text-sm">
              This Privacy Policy is subject to change at any time. We will notify you of material changes by posting the updated policy on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
