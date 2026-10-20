import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCpu, FiPlay, FiLayers, FiCode } from "react-icons/fi";
import projects from "../Data/data.js";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="relative py-20 bg-[var(--bg-dark)] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(189,0,255,0.1)_25%,rgba(189,0,255,0.1)_26%,transparent_27%,transparent_74%,rgba(189,0,255,0.1)_75%,rgba(189,0,255,0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(189,0,255,0.1)_25%,rgba(189,0,255,0.1)_26%,transparent_27%,transparent_74%,rgba(189,0,255,0.1)_75%,rgba(189,0,255,0.1)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="px-4 py-1 border border-[var(--primary)] rounded-full text-[var(--primary)] text-xs font-mono mb-4 animate-pulse">
                        /// SYSTEM: ONLINE ///
          </div>
          <h2 className="text-4xl md:text-5xl font-gaming font-bold text-white">
            GAME <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">LIBRARY</span>
          </h2>
        </div>

        {/* Main Launcher Interface */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 min-h-[550px] lg:h-[600px] border border-gray-800 bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl relative">
          {/* Sidebar - Game List */}
          <div className="w-full lg:w-1/3 bg-black/60 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-row lg:flex-col p-3 sm:p-4 overflow-x-auto lg:overflow-y-auto">
            <h3 className="text-gray-500 text-xs font-mono mb-3 px-2 uppercase tracking-widest hidden lg:block">Installed Games ({projects.allProject.length})</h3>

            <div className="flex flex-row lg:flex-col gap-2.5 lg:gap-2 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 scrollbar-none lg:scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-transparent snap-x">
              {projects.allProject.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`min-w-[260px] lg:min-w-0 w-full text-left p-2.5 sm:p-3 rounded-lg flex items-center gap-3 sm:gap-4 transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 border snap-center ${activeProject === index
                    ? "bg-[var(--primary)]/10 border-[var(--primary)] shadow-[0_0_15px_rgba(0,242,255,0.2)]"
                    : "bg-transparent border-transparent hover:bg-white/5 hover:border-gray-700"
                    }`}
                >
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded overflow-hidden border flex-shrink-0 ${activeProject === index ? "border-[var(--primary)]" : "border-gray-700"}`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-gaming text-xs sm:text-sm truncate ${activeProject === index ? "text-white" : "text-gray-400"}`}>
                      {project.title.split("|")[0].trim()}
                    </h4>
                    <span className="text-[10px] text-gray-500 font-mono">
                      {project.status?.toUpperCase() === "LIVE" ? "● READY" : "○ PAUSED"}
                    </span>
                  </div>
                  {activeProject === index && (
                    <motion.div layoutId="activeGlow" className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Area - Active Game Details */}
          <div className="flex-1 relative flex flex-col overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative lg:absolute lg:inset-0 min-h-[480px] lg:h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[var(--primary)]/30 scrollbar-track-transparent will-change-transform"
              >
                {/* Hero Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <img src={projects.allProject[activeProject].image} alt="" className="w-full h-full object-cover opacity-20 filter blur-sm scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-[var(--bg-dark)]/85 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-center items-start min-h-full max-w-full">
                  {/* Logo/Title */}
                  <motion.h1
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-gaming font-black text-white mb-2 leading-tight uppercase tracking-tight drop-shadow-[0_0_12px_rgba(0,0,0,1)]"
                  >
                    {projects.allProject[activeProject].title.split("|")[0].trim()}
                  </motion.h1>

                  {/* Meta Data */}
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="flex flex-wrap items-center gap-2.5 mb-3"
                  >
                    <span className="px-2.5 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[11px] text-white font-mono">
                      VERSION 1.0
                    </span>
                    <span className="px-2.5 py-0.5 bg-[var(--primary)]/20 border border-[var(--primary)] rounded text-[11px] text-[var(--primary)] font-bold tracking-wider">
                      {projects.allProject[activeProject].status?.toUpperCase()}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mb-3.5 font-sans border-l-2 border-[var(--primary)] pl-3.5 line-clamp-3 sm:line-clamp-4"
                  >
                    {projects.allProject[activeProject].description}
                  </motion.p>

                  {/* Tech Modules */}
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-wrap gap-1.5 mb-5 max-w-2xl"
                  >
                    {projects.allProject[activeProject].teckstack.map((tech, i) => (
                      <span key={i} className="flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 bg-black/60 border border-gray-700/80 text-gray-300 text-[11px] sm:text-xs rounded-md hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-colors cursor-default">
                        <FiCode size={10} className="text-[var(--primary)]" /> {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center gap-3 pt-1"
                  >
                    {projects.allProject[activeProject].livelink ? (
                      <a
                        href={projects.allProject[activeProject].livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[var(--primary)] hover:bg-white text-black font-gaming font-bold text-xs sm:text-sm rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(0,242,255,0.4)]"
                      >
                        <FiPlay size={16} fill="currentColor" /> LAUNCH GAME
                      </a>
                    ) : (
                      <button disabled className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-700 text-gray-400 font-gaming font-bold text-xs sm:text-sm rounded-lg cursor-not-allowed flex items-center gap-2 opacity-50">
                        SERVER OFFLINE
                      </button>
                    )}

                    {projects.allProject[activeProject].sourcecode && (
                      <a
                        href={projects.allProject[activeProject].sourcecode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent border border-gray-600 hover:border-white text-white font-gaming font-bold text-xs sm:text-sm rounded-lg flex items-center gap-2 transition-all hover:bg-white/10"
                      >
                        <FiGithub size={16} /> VIEW SOURCE
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;