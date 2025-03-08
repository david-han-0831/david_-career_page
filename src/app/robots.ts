import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://david-han.vercel.app'

  // 프로덕션 환경이 아닌 경우 모든 크롤링 차단
  if (process.env.NODE_ENV !== 'production') {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }

  return {
    // 기본 크롤링 규칙
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',          // API 경로 차단
          '/_next/',        // Next.js 빌드 출력 차단
          '/static/',       // 정적 파일 차단
        ],
      },
    ],
    // 사이트맵 위치 지정
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 