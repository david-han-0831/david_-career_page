"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight, Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import {
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiSwift,
  SiJquery,
  SiThymeleaf,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiVuedotjs,
  SiExpress,
  SiNestjs,
  SiGitlab,
  SiDjango,
  SiGithub,
} from "react-icons/si"
import { FaJava, FaAws, FaReact } from "react-icons/fa"

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
      company: "주식회사 콜론비",
      role: "대표",
      description: "회사 운영 전반의 업무 수행 및 프로젝트 매니저 역할과 개발 병행",
      details: [
        "회사 운영 전반의 업무 수행: 사업 계획 수립 및 실행, 재무 관리, 직원 관리 등 회사의 모든 주요 업무를 총괄",
        "프로젝트 매니저 역할과 개발 병행: 개발 진행을 관리하고 팀원들과 소통하여 프로젝트의 목표를 달성",
        "맞춤형 AI 챗봇 솔루션 개발 참여 및 특허 출원: 솔루션 개발 및 테스트 참여",
        "문화예술 플랫폼 &apos;아트스테이지&apos; 개발: 2023년 문화예술인들을 위한 플랫폼 기획 및 개발, 2024년 서울 청년창업사관학교 입교기업으로 선정",
        "AI 개발자 프로젝트 매칭 플랫폼, 비대면 진료 앱 및 CRM, 세무 자동화 프로그램 등 다양한 프로젝트 수행"
      ],
      technologies: ["Java", "Spring Boot", "JavaScript", "React", "Next.js", "MySQL", "Python", "Flutter"],
    },
    {
      id: 2,
      period: "2021.06 ~ 2022.05",
      company: "주식회사 레버티",
      role: "사원/팀원",
      description: "병원 CRM 프론트 및 백엔드 개발, 데이턄 수집 프로그램 유지보수",
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
    <section id="experiences" className="py-24 px-6 md:px-10 lg:px-20 bg-gray-50 overflow-hidden relative">
      {/* 배경 장식 요소 */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-softBlue/10 to-softBlue/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-softTurquoise/10 to-softTurquoise/20 blur-3xl" />
      
      {/* 타임라인 연결선 */}
      <div className="absolute left-[-8px] top-[200px] bottom-[100px] w-0.5 bg-gradient-to-b from-softBlue/50 via-softTurquoise/40 to-softBlue/30 hidden md:block" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <Briefcase className="w-10 h-10 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            Experiences
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-r from-lightGray/20 to-lightGray/10 backdrop-blur-sm rounded-2xl shadow-soft transition-all cursor-pointer border border-lightGray/30 hover:border-softBlue/50 hover:shadow-lg"
              onClick={() => setSelectedExperience(exp)}
            >
              <div className="md:w-1/4 relative">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-softBlue hidden md:inline" />
                  <p className="text-textPrimary font-semibold">{exp.period}</p>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-textPrimary mb-2">{exp.company}</h3>
                <p className="text-textPrimary font-semibold mb-2">{exp.role}</p>
                
                <div className="text-sm text-textPrimary mb-3 font-medium">
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.details?.slice(0, 1).map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                    {exp.details && exp.details.length > 1 && (
                      <li>그 외 {exp.details.length - 1}개 항목...</li>
                    )}
                  </ul>
                </div>
                
                <Button
                  variant="ghost"
                  className="text-softBlue p-0 h-auto hover:bg-transparent hover:text-softBlue/80 flex items-center mt-2 group font-semibold"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedExperience(exp)
                  }}
                >
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedExperience} onOpenChange={(open) => !open && setSelectedExperience(null)}>
          <DialogContent 
            className="sm:max-w-[600px] md:max-w-[800px] p-0 border-none bg-transparent shadow-none overflow-hidden [&>button]:hidden"
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-full relative max-h-[80vh] overflow-hidden flex flex-col"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 50 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 15,
                    duration: 1.2,
                    mass: 1.5
                  }
                },
                exit: { 
                  opacity: 0,
                  scale: 0.95,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="absolute top-2 right-2 z-50">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-100/80 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onClick={() => setSelectedExperience(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500 hover:text-gray-700">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </Button>
              </div>
              <div className="p-6 overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedExperience?.company}
                  </DialogTitle>
                  <DialogDescription className="text-base text-textPrimary font-semibold">
                    {selectedExperience?.role} ({selectedExperience?.period})
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  {selectedExperience?.id === 1 ? (
                    <>
                      <div>
                        <h4 className="text-lg font-bold mb-3">🏢 회사 개요</h4>
                        <div className="p-4 border-l-4 border-softTurquoise bg-softTurquoise/10 rounded-md">
                          <p className="text-darkGray">
                            IT 스타트업 &apos;콜론비&apos;의 대표로서 사업 운영 전반을 총괄하며, 서비스 기획, 프로젝트 관리, 
                            프론트 및 백엔드 개발을 수행하고 있습니다. AI 기반 솔루션 및 다양한 웹/앱 프로젝트를 기획하고 개발하며, 
                            주요 성과로는 맞춤형 AI 챗봇 솔루션의 특허 출원 및 문화예술 플랫폼 &apos;아트스테이지&apos;의 서울 청년창업사관학교 입교기업 선정이 있습니다.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">🎯 주요 성과</h4>
                        <div className="p-4 border-l-4 border-emerald-400 bg-emerald-50/80 rounded-md">
                          <ul className="space-y-2">
                            {[
                              {
                                content: "문화예술 플랫폼 &apos;아트스테이지&apos; 개발 및 서울 청년창업사관학교 입교기업 선정",
                                year: "2024"
                              },
                              {
                                content: "AI 개발자 프로젝트 매칭 플랫폼 개발",
                                year: "2023"
                              },
                              {
                                content: "맞춤형 AI 챗봇 솔루션 개발 및 특허 출원",
                                year: "2023"
                              }
                            ].map((achievement, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="text-emerald-500 text-lg leading-none">•</span>
                                <span className="text-darkGray">{achievement.content} ({achievement.year})</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">🔖 특허 출원</h4>
                        <div className="p-4 border-l-4 border-softBlue bg-softBlue/10 rounded-md">
                          <div className="space-y-2 text-darkGray">
                            <p><span className="font-bold">발명 명칭:</span> 맞춤형 AI 챗봇 배포를 위한 B2B 채팅 솔루션</p>
                            <p><span className="font-bold">출원 번호:</span> 특허-2023-0130063</p>
                            <p><span className="font-bold">출원일자:</span> 2023년 09월 27일</p>
                            <p><span className="font-bold">발명의 내용:</span> 기업 고객 응대를 위한 맞춤형 AI 챗봇 솔루션으로, 
                            상담내용 수집부, 후처리 자동화 처리부, 동의어 처리부, 오류재학습부 등 다양한 모듈을 통해 
                            고객의 요구를 효율적으로 대응하고 챗봇 성능을 지속적으로 개선할 수 있는 기능 포함</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">📌 주요 프로젝트</h4>
                        <div className="p-4 border-l-4 border-purple-400 bg-purple-50/80 rounded-md">
                          <ul className="space-y-3">
                            {[
                              {
                                title: "문화예술 플랫폼 &apos;아트스테이지&apos;",
                                description: "문화예술인들을 위한 앱 및 웹 플랫폼",
                                details: [
                                  "회사 운영 전반의 업무 수행: 사업 계획 수립 및 실행, 재무 관리, 직원 관리 등 회사의 모든 주요 업무를 총괄",
                                  "프로젝트 매니저 역할과 개발 병행: 개발 진행을 관리하고 팀원들과 소통하여 프로젝트의 목표를 달성",
                                  "맞춤형 AI 챗봇 솔루션 개발 참여 및 특허 출원: 솔루션 개발 및 테스트 참여",
                                  "문화예술 플랫폼 &apos;아트스테이지&apos; 개발: 2023년 문화예술인들을 위한 플랫폼 기획 및 개발, 2024년 서울 청년창업사관학교 입교기업으로 선정",
                                  "AI 개발자 프로젝트 매칭 플랫폼, 비대면 진료 앱 및 CRM, 세무 자동화 프로그램 등 다양한 프로젝트 수행"
                                ],
                                year: "2024"
                              },
                              {
                                title: "AI 개발자 프로젝트 매칭 플랫폼",
                                description: "개발자와 프로젝트 매칭 서비스 개발",
                                year: "2023"
                              },
                              {
                                title: "세무 자동화 프로그램",
                                description: "세무 업무 자동화 및 데이터 처리 시스템 구축",
                                year: "2023"
                              },
                              {
                                title: "ERP 및 HR 시스템",
                                description: "기업 운영을 위한 내부 관리 시스템 개발",
                                year: "2022"
                              }
                            ].map((project, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="text-purple-500 text-lg leading-none">•</span>
                                <div>
                                  <span className="font-bold">{project.title}</span>
                                  <span className="text-darkGray"> - {project.description}</span>
                                  <span className="text-purple-500 ml-1">({project.year})</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">💡 역할 및 업무</h4>
                        <div className="p-4 border-l-4 border-amber-400 bg-amber-50/80 rounded-md">
                          <ul className="space-y-2">
                            {[
                              "스타트업 운영 및 비즈니스 전략 수립",
                              "AI 기반 솔루션 기획 및 개발 (AI 챗봇, 이미지 분석, 자연어 처리 등)",
                              "서비스 기획 및 프로젝트 매니징",
                              "백엔드 및 프론트엔드 개발"
                            ].map((role, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="text-amber-500 text-lg leading-none">•</span>
                                <span className="text-darkGray">{role}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">🛠️ 사용 기술</h4>
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                          {[
                            { icon: SiHtml5, name: "HTML", color: "#E34F26" },
                            { icon: SiCss3, name: "CSS", color: "#1572B6" },
                            { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
                            { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
                            { icon: FaJava, name: "Java", color: "#ED8B00" },
                            { icon: FaJava, name: "JSP", color: "#ED8B00" },
                            { icon: SiPython, name: "Python", color: "#3776AB" },
                            { icon: SiDart, name: "Dart", color: "#0175C2" },
                            { icon: SiSwift, name: "Swift", color: "#FA7343" },
                            { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
                            { icon: SiThymeleaf, name: "Thymeleaf", color: "#005F0F" },
                            { icon: SiJquery, name: "jQuery", color: "#0769AD" },
                            { icon: SiReact, name: "React", color: "#61DAFB" },
                            { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
                            { icon: FaReact, name: "React Native", color: "#61DAFB" },
                            { icon: SiFlutter, name: "Flutter", color: "#02569B" },
                            { icon: SiMysql, name: "MySQL", color: "#4479A1" },
                            { icon: FaAws, name: "AWS", color: "#FF9900" },
                            { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
                            { icon: SiGitlab, name: "GitLab", color: "#FC6D26" },
                            { icon: SiDjango, name: "Django", color: "#092E20" },
                            { icon: SiGithub, name: "GitHub", color: "#181717" }
                          ].map((tech, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-soft hover:shadow-hover transition-shadow"
                            >
                              <tech.icon className="w-5 h-5 mb-1.5" style={{ color: tech.color }} />
                              <span className="text-[10px] font-medium text-darkGray text-center">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : selectedExperience?.id === 2 ? (
                    <>
                      <div>
                        <h4 className="text-lg font-bold mb-3">🏢 회사 개요</h4>
                        <div className="p-4 border-l-4 border-softTurquoise bg-softTurquoise/10 rounded-md">
                          <p className="text-darkGray">
                            헬스케어 IT 솔루션 기업 '레버티'에서 병원 CRM 시스템 개발을 담당했습니다. 
                            환자관리, 예약관리, 상담 기능을 포함한 CRM 개발을 진행하였으며, 데이터 수집 앱 유지보수 및 프로젝트 일정 관리 보조 역할을 수행하였습니다.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">📌 주요 프로젝트</h4>
                        <div className="p-4 border-l-4 border-purple-400 bg-purple-50/80 rounded-md">
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="text-purple-500 text-lg leading-none">•</span>
                              <div>
                                <span className="font-bold">성형외과 CRM 시스템 개발</span>
                                <span className="text-darkGray"> - 환자 관리 및 병원 운영을 위한 맞춤형 CRM 개발</span>
                              </div>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-purple-500 text-lg leading-none">•</span>
                              <div>
                                <span className="font-bold">데이터 수집 앱 유지보수</span>
                                <span className="text-darkGray"> - 사용자 피드백을 반영한 데이터 관리 시스템 개선</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">💡 역할 및 업무</h4>
                        <div className="p-4 border-l-4 border-amber-400 bg-amber-50/80 rounded-md">
                          <ul className="space-y-2">
                            {[
                              "병원 CRM 시스템 설계 및 개발",
                              "데이터 수집 프로그램 유지보수",
                              "프로젝트 일정 관리 보조"
                            ].map((role, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="text-amber-500 text-lg leading-none">•</span>
                                <span className="text-darkGray">{role}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">🛠️ 사용 기술</h4>
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                          {[
                            { icon: SiHtml5, name: "HTML", color: "#E34F26" },
                            { icon: SiCss3, name: "CSS", color: "#1572B6" },
                            { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
                            { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
                            { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
                            { icon: SiNextdotjs, name: "Node.js", color: "#339933" },
                            { icon: SiExpress, name: "Express", color: "#000000" },
                            { icon: SiNestjs, name: "Nest.js", color: "#E0234E" },
                            { icon: SiMysql, name: "MySQL", color: "#4479A1" },
                            { icon: FaAws, name: "AWS", color: "#FF9900" },
                            { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
                            { icon: SiGitlab, name: "GitLab", color: "#FC6D26" }
                          ].map((tech, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-soft hover:shadow-hover transition-shadow"
                            >
                              <tech.icon className="w-5 h-5 mb-1.5" style={{ color: tech.color }} />
                              <span className="text-[10px] font-medium text-darkGray text-center">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h4 className="text-lg font-bold mb-3">🔍 개요</h4>
                        <div className="p-4 border-l-4 border-softTurquoise bg-softTurquoise/10 rounded-md">
                          <p className="text-darkGray">
                            다양한 산업군에서 프리랜서 개발자로 활동하며 물류, 전자상거래, 교육 등 여러 분야의 
                            백엔드 시스템 및 웹 서비스를 개발했습니다. 고객 요구사항 분석부터 프로젝트 관리, 
                            개발, 유지보수까지 전체 프로젝트 사이클을 경험했습니다.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">📌 주요 프로젝트</h4>
                        <div className="p-4 border-l-4 border-purple-400 bg-purple-50/80 rounded-md">
                          <ul className="space-y-2">
                            {[
                              {
                                title: "물류 재고 관리 시스템",
                                description: "회원 및 상품 관리, 매출, 통계 기능 개발",
                                period: "2018.09 ~ 2019.06"
                              },
                              {
                                title: "밀키트 판매 사이트",
                                description: "전자상거래 시스템 구축 및 유지보수",
                                period: "2017.07 ~ 2018.06"
                              },
                              {
                                title: "중고거래 웹 서비스",
                                description: "사용자 매칭 및 거래 시스템 개발",
                                period: "2016.09 ~ 2017.05"
                              },
                              {
                                title: "학생 관리 시스템",
                                description: "출결 관리 및 교육 자료 자동화",
                                period: "2015.03 ~ 2016.06"
                              }
                            ].map((project, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="text-purple-500 text-lg leading-none">•</span>
                                <div>
                                  <span className="font-bold">{project.title}</span>
                                  <span className="text-darkGray"> - {project.description}</span>
                                  <span className="text-purple-500 ml-1">({project.period})</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">💡 역할 및 업무</h4>
                        <div className="p-4 border-l-4 border-amber-400 bg-amber-50/80 rounded-md">
                          <ul className="space-y-2">
                            {[
                              "백엔드 및 프론트엔드 개발",
                              "데이터베이스 설계 및 최적화",
                              "전자상거래 및 물류 시스템 개발",
                              "교육용 관리 시스템 구축"
                            ].map((role, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="text-amber-500 text-lg leading-none">•</span>
                                <span className="text-darkGray">{role}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">🛠️ 사용 기술</h4>
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                          {[
                            { icon: SiHtml5, name: "HTML", color: "#E34F26" },
                            { icon: SiCss3, name: "CSS", color: "#1572B6" },
                            { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
                            { icon: FaJava, name: "Java", color: "#ED8B00" },
                            { icon: FaJava, name: "JSP", color: "#ED8B00" },
                            { icon: SiJquery, name: "jQuery", color: "#0769AD" },
                            { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
                            { icon: SiPython, name: "Python", color: "#3776AB" },
                            { icon: SiDjango, name: "Django", color: "#092E20" },
                            { icon: SiMysql, name: "MySQL", color: "#4479A1" },
                            { icon: SiGithub, name: "GitHub", color: "#181717" }
                          ].map((tech, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-soft hover:shadow-hover transition-shadow"
                            >
                              <tech.icon className="w-5 h-5 mb-1.5" style={{ color: tech.color }} />
                              <span className="text-[10px] font-medium text-darkGray text-center">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

