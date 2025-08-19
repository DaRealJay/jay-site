import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jay – Modern Web Design",
    template: "%s – Jay",
  },
  description: "Fast, clean websites that convert. SEO + performance baked in.",
  metadataBase: new URL("https://example.com"), // ← change after deploy
  openGraph: {
    title: "Jay – Modern Web Design",
    description: "Fast, clean websites that convert. SEO + performance baked in.",
    url: "https://example.com",                 // ← change after deploy
    siteName: "Jay",
    // Using /next.svg so you don't need to add an image yet (swap to /og-image.png later)
    images: ["/next.svg"],
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
