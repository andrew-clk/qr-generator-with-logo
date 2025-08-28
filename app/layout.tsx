import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QR Code Generator - but now with your LOGO!',
  description: 'Generate QR codes for URLs, text and contact information with custom logo support. Free, instant, and no data stored.',
  keywords: 'QR code, generator, logo, custom, URL, text, contact, vCard, free',
  authors: [{ name: 'Andrew C.' }],
  openGraph: {
    title: 'QR Code Generator with Logo Support',
    description: 'Generate beautiful QR codes with your custom logo for better brand presence',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8525902031865618"
          crossOrigin="anonymous"
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