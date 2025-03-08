"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 lg:px-20",
        isScrolled ? "bg-offWhite/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-textPrimary">
          한동윤
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-textPrimary">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        ) : (
          <nav className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-textPrimary hover:text-softBlue transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-textPrimary hover:text-softBlue transition-colors"
            >
              Skill Set
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-textPrimary hover:text-softBlue transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-textPrimary hover:text-softBlue transition-colors"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-textPrimary hover:text-softBlue transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-textPrimary hover:text-softBlue transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-softBlue text-white hover:opacity-90 rounded-xl"
            >
              프로젝트 제안하기
            </Button>
          </nav>
        )}

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-offWhite z-40 p-6">
            <nav className="flex flex-col space-y-6 pt-6">
              <button onClick={() => scrollToSection("about")} className="text-textPrimary text-xl font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-textPrimary text-xl font-medium py-2">
                Skill Set
              </button>
              <button onClick={() => scrollToSection("education")} className="text-textPrimary text-xl font-medium py-2">
                Education
              </button>
              <button
                onClick={() => scrollToSection("experiences")}
                className="text-textPrimary text-xl font-medium py-2"
              >
                Experiences
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-textPrimary text-xl font-medium py-2">
                Portfolio
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-textPrimary text-xl font-medium py-2">
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-softBlue text-white hover:opacity-90 rounded-xl w-full mt-4"
              >
                프로젝트 제안하기
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

