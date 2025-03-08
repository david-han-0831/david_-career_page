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
