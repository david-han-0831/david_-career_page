import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-10 lg:px-20 border-t border-[#D2D2D7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-[#6E6E73] mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} 홍길동. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D1D1F] hover:text-[#007AFF] transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://instagram.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D1D1F] hover:text-[#007AFF] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D1D1F] hover:text-[#007AFF] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

