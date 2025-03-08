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
  metadataBase: new URL('https://david-career-page.vercel.app'),
  title: "David Han | Full Stack Developer",
  description: "웹/앱 풀스택 개발자 한동윤의 포트폴리오입니다.",
  keywords: ["Next.js", "TypeScript", "React", "풀스택", "개발자", "포트폴리오"],
  authors: [{ name: "David Han" }],
  creator: "David Han",
  verification: {
    google: 'FTweV45T7VjFNZsMflJxmLXWWh_FzjEynb1xuSoON1U',
  },
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
    url: 'https://david-career-page.vercel.app',
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
              "url": "https://david-career-page.vercel.app",
              "image": "https://david-career-page.vercel.app/web-app-manifest-512x512.png",
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
              "hasOccupation": {
                "@type": "Occupation",
                "name": "풀스택 개발자",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://david-career-page.vercel.app/",
                  "lastReviewed": "2024-03-09"
                },
                "occupationLocation": {
                  "@type": "City",
                  "name": "서울특별시",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "KR",
                    "addressRegion": "서울특별시"
                  }
                },
                "estimatedSalary": {
                  "@type": "MonetaryAmountDistribution",
                  "name": "풀스택 개발자 급여",
                  "currency": "KRW",
                  "duration": "P1M",
                  "median": 5500000,
                  "percentile10": 4000000,
                  "percentile25": 4000000,
                  "percentile75": 7000000,
                  "percentile90": 7000000
                },
                "description": "웹/앱 풀스택 개발자로서 프론트엔드와 백엔드 개발을 모두 담당합니다. 최신 기술 스택을 활용하여 효율적이고 확장 가능한 솔루션을 제공합니다.",
                "skills": [
                  "웹 개발",
                  "모바일 앱 개발",
                  "데이터베이스 설계",
                  "API 개발",
                  "UI/UX 디자인"
                ],
                "responsibilities": [
                  "웹 애플리케이션 개발",
                  "RESTful API 설계 및 구현",
                  "데이터베이스 모델링",
                  "프론트엔드 개발",
                  "백엔드 개발"
                ]
              },
              "knowsAbout": [
                {
                  "@type": "Technology",
                  "name": "프론트엔드",
                  "skills": ["React", "Next.js", "TypeScript", "TailwindCSS"]
                },
                {
                  "@type": "Technology",
                  "name": "백엔드",
                  "skills": ["Python", "FastAPI", "Node.js", "Express"]
                },
                {
                  "@type": "Technology",
                  "name": "데이터베이스",
                  "skills": ["PostgreSQL", "MongoDB", "Redis"]
                }
              ],
              "workExample": [
                {
                  "@type": "CreativeWork",
                  "name": "포트폴리오 웹사이트",
                  "url": "https://david-career-page.vercel.app",
                  "description": "Next.js와 TypeScript를 활용한 개인 포트폴리오 웹사이트",
                  "technologies": ["Next.js", "TypeScript", "TailwindCSS"]
                }
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
