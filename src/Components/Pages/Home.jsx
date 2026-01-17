import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGamepad, FaArrowRight } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
// Import profile pic with a fallback in case it fails in the future, although imports are static
import profilePic from "../../assets/profile pic.jpg";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[var(--bg-dark)] px-4 py-20"
    >
      {/* Dynamic Cyberpunk Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Floor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)_translateY(200px)_scale(2)] opacity-30"></div>
        {/* Glow Spheres */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--secondary)] rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

        {/* Text/Content Side */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="mb-6 px-4 py-1 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 backdrop-blur-sm text-[var(--primary)] font-mono text-sm tracking-widest uppercase shadow-[0_0_10px_rgba(0,242,255,0.2)]">
            <span className="animate-pulse mr-2">●</span> Available for Quest
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-gaming text-white leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            AKHILESH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">
              GUPTA
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 font-gaming mb-8 flex items-center justify-center md:justify-start gap-3">
            <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
            LVL. 99 FULLSTACK DEV
          </h2>

          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed font-sans">
            Crafting immersive digital experiences with clean code and futuristic design.
            Ready to deploy high-performance applications into the digital realm.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)] rounded-none font-gaming tracking-wider overflow-hidden hover:bg-[var(--primary)] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.3)] flex items-center gap-2 justify-center"
            >
              Initialize Protocol <FaArrowRight />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1By-FY4WXuCt7QMwmagehyOuWstYSShRM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-gaming hover:border-gray-400 hover:text-white transition-all flex items-center gap-2 justify-center"
            >
              <FaGamepad className="mb-1" /> View Stats
            </motion.a>
          </div>

          {/* Active Tech Display (Simplified) */}
          <div className="mt-12 p-4 w-full max-w-sm border border-gray-800 bg-black/40 rounded-xl backdrop-blur-sm relative overflow-hidden group hover:border-[var(--primary)]/50 transition-colors">
            <p className="text-xs text-gray-500 font-mono mb-2">CURRENTLY EQUIPPED:</p>
            <div className="flex gap-4 text-2xl text-gray-400">
              <FaReact className="hover:text-[#61DAFB] transition-colors" />
              <FaNodeJs className="hover:text-[#339933] transition-colors" />
              <FaJs className="hover:text-[#F7DF1E] transition-colors" />
              <SiNextdotjs className="hover:text-white transition-colors" />
              <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* Visual/Image Side */}
        <motion.div
          className="md:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Holographic Container */}
          {/* Holographic Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">

            {/* Rotating Radar Rings */}
            <div className="absolute inset-0 z-0">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite] opacity-40">
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="10, 5, 2, 5" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.2" strokeDasharray="2, 4" />
              </svg>
            </div>
            <div className="absolute inset-4 z-0">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_15s_linear_infinite_reverse] opacity-30">
                <circle cx="50" cy="50" r="46" fill="none" stroke="var(--secondary)" strokeWidth="1" strokeDasharray="30, 30" />
              </svg>
            </div>

            {/* Profile Image with Clip-Path Octagon */}
            {/* Octagon shape provides more headroom than hexagon */}
            <div className="absolute inset-6 z-10 overflow-hidden bg-black/50" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}>
              <img
                src={profilePic || "https://via.placeholder.com/400"}
                alt="Akhilesh Gupta"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 will-change-transform"
              />
              {/* Glitch Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 border border-[var(--primary)] text-[10px] text-[var(--primary)] font-mono rounded backdrop-blur-md shadow-[0_0_10px_rgba(0,242,255,0.3)]">
              AVATAR_ID: AG_001
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full border border-[var(--online)]/30">
                <span className="w-2 h-2 bg-[var(--online)] rounded-full animate-pulse shadow-[0_0_8px_#00ff00]"></span>
                <span className="text-xs text-[var(--online)] font-gaming tracking-widest text-[#00ff00]">SYSTEM ONLINE</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
