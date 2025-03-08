// GA4 측정 ID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

if (!GA_TRACKING_ID) {
  console.warn('GA_TRACKING_ID가 설정되지 않았습니다.')
}

// pageview 이벤트 전송
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// 커스텀 이벤트 전송
type GTagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

// GA4 설정 타입
type GTagConfig = {
  page_path?: string
  event_category?: string
  event_label?: string
  value?: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// TypeScript를 위한 window.gtag 타입 정의
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: GTagConfig
    ) => void
  }
} 