import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiFastapi,
  SiFlutter,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiSpring,
  SiNestjs,
  SiDjango,
  SiMysql,
  SiOracle,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiAmazon,
  SiFirebase,
  SiVuedotjs,
  SiJquery,
  SiHtml5,
  SiCss3,
} from "react-icons/si"
import { FaJava, FaAws } from "react-icons/fa"

export default function SkillSet() {
  const skills = [
    // 백엔드
    { name: "Java", icon: FaJava, color: "#ED8B00", category: "Backend" },
    { name: "Spring Boot", icon: SiSpring, color: "#6DB33F", category: "Backend" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
    { name: "Nest.js", icon: SiNestjs, color: "#E0234E", category: "Backend" },
    { name: "Django", icon: SiDjango, color: "#092E20", category: "Backend" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688", category: "Backend" },
    
    // 프론트엔드
    { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
    { name: "CSS", icon: SiCss3, color: "#1572B6", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
    { name: "jQuery", icon: SiJquery, color: "#0769AD", category: "Frontend" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D", category: "Frontend" },
    { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    
    // 데이터베이스
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
    { name: "Oracle", icon: SiOracle, color: "#F80000", category: "Database" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
    
    // 모바일
    { name: "Flutter", icon: SiFlutter, color: "#02569B", category: "Mobile" },
    { name: "React Native", icon: SiReact, color: "#61DAFB", category: "Mobile" },
    
    // AI 및 머신러닝
    { name: "Python", icon: SiPython, color: "#3776AB", category: "AI & ML" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", category: "AI & ML" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", category: "AI & ML" },
    
    // 클라우드 및 기타
    { name: "AWS", icon: FaAws, color: "#FF9900", category: "Cloud & Others" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Cloud & Others" },
    { name: "Git", icon: SiGit, color: "#F05032", category: "Cloud & Others" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Cloud & Others" },
  ]

  const categories = ["Frontend", "Backend", "Database", "Mobile", "AI & ML", "Cloud & Others"]

  return (
    <section id="skills" className="py-24 px-6 md:px-10 lg:px-20 bg-lightGray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-16 text-center">Skill Set</h2>

        <div className="grid gap-16">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            if (categorySkills.length === 0) return null

            return (
              <div key={category}>
                <h3 className="text-xl font-semibold text-textPrimary mb-6">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-shadow"
                    >
                      <skill.icon className="w-12 h-12 mb-4" style={{ color: skill.color }} />
                      <span className="text-sm font-medium text-darkGray">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

