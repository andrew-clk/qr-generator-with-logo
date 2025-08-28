import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366f1',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'Free QR Code Generator with Custom Logo | Create QR Codes Online Malaysia',
  description: 'Generate professional QR codes for URLs, text, and contact information with custom logo support. Free online QR generator for Malaysian businesses. No registration required.',
  keywords: 'QR code generator Malaysia, free QR code, custom logo QR, vCard QR code, business QR generator, online QR maker, QR code with logo, Malaysia QR generator, contact QR code',
  authors: [{ name: 'Andrew C.' }],
  creator: 'Andrew C.',
  publisher: 'QR Generator Malaysia',
  robots: 'index, follow',
  category: 'Technology',
  classification: 'Business Tools',
  openGraph: {
    title: 'Free QR Code Generator with Custom Logo | Malaysia',
    description: 'Generate professional QR codes with custom logos for your Malaysian business. Free, fast, and secure online QR generator.',
    type: 'website',
    siteName: 'QR Code Generator Malaysia',
    locale: 'en_MY',
    countryName: 'Malaysia',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QR Code Generator with Custom Logo Support'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free QR Code Generator with Custom Logo | Malaysia',
    description: 'Generate professional QR codes with custom logos. Perfect for Malaysian businesses.',
    images: ['/og-image.png'],
    creator: '@qrgeneratormy'
  },
  alternates: {
    canonical: 'https://your-domain.com'
  },
  other: {
    'geo.region': 'MY',
    'geo.country': 'Malaysia',
    'geo.placename': 'Kuala Lumpur',
    'ICBM': '3.1390,101.6869',
    'DC.title': 'QR Code Generator Malaysia',
    'DC.subject': 'QR Code Generator, Malaysia Business Tools',
    'DC.description': 'Professional QR code generator with custom logo support for Malaysian businesses',
    'DC.language': 'en-MY',
    'DC.coverage': 'Malaysia',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="MY" />
        <meta name="geo.country" content="Malaysia" />
        <meta name="geo.placename" content="Kuala Lumpur" />
        <meta name="ICBM" content="3.1390,101.6869" />
        
        {/* Mobile and App Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="QR Generator MY" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to External Domains for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* Structured Data for AIO/AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "QR Code Generator Malaysia",
              "description": "Free online QR code generator with custom logo support for Malaysian businesses",
              "url": "https://your-domain.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "MYR"
              },
              "provider": {
                "@type": "Person",
                "name": "Andrew C."
              },
              "featureList": [
                "Custom Logo QR Codes",
                "URL QR Codes",
                "Text QR Codes", 
                "vCard Contact QR Codes",
                "High Resolution Download",
                "No Registration Required"
              ],
              "screenshot": "https://your-domain.com/og-image.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "3.1390",
                "longitude": "101.6869"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Malaysia"
              }
            })
          }}
        />
        
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8525902031865618"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"
          defer
        />
      </body>
    </html>
  )
}