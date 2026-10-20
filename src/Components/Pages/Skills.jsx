import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaTools, FaLaptopCode, FaRocket, FaGraduationCap, FaBrain, FaLayerGroup } from "react-icons/fa";

const skillCategories = [
  {
    title: "FRONTEND ARSENAL",
    subtitle: "CLIENT ARCHITECTURE & UI",
    icon: <FaLaptopCode className="text-xl" />,
    color: "var(--primary)",
    glowColor: "rgba(0, 242, 255, 0.2)",
    skills: [
      { name: "React.js & Next.js (App Router)", level: 95 },
      { name: "TypeScript & JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS & Bootstrap", level: 95 },
      { name: "State: Zustand & Redux Toolkit", level: 88 },
      { name: "HTML5 & Modern CSS3", level: 96 },
    ],
    tags: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Zustand", "Redux Toolkit", "HTML5", "CSS3"]
  },
  {
    title: "BACKEND & LOGIC",
    subtitle: "SERVER, APIS & PROGRAMMING",
    icon: <FaServer className="text-xl" />,
    color: "var(--secondary)",
    glowColor: "rgba(189, 0, 255, 0.2)",
    skills: [
      { name: "RESTful APIs Architecture", level: 92 },
      { name: "PHP & Dynamic Server Portals", level: 85 },
      { name: "C++ (OOPs & Problem Solving)", level: 82 },
      { name: "Node.js & Server Integration", level: 84 },
    ],
    tags: ["RESTful APIs", "PHP", "C++", "Node.js", "Spring Boot", "OOPs Architecture", "Microservices"]
  },
  {
    title: "DATA VAULT & MEDIA",
    subtitle: "DATABASES & ASSET PIPELINES",
    icon: <FaDatabase className="text-xl" />,
    color: "#00ff88",
    glowColor: "rgba(0, 255, 136, 0.2)",
    skills: [
      { name: "MySQL (Relational Queries & Schema)", level: 88 },
      { name: "Firebase (Firestore & Auth)", level: 85 },
      { name: "Cloudinary (Media Delivery & Uploads)", level: 90 },
      { name: "PostgreSQL & Database Systems", level: 82 },
    ],
    tags: ["MySQL", "PostgreSQL", "Firebase Firestore", "Firebase Auth", "Cloudinary", "DBMS", "Data Integrity"]
  },
  {
    title: "PLATFORMS & TOOLING",
    subtitle: "WORKFLOW & DEPLOYMENTS",
    icon: <FaTools className="text-xl" />,
    color: "var(--accent)",
    glowColor: "rgba(255, 0, 85, 0.2)",
    skills: [
      { name: "Git & GitHub Version Control", level: 94 },
      { name: "Vercel & Render Cloud Hosting", level: 90 },
      { name: "VS Code & Engineering Environment", level: 95 },
      { name: "Full-Stack & SPA Architecture", level: 90 },
    ],
    tags: ["Git", "GitHub", "Vercel", "Render", "VS Code", "SPA", "Vite", "Figma to Code"]
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Object Oriented Programming (OOPs)",
  "Database Management Systems (DBMS)",
  "Computer Networks"
];

const softSkills = [
  { name: "Problem Solving", stat: "MAX LOGIC" },
  { name: "Team Collaboration", stat: "PEER SYNERGY" },
  { name: "Adaptability", stat: "RAPID ITERATION" },
  { name: "Communication", stat: "HIGH CLARITY" },
  { name: "Time Management", stat: "SPRINT MASTERY" }
];

const areasOfInterest = [
  "Single Page Applications (SPA)",
  "Frontend Architecture",
  "Full-Stack Development"
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-24 bg-[var(--bg-dark)] overflow-hidden">
      {/* Connection Lines Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L90 10 M10 10 L10 90" fill="none" stroke="var(--primary)" strokeWidth="1" />
            <circle cx="10" cy="10" r="2" fill="var(--primary)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="px-3 sm:px-5 py-1 sm:py-1.5 border border-[var(--primary)] rounded-full text-[var(--primary)] font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 inline-block bg-[var(--primary)]/10">
              /// ATTRIBUTE MATRIX ///
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-gaming font-bold text-white mb-2">
              <span className="text-[var(--primary)]">ABILITY</span> TREE
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"></div>
            <p className="mt-3 sm:mt-4 text-gray-400 font-mono text-xs sm:text-sm max-w-xl mx-auto px-2">
              Calibrated technical competencies, development engines, and coursework modules from the master resume.
            </p>
          </motion.div>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[rgba(20,20,35,0.7)] backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/60 transition-all duration-300 relative group flex flex-col justify-between"
              style={{
                borderColor: undefined,
              }}
              whileHover={{
                boxShadow: `0 0 25px ${category.glowColor}`,
                borderColor: category.color
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Holographic Corner accents */}
              <div
                className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 rounded-tr-2xl opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: category.color }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 rounded-bl-2xl opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: category.color }}
              ></div>

              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div
                      className="p-2 sm:p-3 bg-black/60 rounded-xl text-white shadow-lg border border-gray-700 flex-shrink-0"
                      style={{ color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-gaming text-white tracking-wider font-bold">{category.title}</h3>
                      <p className="text-[10px] sm:text-xs font-mono tracking-widest uppercase mt-0.5" style={{ color: category.color }}>
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/50 border border-gray-700 text-gray-400 flex-shrink-0">
                    BRANCH #{index + 1}
                  </span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4 sm:space-y-5 mb-5 sm:mb-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between items-end mb-1 text-xs sm:text-sm">
                        <span className="text-gray-200 font-medium font-mono truncate max-w-[78%] sm:max-w-none">
                          {skill.name}
                        </span>
                        <span className="font-mono font-bold flex-shrink-0 ml-2" style={{ color: category.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 w-full bg-black/60 rounded-full overflow-hidden border border-gray-800">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}, var(--secondary))`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Pills */}
              <div className="pt-3 sm:pt-4 border-t border-gray-800/80">
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {category.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-black/40 border border-gray-800 text-gray-300 hover:border-gray-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Coursework & Soft Skills Terminal HUD */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Relevant Coursework */}
          <div className="bg-[rgba(20,20,35,0.6)] backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-gray-700/50 relative overflow-hidden group hover:border-[var(--primary)]/50 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
              <FaGraduationCap className="text-xl sm:text-2xl text-[var(--primary)]" />
              <div>
                <h4 className="text-base sm:text-lg font-gaming font-bold text-white">RELEVANT COURSEWORK</h4>
                <p className="text-[10px] sm:text-xs font-mono text-gray-400">Core Computer Science Foundations</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 sm:p-2.5 bg-black/40 border border-gray-800 rounded-lg text-[11px] sm:text-xs font-mono text-gray-300 hover:border-[var(--primary)]/50 transition-colors"
                >
                  <span className="text-[var(--primary)] font-bold flex-shrink-0">{`>>`}</span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Buffs */}
          <div className="bg-[rgba(20,20,35,0.6)] backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-gray-700/50 relative overflow-hidden group hover:border-[var(--secondary)]/50 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
              <FaBrain className="text-xl sm:text-2xl text-[var(--secondary)]" />
              <div>
                <h4 className="text-base sm:text-lg font-gaming font-bold text-white">SOFT SKILLS & PASSIVES</h4>
                <p className="text-[10px] sm:text-xs font-mono text-gray-400">Professional Traits & Team Execution</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {softSkills.map((trait, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 sm:p-2.5 bg-black/40 border border-gray-800 rounded-lg text-[11px] sm:text-xs font-mono text-gray-300 hover:border-[var(--secondary)]/50 transition-colors"
                >
                  <span className="truncate mr-1">{trait.name}</span>
                  <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/30 font-bold flex-shrink-0">
                    {trait.stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Areas of Interest & Max Status Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-black/60 border border-gray-800 font-mono text-[11px] sm:text-xs text-gray-400">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 text-gray-300 font-bold uppercase">
              <FaLayerGroup className="text-[var(--primary)] flex-shrink-0" />
              <span>Areas of Interest:</span>
            </div>
            {areasOfInterest.map((area, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30">
                {area}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 text-gray-400 self-end sm:self-auto">
            <FaRocket className="text-[var(--accent)]" />
            <span>ALL PROTOCOLS VERIFIED</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;