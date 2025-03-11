"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FolderKanban } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    }
  }

  return (
    <section id="portfolio" className="py-24 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-16 justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FolderKanban className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Portfolio</h2>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group bg-gradient-to-r from-lightGray/20 to-lightGray/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all cursor-pointer border border-lightGray/30"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-darkGray mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <motion.span 
                      key={index} 
                      className="px-2 py-1 bg-white/60 text-darkGray text-xs rounded-full border border-lightGray/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.span 
                      className="px-2 py-1 bg-white/60 text-darkGray text-xs rounded-full border border-lightGray/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      +{project.technologies.length - 3}
                    </motion.span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  className="text-softBlue p-0 h-auto hover:bg-transparent hover:text-softBlue/80 group/btn"
                >
                  자세히 보기 
                  <motion.span 
                    className="inline-block ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    →
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <FolderKanban className="w-6 h-6 text-softBlue" />
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-base text-darkGray">
                {selectedProject?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                {selectedProject?.image && (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-3">프로젝트 개요</h4>
                <p className="text-darkGray">{selectedProject?.details}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-3">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 bg-lightGray/40 text-darkGray text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-4 mt-6">
                {selectedProject?.demoUrl && (
                  <Button
                    className="bg-softBlue text-white hover:bg-softBlue/90 flex items-center gap-2"
                    onClick={() => window.open(selectedProject.demoUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" /> 데모 보기
                  </Button>
                )}
                {selectedProject?.githubUrl && (
                  <Button
                    variant="outline"
                    className="border-softBlue text-softBlue hover:bg-softBlue/10 flex items-center gap-2"
                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" /> 코드 보기
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

