"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">
              Web/App
              <br />
              Full Stack Developer
            </h1>
            <p className="text-xl text-[#6E6E73] mb-8 max-w-xl">
              사용자 경험을 중심으로 웹과 앱을 디자인하고 개발합니다. 최신 기술 스택을 활용한 풀스택 개발 역량을 갖추고
              있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={scrollToContact}
                className="bg-[#1D1D1F] text-white hover:opacity-80 rounded-xl h-12 px-8"
              >
                연락하기
              </Button>
              <Button
                variant="outline"
                className="border-[#D2D2D7] text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-xl h-12 px-8"
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
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#F5F5F7] rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Developer Profile"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-[#1D1D1F] w-6 h-6" />
      </div>
    </section>
  )
}

