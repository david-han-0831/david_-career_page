"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, Mail, Send, PhoneCall, Copy, Check } from "lucide-react"
import { toast } from "sonner"
import { event as gaEvent } from '@/lib/gtag'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    gaEvent({
      action: "submit",
      category: "contact",
      label: "contact_form_submit",
    })

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast('메시지가 전송되었습니다', {
      description: '빠른 시일 내에 답변 드리겠습니다.',
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    const email = "hdy20201004@gmail.com"
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    
    toast('이메일이 복사되었습니다', {
      description: '이메일 클라이언트에 붙여넣기 해주세요.',
    })

    gaEvent({
      action: "click",
      category: "contact",
      label: "copy_email",
    })

    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <PhoneCall className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-6">프로젝트 문의</h3>
            <p className="text-darkGray mb-8">
              새로운 프로젝트나 협업에 관심이 있으신가요? 메시지를 남겨주시면 빠른 시일 내에 답변 드리겠습니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="이름"
                  required
                  className="h-12 rounded-xl border-mediumGray focus-visible:ring-softBlue"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="이메일"
                  required
                  className="h-12 rounded-xl border-mediumGray focus-visible:ring-softBlue"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="메시지"
                  required
                  className="min-h-[150px] rounded-xl border-mediumGray focus-visible:ring-softBlue"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-softBlue text-white hover:opacity-90 rounded-xl h-12 px-8 w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    전송 중...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" /> 메시지 보내기
                  </span>
                )}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-6">연락처</h3>
            <p className="text-darkGray mb-8">
              아래 채널을 통해서도 연락하실 수 있습니다. 소셜 미디어에서도 활발히 활동하고 있으니 팔로우해 주세요.
            </p>

            <div className="space-y-6">
              <a
                href="#"
                onClick={handleCopyEmail}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-lightGray transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  {isCopied ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Mail className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-darkGray">이메일</p>
                  <p className="text-textPrimary font-medium">hdy20201004@gmail.com</p>
                </div>
                <Copy className="w-4 h-4 text-darkGray" />
              </a>

              <a
                href="https://github.com/david-han-0831"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-lightGray transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#24292e] flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-darkGray">GitHub</p>
                  <p className="text-textPrimary font-medium">github.com/david-han-0831</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/klang_code/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-lightGray transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff8a00] via-[#e95950] to-[#bc2a8d] flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-darkGray">Instagram</p>
                  <p className="text-textPrimary font-medium">@klang_code</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/david880927/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-lightGray transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-darkGray">LinkedIn</p>
                  <p className="text-textPrimary font-medium">linkedin.com/in/david880927</p>
                </div>
              </a>

              <a
                href="https://bento.me/david-han"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-lightGray transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src="/Bento Brand Assets/Bento-Logo.svg" 
                    alt="Bento" 
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <p className="text-sm text-darkGray">Bento</p>
                  <p className="text-textPrimary font-medium">bento.me/david-han</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

