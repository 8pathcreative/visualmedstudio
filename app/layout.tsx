// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"
import { StructuredData } from "@/components/structured-data"

// Optimized font loading with preload and display swap
const inter = localFont({
  src: [
    {
      path: '../public/fonts/InterVariable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Regular.woff2', 
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-inter',
  display: 'swap', // Critical: prevents render blocking
  preload: true, // Preloads the font
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

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
    google: "your-google-verification-code",
  },
  category: "Healthcare Technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* Critical meta tags first */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Font optimization: Preload critical font resources */}
        <link
          rel="preload"
          href="/fonts/InterVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Non-critical resources */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}