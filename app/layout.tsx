import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: {
    default: "VisualMed Studio - Medical Visualization & 3D Healthcare Solutions",
    template: "%s | VisualMed Studio"
  },
  description:
    "Leading medical visualization studio creating interactive 3D anatomy models, surgical training simulators, and healthcare applications for medical education and patient care.",
  authors: [{ name: "VisualMed Studio", url: "https://visualmedstudio.vercel.app" }],
  creator: "VisualMed Studio",
  publisher: "VisualMed Studio",
  metadataBase: new URL("https://visualmedstudio.vercel.app"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visualmedstudio.vercel.app",
    title: "VisualMed Studio - Medical Visualization & 3D Healthcare Solutions",
    description:
      "Leading medical visualization studio creating interactive 3D anatomy models, surgical training simulators, and healthcare applications for medical education and patient care.",
    siteName: "VisualMed Studio",
    images: [
      {
        url: "/medical-dashboard.png",
        width: 1200,
        height: 630,
        alt: "VisualMed Studio - Medical Visualization Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisualMed Studio - Medical Visualization & 3D Healthcare Solutions",
    description: "Leading medical visualization studio creating interactive 3D anatomy models, surgical training simulators, and healthcare applications.",
    images: ["/medical-dashboard.png"],
    creator: "@visualmedstudio",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  category: "Healthcare Technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://rsms.me" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
