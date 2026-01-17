import { motion } from "framer-motion";
import { FaUserAstronaut, FaGamepad, FaCode, FaBolt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[var(--bg-dark)] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--primary)]/5 to-transparent skew-x-12 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-[var(--secondary)]/20 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-8 h-8 rotate-45 border-2 border-[var(--primary)]/30 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-24 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side - Holographic Character Card */}
          <motion.div
            className="lg:w-1/3 w-full"
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-[rgba(20,20,35,0.8)] backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--primary)]/10 rounded-lg text-[var(--primary)]">
                      <FaUserAstronaut size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-gaming text-xl tracking-wider">PLAYER_01</h3>
                      <p className="text-xs text-[var(--primary)] font-mono">STATUS: ONLINE</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                </div>

                {/* Stats Grid */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-mono">CLASS</span>
                    <span className="text-white font-gaming text-right">TECH_WIZARD</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-mono">Level</span>
                    <span className="text-[var(--secondary)] font-gaming text-right">24</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-mono">XP</span>
                    <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] w-[85%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-mono">GUILD</span>
                    <span className="text-white font-gaming text-right">FREELANCER</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-700 flex justify-between text-xs font-mono text-gray-500">
                  <span>ID: 8392-AX</span>
                  <span>SERVER: ASIA-1</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Lore/Description */}
          <motion.div
            className="lg:w-2/3 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[var(--accent)] text-4xl font-gaming opacity-80">01</span>
              <h2 className="text-4xl md:text-5xl font-bold font-gaming text-white">
                CHARACTER <span className="text-[var(--primary)]">LORE</span>
              </h2>
            </div>

            <div className="p-6 border-l-4 border-[var(--primary)] bg-[var(--primary)]/5 backdrop-blur-sm rounded-r-xl mb-8 transform hover:translate-x-2 transition-transform duration-300">
              <p className="text-lg text-gray-300 leading-relaxed font-sans">
                <span className="text-[var(--primary)] font-bold">"</span>
                Hey there! I'm Akhilesh, a Level 24 Full-Stack Developer with a passion for crafting immersive digital worlds.
                My mission is to transform complex problems into sleek, efficient code.
                Specializing in the MERN stack, I build scalable applications that perform as good as they look.
                <span className="text-[var(--primary)] font-bold">"</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaCode />, title: "Code Sorcery", desc: "Writing clean, efficient, and scalable algorithms." },
                { icon: <FaGamepad />, title: "UX Strategy", desc: "Designing intuitive interfaces for optimal player experience." },
                { icon: <FaBolt />, title: "Performance", desc: "Optimizing load times for frame-perfect execution." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-gray-700"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-[var(--bg-dark)] border border-gray-700 rounded-lg text-[var(--secondary)] shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-gaming text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;