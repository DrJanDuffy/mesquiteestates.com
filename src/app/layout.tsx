import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
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
              max-width: 42rem;
              margin: 0 auto;
            }
          `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
