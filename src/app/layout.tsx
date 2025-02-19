import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../app/globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "The Agency",
  description: "Новата ера на видео обработката в България започва тук",
  metadataBase: new URL("https://theagency.bg"),
  openGraph: {
    title: "The Agency",
    description: "Новата ера на видео обработката в България започва тук",
    url: "https://theagency.bg",
    siteName: "The Agency",
    images: [
      {
        url: "/img/logo.jpg",
        width: 1200,
        height: 630,
        alt: "The Agency",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  icons: {
    icon: { 
      url: '/img/logo.jpg',
      type: 'image/jpeg',
      sizes: '32x32 48x48 96x96 128x128 256x256'
    },
    apple: { 
      url: '/img/logo.jpg',
      sizes: '180x180'
    }
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" type="image/jpeg" sizes="32x32 48x48 96x96 128x128 256x256" href="/img/logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/logo.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
