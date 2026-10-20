import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBolt } from "react-icons/fa";

const quests = [
  {
    role: "FREELANCE FULL-STACK DEVELOPER",
    company: "Independent Contractor",
    location: "Remote",
    period: "Feb 2025 – Present",
    status: "ACTIVE QUEST",
    isCurrent: true,
    icon: <FaBolt className="text-[var(--primary)] text-xl" />,
    color: "var(--primary)",
    badgeColor: "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_12px_rgba(0,242,255,0.3)]",
    cardGlow: "hover:border-[var(--primary)] group-hover:shadow-[0_0_25px_rgba(0,242,255,0.25)]",
    bulletColor: "text-[var(--primary)]",
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Redux", "RESTful APIs"],
    missions: [
      "Engineered high-performance web applications and dynamic interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Managed complex client-side state using Zustand/Redux and integrated secure RESTful APIs for production platforms.",
      "Developed interactive media dashboards, analytics trackers, and responsive payment flows for independent clients."
    ]
  },
  {
    role: "FRONTEND DEVELOPER",
    company: "WaySorted (Contract)",
    location: "Remote",
    period: "Dec 2024 – Feb 2025",
    status: "QUEST COMPLETED",
    isCurrent: false,
    icon: <FaLaptopCode className="text-[var(--secondary)] text-xl" />,
    color: "var(--secondary)",
    badgeColor: "border-[var(--secondary)] text-[var(--secondary)] bg-[var(--secondary)]/10 shadow-[0_0_12px_rgba(189,0,255,0.3)]",
    cardGlow: "hover:border-[var(--secondary)] group-hover:shadow-[0_0_25px_rgba(189,0,255,0.25)]",
    bulletColor: "text-[var(--secondary)]",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Figma", "UI/UX Optimization"],
    missions: [
      "Engineered dynamic, accessible UI components and modern landing flows using Next.js, React, and Tailwind CSS.",
      "Converted high-fidelity Figma designs into pixel-perfect, responsive layouts with optimized client-side load performance."
    ]
  },
  {
    role: "FULL-STACK DEVELOPER",
    company: "Weknow Technologies",
    location: "Ayodhya, UP",
    period: "Nov 2022 – Apr 2024",
    status: "QUEST COMPLETED",
    isCurrent: false,
    icon: <FaBriefcase className="text-[#00ff88] text-xl" />,
    color: "#00ff88",
    badgeColor: "border-[#00ff88] text-[#00ff88] bg-[#00ff88]/10 shadow-[0_0_12px_rgba(0,255,136,0.3)]",
    cardGlow: "hover:border-[#00ff88] group-hover:shadow-[0_0_25px_rgba(0,255,136,0.25)]",
    bulletColor: "text-[#00ff88]",
    techStack: ["JavaScript (ES6+)", "PHP", "MySQL", "CSS3", "Client Portals", "Peer Reviews"],
    missions: [
      "Spearheaded development of dynamic client portals (Hotel Raj Palace, Tipsy Town) leveraging JavaScript, PHP, MySQL, and CSS.",
      "Collaborated with senior engineers to transform UI/UX specifications into robust web features, participating in peer code reviews."
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 bg-[var(--bg-dark)] overflow-hidden"
    >
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(150deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(30deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(150deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(60deg,rgba(189,0,255,0.03)_25%,transparent_25.5%,transparent_75%,rgba(189,0,255,0.03)_75%,rgba(189,0,255,0.03)),linear-gradient(60deg,rgba(189,0,255,0.03)_25%,transparent_25.5%,transparent_75%,rgba(189,0,255,0.03)_75%,rgba(189,0,255,0.03))] bg-[size:100px_175px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-20">
          <div className="px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-[var(--primary)] text-[var(--primary)] font-gaming tracking-widest text-xs sm:text-sm uppercase mb-4 sm:mb-6 bg-[var(--primary)]/10 backdrop-blur-md relative overflow-hidden group">
            <span className="absolute inset-0 bg-[var(--primary)]/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            CAREER MODE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-gaming font-bold text-white text-center">
            QUEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">LOGS</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 font-mono text-xs sm:text-sm text-center max-w-xl px-2">
            Recorded campaign history across freelance expeditions and engineering contracts.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line (Left on mobile, Center on desktop) */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[#00ff88] md:-translate-x-1/2 opacity-50"></div>

          <div className="space-y-10 sm:space-y-16">
            {quests.map((quest, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between gap-3 md:gap-8 group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div
                    className="absolute left-[2px] sm:left-[6px] md:left-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-5 h-5 bg-[var(--bg-dark)] border-2 rounded-full z-10 transition-all duration-300 group-hover:scale-150"
                    style={{
                      borderColor: quest.color,
                      boxShadow: `0 0 12px ${quest.color}`
                    }}
                  >
                    {quest.isCurrent && (
                      <span className="absolute -inset-1 rounded-full animate-ping opacity-75" style={{ backgroundColor: quest.color }}></span>
                    )}
                  </div>

                  {/* Left Column on Desktop */}
                  <div
                    className={`md:w-1/2 w-full pl-8 sm:pl-10 md:pl-0 ${
                      isEven
                        ? "order-1 flex md:justify-end md:pr-12"
                        : "order-2 md:order-1 md:pr-12 text-left"
                    }`}
                  >
                    {isEven ? (
                      /* Date Badge (Left for Even on desktop, First on mobile) */
                      <div className="flex flex-col items-start md:items-end gap-1.5 sm:gap-2">
                        <div className={`px-3 sm:px-4 py-1 rounded-full border text-[11px] sm:text-xs font-gaming tracking-wider uppercase flex items-center gap-2 ${quest.badgeColor}`}>
                          {quest.isCurrent ? (
                            <>
                              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: quest.color }}></span>
                              {quest.status}
                            </>
                          ) : (
                            <>
                              <FaCheckCircle className="text-[10px] sm:text-xs" />
                              {quest.status}
                            </>
                          )}
                        </div>
                        <div className="px-3 sm:px-4 py-1.5 bg-black/60 border border-gray-700/80 rounded-lg text-gray-300 font-mono text-[11px] sm:text-xs flex items-center gap-2 shadow-inner">
                          <FaCalendarAlt className="text-gray-400" /> {quest.period}
                        </div>
                      </div>
                    ) : (
                      /* Quest Card (Left for Odd on desktop, Second on mobile) */
                      <div className={`relative p-4 sm:p-6 bg-[rgba(20,20,35,0.7)] border border-gray-700/80 rounded-xl backdrop-blur-md transition-all duration-300 ${quest.cardGlow}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-xl pointer-events-none"></div>

                        <div className="flex items-start justify-between mb-3 gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-gaming font-bold text-white tracking-wide leading-snug">
                              {quest.role}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mt-1" style={{ color: quest.color }}>
                              {quest.company}
                            </p>
                          </div>
                          <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-gray-700 flex-shrink-0">
                            {quest.icon}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3 sm:mb-4 pb-2.5 border-b border-gray-800">
                          <FaMapMarkerAlt className="text-xs text-gray-500" />
                          <span>{quest.location}</span>
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-mono mb-4">
                          {quest.missions.map((mission, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                              <span className={`${quest.bulletColor} font-bold flex-shrink-0 mt-0.5`}>{`>>`}</span>
                              <span>{mission}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/80">
                          {quest.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded bg-black/50 border border-gray-700 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column on Desktop */}
                  <div
                    className={`md:w-1/2 w-full pl-8 sm:pl-10 md:pl-12 ${
                      isEven
                        ? "order-2 md:order-2"
                        : "order-1 md:order-2 flex flex-col items-start justify-center"
                    }`}
                  >
                    {isEven ? (
                      /* Quest Card (Right for Even on desktop, Second on mobile) */
                      <div className={`relative p-4 sm:p-6 bg-[rgba(20,20,35,0.7)] border border-gray-700/80 rounded-xl backdrop-blur-md transition-all duration-300 ${quest.cardGlow}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-xl pointer-events-none"></div>

                        <div className="flex items-start justify-between mb-3 gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-gaming font-bold text-white tracking-wide leading-snug">
                              {quest.role}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mt-1" style={{ color: quest.color }}>
                              {quest.company}
                            </p>
                          </div>
                          <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-gray-700 flex-shrink-0">
                            {quest.icon}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3 sm:mb-4 pb-2.5 border-b border-gray-800">
                          <FaMapMarkerAlt className="text-xs text-gray-500" />
                          <span>{quest.location}</span>
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-mono mb-4">
                          {quest.missions.map((mission, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                              <span className={`${quest.bulletColor} font-bold flex-shrink-0 mt-0.5`}>{`>>`}</span>
                              <span>{mission}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/80">
                          {quest.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded bg-black/50 border border-gray-700 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Date Badge (Right for Odd on desktop, First on mobile) */
                      <div className="flex flex-col items-start gap-1.5 sm:gap-2">
                        <div className={`px-3 sm:px-4 py-1 rounded-full border text-[11px] sm:text-xs font-gaming tracking-wider uppercase flex items-center gap-2 ${quest.badgeColor}`}>
                          <FaCheckCircle className="text-[10px] sm:text-xs" />
                          {quest.status}
                        </div>
                        <div className="px-3 sm:px-4 py-1.5 bg-black/60 border border-gray-700/80 rounded-lg text-gray-300 font-mono text-[11px] sm:text-xs flex items-center gap-2 shadow-inner">
                          <FaCalendarAlt className="text-gray-400" /> {quest.period}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;