import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, GraduationCap, FileText, Heart, Stethoscope, Brain, Wifi, Globe, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Yaw Nkrumah, MD - Founder',
  description: 'Meet Dr. Yaw Nkrumah, MD, founder of Sankofa Family Medicine. Family physician trained at MUSC and Kadlec Family Medicine Residency, licensed in Washington State. Specializing in cardiometabolic health, preventive care, and AI-supported clinical workflows.',
}

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image 
            src="/images/dr-nkrumah.png" 
            alt="Dr. Yaw Nkrumah, MD" 
            width={192}
            height={192}
            className="w-48 h-48 rounded-full object-cover object-top mx-auto mb-8 border-4 border-sfm-gold/30"
            priority
          />
          <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">Founder & Medical Director</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">Dr. Yaw Nkrumah, MD</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-6">
            Family Physician Ä¢ Washington State
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/yawnkrumahmd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary-white text-sm py-2 px-4"
            >
              LinkedIn
              <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-16 bg-sfm-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-display text-2xl md:text-3xl text-sfm-navy italic leading-relaxed">
            &quot;Care improves when we take the time to listen, document with intention, and follow through 
            with consistency. Memory is the foundation of trust.&quot;
          </blockquote>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Biography</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-6">About Dr. Nkrumah</h2>
            <div className="divider-gold mb-8" />
          </div>
          
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Dr. Yaw Nkrumah is a family physician, founder of Sankofa Family MedicineÑ¢, and Founder & CEO 
              of The Nkrumah Doctrine Cultural Holdings (NDCHÑ¢), a cultural-systems and applied-AI studio.
            </p>
            <p>
              He believes great care begins with <strong className="text-sfm-navy">presence, clarity, and continuity</strong>. 
              His clinical approach is steady and attentive, helping patients feel guided while ensuring their 
              health history is remembered with accuracy and respect.
            </p>
            <p>
              Dr. Nkrumah integrates frontline medical training with modern digital workflows and AI support. 
              Across both medicine and NDCH, his work centers on building systems that hold memory, reduce friction, 
              and protect dignity at scale.
            </p>
            <p>
              His perspective is shaped by training in diverse clinical environments and by clinicians who modeled 
              what compassionate, focused care could look like when time and structure allowed it.
            </p>
            <p className="text-sfm-navy font-medium">
              Sankofa Family Medicine reflects what becomes possible when those values are supported instead of constrained.
            </p>
            <p>
              Outside his clinical and founder roles, he values time with family, strength training, travel, 
              and the ongoing study of focus, clarity, and legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Training & Credentials */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">Training & Credentials</p>
            <h2 className="font-display text-4xl text-white mb-4">Education & Licensure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20">
              <GraduationCap className="w-10 h-10 text-sfm-gold mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-2">Medical School</h3>
              <p className="text-white/80">Medical University of South Carolina (MUSC)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20">
              <Stethoscope className="w-10 h-10 text-sfm-gold mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-2">Residency</h3>
              <p className="text-white/80">Kadlec Family Medicine Residency</p>
              <p className="text-white/60 text-sm mt-1">Washington State</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20">
              <FileText className="w-10 h-10 text-sfm-gold mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-2">Licensure</h3>
              <p className="text-white/80">Licensed Physician</p>
              <p className="text-white/60 text-sm mt-1">Washington State</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">Research</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-6">Publications</h2>
            <div className="divider-gold mb-8" />
          </div>

          <div className="space-y-8">
            {/* COVID-19 Publication */}
            <div className="border border-gray-100 p-6 hover:border-sfm-azure/30 transition-colors">
              <p className="text-sfm-azure text-xs tracking-wide uppercase mb-2">COVID-19 Therapeutics Ä¢ First Author</p>
              <h3 className="font-display text-xl text-sfm-navy mb-2">
                Treatment of COVID-19 Patients with Remdesivir: A Systematic Review and Meta-Analysis
              </h3>
              <p className="text-muted text-sm mb-4">Annals of Epidemiology & Public Health</p>
              <a 
                href="https://shorturl.at/6p8nN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sfm-azure hover:text-sfm-navy transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
              >
                Read Publication
                <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />
              </a>
            </div>

            {/* M√©ni√®re Disease Publication */}
            <div className="border border-gray-100 p-6 hover:border-sfm-azure/30 transition-colors">
              <p className="text-sfm-azure text-xs tracking-wide uppercase mb-2">M√©ni√®re Disease Research</p>
              <h3 className="font-display text-xl text-sfm-navy mb-2">
                Pathogenesis and Etiology of M√©ni√®re Disease: A Scoping Review
              </h3>
              <p className="text-muted text-sm mb-4">PubMed</p>
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/35142800/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sfm-azure hover:text-sfm-navy transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sfm-azure rounded"
              >
                View on PubMed
                <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Interests */}
      <section className="py-24 bg-sfm-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sfm-gold text-sm tracking-[0.2em] uppercase mb-4">Specializations</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-4">Clinical Interests</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Cardiometabolic Health', description: 'Blood pressure, cholesterol, diabetes prevention and management' },
              { icon: Stethoscope, title: 'Preventive & Precision Care', description: 'Evidence-based screening, genetic testing, personalized protocols' },
              { icon: Brain, title: 'AI-Supported Workflows', description: 'Technology that enhances clinical decision-making and documentation' },
              { icon: Wifi, title: 'Virtual Care Delivery', description: 'HIPAA-compliant telehealth that maintains human connection' },
              { icon: Globe, title: 'Culturally Grounded Medicine', description: 'Care that honors diverse backgrounds and health traditions' },
            ].map((interest) => (
              <div key={interest.title} className="bg-white p-6 border-l-4 border-sfm-azure">
                <interest.icon className="w-6 h-6 text-sfm-azure mb-3" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display text-lg text-sfm-navy mb-2">{interest.title}</h3>
                <p className="text-muted text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SFM */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sfm-azure text-sm tracking-[0.2em] uppercase mb-4">The Vision</p>
            <h2 className="font-display text-4xl text-sfm-navy mb-6">Why I Founded Sankofa Family Medicine</h2>
            <div className="divider-gold mb-8" />
          </div>
          
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Throughout my training, I encountered two realities. The first: healthcare systems that 
              fragment care, rush visits, and force patients to repeat their stories to strangers. 
              The second: exceptional clinicians who showed me what medicine could look like when given 
              the time and structure to do it right.
            </p>
            <p>
              I built Sankofa Family Medicine to bridge that gap, to create a practice where continuity 
              isn&apos;t aspirational, it&apos;s structural. Where your physician actually knows you, 
              your history follows you, and your care improves over time because memory compounds.
            </p>
            <p>
              The Sankofa principle, looking back to move forward wisely, isn&apos;t just a name. 
              It&apos;s the operating philosophy. We retrieve what matters from each visit, each conversation, 
              each test result, and carry it forward into your future care.
            </p>
            <p className="text-sfm-navy font-medium text-lg">
              This is the kind of practice I would trust with my own family. Now it&apos;s available to yours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            Ready to Experience Care That Remembers?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Join the founding member waitlist and become one of the first patients of Sankofa Family Medicine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary-white">
              View Services & Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

