import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smalle - Rapero",
  description: "Professional hip hop, and trap writer.",

  openGraph: {
    title: "Smalle | Hip Hop Artist",
    description: "Professional hip hop, trap and dark beats by Waver.",
    url: "https://smalle.vercel.app//",
    siteName: "Waver Beats",
    images: [
      {
        url: "https://smalle.vercel.app//preview-2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Waver | Music Producer",
    description: "Professional hip hop, trap and dark beats by Waver.",
    images: ["https://musicproducer-vercel.vercel.app/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics></Analytics>
      </body>
    </html>
  );
}
