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
  SiFirebase,
  SiVuedotjs,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiSass,
  SiRedux,
  SiReactquery,
  SiReactrouter,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiElasticsearch,
  SiKubernetes,
  SiJenkins,
  SiGithub,
  SiGitlab,
  SiJira,
  SiConfluence,
  SiSlack,
  SiNotion,
  SiPostman,
  SiSwagger,
  SiWebpack,
  SiVite,
  SiBootstrap,
  SiMui,
  SiChakraui,
  SiStyledcomponents,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiNginx,
  SiApache,
  SiLinux,
  SiUbuntu,
  SiCentos,
} from "react-icons/si"
import { FaJava, FaAws, FaWindows, FaApple } from "react-icons/fa"
import { Code2 } from "lucide-react"

export default function SkillSet() {
  const skills = [
    // 언어
    { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "Language" },
    { name: "CSS", icon: SiCss3, color: "#1572B6", category: "Language" },
    { name: "SASS", icon: SiSass, color: "#CC6699", category: "Language" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Language" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language" },
    { name: "Python", icon: SiPython, color: "#3776AB", category: "Language" },
    { name: "Java", icon: FaJava, color: "#ED8B00", category: "Language" },
    
    // 프론트엔드
    { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D", category: "Frontend" },
    { name: "jQuery", icon: SiJquery, color: "#0769AD", category: "Frontend" },
    { name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend" },
    { name: "React Query", icon: SiReactquery, color: "#FF4154", category: "Frontend" },
    { name: "React Router", icon: SiReactrouter, color: "#CA4245", category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Frontend" },
    { name: "Material UI", icon: SiMui, color: "#007FFF", category: "Frontend" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795", category: "Frontend" },
    { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093", category: "Frontend" },
    { name: "Webpack", icon: SiWebpack, color: "#8DD6F9", category: "Frontend" },
    { name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
    
    // 백엔드
    { name: "Spring Boot", icon: SiSpring, color: "#6DB33F", category: "Backend" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
    { name: "Express", icon: SiExpress, color: "#000000", category: "Backend" },
    { name: "Nest.js", icon: SiNestjs, color: "#E0234E", category: "Backend" },
    { name: "Django", icon: SiDjango, color: "#092E20", category: "Backend" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688", category: "Backend" },
    { name: "Nginx", icon: SiNginx, color: "#009639", category: "Backend" },
    { name: "Apache", icon: SiApache, color: "#D22128", category: "Backend" },
    
    // 앱 개발
    { name: "Flutter", icon: SiFlutter, color: "#02569B", category: "App Development" },
    { name: "React Native", icon: SiReact, color: "#61DAFB", category: "App Development" },
    
    // 데이터베이스 & 클라우드
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database & Cloud" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database & Cloud" },
    { name: "Oracle", icon: SiOracle, color: "#F80000", category: "Database & Cloud" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database & Cloud" },
    { name: "Redis", icon: SiRedis, color: "#DC382D", category: "Database & Cloud" },
    { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571", category: "Database & Cloud" },
    { name: "AWS", icon: FaAws, color: "#FF9900", category: "Database & Cloud" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Database & Cloud" },
    { name: "Vercel", icon: SiVercel, color: "#000000", category: "Database & Cloud" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "Database & Cloud" },
    { name: "Heroku", icon: SiHeroku, color: "#430098", category: "Database & Cloud" },
    
    // 개발도구 & DevOps
    { name: "Git", icon: SiGit, color: "#F05032", category: "Development Tools" },
    { name: "GitHub", icon: SiGithub, color: "#181717", category: "Development Tools" },
    { name: "GitLab", icon: SiGitlab, color: "#FC6D26", category: "Development Tools" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Development Tools" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "Development Tools" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939", category: "Development Tools" },
    { name: "Jira", icon: SiJira, color: "#0052CC", category: "Development Tools" },
    { name: "Confluence", icon: SiConfluence, color: "#172B4D", category: "Development Tools" },
    { name: "Slack", icon: SiSlack, color: "#4A154B", category: "Development Tools" },
    { name: "Notion", icon: SiNotion, color: "#000000", category: "Development Tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Development Tools" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D", category: "Development Tools" },
    { name: "Windows", icon: FaWindows, color: "#0078D6", category: "Development Tools" },
    { name: "Linux", icon: SiLinux, color: "#FCC624", category: "Development Tools" },
    { name: "Ubuntu", icon: SiUbuntu, color: "#E95420", category: "Development Tools" },
    { name: "CentOS", icon: SiCentos, color: "#262577", category: "Development Tools" },
    { name: "macOS", icon: FaApple, color: "#000000", category: "Development Tools" },
    
    // AI & ML
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", category: "AI & ML" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", category: "AI & ML" },
  ]

  const categories = ["Language", "Frontend", "Backend", "App Development", "Database & Cloud", "Development Tools", "AI & ML"]

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-lightGray/40 to-lightGray/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <Code2 className="w-8 h-8 text-softBlue" />
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">Skill Set</h2>
        </div>

        <div className="grid gap-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            if (categorySkills.length === 0) return null

            return (
              <div key={category}>
                <h3 className="text-xl font-semibold text-textPrimary mb-4">{category}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-soft hover:shadow-hover transition-shadow"
                    >
                      <skill.icon className="w-8 h-8 mb-2" style={{ color: skill.color }} />
                      <span className="text-xs font-medium text-darkGray text-center">{skill.name}</span>
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

