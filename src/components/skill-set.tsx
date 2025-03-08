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
} from "react-icons/si"

export default function SkillSet() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Language" },
    { name: "React", icon: SiReact, category: "Frontend" },
    { name: "FastAPI", icon: SiFastapi, category: "Backend" },
    { name: "Flutter", icon: SiFlutter, category: "Mobile" },
    { name: "React Native", icon: SiReact, category: "Mobile" },
    { name: "JavaScript", icon: SiJavascript, category: "Language" },
    { name: "Python", icon: SiPython, category: "Language" },
    { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
    { name: "Git", icon: SiGit, category: "Tool" },
    { name: "Docker", icon: SiDocker, category: "DevOps" },
  ]

  const categories = ["Frontend", "Backend", "Mobile", "Language", "Tool", "DevOps"]

  return (
    <section id="skills" className="py-24 px-6 md:px-10 lg:px-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-16 text-center">Skill Set</h2>

        <div className="grid gap-16">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            if (categorySkills.length === 0) return null

            return (
              <div key={category}>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-6">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <skill.icon className="w-12 h-12 text-[#1D1D1F] mb-4" />
                      <span className="text-sm font-medium text-[#6E6E73]">{skill.name}</span>
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

