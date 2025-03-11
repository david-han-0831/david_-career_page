"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FolderKanban, ChevronRight, Code2, Globe, Brain, Layout, Server, Database, Cloud } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { FaJava } from "react-icons/fa"
import {
  SiPython,
  SiTensorflow,
  SiFastapi,
  SiReact,
  SiMysql,
  SiDocker,
  SiAmazon as SiAws,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiVuedotjs,
  SiNestjs,
  SiRedis,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiSpring,
  SiFlutter,
  SiDart,
  SiPhp,
  SiCodeigniter,
  SiMariadb,
} from "react-icons/si"

interface Project {
  id: number
  title: string
  description: string
  image: string
  details: string
  technologies: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  images?: string[]
  company?: string
}

// 기술 스택 아이콘 매핑
const getTechIcon = (tech: string): React.ReactNode => {
  switch (tech) {
    // 프론트엔드
    case "React": return <SiReact className="text-[#61DAFB]" />
    case "HTML": return <SiHtml5 className="text-[#E34F26]" />
    case "CSS": return <SiCss3 className="text-[#1572B6]" />
    case "JavaScript": return <SiJavascript className="text-[#F7DF1E]" />
    case "jQuery": return <SiJquery className="text-[#0769AD]" />
    case "Flutter": return <SiFlutter className="text-[#02569B]" />
    case "Dart": return <SiDart className="text-[#0175C2]" />
    case "PHP": return <SiPhp className="text-[#777BB4]" />
    case "Code Igniter": return <SiCodeigniter className="text-[#EF4223]" />
    case "Vue.js": return <SiVuedotjs className="text-[#4FC08D]" />
    case "Node.js": return <SiNodedotjs className="text-[#339933]" />
    case "Nest.js": return <SiNestjs className="text-[#E0234E]" />
    
    // 백엔드
    case "Java": return <FaJava className="text-[#ED8B00]" />
    case "Spring Boot": return <SiSpring className="text-[#6DB33F]" />
    case "Python": return <SiPython className="text-[#3776AB]" />
    
    // 데이터베이스
    case "MySQL": return <SiMysql className="text-[#4479A1]" />
    case "MariaDB": return <SiMariadb className="text-[#003545]" />
    
    // 인프라
    case "AWS": return <SiAws className="text-[#FF9900]" />
    case "Docker": return <SiDocker className="text-[#2496ED]" />
    
    // AI/ML
    case "TensorFlow": return <SiTensorflow className="text-[#FF6F00]" />
    
    // 기본 아이콘
    default: return <Code2 className="w-4 h-4 text-darkGray" />
  }
}

// 카테고리별 아이콘 매핑
const categoryIcons: Record<string, React.ReactNode> = {
  "All": <Code2 className="w-4 h-4" />,
  "Web": <Globe className="w-4 h-4" />,
  "App": <Layout className="w-4 h-4" />,
}

// 기술 스택 그룹 정의
const techGroups = {
  "Frontend": ["React", "Next.js", "Vue.js", "TypeScript"],
  "Backend": ["Node.js", "FastAPI", "Nest.js", "Python"],
  "Database": ["MySQL", "PostgreSQL", "Redis"],
  "AI/ML": ["TensorFlow"],
  "Infrastructure": ["AWS", "Docker"]
} as const

// 기술 스택 그룹 아이콘
const groupIcons: Record<string, React.ReactNode> = {
  "Frontend": <Layout className="w-4 h-4" />,
  "Backend": <Server className="w-4 h-4" />,
  "Database": <Database className="w-4 h-4" />,
  "AI/ML": <Brain className="w-4 h-4" />,
  "Infrastructure": <Cloud className="w-4 h-4" />
}

