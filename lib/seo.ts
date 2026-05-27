import type { Metadata } from "next";

/** Set in .env.local — your live portfolio URL (no trailing slash). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://anasraheem.dev"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Muhammad Anas Raheem",
  shortName: "Anas Raheem",
  title: "Muhammad Anas Raheem | AI & Full-Stack Developer",
  titleTemplate: "%s | Muhammad Anas Raheem",
  description:
    "Muhammad Anas Raheem is an AI and full-stack developer in Islamabad, Pakistan — agentic AI systems, AI automation, MERN/Laravel apps, and project leadership at Obrix Labs.",
  tagline:
    "AI professional specializing in agentic AI, full-stack development, and intelligent automation.",
  locale: "en_US",
  email: "anasraheem48@gmail.com",
  phone: "+923462440356",
  location: {
    city: "Islamabad",
    country: "Pakistan",
    countryCode: "PK",
  },
  links: {
    website: "https://obrixlabs.com/",
    linkedin: "https://www.linkedin.com/in/anasraheem/",
    github: "https://github.com/anasraheemdev",
    resume: "/resume.pdf",
  },
  keywords: [
    "Muhammad Anas Raheem",
    "Anas Raheem",
    "AI developer Pakistan",
    "full stack developer Islamabad",
    "agentic AI developer",
    "AI automation engineer",
    "Obrix Labs",
    "MERN stack developer",
    "LangChain developer",
    "machine learning engineer",
    "React developer",
    "Next.js portfolio",
    "hire AI developer Pakistan",
  ],
  jobTitle: "AI & Full-Stack Developer",
  knowsAbout: [
    "Artificial Intelligence",
    "Agentic AI",
    "Full-Stack Development",
    "Machine Learning",
    "Computer Vision",
    "LangChain",
    "React",
    "Node.js",
    "Python",
    "Project Management",
  ],
} as const;

export function getSiteMetadata(overrides?: Partial<Metadata>): Metadata {
  const ogTitle = siteConfig.title;
  const ogDescription = siteConfig.description;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.title,
      template: siteConfig.titleTemplate,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [
      { name: siteConfig.name, url: siteUrl },
      { name: siteConfig.name, url: siteConfig.links.linkedin },
    ],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    applicationName: siteConfig.shortName,
    category: "technology",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteUrl,
      siteName: siteConfig.name,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.jobTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add when you have them: google: "...", yandex: "..."
      ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
        : {}),
    },
    other: {
      "geo.region": "PK-IS",
      "geo.placename": siteConfig.location.city,
    },
    ...overrides,
  };
}
