"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight, GraduationCap } from "lucide-react"

interface Education {
  id: number
  period: string
  school: string
  degree: string
  major: string
  details?: string[]
}

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null)

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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]

  return (
    <section id="education" className="py-24 px-6 md:px-10 lg:px-20 bg-lightGray">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <GraduationCap className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Education</h2>
        </div>

        <div className="space-y-8">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-shadow cursor-pointer"
              onClick={() => setSelectedEducation(edu)}
            >
              <div className="md:w-1/4">
                <p className="text-darkGray font-medium">{edu.period}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">{edu.school}</h3>
                <p className="text-textPrimary font-medium mb-2">
                  {edu.degree} · {edu.major}
                </p>
                {edu.details && edu.details.length > 0 && (
                  <Button
                    variant="ghost"
                    className="text-softBlue p-0 h-auto hover:bg-transparent hover:text-softBlue/80 flex items-center mt-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedEducation(edu)
                    }}
                  >
                    자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedEducation} onOpenChange={(open) => !open && setSelectedEducation(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-textPrimary">{selectedEducation?.school}</DialogTitle>
              <DialogDescription className="text-darkGray">
                {selectedEducation?.period} · {selectedEducation?.degree} · {selectedEducation?.major}
              </DialogDescription>
            </DialogHeader>
            {selectedEducation?.details && selectedEducation.details.length > 0 && (
              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-textPrimary mb-3">주요 활동</h4>
                  <ul className="space-y-2">
                    {selectedEducation.details.map((detail, index) => (
                      <li key={index} className="text-darkGray flex items-start">
                        <span className="text-softBlue mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
} 