import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GA_TRACKING_ID } from '../lib/gtag'
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://david-han.vercel.app'),
  title: "David Han | Full Stack Developer",
  description: "웹/앱 풀스택 개발자 한동윤의 포트폴리오입니다.",
  keywords: ["Next.js", "TypeScript", "React", "풀스택", "개발자", "포트폴리오"],
  authors: [{ name: "David Han" }],
  creator: "David Han",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-icon.png' },
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    title: 'David Han - 풀스택 개발자',
    description: 'Next.js & TypeScript 기반의 포트폴리오 사이트',
    siteName: 'David Han Portfolio',
    url: 'https://david-han.vercel.app',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'David Han Portfolio Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Han - 풀스택 개발자',
    description: 'Next.js & TypeScript 기반의 포트폴리오 사이트',
    images: ['/web-app-manifest-512x512.png'],
    creator: '@david_han',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "David Han",
              "alternateName": "한동윤",
              "jobTitle": "풀스택 개발자",
              "url": "https://david-han.vercel.app",
              "image": "https://david-han.vercel.app/web-app-manifest-512x512.png",
              "description": "웹/앱 풀스택 개발자 한동윤의 포트폴리오입니다. React, Next.js, TypeScript 등을 활용한 웹 개발 프로젝트를 소개합니다.",
              "sameAs": [
                "https://github.com/david-han-0831",
                "https://www.linkedin.com/in/david880927/",
                "https://www.instagram.com/klang_code/",
                "https://bento.me/david-han"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hdy20201004@gmail.com",
                "contactType": "개발 문의"
              },
              "knowsAbout": [
                "웹 개발",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "FastAPI"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelancer"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
