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
  logo?: React.ReactNode
  achievement?: string
}

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null)

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
    setHoveredLogo(null);
  };

  // 컴포넌트 마운트/언마운트 시 호버 상태 초기화
  useEffect(() => {
    return () => {
      resetHoverStates();
    };
  }, []);

  // 로고 컴포넌트 생성 함수
  const createLogoComponent = (src: string, alt: string, width: number, height: number, className: string = "object-cover w-full h-full") => {
    return (
      <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white">
        <Image 
          src={src} 
          alt={alt} 
          width={width} 
          height={height} 
          className={className}
          draggable={false}
        />
      </div>
    );
  };

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
        "AI 모델 최적화 및 응용 연구"
      ],
      logo: createLogoComponent("/education_logo/yonsei.jpg", "연세대학교", 64, 64),
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
      logo: createLogoComponent("/education_logo/hochschule-musik-tanz-koeln.svg", "Hochschule für Musik und Tanz Köln", 64, 64, "object-contain w-full h-full"),
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
      logo: createLogoComponent("/education_logo/khu.png", "경희대학교", 80, 80, "object-contain w-[80%] h-[80%]"),
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
      logo: createLogoComponent("/education_logo/kaywon.jpg", "계원예술고등학교", 64, 64),
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
        stiffness: 200,
        damping: 25,
        duration: 1.8,
        mass: 1
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
    <section id="education" className="py-24 px-6 md:px-10 lg:px-20 bg-white overflow-hidden relative">
      {/* 배경 장식 요소 */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-softBlue/10 to-softBlue/20 blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-softTurquoise/10 to-softTurquoise/20 blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      {/* 타임라인 연결선 */}
      <div className="absolute left-[-8px] top-[200px] bottom-[100px] w-0.5 bg-gradient-to-b from-softBlue/50 via-softTurquoise/40 to-softBlue/30 hidden md:block" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-16 justify-center relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8 
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.2,
              duration: 0.8 
            }}
          >
            <GraduationCap className="w-10 h-10 text-softBlue" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-textPrimary"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Education
          </motion.h2>
        </motion.div>

        <div className="space-y-12" onMouseLeave={resetHoverStates}>
          {educations.map((edu, index) => {
            return (
              <motion.div
                key={edu.id}
                ref={refs[index]}
                className={`flex flex-col md:flex-row gap-6 p-6 pt-16 bg-gradient-to-r from-lightGray/20 to-lightGray/10 backdrop-blur-sm rounded-2xl shadow-soft transition-all cursor-pointer border relative
                  ${hoveredIndex === index && hoveredLogo !== index ? 'border-softBlue/50 shadow-lg' : 'border-lightGray/30'}
                `}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                    bounce: 0.3,
                    delay: 0.1
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ 
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
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
                  setHoveredLogo(null);
                }}
              >
                {/* 학교 로고 */}
                <div className="absolute -left-8 -top-8 z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-white rounded-full p-1 shadow-md flex items-center justify-center transition-all duration-200
                      ${hoveredLogo === index ? 'ring-2 ring-softBlue' : 'ring-0'}
                    `}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ 
                      type: "tween",
                      duration: 0.2,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    whileHover={{
                      boxShadow: '0 0 15px rgba(94, 142, 235, 0.5)',
                      transition: { duration: 0.2 }
                    }}
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setHoveredLogo(index);
                    }}
                    onMouseLeave={(e) => {
                      e.stopPropagation();
                      setHoveredLogo(null);
                      setHoveredIndex(null);
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEducation(edu);
                    }}
                  >
                    {edu.logo}
                  </motion.div>
                </div>
                
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
                  
                  {/* 미리보기 내용 - 호버 시에만 표시 */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                        transition={{ 
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2 }
                        }}
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
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
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedEducation && (
            <Dialog open={!!selectedEducation} onOpenChange={(open) => {
              if (!open) {
                setSelectedEducation(null);
                resetHoverStates();
              }
            }}>
              <DialogContent className="sm:max-w-[600px] p-0 border-none bg-transparent shadow-none">
                <motion.div
                  className="bg-white rounded-lg shadow-lg w-full"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="p-6">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                        <div className="w-12 h-12 flex items-center justify-center">
                          {selectedEducation.logo}
                        </div>
                        {selectedEducation.school}
                      </DialogTitle>
                      <DialogDescription className="text-base text-textPrimary font-semibold">
                        {selectedEducation.degree} · {selectedEducation.major} ({selectedEducation.period})
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
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
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button
                        variant="ghost"
                        className="text-darkGray font-medium border border-softBlue hover:bg-softBlue hover:text-white focus:ring-1 focus:ring-softBlue transition-all"
                        onClick={() => {
                          setSelectedEducation(null);
                          resetHoverStates();
                        }}
                      >
                        닫기
                      </Button>
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