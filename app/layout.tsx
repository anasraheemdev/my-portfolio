import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";
import { PortfolioChatbot } from "@/components/portfolio-chatbot";

// Harmond - Display font (fallback: Playfair Display)
const harmond = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-harmond",
  display: "swap",
  preload: true,
});

// Nohemi - Body font (fallback: Inter)
const nohemi = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nohemi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Muhammad Anas Raheem | AI & Full-Stack Developer",
  description:
    "Highly driven AI professional specializing in full-stack development, agentic AI systems, AI automation, and intelligent solution design.",
  keywords: [
    "Muhammad Anas Raheem",
    "AI Developer",
    "Full Stack Developer",
    "Agentic AI",
    "AI Automation",
    "Business Intelligence",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Anas Raheem" }],
  openGraph: {
    title: "Muhammad Anas Raheem | AI & Full-Stack Developer",
    description:
      "AI professional specializing in full-stack development, agentic AI systems, and AI automation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${harmond.variable} ${nohemi.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white font-nohemi antialiased overflow-x-hidden">
        <LenisProvider>
          {/* Noise overlay - Film grain effect */}
          <NoiseOverlay />
          
          {/* Custom cursor - Desktop only */}
          <CustomCursor />
          
          {/* Main content */}
          <main>{children}</main>
          <PortfolioChatbot />
        </LenisProvider>
      </body>
    </html>
  );
}
