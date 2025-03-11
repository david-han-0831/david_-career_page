"use client"

import React, { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight, GraduationCap, School, BookOpen, Building, Calendar, Award } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Education {
  id: number
  period: string
  school: string
  degree: string
  major: string
  details?: string[]
  achievement?: string
}

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  // 각 교육 항목에 대한 참조 생성
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const refs = [ref1, ref2, ref3, ref4]
  
  const isInView1 = useInView(ref1, { once: false, amount: 0.3 })
  const isInView2 = useInView(ref2, { once: false, amount: 0.3 })
  const isInView3 = useInView(ref3, { once: false, amount: 0.3 })
  const isInView4 = useInView(ref4, { once: false, amount: 0.3 })
  const isInView = [isInView1, isInView2, isInView3, isInView4]

  // 호버 상태 초기화 함수
  const resetHoverStates = () => {
    setHoveredIndex(null);
  };

  // 컴포넌트 마운트/언마운트 시 호버 상태 초기화
  useEffect(() => {
    return () => {
      resetHoverStates();
    };
  }, []);

  const educations: Education[] = [
    {
      id: 1,
      period: "2024.03 ~ 현재",
      school: "연세대학교 공학대학원",
      degree: "석사",
      major: "인공지능 전공",
      details: [
        "인공지능 및 머신러닝 심화 학습",
        "자연어 처리 및 컴퓨터 비전 연구",
        "AI 모델 최적화 및 응용 연구",
        "의료영상 Denoising 연구",
        "음악일기 앱 개발 - 사용자의 감정과 텍스트 기반 음악 자동 생성",
        "수리적 최적화 알고리즘 구현",
        "입사지원자의 경력 및 이력서 분석을 통한 업무 적합성 분류 모델 구축"
      ],
      achievement: "AI 연구 프로젝트 진행 중"
    },
    {
      id: 2,
      period: "2011.10 ~ 2015.09",
      school: "Hochschule für Musik und Tanz Köln",
      degree: "학사",
      major: "음악, 클라리넷 전공",
      details: [
        "독일 쾰른 음악대학 클라리넷 전공",
        "오케스트라 및 앙상블 활동",
        "음악 이론 및 실기 심화 학습"
      ],
      achievement: "졸업 연주회 우수 성적 달성"
    },
    {
      id: 3,
      period: "2007.03 ~ 2008.02",
      school: "경희대학교",
      degree: "학사 (중퇴)",
      major: "음악, 클라리넷 전공",
      details: [
        "음악 이론 및 실기 학습",
        "오케스트라 활동 참여"
      ],
      achievement: "교내 연주회 참가"
    },
    {
      id: 4,
      period: "2004.03 ~ 2007.02",
      school: "계원예술고등학교",
      degree: "고등학교",
      major: "음악, 클라리넷 전공",
      details: [
        "음악 기초 이론 및 실기 학습",
        "학교 오케스트라 활동"
      ],
      achievement: "전국 학생 음악 콩쿠르 입상"
    }
  ]

  // 모달 애니메이션 설정
  const modalVariants = {
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
      scale: 0.8,
      transition: {
        duration: 0.08,
        ease: "easeOut"
      }
    }
  }

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.35, 0.15, 1],
        opacity: {
          duration: 0.4,
        },
        y: {
          duration: 0.6,
        }
      }
    }
  }

  return (
    <section id="education" className="py-24 px-6 md:px-10 lg:px-20 bg-white overflow-hidden relative">
      {/* 배경 장식 요소 */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-softBlue/10 to-softBlue/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-softTurquoise/10 to-softTurquoise/20 blur-3xl" />
      
      {/* 타임라인 연결선 */}
      <div className="absolute left-[-8px] top-[200px] bottom-[100px] w-0.5 bg-gradient-to-b from-softBlue/50 via-softTurquoise/40 to-softBlue/30 hidden md:block" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center relative">
          <GraduationCap className="w-10 h-10 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            Education
          </h2>
        </div>

        <div className="space-y-12" onMouseLeave={resetHoverStates}>
          {educations.map((edu, index) => {
            return (
              <div
                key={edu.id}
                ref={refs[index]}
                className={`flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-r from-lightGray/20 to-lightGray/10 backdrop-blur-sm rounded-2xl shadow-soft transition-all cursor-pointer border relative
                  ${hoveredIndex === index ? 'border-softBlue/50 shadow-lg' : 'border-lightGray/30'}
                `}
                style={{
                  transformOrigin: 'center',
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                  WebkitFontSmoothing: 'antialiased'
                }}
                onClick={() => setSelectedEducation(edu)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              >
                {/* 기간 표시 */}
                <div className="md:w-1/4 relative">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-softBlue hidden md:inline" />
                    <p className="text-textPrimary font-semibold">{edu.period}</p>
                  </div>
                  
                  {/* 성취 배지 */}
                  {edu.achievement && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-softBlue/90 bg-softBlue/5 px-2 py-1 rounded-full w-fit">
                      <Award className="w-3 h-3" />
                      <span className="font-medium">{edu.achievement}</span>
                    </div>
                  )}
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-textPrimary mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-textPrimary font-semibold mb-2">
                    {edu.degree} · {edu.major}
                  </p>
                  
                  <div className="text-sm text-textPrimary mb-3 font-medium">
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.details?.slice(0, 1).map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                      {edu.details && edu.details.length > 1 && (
                        <li>그 외 {edu.details.length - 1}개 항목...</li>
                      )}
                    </ul>
                  </div>
                  
                  {edu.details && edu.details.length > 0 && (
                    <Button
                      variant="ghost"
                      className="text-softBlue p-0 h-auto hover:bg-transparent hover:text-softBlue/80 flex items-center mt-2 group font-semibold"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedEducation(edu)
                      }}
                    >
                      자세히 보기 <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
                
                {/* 활성화 표시기 - 호버 시에만 표시 */}
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-softBlue rounded-l-md"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedEducation && (
            <Dialog 
              open={!!selectedEducation} 
              onOpenChange={(open: boolean) => {
                if (!open) setSelectedEducation(null);
              }}
            >
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
                      onClick={() => setSelectedEducation(null)}
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
                        {selectedEducation.school}
                      </DialogTitle>
                      <DialogDescription className="text-base text-textPrimary font-semibold">
                        {selectedEducation.degree} · {selectedEducation.major} ({selectedEducation.period})
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      {selectedEducation.id === 1 ? (
                        <>
                          <div>
                            <h4 className="text-lg font-bold mb-3">🎓 학위 과정 개요</h4>
                            <div className="p-4 border-l-4 border-softTurquoise bg-softTurquoise/10 rounded-md">
                              <p className="text-darkGray">
                                연세대학교 공학대학원 인공지능 전공 석사 과정에서 AI 및 머신러닝에 대한 심층 연구를 수행하고 있습니다.
                                인공지능의 기본 개념부터 응용 기술까지 학습하며, 최신 딥러닝 기술을 활용한 연구 프로젝트를 진행하고 있습니다.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🧪 연구 프로젝트</h4>
                            <div className="p-4 border-l-4 border-purple-400 bg-purple-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "의료영상 Denoising 연구",
                                  "수리적 최적화 알고리즘 구현",
                                  "음악일기 앱 개발 - 사용자의 감정과 텍스트 기반 음악 자동 생성",
                                  "입사지원자의 경력 및 이력서 분석을 통한 업무 적합성 분류 모델 구축"
                                ].map((project, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-purple-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{project}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">📚 수강 과목</h4>
                            <div className="p-4 border-l-4 border-amber-400 bg-amber-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "인공지능 개론 및 기초 딥러닝 응용",
                                  "파이썬으로 하는 고급 머신러닝",
                                  "기계학습을 위한 최적화 개론",
                                  "의료영상 인공지능",
                                  "시각인식을 위한 딥러닝과 응용",
                                  "스마트 제조 인공지능"
                                ].map((course, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-amber-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{course}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🏆 주요 성취</h4>
                            <div className="p-4 border-l-4 border-emerald-400 bg-emerald-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "AI 기반 음악 생성 프로젝트 진행",
                                  "Logistic Regression, SVM, Decision Tree, Random Forest, MLP 등 다양한 머신러닝 알고리즘 구현 및 실습",
                                  "딥러닝 프레임워크를 활용한 CNN, RNN, Word2Vec 등 신경망 모델 구현",
                                  "PyTorch를 활용한 딥러닝 모델 개발",
                                  "머신러닝 및 데이터 분석 강의 진행",
                                  "수리적 최적화 알고리즘 적용 실습"
                                ].map((achievement, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-emerald-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : selectedEducation.id === 2 ? (
                        <>
                          <div>
                            <h4 className="text-lg font-bold mb-3">🎼 학위 과정 개요</h4>
                            <div className="p-4 border-l-4 border-softTurquoise bg-softTurquoise/10 rounded-md">
                              <p className="text-darkGray">
                                독일 쾰른 음악대학에서 클라리넷 전공 학사 과정을 이수하며, 오케스트라 및 실내악 연주 활동에 적극 참여하였습니다.
                                음악 이론 및 연주 실기 교육을 바탕으로 다양한 공연을 경험하였습니다.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🎵 주요 공연 및 프로젝트</h4>
                            <div className="p-4 border-l-4 border-purple-400 bg-purple-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "Köln 오케스트라 정기 연주회 (2013, 2014, 2015)",
                                  "모차르트 클라리넷 5중주 연주 (2014)",
                                  "유럽 음악 페스티벌 참가 - 프랑스, 독일, 이탈리아 (2015)",
                                  "Salon 오케스트라 - 체코 (2015)",
                                  "Das Junge Orchester - 독일 에쎈 (2013)"
                                ].map((performance, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-purple-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{performance}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🎶 수강한 주요 과목</h4>
                            <div className="p-4 border-l-4 border-amber-400 bg-amber-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "클라리넷 독주 및 실기 레슨",
                                  "음악사 및 음악 이론, 음악 분석",
                                  "피아노 부전공",
                                  "음향학, 교수법, 알렉산더 테크닉"
                                ].map((course, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-amber-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{course}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🏆 성취</h4>
                            <div className="p-4 border-l-4 border-emerald-400 bg-emerald-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "GOETHE-ZERTIFIKAT B2 독일어 자격증 취득 (2013)",
                                  "졸업 연주회 우수 성적 달성 (2015)"
                                ].map((achievement, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-emerald-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : selectedEducation.id === 3 ? (
                        <>
                          <div>
                            <h4 className="text-lg font-bold mb-3">🎼 학위 과정 개요</h4>
                            <div className="p-4 border-l-4 border-softTurquoise bg-softTurquoise/10 rounded-md">
                              <p className="text-darkGray">
                                경희대학교에서 클라리넷을 전공하며 음악 기초 이론 및 실기를 학습하였습니다.
                                다양한 연주 활동을 통해 음악적 역량을 키웠으며, 교내 연주회 및 오케스트라 활동에 참여하였습니다.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🎵 주요 활동</h4>
                            <div className="p-4 border-l-4 border-purple-400 bg-purple-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "교내 오케스트라 단원 활동",
                                  "클라리넷 독주 및 실내악 연주"
                                ].map((activity, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-purple-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🏆 성취</h4>
                            <div className="p-4 border-l-4 border-emerald-400 bg-emerald-50/80 rounded-md">
                              <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                  <span className="text-emerald-500 text-lg leading-none">•</span>
                                  <span className="text-darkGray">교내 연주회 참가</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : selectedEducation.id === 4 ? (
                        <>
                          <div>
                            <h4 className="text-lg font-bold mb-3">🎼 학위 과정 개요</h4>
                            <div className="p-4 border-l-4 border-softTurquoise bg-softTurquoise/10 rounded-md">
                              <p className="text-darkGray">
                                계원예술고등학교에서 클라리넷 전공을 하며 음악 기초 이론과 연주 실력을 키웠습니다.
                                전국 학생 음악 콩쿠르에서 입상하며 클래식 연주자로서의 기반을 다졌습니다.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🎵 주요 활동</h4>
                            <div className="p-4 border-l-4 border-purple-400 bg-purple-50/80 rounded-md">
                              <ul className="space-y-2">
                                {[
                                  "학교 오케스트라 단원 활동",
                                  "정기 연주회 및 실내악 연주"
                                ].map((activity, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-purple-500 text-lg leading-none">•</span>
                                    <span className="text-darkGray">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mt-5 mb-3">🏆 수상 경력</h4>
                            <div className="p-4 border-l-4 border-emerald-400 bg-emerald-50/80 rounded-md">
                              <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                  <span className="text-emerald-500 text-lg leading-none">•</span>
                                  <span className="text-darkGray">CBS 전국 청소년 콩쿨 1위 (2005)</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {selectedEducation.achievement && (
                            <div className="mb-4 flex items-center gap-2 text-softBlue/90 bg-softBlue/5 px-3 py-2 rounded-lg">
                              <Award className="w-5 h-5" />
                              <p className="font-semibold">{selectedEducation.achievement}</p>
                            </div>
                          )}
                          
                          <h4 className="text-lg font-bold mb-3">주요 활동</h4>
                          <ul className="space-y-2">
                            {selectedEducation.details?.map((detail, index) => (
                              <li 
                                key={index} 
                                className="flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-softBlue mt-2"></div>
                                <span className="font-medium">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 