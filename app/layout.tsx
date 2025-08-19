import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: site.seo.title, template: `%s – ${site.brand}` },
  description: site.seo.description,
  metadataBase: new URL("https://jay-site-nine.vercel.app"),
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "https://jay-site-nine.vercel.app",
    siteName: site.brand,
    images: [site.seo.ogImage],
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
