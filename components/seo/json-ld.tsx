import { siteConfig, siteUrl } from "@/lib/seo";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    givenName: "Muhammad Anas",
    familyName: "Raheem",
    alternateName: siteConfig.shortName,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.website,
    ],
    knowsAbout: siteConfig.knowsAbout,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Air University",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressCountry: "Pakistan",
        },
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Obrix Labs",
      url: siteConfig.links.website,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: `${siteConfig.name} — Portfolio`,
    description: siteConfig.description,
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    mainEntity: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    founder: { "@id": `${siteUrl}/#person` },
  };

  const graph = [person, website, profilePage, professionalService];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
