"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight, Briefcase } from "lucide-react"

interface Experience {
  id: number
  period: string
  company: string
  role: string
  description: string
  details: string[]
  technologies: string[]
}

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  const experiences: Experience[] = [
    {
      id: 1,
      period: "2022.03 ~ 현재",
      company: "콜론비",
      role: "대표",
      description: "회사 운영 전반의 업무 수행 및 프로젝트 매니저 역할과 개발 병행",
      details: [
        "회사 운영 전반의 업무 수행: 사업 계획 수립 및 실행, 재무 관리, 직원 관리 등 회사의 모든 주요 업무를 총괄",
        "프로젝트 매니저 역할과 개발 병행: 개발 진행을 관리하고 팀원들과 소통하여 프로젝트의 목표를 달성",
        "맞춤형 AI 챗봇 솔루션 개발 참여 및 특허 출원: 솔루션 개발 및 테스트 참여",
        "문화예술 플랫폼 '아트스테이지' 개발: 2023년 문화예술인들을 위한 플랫폼 기획 및 개발, 2024년 서울 청년창업사관학교 입교기업으로 선정",
        "AI 개발자 프로젝트 매칭 플랫폼, 비대면 진료 앱 및 CRM, 세무 자동화 프로그램 등 다양한 프로젝트 수행"
      ],
      technologies: ["Java", "Spring Boot", "JavaScript", "React", "Next.js", "MySQL", "Python", "Flutter"],
    },
    {
      id: 2,
      period: "2021.06 ~ 2022.05",
      company: "레버티",
      role: "사원/팀원",
      description: "병원 CRM 프론트 및 백엔드 개발, 데이터 수집 프로그램 유지보수",
      details: [
        "성형외과 CRM 시스템 개발: 환자관리, 예약관리, 접수, 상담, 매출, 통계",
        "서비스 기획, 설계, 프론트 및 백엔드 개발 담당",
        "데이터 수집 앱 유지보수: 회원관리, 댓글, 코멘트, 데이터 관리",
        "프로젝트 일정 관리 보조, 데이터 수집 및 CRM 백엔드 개발"
      ],
      technologies: ["JavaScript", "Nest.js", "Vue.js", "Node.js", "MySQL"],
    },
    {
      id: 3,
      period: "2015 ~ 2020",
      company: "프리랜서 개발자",
      role: "백엔드 개발자",
      description: "다양한 소프트웨어 프로젝트 기획, 설계, 백엔드 구현, 배포 및 운영",
      details: [
        "물류 재고 관리 시스템 개발 (2018.09 ~ 2019.06): 회원관리, 상품관리, 매출, 통계",
        "밀키트 판매 사이트 개발 및 유지보수 (2017.07 ~ 2018.06): 회원관리, 상품관리, 결제",
        "중고거래 웹 서비스 개발 (2016.09 ~ 2017.05): 회원관리, 상품관리",
        "학생 관리 시스템 개발 및 유지보수 (2015.03 ~ 2016.06): 학생 출결 관리, 교육 자료 크롤링, Excel / PPT 자동화",
        "고객 요구사항 분석, 전체 프로젝트 관리 및 백엔드 개발"
      ],
      technologies: ["Java", "Spring Boot", "JavaScript", "jQuery", "MySQL", "Python"],
    },
  ]

  return (
    <section id="experiences" className="py-24 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-lightGray/40 to-lightGray/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <Briefcase className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Experiences</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-lightGray transition-colors cursor-pointer"
              onClick={() => setSelectedExperience(exp)}
            >
              <div className="md:w-1/4">
                <p className="text-darkGray font-medium">{exp.period}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">{exp.company}</h3>
                <p className="text-textPrimary font-medium mb-2">{exp.role}</p>
                <p className="text-darkGray mb-4">{exp.description}</p>
                <Button
                  variant="ghost"
                  className="text-softBlue p-0 h-auto hover:bg-transparent hover:text-softBlue/80 flex items-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedExperience(exp)
                  }}
                >
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedExperience} onOpenChange={(open) => !open && setSelectedExperience(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-textPrimary">{selectedExperience?.company}</DialogTitle>
              <DialogDescription className="text-darkGray">
                {selectedExperience?.period} · {selectedExperience?.role}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-lg font-medium text-textPrimary mb-3">주요 업무</h4>
                <ul className="space-y-2">
                  {selectedExperience?.details.map((detail, index) => (
                    <li key={index} className="text-darkGray flex items-start">
                      <span className="text-softBlue mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-textPrimary mb-3">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience?.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-lightGray text-darkGray text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

