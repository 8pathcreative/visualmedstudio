import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Vismed Studio - Bringing Medical Visualization to Life",
  description:
    "We create cutting-edge 3D medical illustrations and full-stack applications that transform complex medical concepts into interactive, educational experiences.",
  generator: "v0.app",
  keywords: "medical visualization, 3D anatomy, medical education, healthcare applications, interactive learning",
  authors: [{ name: "Vismed Studio" }],
  creator: "Vismed Studio",
  publisher: "Vismed Studio",
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
    url: "https://vismedstudio.com",
    title: "Vismed Studio - Medical Visualization Experts",
    description:
      "Transform complex medical concepts into interactive, educational experiences with our cutting-edge 3D visualizations.",
    siteName: "Vismed Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vismed Studio - Medical Visualization Experts",
    description: "Transform complex medical concepts into interactive, educational experiences.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://formspree.io" />
      </head>
      <body>{children}</body>
    </html>
  )
}
