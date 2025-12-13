import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and user agreement for Sankofa Family Medicine virtual primary care services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-sfm-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-5xl text-sfm-navy mb-4">Terms of Service</h1>
          <p className="text-muted text-lg">Last updated: December 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-muted">
          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using the Sankofa Family Medicine website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Sankofa Family Medicine's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Disclaimer</h2>
            <p>
              The materials on Sankofa Family Medicine's website are provided on an 'as is' basis. Sankofa Family Medicine makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Medical Disclaimer</h2>
            <p>
              The information provided on this website is for educational and informational purposes only and does not constitute medical advice. This website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.
            </p>
            <p className="mt-4">
              Virtual consultations provided by Sankofa Family Medicine are not intended to serve as emergency medical care. In case of a medical emergency, please call 911 or go to your nearest emergency room.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Limitations</h2>
            <p>
              In no event shall Sankofa Family Medicine or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sankofa Family Medicine's website, even if Sankofa Family Medicine or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Accuracy of Materials</h2>
            <p>
              The materials appearing on Sankofa Family Medicine's website could include technical, typographical, or photographic errors. Sankofa Family Medicine does not warrant that any of the materials on our website are accurate, complete, or current. Sankofa Family Medicine may make changes to the materials contained on our website at any time without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Links</h2>
            <p>
              Sankofa Family Medicine has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sankofa Family Medicine of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Modifications</h2>
            <p>
              Sankofa Family Medicine may revise these Terms of Service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements we provide to clarify our services are governed by and construed in accordance with the laws of the State of Washington, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-12 pb-8 border-t border-gray-300">
            <h2 className="font-display text-3xl text-sfm-navy mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg border border-sfm-gold/20">
              <p><strong>Email:</strong> <a href="mailto:sfm@ndchvision.com" className="text-sfm-azure hover:text-sfm-navy">sfm@ndchvision.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+14252857390" className="text-sfm-azure hover:text-sfm-navy">(803) 226-7795</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
