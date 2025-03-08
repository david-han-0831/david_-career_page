"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

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
      company: "ABC 테크놀로지",
      role: "시니어 풀스택 개발자",
      description: "웹 및 모바일 애플리케이션 개발 및 유지보수",
      details: [
        "Next.js와 TypeScript를 활용한 웹 애플리케이션 개발",
        "React Native를 이용한 크로스 플랫폼 모바일 앱 개발",
        "FastAPI 기반 백엔드 서비스 구축 및 최적화",
        "CI/CD 파이프라인 구축 및 DevOps 프로세스 개선",
        "주니어 개발자 멘토링 및 기술 교육 진행",
      ],
      technologies: ["Next.js", "TypeScript", "React Native", "FastAPI", "Docker", "AWS"],
    },
    {
      id: 2,
      period: "2020.01 ~ 2022.02",
      company: "XYZ 소프트웨어",
      role: "프론트엔드 개발자",
      description: "사용자 중심 웹 인터페이스 설계 및 구현",
      details: [
        "React와 Redux를 활용한 SPA 개발",
        "UI/UX 개선 및 사용자 경험 최적화",
        "반응형 웹 디자인 구현",
        "성능 최적화 및 웹 접근성 향상",
        "디자인 시스템 구축 및 컴포넌트 라이브러리 개발",
      ],
      technologies: ["React", "Redux", "JavaScript", "SCSS", "Webpack", "Jest"],
    },
    {
      id: 3,
      period: "2018.06 ~ 2019.12",
      company: "스타트업 인큐베이터",
      role: "주니어 개발자",
      description: "다양한 스타트업 프로젝트 참여 및 기술 지원",
      details: [
        "여러 스타트업의 MVP 개발 지원",
        "웹 애플리케이션 프론트엔드 개발",
        "Node.js 기반 백엔드 API 개발",
        "데이터베이스 설계 및 구현",
        "애자일 개발 방법론 실무 적용",
      ],
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML/CSS"],
    },
  ]

  return (
    <section id="experiences" className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-16 text-center">Experiences</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-[#F5F5F7] transition-colors cursor-pointer"
              onClick={() => setSelectedExperience(exp)}
            >
              <div className="md:w-1/4">
                <p className="text-[#6E6E73] font-medium">{exp.period}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">{exp.company}</h3>
                <p className="text-[#1D1D1F] font-medium mb-2">{exp.role}</p>
                <p className="text-[#6E6E73] mb-4">{exp.description}</p>
                <Button
                  variant="ghost"
                  className="text-[#007AFF] p-0 h-auto hover:bg-transparent hover:text-[#007AFF]/80 flex items-center"
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
              <DialogTitle className="text-2xl font-bold text-[#1D1D1F]">{selectedExperience?.company}</DialogTitle>
              <DialogDescription className="text-[#6E6E73]">
                {selectedExperience?.period} · {selectedExperience?.role}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-lg font-medium text-[#1D1D1F] mb-3">주요 업무</h4>
                <ul className="space-y-2">
                  {selectedExperience?.details.map((detail, index) => (
                    <li key={index} className="text-[#6E6E73] flex items-start">
                      <span className="text-[#007AFF] mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#1D1D1F] mb-3">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience?.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-[#F5F5F7] text-[#6E6E73] text-sm rounded-full">
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

