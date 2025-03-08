"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  details: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "E-커머스 플랫폼",
      description: "Next.js와 TypeScript로 개발한 현대적인 전자상거래 웹사이트",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "사용자 친화적인 인터페이스와 빠른 성능을 갖춘 전자상거래 플랫폼입니다. 제품 검색, 필터링, 장바구니, 결제 프로세스 등 핵심 기능을 구현했으며, 관리자 대시보드를 통해 상품과 주문을 효율적으로 관리할 수 있습니다. 반응형 디자인으로 모든 디바이스에서 최적의 사용자 경험을 제공합니다.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe API"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      id: 2,
      title: "건강 관리 앱",
      description: "React Native로 개발한 iOS/Android 크로스 플랫폼 모바일 앱",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "사용자의 건강 데이터를 추적하고 분석하는 모바일 애플리케이션입니다. 운동 기록, 식단 관리, 수면 패턴 분석 등 다양한 건강 지표를 시각화하여 제공합니다. 푸시 알림을 통한 리마인더 기능과 건강 목표 설정 및 달성 현황을 확인할 수 있습니다.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "HealthKit/Google Fit API"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      id: 3,
      title: "AI 기반 콘텐츠 추천 시스템",
      description: "Python과 FastAPI를 활용한 머신러닝 기반 백엔드 서비스",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "사용자의 콘텐츠 소비 패턴을 분석하여 개인화된 추천을 제공하는 시스템입니다. 협업 필터링과 콘텐츠 기반 필터링을 결합한 하이브리드 추천 알고리즘을 구현했으며, RESTful API를 통해 프론트엔드와 효율적으로 통합됩니다. 실시간 데이터 처리와 주기적인 모델 재학습을 통해 추천 정확도를 지속적으로 개선합니다.",
      technologies: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "Docker", "AWS"],
      githubUrl: "https://github.com/username/project",
    },
    {
      id: 4,
      title: "실시간 협업 도구",
      description: "WebSocket과 React를 활용한 실시간 협업 플랫폼",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "팀원들이 실시간으로 문서를 편집하고 커뮤니케이션할 수 있는 협업 도구입니다. 동시 편집, 변경 사항 추적, 댓글 기능 등을 구현했으며, 사용자 권한 관리 시스템을 통해 문서 접근 권한을 세밀하게 제어할 수 있습니다. 오프라인 모드에서도 작업할 수 있도록 데이터 동기화 메커니즘을 구현했습니다.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "JWT"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-6 md:px-10 lg:px-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-16 text-center">Portfolio</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">{project.title}</h3>
                <p className="text-[#6E6E73] mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-[#F5F5F7] text-[#6E6E73] text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-[#F5F5F7] text-[#6E6E73] text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  className="text-[#007AFF] p-0 h-auto hover:bg-transparent hover:text-[#007AFF]/80"
                >
                  자세히 보기
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#1D1D1F]">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-[#6E6E73]">{selectedProject?.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              <div className="h-64 relative rounded-xl overflow-hidden">
                {selectedProject && (
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <p className="text-[#6E6E73] mb-4">{selectedProject?.details}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject?.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-[#F5F5F7] text-[#6E6E73] text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {selectedProject?.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#007AFF] hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> 데모 보기
                    </a>
                  )}
                  {selectedProject?.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1D1D1F] hover:underline"
                    >
                      <Github className="w-4 h-4" /> 소스 코드
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

