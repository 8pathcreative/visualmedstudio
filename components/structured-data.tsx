export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VisualMed Studio",
    "description": "Leading medical visualization studio creating interactive 3D anatomy models, surgical training simulators, and healthcare applications for medical education and patient care.",
    "url": "https://visualmedstudio.vercel.app",
    "logo": "https://visualmedstudio.vercel.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://visualmedstudio.vercel.app/contact"
    },
    "sameAs": [
      "https://twitter.com/visualmedstudio",
      "https://linkedin.com/company/visualmed-studio"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Healthcare Technology",
    "services": [
      "3D Medical Visualization",
      "Surgical Training Simulators", 
      "Medical Education Applications",
      "Healthcare Software Development",
      "VR/AR Medical Solutions"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VisualMed Studio",
    "url": "https://visualmedstudio.vercel.app",
    "description": "Leading medical visualization studio creating interactive 3D anatomy models, surgical training simulators, and healthcare applications.",
    "publisher": {
      "@type": "Organization",
      "name": "VisualMed Studio"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://visualmedstudio.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
