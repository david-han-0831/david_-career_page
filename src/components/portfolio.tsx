"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FolderKanban } from "lucide-react"
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
      title: "문화예술 플랫폼 '아트스테이지'",
      description: "문화예술인들을 위한 앱 및 웹 플랫폼",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "문화예술인들을 위한 앱 및 웹 플랫폼으로, 회원관리, 공연/행사 관리, 지원사업 데이터 크롤링 기능을 제공합니다. 2024년 서울 청년창업사관학교 입교기업으로 선정되었으며, 서비스 기획부터 프로젝트 매니저, 데이터 수집 및 관리, 프론트 & 백엔드 개발까지 전반적인 개발을 담당했습니다.",
      technologies: ["Java", "Spring Boot", "JavaScript", "React", "MySQL", "Python"],
    },
    {
      id: 2,
      title: "AI 개발자 프로젝트 매칭 플랫폼",
      description: "AI 개발자와 프로젝트를 매칭하는 앱 플랫폼",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "AI 개발자와 프로젝트를 매칭하는 앱 플랫폼으로, 프로젝트 매니저 역할과 프론트 & 백엔드 개발을 담당했습니다. 개발자 프로필 관리, 프로젝트 등록 및 매칭, 커뮤니케이션 기능 등을 구현했습니다.",
      technologies: ["JavaScript", "React", "Java", "Spring Boot", "MySQL"],
    },
    {
      id: 3,
      title: "맞춤형 AI 챗봇 솔루션",
      description: "기업 고객 응대를 위한 맞춤형 AI 챗봇 솔루션",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "기업 고객 응대를 위한 맞춤형 AI 챗봇 솔루션으로, 상담내용 수집부, 후처리 자동화 처리부, 동의어 처리부, 오류재학습부 등 다양한 모듈을 통해 고객의 요구를 효율적으로 대응하고 챗봇 성능을 지속적으로 개선할 수 있는 기능을 포함합니다. 특허 출원(특허-2023-0130063)을 통해 회사의 벤처기업인증, 기술보증기금 자금 확보의 성과를 이루어냈습니다.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "MySQL"],
    },
    {
      id: 4,
      title: "비대면 진료 앱 및 CRM",
      description: "비대면 진료 앱 및 병원 CRM 시스템",
      image: "/placeholder.svg?height=600&width=800",
      details:
        "비대면 진료 앱 및 병원 CRM 시스템으로, 환자관리, 예약관리, 접수, 상담, 매출, 통계 기능을 제공합니다. 프로젝트 매니저 역할과 백엔드 개발을 담당했으며, 병원 업무 프로세스를 효율화하고 환자 경험을 개선했습니다.",
      technologies: ["Java", "Spring Boot", "JavaScript", "Flutter", "MySQL"],
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-6 md:px-10 lg:px-20 bg-lightGray">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <FolderKanban className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Portfolio</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-darkGray mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-lightGray text-darkGray text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-lightGray text-darkGray text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  className="text-softBlue p-0 h-auto hover:bg-transparent hover:text-softBlue/80"
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
              <DialogTitle className="text-2xl font-bold text-textPrimary">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-darkGray">{selectedProject?.description}</DialogDescription>
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
                <p className="text-darkGray mb-4">{selectedProject?.details}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject?.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-lightGray text-darkGray text-sm rounded-full">
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
                      className="inline-flex items-center gap-2 text-softBlue hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> 데모 보기
                    </a>
                  )}
                  {selectedProject?.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-textPrimary hover:underline"
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

