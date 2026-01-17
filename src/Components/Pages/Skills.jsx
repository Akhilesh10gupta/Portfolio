import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode, FaRocket } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND ARSENAL",
      icon: <FaLaptopCode className="text-xl" />,
      skills: [
        { name: "React System", level: 90 },
        { name: "Next.js Core", level: 85 },
        { name: "Tailwind Armor", level: 95 },
        { name: "TypeScript", level: 80 },
      ],
      color: "var(--primary)"
    },
    {
      title: "BACKEND ENGINE",
      icon: <FaServer className="text-xl" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "REST Protocols", level: 90 },
        { name: "WebSockets", level: 75 },
      ],
      color: "var(--secondary)"
    },
    {
      title: "DATA VAULT",
      icon: <FaDatabase className="text-xl" />,
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "Firebase", level: 82 },
        { name: "MySQL", level: 78 },
      ],
      color: "var(--accent)"
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[var(--bg-dark)] overflow-hidden">
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

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-6xl font-gaming font-bold text-white mb-2">
              <span className="text-[var(--primary)]">ABILITY</span> TREE
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[rgba(20,20,35,0.6)] backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-[var(--primary)]/50 transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Holographic Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--primary)] rounded-tr-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--primary)] rounded-bl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-700/50">
                <div className="p-3 bg-[var(--bg-dark)] rounded-lg text-white shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-gray-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-gaming text-white tracking-wider">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-[var(--primary)] font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-gray-700">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-[0_0_8px_var(--primary)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Badge/Info */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--bg-dark)] border border-gray-700 text-gray-400 font-mono text-sm">
            <FaRocket className="text-[var(--accent)]" />
            <span>SKILL POINTS AVAILABLE: 0 (MAXED OUT)</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;