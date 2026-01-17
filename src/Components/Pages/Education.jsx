import { motion } from "framer-motion";
import { FaGraduationCap, FaDatabase, FaNetworkWired, FaCode, FaMicrochip } from "react-icons/fa";

const Education = () => {
  const courses = [
    { name: "Data Structures & Algorithms", icon: <FaCode />, rarity: "LEGENDARY" },
    { name: "Operating Systems", icon: <FaMicrochip />, rarity: "EPIC" },
    { name: "Database Management", icon: <FaDatabase />, rarity: "RARE" },
    { name: "Object Oriented Programming", icon: <FaCode />, rarity: "RARE" },
    { name: "Computer Networking", icon: <FaNetworkWired />, rarity: "COMMON" },
  ];

  return (
    <section
      id="education"
      className="relative py-24 bg-[var(--bg-dark)] overflow-hidden"
    >
      {/* Background circuit lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L30 10 L30 30" fill="none" stroke="#00f2ff" strokeWidth="1" />
            <circle cx="30" cy="30" r="2" fill="#00f2ff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left Side - Holographic Diploma */}
          <motion.div
            className="md:w-1/3 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative p-1 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl group">
              <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="bg-[#0a0a1a] rounded-2xl p-8 relative overflow-hidden">
                <FaGraduationCap className="text-6xl text-[var(--primary)] mb-6 opacity-80" />
                <h2 className="text-2xl font-gaming font-bold text-white mb-2">TRAINING_COMPLETE</h2>
                <p className="text-gray-400 text-sm font-mono mb-6">Dr. Ram Manohar Lohia Avadh University, Ayodhya</p>

                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                  <span className="text-xs text-[var(--secondary)] font-bold">B.TECH [CSE]</span>
                  <span className="text-xs text-gray-500 font-mono">2021 - 2025</span>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skill Modules */}
          <div className="md:w-2/3 w-full">
            <h3 className="text-3xl font-gaming font-bold text-white mb-8 flex items-center gap-4">
              <FaMicrochip className="text-[var(--secondary)] animate-spin-slow" />
              INSTALLED MODULES
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ x: 5, backgroundColor: "rgba(0, 242, 255, 0.05)" }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border border-gray-800 bg-[#0f0f1f] rounded hover:border-[var(--primary)] transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--primary)] group-hover:text-white transition-colors">{course.icon}</span>
                    <span className="text-gray-300 font-mono text-sm">{course.name}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${course.rarity === 'LEGENDARY' ? 'border-yellow-500 text-yellow-500' :
                      course.rarity === 'EPIC' ? 'border-purple-500 text-purple-500' :
                        course.rarity === 'RARE' ? 'border-blue-500 text-blue-500' :
                          'border-gray-500 text-gray-500'
                    }`}>
                    {course.rarity}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
