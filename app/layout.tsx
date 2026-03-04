import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "end of lease cleaning Sydney",
    "bond back cleaning",
    "professional cleaning service",
    "Surry Hills cleaning",
    "Newtown cleaning",
    "Glebe cleaning",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.canonical,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Professional End of Lease Cleaning`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.canonical}/ai/hero-1.png`,
        width: 1200,
        height: 630,
        alt: "Spotlessify Professional Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Professional End of Lease Cleaning`,
    description: siteConfig.description,
    images: [`${siteConfig.canonical}/ai/hero-1.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.canonical}/ai/hero-1.png`,
    description: siteConfig.description,
    url: siteConfig.canonical,
    telephone: siteConfig.phoneShort,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressStreet: "123 Cleaning Lane",
      addressLocality: "Surry Hills",
      addressRegion: "NSW",
      postalCode: "2010",
      addressCountry: "AU",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Sydney",
      },
      {
        "@type": "City",
        name: "Surry Hills",
      },
      {
        "@type": "City",
        name: "Newtown",
      },
      {
        "@type": "City",
        name: "Glebe",
      },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/spotlessify",
      "https://www.instagram.com/spotlessify",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
