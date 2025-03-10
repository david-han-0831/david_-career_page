import Header from "@/components/header"
import Hero from "@/components/hero"
import SkillSet from "@/components/skill-set"
import Education from "@/components/education"
import Experiences from "@/components/experiences"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-offWhite">
      <Header />
      <main className="flex-1">
        <Hero />
        <SkillSet />
        <Education />
        <Experiences />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

