import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    'Mesquite Nevada homes',
    'Mesquite real estate',
    'Dr. Jan Duffy',
    'Mesquite Estates',
    'golf homes Mesquite',
    'Mesquite homes for sale',
    'BHHS Nevada Properties',
    'Mesquite realtor',
    'real estate Mesquite Nevada',
    'custom lots Mesquite',
    'Mesquite golf courses',
  ],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'BHHS Nevada Properties',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/Image/hero_bg_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mesquite Estates - Homes by Dr. Jan Duffy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/Image/hero_bg_1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-simple-search {
              --rs-ss-font-primary-color: #000000;
              --rs-ss-searchbar-border-color: #8b572a;
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: 100% !important;
              width: 100% !important;
              min-width: 20rem !important;
              max-width: 56rem !important;
              margin: 0 auto;
              display: block;
              box-sizing: border-box;
            }
            @media (min-width: 768px) {
              realscout-simple-search {
                min-width: 42rem !important;
              }
            }
          `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
