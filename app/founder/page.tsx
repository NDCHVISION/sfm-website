import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowRight, GraduationCap, FileText, Heart, Stethoscope, Brain, Wifi, Globe, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Yaw Nkrumah, MD | Founder | Sankofa Family Medicine',
  description: 'Dr. Yaw Nkrumah, MD is the founder of Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State. Board-eligible family physician specializing in genetic testing, precision medicine, cardiometabolic health, and Medicine That Remembers.',
  keywords: ['Dr. Yaw Nkrumah', 'family physician Washington', 'DPC founder', 'Sankofa Family Medicine', 'genetic testing', 'precision medicine', 'cardiometabolic health'],
  openGraph: {
    title: 'Dr. Yaw Nkrumah, MD | Founder | Sankofa Family Medicine',
    description: 'Founder of Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State.',
    url: 'https://sankofafamilymedicine.com/founder',
    images: [{ url: '/images/dr-nkrumah.png', width: 400, height: 400, alt: 'Dr. Yaw Nkrumah, MD' }],
  },
  alternates: {
    canonical: 'https://sankofafamilymedicine.com/founder',
  },
}

// Person schema for Dr. Yaw Nkrumah - locked-in entity story
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://sankofafamilymedicine.com/#founder',
  name: 'Dr. Yaw Nkrumah',
  givenName: 'Yaw',
  familyName: 'Nkrumah',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'MD',
  jobTitle: 'Founder & Medical Director',
  description: 'Dr. Yaw Nkrumah, MD is the founder of Sankofa Family Medicine, a virtual-first direct primary care (DPC) practice serving patients across Washington State. He created Medicine That Remembers to solve healthcare fragmentation through continuity, genetic testing, precision medicine, and cardiometabolic health optimization.',
  image: 'https://sankofafamilymedicine.com/images/dr-nkrumah.png',
  url: 'https://sankofafamilymedicine.com/founder',
  sameAs: [
    'https://www.linkedin.com/in/yawnkrumahmd/',
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Medical University of South Carolina',
      alternateName: 'MUSC',
    },
    {
      '@type': 'MedicalOrganization',
      name: 'Kadlec Family Medicine Residency',
      address: { '@type': 'PostalAddress', addressRegion: 'WA', addressCountry: 'US' },
    },
  ],
  hasCredential: [
    {
      '@type': 'MedicalLicense',
      name: 'Medical License - Washington State',
      credentialCategory: 'Physician License',
      recognizedBy: { '@type': 'GovernmentOrganization', name: 'Washington State Department of Health' },
    },
  ],
  medicalSpecialty: ['PrimaryCare', 'FamilyMedicine', 'PreventiveMedicine'],
  knowsAbout: [
    'Direct Primary Care (DPC)',
    'Virtual/Telehealth Medicine',
    'Genetic Testing & Precision Medicine',
    'Cardiometabolic Health',
    'Medicine That Remembers',
  ],
  worksFor: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sankofafamilymedicine.com/#organization',
    name: 'Sankofa Family Medicine',
    description: 'Virtual-first direct primary care (DPC) practice serving patients across Washington State.',
  },
}

export default function FounderPage() {
  return (
    <>
      {/* Person Schema for Dr. Nkrumah */}
      <Script
        id="founder-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-sfm-navy overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sfm-gold/40 to-sfm-gold/10 blur-2xl scale-125" />
            <Image 
              src="/images/dr-nkrumah.png" 
              alt="Dr. Yaw Nkrumah, MD" 
              width={208}
              height={208}
              className="relative w-52 h-52 rounded-full object-cover object-top border-4 border-sfm-gold/40 shadow-2xl"
              priority
            />
          </div>
          <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4 font-medium">Founder & Medical Director</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">Dr. Yaw Nkrumah, MD</h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Family Physician | Washington State
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
      <section className="py-20 bg-sfm-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-sfm-gold/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-sfm-gold/20" />
        
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-sfm-navy italic leading-relaxed">
            &quot;Care improves when we take the time to listen, document with intention, and follow through 
            with consistency. Memory is the foundation of trust.&quot;
          </blockquote>
        </div>
      </section>

      {/* Biography */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sfm-azure text-sm tracking-[0.25em] uppercase mb-4 font-medium">Biography</p>
            <h2 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6">About Our Founder</h2>
            <div className="divider-gold mb-10" />
          </div>
          
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Dr. Yaw Nkrumah is a family physician, founder of Sankofa Family Medicine, and Founder & CEO
              of The Nkrumah Doctrine Cultural Holdings (NDCH), a cultural-systems and applied-AI studio.
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
      <section className="py-28 bg-sfm-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-4 font-medium">Training & Credentials</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Education & Licensure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <GraduationCap className="w-10 h-10 text-sfm-gold mb-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-3">Medical School</h3>
              <p className="text-white/80">Medical University of South Carolina (MUSC)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <Stethoscope className="w-10 h-10 text-sfm-gold mb-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-3">Residency</h3>
              <p className="text-white/80">Kadlec Family Medicine Residency</p>
              <p className="text-white/50 text-sm mt-2">Washington State</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <FileText className="w-10 h-10 text-sfm-gold mb-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl text-white mb-3">Licensure</h3>
              <p className="text-white/80">Licensed Physician</p>
              <p className="text-white/50 text-sm mt-2">Washington State</p>
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
            <div className="border border-gray-100 p-6 rounded-xl hover:border-sfm-azure/30 transition-colors shadow-sm">
                <p className="text-sfm-azure text-xs tracking-wide uppercase mb-2">COVID-19 Therapeutics First Author</p>
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

            {/* Ménière Disease Publication */}
            <div className="border border-gray-100 p-6 rounded-xl hover:border-sfm-azure/30 transition-colors shadow-sm">
              <p className="text-sfm-azure text-xs tracking-wide uppercase mb-2">Ménière Disease Research</p>
              <h3 className="font-display text-xl text-sfm-navy mb-2">
                Pathogenesis and Etiology of Ménière Disease: A Scoping Review
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
              <div key={interest.title} className="bg-white p-6 border-l-4 border-sfm-azure rounded-xl shadow-sm">
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
      <section className="py-28 bg-sfm-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sfm-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sfm-azure/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
            Ready to Experience Care That Remembers?
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
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

