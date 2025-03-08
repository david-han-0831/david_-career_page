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
      title: "AI 기반 추천 시스템",
      description: "사용자 행동 패턴을 분석하여 개인화된 콘텐츠를 추천하는 시스템",
      image: "/img/portfolio/project1.jpg",
      details: "머신러닝 알고리즘을 활용하여 사용자의 행동 패턴을 분석하고, 이를 기반으로 개인화된 콘텐츠를 추천하는 시스템을 개발했습니다. 협업 필터링과 콘텐츠 기반 필터링을 결합한 하이브리드 접근 방식을 사용하여 추천 정확도를 높였습니다.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "실시간 채팅 애플리케이션",
      description: "WebSocket을 활용한 실시간 채팅 및 협업 플랫폼",
      image: "/img/portfolio/project2.jpg",
      details: "WebSocket 기술을 활용하여 실시간 메시징이 가능한 채팅 애플리케이션을 개발했습니다. 사용자 인증, 채팅방 생성, 파일 공유 등의 기능을 구현했으며, 메시지 전송 지연을 최소화하기 위한 최적화 작업을 수행했습니다.",
      technologies: ["Node.js", "Socket.io", "Express", "React", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "건강 관리 모바일 앱",
      description: "사용자의 건강 데이터를 추적하고 분석하는 모바일 애플리케이션",
      image: "/img/portfolio/project3.jpg",
      details: "사용자의 운동, 식단, 수면 등 건강 관련 데이터를 추적하고 분석하는 모바일 애플리케이션을 개발했습니다. 건강 데이터 시각화, 목표 설정 및 알림 기능을 구현하여 사용자가 건강한 생활 습관을 유지할 수 있도록 도왔습니다.",
      technologies: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
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

