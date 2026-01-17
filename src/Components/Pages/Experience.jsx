import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 bg-[var(--bg-dark)] overflow-hidden"
    >
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(150deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(30deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(150deg,rgba(0,242,255,0.03)_12%,transparent_12.5%,transparent_87%,rgba(0,242,255,0.03)_87.5%,rgba(0,242,255,0.03)),linear-gradient(60deg,rgba(189,0,255,0.03)_25%,transparent_25.5%,transparent_75%,rgba(189,0,255,0.03)_75%,rgba(189,0,255,0.03)),linear-gradient(60deg,rgba(189,0,255,0.03)_25%,transparent_25.5%,transparent_75%,rgba(189,0,255,0.03)_75%,rgba(189,0,255,0.03))] bg-[size:100px_175px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="px-6 py-2 border-2 border-[var(--primary)] text-[var(--primary)] font-gaming tracking-widest text-sm uppercase mb-6 bg-[var(--primary)]/10 backdrop-blur-md relative overflow-hidden group">
            <span className="absolute inset-0 bg-[var(--primary)]/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            CAREER MODE
          </div>
          <h2 className="text-4xl md:text-6xl font-gaming font-bold text-white text-center">
            QUEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">LOGS</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent md:-translate-x-1/2 opacity-50"></div>

          <div className="space-y-16">
            {/* Quest 1 */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Timeline Node */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-[var(--bg-dark)] border-2 border-[var(--primary)] rounded-full z-10 group-hover:scale-150 group-hover:bg-[var(--primary)] transition-all duration-300 shadow-[0_0_10px_var(--primary)]"></div>

              {/* Date Badge (Left on Desktop) */}
              <div className="md:w-1/2 order-2 md:order-1 flex md:justify-end md:pr-12 pl-8 md:pl-0 w-full">
                <div className="px-4 py-2 bg-black/50 border border-gray-700 rounded text-gray-400 font-mono text-xs flex items-center gap-2">
                  <FaCalendarAlt /> Dec 2023 - Feb 2024
                </div>
              </div>

              {/* Quest Card (Right on Desktop) */}
              <div className="md:w-1/2 order-3 md:order-2 md:pl-12 pl-8 w-full">
                <div className="relative p-6 bg-[rgba(20,20,35,0.6)] border border-gray-700 hover:border-[var(--primary)] rounded-xl backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-xl pointer-events-none"></div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-gaming font-bold text-white">WEB DEVELOPER</h3>
                    <FaLaptopCode className="text-[var(--primary)] text-2xl" />
                  </div>
                  <p className="text-[var(--secondary)] font-bold text-sm mb-4 tracking-wider uppercase">WeKnow Technologies</p>

                  <ul className="space-y-3 text-sm text-gray-400 font-mono">
                    {[
                      "Deployed interfaces for 'Tipsy Town' & 'Hotel Raj Palace'",
                      "Converted Figma blueprints to React modules",
                      "Integrated Axios/Fetch for backend comms",
                      "Optimized render cycles & squash bugs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--primary)] flex-shrink-0">{`>>`}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quest 2 */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Node */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-[var(--bg-dark)] border-2 border-[var(--secondary)] rounded-full z-10 group-hover:scale-150 group-hover:bg-[var(--secondary)] transition-all duration-300 shadow-[0_0_10px_var(--secondary)]"></div>

              {/* Quest Card (Left on Desktop) */}
              <div className="md:w-1/2 order-3 md:order-1 md:pr-12 pl-8 md:pl-0 w-full text-right md:text-left">
                <div className="relative p-6 bg-[rgba(20,20,35,0.6)] border border-gray-700 hover:border-[var(--secondary)] rounded-xl backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(189,0,255,0.2)] text-left">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-gaming font-bold text-white">TRAINEE</h3>
                    <FaBriefcase className="text-[var(--secondary)] text-2xl" />
                  </div>
                  <p className="text-[var(--primary)] font-bold text-sm mb-4 tracking-wider uppercase">WeKnow Technologies</p>

                  <ul className="space-y-3 text-sm text-gray-400 font-mono">
                    {[
                      "Completed industrial frontend training module",
                      "Executed 'Shree Ram Hotel' web portal",
                      "Collaborated on School Management Systems",
                      "Mastered React.js & Tailwind foundations"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--secondary)] flex-shrink-0">{`>>`}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Date Badge (Right on Desktop) */}
              <div className="md:w-1/2 order-2 flex md:justify-start md:pl-12 pl-8 w-full">
                <div className="px-4 py-2 bg-black/50 border border-gray-700 rounded text-gray-400 font-mono text-xs flex items-center gap-2">
                  <FaCalendarAlt /> May 2023 - Nov 2023
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;