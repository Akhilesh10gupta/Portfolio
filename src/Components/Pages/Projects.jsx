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
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 h-auto lg:h-[600px] border border-gray-800 bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl relative">
          {/* Sidebar - Game List */}
          <div className="w-full lg:w-1/3 bg-black/60 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-row lg:flex-col p-4 overflow-x-auto lg:overflow-y-auto">
            <h3 className="text-gray-500 text-xs font-mono mb-4 px-2 uppercase tracking-widest hidden lg:block">Installed Games ({projects.allProject.length})</h3>

            <div className="flex flex-row lg:flex-col gap-3 lg:gap-2 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 scrollbar-none lg:scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-transparent snap-x">
              {projects.allProject.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`min-w-[280px] lg:min-w-0 w-full text-left p-3 rounded-lg flex items-center gap-4 transition-all duration-300 border snap-center ${activeProject === index
                    ? "bg-[var(--primary)]/10 border-[var(--primary)] shadow-[0_0_15px_rgba(0,242,255,0.2)]"
                    : "bg-transparent border-transparent hover:bg-white/5 hover:border-gray-700"
                    }`}
                >
                  <div className={`w-12 h-12 rounded overflow-hidden border flex-shrink-0 ${activeProject === index ? "border-[var(--primary)]" : "border-gray-700"}`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-gaming text-sm truncate ${activeProject === index ? "text-white" : "text-gray-400"}`}>
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
          <div className="flex-1 relative flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative lg:absolute lg:inset-0 min-h-[500px] lg:min-h-full"
              >
                {/* Hero Background */}
                <div className="absolute inset-0">
                  <img src={projects.allProject[activeProject].image} alt="" className="w-full h-full object-cover opacity-20 filter blur-sm scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-12 flex flex-col justify-end lg:justify-center items-start">
                  {/* Logo/Title */}
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-5xl lg:text-7xl font-gaming font-black text-white mb-4 leading-tight uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(0,0,0,1)]"
                  >
                    {projects.allProject[activeProject].title.split("|")[0].trim()}
                  </motion.h1>

                  {/* Meta Data */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center gap-4 mb-8"
                  >
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded text-xs text-white font-mono">
                      VERSION 1.0
                    </span>
                    <span className="px-3 py-1 bg-[var(--primary)]/20 border border-[var(--primary)] rounded text-xs text-[var(--primary)] font-bold tracking-wider">
                      {projects.allProject[activeProject].status?.toUpperCase()}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-8 font-sans border-l-2 border-[var(--primary)] pl-6"
                  >
                    {projects.allProject[activeProject].description}
                  </motion.p>

                  {/* Tech Modules */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2 mb-10 max-w-2xl"
                  >
                    {projects.allProject[activeProject].teckstack.map((tech, i) => (
                      <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 border border-gray-700 text-gray-400 text-xs rounded hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-colors cursor-default">
                        <FiCode size={10} /> {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    {projects.allProject[activeProject].livelink && !projects.allProject[activeProject].livelink.includes("github.com") ? (
                      <a
                        href={projects.allProject[activeProject].livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 lg:px-8 lg:py-4 bg-[var(--primary)] hover:bg-white text-black font-gaming font-bold text-lg roundedclip-path-polygon-[0_0,100%_0,100%_75%,90%_100%,0_100%] flex items-center gap-3 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                      >
                        <FiPlay size={24} fill="currentColor" /> LAUNCH GAME
                      </a>
                    ) : (
                      <button disabled className="px-6 py-3 lg:px-8 lg:py-4 bg-gray-700 text-gray-400 font-gaming font-bold text-lg rounded cursor-not-allowed flex items-center gap-3 opacity-50">
                        SERVER OFFLINE
                      </button>
                    )}

                    <a
                      href={projects.allProject[activeProject].sourcecode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 lg:px-8 lg:py-4 bg-transparent border border-gray-600 hover:border-white text-white font-gaming font-bold text-lg rounded flex items-center gap-3 transition-all hover:bg-white/5"
                    >
                      <FiGithub size={20} /> VIEW SOURCE
                    </a>
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