const DEFAULT_IMAGE = "/icon.png"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const [visibleCount, setVisibleCount] = useState(6)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "문화예술인 커뮤니티 플랫폼",
      description: "문화예술인들을 위한 앱, 회원관리, 공연/행사 관리, 지원사업 데이터 크롤링",
      image: "/images/projects/art-thumb.jpg",
      images: [
        "/images/projects/art-1.jpg",
        "/images/projects/art-2.jpg",
      ],
      details: `문화예술인들을 위한 통합 플랫폼으로 다음 기능을 제공합니다:

• 회원 관리 및 인증 시스템
• 공연/행사 등록 및 관리
• 지원사업 데이터 자동 크롤링
• 예술인 프로필 관리
• 공연/전시 정보 등록 및 홍보

역할:
- 서비스 기획
- 프로젝트 매니저
- 데이터 수집 및 관리
- 프론트 & 백엔드 개발

주요 성과:
- 2024년 서울 청년창업사관학교 선정`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL", "Python"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 2,
      title: "자기소개서 첨삭 서비스",
      description: "자기소개서 첨삭 서비스 웹 개발, 회원관리, 구독 결제, 강사 코멘트",
      image: "/images/projects/resume-thumb.jpg",
      images: [
        "/images/projects/resume-1.jpg",
        "/images/projects/resume-2.jpg",
      ],
      details: `자기소개서 첨삭 서비스로 다음 기능을 제공합니다:

• 회원 관리 시스템
• 구독 결제 시스템
• 강사 코멘트 기능
• 자기소개서 버전 관리
• 실시간 알림 시스템

역할:
- 프로젝트 매니저
- 시스템 설계 및 구현`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 3,
      title: "AI 개발자 프로젝트 매칭 플랫폼",
      description: "AI 개발자, 프로젝트 매칭 앱 플랫폼 개발",
      image: "/images/projects/matching-thumb.jpg",
      images: [
        "/images/projects/matching-1.jpg",
        "/images/projects/matching-2.jpg",
      ],
      details: `AI 개발자와 프로젝트를 매칭하는 플랫폼으로 다음 기능을 제공합니다:

• 개발자 프로필 관리
• 프로젝트 매칭 알고리즘
• 실시간 채팅
• 프로젝트 진행 현황 관리
• 계약 및 결제 시스템

역할:
- 프로젝트 매니저
- 프론트 & 백엔드 개발`,
      technologies: ["JavaScript", "React", "Java", "Spring Boot", "MySQL"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 4,
      title: "국회 앱 프론트엔드 개발",
      description: "앱 프론트엔드 개발 및 패키징",
      image: "/images/projects/congress-thumb.jpg",
      images: [
        "/images/projects/congress-1.jpg",
        "/images/projects/congress-2.jpg",
      ],
      details: `국회 앱의 프론트엔드 개발 프로젝트입니다:

• 반응형 UI/UX 구현
• Webview 기반 하이브리드 앱 개발
• 실시간 알림 시스템
• 데이터 시각화
• 성능 최적화

역할:
- 프로젝트 매니저
- 프론트엔드 기능 구현`,
      technologies: ["JavaScript", "React", "HTML", "CSS"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 5,
      title: "비대면 진료 앱 및 CRM 개발",
      description: "비대면 진료 앱 및 병원 CRM 개발",
      image: "/images/projects/medical-thumb.jpg",
      images: [
        "/images/projects/medical-1.jpg",
        "/images/projects/medical-2.jpg",
      ],
      details: `비대면 진료 앱 및 병원 CRM 시스템으로 다음 기능을 제공합니다:

• 비대면 진료 예약 및 관리
• 환자 정보 관리 시스템
• 진료 기록 관리
• 처방전 발급 시스템
• 병원 CRM 대시보드

역할:
- 프로젝트 매니저
- 백엔드 개발`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL", "Dart", "Flutter"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 6,
      title: "세무 자동화 프로그램 개발",
      description: "세무 자동화 프로그램 개발",
      image: "/images/projects/tax-thumb.jpg",
      images: [
        "/images/projects/tax-1.jpg",
        "/images/projects/tax-2.jpg",
      ],
      details: `세무 업무 자동화 프로그램으로 다음 기능을 제공합니다:

• 세무 데이터 자동 처리
• 세금 계산 자동화
• 보고서 자동 생성
• 데이터 분석 및 시각화
• 세무 일정 관리

역할:
- 프로젝트 매니저`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 7,
      title: "이미지 분석 인공지능 GUI 개발",
      description: "이미지 분석 인공지능 GUI 개발",
      image: "/images/projects/ai-image-thumb.jpg",
      images: [
        "/images/projects/ai-image-1.jpg",
        "/images/projects/ai-image-2.jpg",
      ],
      details: `이미지 분석 인공지능 GUI 프로그램으로 다음 기능을 제공합니다:

• 이미지 분석 및 처리
• 실시간 이미지 분석
• 분석 결과 시각화
• 데이터 관리 인터페이스
• 분석 보고서 생성

역할:
- 프로젝트 매니저`,
      technologies: ["Python"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 8,
      title: "한국어 인공지능 분석 서비스 앱 개발",
      description: "한국어 인공지능 분석 서비스 앱, 어드민 개발",
      image: "/images/projects/nlp-thumb.jpg",
      images: [
        "/images/projects/nlp-1.jpg",
        "/images/projects/nlp-2.jpg",
      ],
      details: `한국어 인공지능 분석 서비스 앱으로 다음 기능을 제공합니다:

• 한국어 텍스트 분석
• 감정 분석 시스템
• 관리자 대시보드
• 데이터 통계 및 리포트
• WebView 기반 하이브리드 앱

역할:
- 프로젝트 매니저
- 프론트 & 백엔드 개발`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 9,
      title: "건강기능식품 분석 서비스 앱 개발",
      description: "건강기능식품 분석 서비스 앱, 어드민 개발, 회원관리, 상품 관리, 상품 분석 데이터 전처리",
      image: "/images/projects/health-thumb.jpg",
      images: [
        "/images/projects/health-1.jpg",
        "/images/projects/health-2.jpg",
      ],
      details: `건강기능식품 분석 서비스 앱으로 다음 기능을 제공합니다:

• 회원 관리 시스템
• 상품 등록 및 관리
• 상품 분석 데이터 전처리
• 어드민 대시보드
• WebView 기반 하이브리드 앱

역할:
- 프로젝트 매니저
- 백엔드 개발`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL", "WebView", "Python"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 10,
      title: "ERP 및 HR 시스템 개발",
      description: "사내 ERP/HR 시스템 개발",
      image: "/images/projects/erp-thumb.jpg",
      images: [
        "/images/projects/erp-1.jpg",
        "/images/projects/erp-2.jpg",
      ],
      details: `사내 ERP/HR 시스템으로 다음 기능을 제공합니다:

• 인사 관리 시스템
• 급여 관리
• 근태 관리
• 자원 관리
• 문서 관리

역할:
- 프로젝트 매니저`,
      technologies: ["PHP", "Code Igniter", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 11,
      title: "성형외과 관리 및 광고 앱 개발",
      description: "성형외과 앱, 병원관리, 회원관리, 광고",
      image: "/images/projects/hospital-thumb.jpg",
      images: [
        "/images/projects/hospital-1.jpg",
        "/images/projects/hospital-2.jpg",
      ],
      details: `성형외과 관리 앱으로 다음 기능을 제공합니다:

• 병원 관리 시스템
• 회원 관리
• 광고 관리
• 예약 관리
• 통계 및 리포트

역할:
- 앱 개발`,
      technologies: ["Dart", "Flutter"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 12,
      title: "어린이 교육 앱 및 어드민 개발",
      description: "어린이 교육 앱, 어드민 개발, 회원/강사 관리, 교육 컨텐츠, 게시판, 결제",
      image: "/images/projects/education-thumb.jpg",
      images: [
        "/images/projects/education-1.jpg",
        "/images/projects/education-2.jpg",
      ],
      details: `어린이 교육 앱으로 다음 기능을 제공합니다:

• 회원/강사 관리
• 교육 컨텐츠 관리
• 게시판 시스템
• 결제 시스템
• 어드민 대시보드

역할:
- 프로젝트 매니저`,
      technologies: ["PHP", "Code Igniter", "MySQL"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 13,
      title: "키오스크 연동 프린팅 서비스 앱 개발",
      description: "키오스크 연동 프린팅 서비스 앱 개발, 어드민 개발, 회원관리, 컨텐츠 관리, 결제",
      image: "/images/projects/kiosk-thumb.jpg",
      images: [
        "/images/projects/kiosk-1.jpg",
        "/images/projects/kiosk-2.jpg",
      ],
      details: `키오스크 연동 프린팅 서비스 앱으로 다음 기능을 제공합니다:

• 키오스크 연동 시스템
• 회원 관리 시스템
• 컨텐츠 관리
• 결제 시스템
• WebView 기반 하이브리드 앱

역할:
- 프로젝트 매니저`,
      technologies: ["PHP", "MariaDB", "WebView"],
      category: "App",
      company: "콜론비",
    },
    {
      id: 14,
      title: "팝업스토어 매칭 서비스 개발",
      description: "팝업스토어 매칭 서비스 웹/앱, 어드민 개발, 회원 관리, 업체 관리, 공간 관리, 결제, 구독",
      image: "/images/projects/popup-thumb.jpg",
      images: [
        "/images/projects/popup-1.jpg",
        "/images/projects/popup-2.jpg",
      ],
      details: `팝업스토어 매칭 서비스로 다음 기능을 제공합니다:

• 회원 관리 시스템
• 업체 관리 시스템
• 공간 관리 시스템
• 결제 및 구독 시스템
• 매칭 알고리즘

역할:
- 프로젝트 매니저
- 백엔드 개발`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 15,
      title: "반려동물 쇼핑몰 웹/앱 개발",
      description: "반려동물 쇼핑몰 웹/앱 개발",
      image: "/images/projects/pet-thumb.jpg",
      images: [
        "/images/projects/pet-1.jpg",
        "/images/projects/pet-2.jpg",
      ],
      details: `반려동물 쇼핑몰로 다음 기능을 제공합니다:

• 상품 관리 시스템
• 회원 관리 시스템
• 주문/결제 시스템
• 배송 관리 시스템
• 리뷰 시스템

역할:
- 프로젝트 매니저`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 16,
      title: "문화재단 사이트 및 어드민 개발",
      description: "문화재단 사이트 및 어드민 개발",
      image: "/images/projects/culture-thumb.jpg",
      images: [
        "/images/projects/culture-1.jpg",
        "/images/projects/culture-2.jpg",
      ],
      details: `문화재단 웹사이트로 다음 기능을 제공합니다:

• 문화재단 소개
• 문화 행사 관리
• 회원 관리 시스템
• 게시판 시스템
• 어드민 대시보드

역할:
- 프로젝트 매니저
- 백엔드 개발`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 17,
      title: "의료 기념관 웹사이트 개발",
      description: "기념관 사이트 및 어드민 개발",
      image: "/images/projects/medical-museum-thumb.jpg",
      images: [
        "/images/projects/medical-museum-1.jpg",
        "/images/projects/medical-museum-2.jpg",
      ],
      details: `의료 기념관 웹사이트로 다음 기능을 제공합니다:

• 기념관 소개
• 전시 정보 관리
• 예약 시스템
• 게시판 시스템
• 어드민 대시보드

역할:
- 프로젝트 매니저
- 백엔드 개발`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 18,
      title: "박물관 웹사이트 및 어드민 개발",
      description: "박물관 사이트 및 어드민 개발",
      image: "/images/projects/museum-thumb.jpg",
      images: [
        "/images/projects/museum-1.jpg",
        "/images/projects/museum-2.jpg",
      ],
      details: `박물관 웹사이트로 다음 기능을 제공합니다:

• 박물관 소개
• 전시/행사 관리
• 예약 시스템
• 게시판 시스템
• 어드민 대시보드

역할:
- 프로젝트 매니저
- 백엔드 개발`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "콜론비",
    },
    {
      id: 19,
      title: "성형외과 CRM 시스템 개발",
      description: "환자관리, 예약관리, 접수, 상담, 매출, 통계 시스템 개발",
      image: "/images/projects/crm-thumb.jpg",
      images: [
        "/images/projects/crm-1.jpg",
        "/images/projects/crm-2.jpg",
      ],
      details: `성형외과 CRM 시스템으로 다음 기능을 제공합니다:

• 환자 관리 시스템
• 예약 관리 시스템
• 접수/상담 관리
• 매출 관리
• 통계 대시보드

역할:
- 서비스 기획
- 시스템 설계
- 프론트 & 백엔드 개발`,
      technologies: ["JavaScript", "Nest.js", "Vue.js", "MySQL"],
      category: "Web",
      company: "레버티",
    },
    {
      id: 20,
      title: "데이터 수집 앱 유지보수",
      description: "회원관리, 댓글, 코멘트, 데이터 관리 시스템 유지보수",
      image: "/images/projects/data-thumb.jpg",
      images: [
        "/images/projects/data-1.jpg",
        "/images/projects/data-2.jpg",
      ],
      details: `데이터 수집 앱으로 다음 기능을 제공합니다:

• 회원 관리 시스템
• 댓글/코멘트 시스템
• 데이터 관리
• 데이터 통계
• 관리자 대시보드

역할:
- 백엔드 개발
- 시스템 유지보수`,
      technologies: ["JavaScript", "Node.js", "Vue.js", "MySQL"],
      category: "Web",
      company: "레버티",
    },
    {
      id: 21,
      title: "학생 관리 시스템 개발 및 유지보수",
      description: "학생 출결 관리, 교육 자료 크롤링, Excel / PPT 자동화",
      image: "/images/projects/student-thumb.jpg",
      images: [
        "/images/projects/student-1.jpg",
        "/images/projects/student-2.jpg",
      ],
      details: `학생 관리 시스템으로 다음 기능을 제공합니다:

• 학생 출결 관리 시스템
• 교육 자료 자동 크롤링
• Excel/PPT 자동화
• 학생 성적 관리
• 교육 자료 관리

역할:
- 백엔드 개발
- 운영
- 유지보수`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "Python", "MySQL"],
      category: "Web",
      company: "프리랜서",
    },
    {
      id: 22,
      title: "중고거래 웹 서비스 개발",
      description: "회원관리, 상품관리 시스템 개발",
      image: "/images/projects/trade-thumb.jpg",
      images: [
        "/images/projects/trade-1.jpg",
        "/images/projects/trade-2.jpg",
      ],
      details: `중고거래 웹 서비스로 다음 기능을 제공합니다:

• 회원 관리 시스템
• 상품 등록 및 관리
• 거래 관리
• 리뷰 시스템
• 검색 시스템

역할:
- 백엔드 개발
- 운영
- 유지보수`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "프리랜서",
    },
    {
      id: 23,
      title: "밀키트 판매 사이트 개발 및 유지보수",
      description: "회원관리, 상품관리, 결제 시스템 개발",
      image: "/images/projects/mealkit-thumb.jpg",
      images: [
        "/images/projects/mealkit-1.jpg",
        "/images/projects/mealkit-2.jpg",
      ],
      details: `밀키트 판매 사이트로 다음 기능을 제공합니다:

• 회원 관리 시스템
• 상품 등록 및 관리
• 결제 시스템
• 배송 관리
• 리뷰 시스템

역할:
- 백엔드 개발
- 운영
- 유지보수`,
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "jQuery", "MySQL"],
      category: "Web",
      company: "프리랜서",
    },
    {
      id: 24,
      title: "물류 재고 관리 시스템 개발",
      description: "회원관리, 상품관리, 매출, 통계 시스템 개발",
      image: "/images/projects/inventory-thumb.jpg",
      images: [
        "/images/projects/inventory-1.jpg",
        "/images/projects/inventory-2.jpg",
      ],
      details: `물류 재고 관리 시스템으로 다음 기능을 제공합니다:

• 회원 관리 시스템
• 상품 재고 관리
• 매출 관리
• 통계 대시보드
• 발주 관리

역할:
- 서비스 기획
- 시스템 설계
- 프론트 & 백엔드 개발`,
      technologies: ["JavaScript", "Node.js", "Vue.js", "MySQL"],
      category: "Web",
      company: "프리랜서",
    },
  ]

  // 카테고리와 기술 스택을 분리하여 정렬
  const categories = ["All", "Web", "App"]
  const technologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort()

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => 
        project.category === activeFilter || 
        project.technologies.includes(activeFilter)
      )

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  // Intersection Observer 설정
  useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= filteredProjects.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length));
          }, 500);
        }
      },
      { 
        root: null,
        rootMargin: '20px',
        threshold: 0.1 
      }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [visibleCount, filteredProjects.length]);

  // 필터 변경시 보이는 프로젝트 수 초기화
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "tween",
        duration: 0.5
      } 
    }
  }

  return (
    <section id="portfolio" className="py-24 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-8 justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FolderKanban className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Portfolio</h2>
        </motion.div>

        {/* 필터 섹션 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {/* 카테고리 필터 */}
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`rounded-full px-4 py-2 flex items-center gap-2 ${
                activeFilter === category 
                  ? "bg-softBlue text-white hover:bg-softBlue/90" 
                  : "text-darkGray hover:bg-softBlue/10 hover:text-softBlue hover:border-softBlue"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {categoryIcons[category]}
              {category}
            </Button>
          ))}

          {/* 구분선 */}
          <div className="w-px h-8 bg-gray-200 mx-2 self-center" />

          {/* 기술 스택 필터 */}
          {technologies.map((tech) => (
            <Button
              key={tech}
              variant={activeFilter === tech ? "default" : "outline"}
              className={`rounded-full px-3 py-1.5 text-sm flex items-center gap-2 ${
                activeFilter === tech 
                  ? "bg-softBlue text-white hover:bg-softBlue/90" 
                  : "text-darkGray hover:bg-softBlue/10 hover:text-softBlue hover:border-softBlue"
              }`}
              onClick={() => setActiveFilter(tech)}
            >
              {getTechIcon(tech)}
              {tech}
            </Button>
          ))}
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-xl shadow-soft hover:shadow-hover transition-shadow overflow-hidden cursor-pointer"
              variants={item}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || DEFAULT_IMAGE}
                  alt={project.title}
                  fill
                  unoptimized
                  priority={index < 6}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== DEFAULT_IMAGE) {
                      target.src = DEFAULT_IMAGE;
                    }
                    target.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-textPrimary mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-textSecondary mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-darkGray"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-darkGray">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  className="text-softBlue p-0 h-auto hover:bg-transparent hover:text-softBlue/80 flex items-center group/btn"
                >
                  자세히 보기
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
          {/* 로딩 인디케이터 */}
          {visibleCount < filteredProjects.length && (
            <div 
              ref={loadMoreRef}
              className="col-span-full flex justify-center py-8"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-softBlue"></div>
            </div>
          )}
        </motion.div>

        <Dialog open={!!selectedProject} onOpenChange={(open: boolean) => !open && setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[600px] md:max-w-[800px] p-0">
            <DialogTitle className="sr-only">
              {selectedProject?.title || '프로젝트 상세 정보'}
            </DialogTitle>
            {selectedProject && (
              <div className="max-h-[80vh] overflow-y-auto">
                {/* 이미지 슬라이더 */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="relative h-[300px] md:h-[400px]">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      className="h-full"
                    >
                      {selectedProject.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative h-full">
                            <Image
                              src={image || DEFAULT_IMAGE}
                              alt={`${selectedProject.title} 스크린샷 ${index + 1}`}
                              fill
                              unoptimized
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src !== DEFAULT_IMAGE) {
                                  target.src = DEFAULT_IMAGE;
                                }
                                target.onerror = null;
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-textPrimary mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-textSecondary">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-darkGray" />
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Github className="w-5 h-5 text-darkGray" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="prose prose-sm max-w-none mb-6">
                    <div className="whitespace-pre-wrap">{selectedProject.details}</div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold text-textPrimary mb-3">사용 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-darkGray"
                        >
                          {getTechIcon(tech)}
                          <span className="text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

