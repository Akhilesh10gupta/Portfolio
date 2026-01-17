import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCpu } from "react-icons/fi";
import projects from "../Data/data.js";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-[var(--bg-dark)] overflow-hidden">
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,242,255,0.1)_25%,rgba(0,242,255,0.1)_26%,transparent_27%,transparent_74%,rgba(0,242,255,0.1)_75%,rgba(0,242,255,0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,242,255,0.1)_25%,rgba(0,242,255,0.1)_26%,transparent_27%,transparent_74%,rgba(0,242,255,0.1)_75%,rgba(0,242,255,0.1)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="px-4 py-1 border border-[var(--primary)] rounded-full text-[var(--primary)] text-xs font-mono mb-4 animate-pulse">
            MISSION LOGS DETECTED
          </div>
          <h2 className="text-4xl md:text-6xl font-gaming font-bold text-white text-center">
            COMPLETED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">QUESTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.allProject.map((project, index) => (
            <motion.div
              key={index}
              className="relative group perspective-1000"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-[rgba(15,15,30,0.9)] border border-gray-800 rounded-xl overflow-hidden hover:border-[var(--primary)] transition-all duration-300 shadow-2xl group-hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] flex flex-col">

                {/* Image / Screen - Holo Effect */}
                <div className="relative h-48 overflow-hidden border-b border-gray-800 group-hover:border-[var(--primary)]/50 transition-colors">
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:4px_4px] pointer-events-none opacity-30"></div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`px-2 py-1 text-[10px] font-bold font-gaming tracking-wider uppercase border ${project.status?.toLowerCase() === "live"
                        ? "bg-green-500/20 text-green-400 border-green-500/50"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                      } backdrop-blur-md`}>
                      {project.status?.toUpperCase() === "LIVE" ? "● ONLINE" : "○ IN DEV"}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <h3 className="text-xl font-gaming font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {project.title.split("|")[0].trim()}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 mb-4 block">
                    MISSION ID: 00{index + 1}-{project.title.substring(0, 3).toUpperCase()}
                  </span>

                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Inventory */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2 text-xs text-[var(--secondary)] font-bold uppercase tracking-wider">
                      <FiCpu /> Inventory
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.teckstack.map((tech, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.sourcecode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 text-sm font-bold font-gaming text-white bg-gray-800 hover:bg-[var(--primary)] hover:text-black border border-gray-600 hover:border-[var(--primary)] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <FiGithub /> SOURCE
                    </a>
                    {project.livelink && !project.livelink.includes("github.com") && (
                      <a
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 text-sm font-bold font-gaming text-[var(--bg-dark)] bg-[var(--primary)] hover:bg-white hover:text-[var(--bg-dark)] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                      >
                        <FiExternalLink /> DEPLOY
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;