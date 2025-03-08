"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, User } from "lucide-react"
import { event as gaEvent } from '@/lib/gtag'

export default function Hero() {
  const scrollToContact = () => {
    gaEvent({
      action: "click",
      category: "contact",
      label: "hero_contact_button",
    })
    
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      const headerOffset = 80
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-10 lg:px-20 pt-20">
      <div className="max-w-7xl w-full mx-auto text-center md:text-left">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <User className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">About</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="order-2 md:order-1 md:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient mb-8">
              Web/App
              <br />
              Full Stack Developer
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl text-darkGray mb-10 max-w-3xl space-y-6">
              <p className="leading-relaxed">
                <span className="font-bold text-softBlue">사용자 경험을 중심</span>으로 웹과 앱을 디자인하고 개발합니다.
              </p>
              
              <div className="leading-relaxed">
                다양한 산업 분야에서의 <span className="font-bold">프론트 & 백엔드 개발</span> 및 <span className="font-bold">프로젝트 관리 경험</span>을 바탕으로, IT 솔루션 <span className="font-semibold underline decoration-softBlue decoration-2 underline-offset-4">기획부터 설계, 개발, 배포까지</span> 전반적인 개발 업무를 수행합니다.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={scrollToContact}
                className="bg-softBlue text-white hover:opacity-90 rounded-xl h-12 px-8 text-base"
              >
                연락하기
              </Button>
              <Button
                variant="outline"
                className="border-mediumGray text-textPrimary hover:bg-lightGray rounded-xl h-12 px-8 text-base"
                onClick={() => {
                  const skillsSection = document.getElementById("skills")
                  if (skillsSection) {
                    const headerOffset = 80
                    const elementPosition = skillsSection.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                기술 스택 보기
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-2 flex justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-lightGray rounded-full overflow-hidden shadow-soft">
              <img
                src="/img/프로필 사진.jpg"
                alt="한동윤 프로필"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-softBlue w-6 h-6" />
      </div>
    </section>
  )
}

