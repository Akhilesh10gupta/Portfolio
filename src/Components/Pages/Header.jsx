import { useState, useEffect } from "react";
import { FiMenu, FiX, FiActivity, FiClock, FiBatteryCharging, FiWifi } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { id: "home", title: "HQ" },
  { id: "about", title: "CHARACTER" },
  { id: "experience", title: "QUESTS" },
  { id: "skills", title: "STATS" },
  { id: "projects", title: "ARCHIVES" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [battery, setBattery] = useState(100);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

    // Mock Battery Drain
    const batteryTimer = setInterval(() => {
      setBattery(prev => (prev > 20 ? prev - 1 : 100));
    }, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
      clearInterval(batteryTimer);
    };
  }, []);

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  return (
    <header
      className={`fixed w-full top-0 z-[900] transition-all duration-300 ${scrolled ? "bg-[rgba(5,5,16,0.8)] backdrop-blur-md border-b border-[var(--primary)]/30" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* Logo / Gamer Tag */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[var(--primary)]/20 border border-[var(--primary)] rounded-bl-xl rounded-tr-xl flex items-center justify-center relative overflow-hidden group-hover:bg-[var(--primary)]/40 transition-colors">
            <span className="font-gaming font-bold text-[var(--primary)] text-xl">AG</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[scan_1s_linear_infinite]"></div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-gaming font-bold text-white tracking-widest text-lg">AKHILESH</span>
            <span className="text-[10px] text-[var(--primary)] font-mono tracking-widest -mt-1">SYSTEM ONLINE</span>
          </div>
        </a>

        {/* HUD Elements (Top Center - Hidden on small mobile) */}
        <div className="hidden md:flex items-center gap-8 bg-black/40 border border-t-0 border-gray-800 px-8 py-2 rounded-b-xl backdrop-blur-sm shadow-[0_5px_15px_rgba(0,0,0,0.5)] transform -translate-y-2 hover:translate-y-0 transition-transform">
          <div className="flex items-center gap-2 text-xs font-mono text-green-400">
            <FiActivity className="animate-pulse" /> HP: 100%
          </div>
          <div className="w-[1px] h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
            <FiWifi /> SIGNAL: STRONG
          </div>
          <div className="w-[1px] h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2 text-xs font-mono text-yellow-400">
            <FiBatteryCharging /> ENERGY: {battery}%
          </div>
          <div className="w-[1px] h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <FiClock /> {time}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-4 py-2 text-sm font-gaming tracking-wide text-gray-400 hover:text-white transition-colors group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[var(--primary)] transition-colors">{link.title}</span>
              {/* Hover Background */}
              <span className="absolute inset-0 bg-[var(--primary)]/10 transform skew-x-12 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              {/* Bottom Border */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 bg-[var(--primary)] text-black font-gaming font-bold text-sm clip-path-polygon hover:bg-white transition-colors flex items-center gap-2"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
          >
            CONNECT
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-[var(--primary)] transition-colors z-[1000] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-[rgba(5,5,16,0.98)] backdrop-blur-xl z-[950] flex flex-col items-center justify-center top-0 left-0 h-screen w-screen"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Grid Background in Menu */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

              <div className="flex flex-col gap-8 text-center relative z-10 w-full px-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-gaming font-bold text-gray-300 hover:text-[var(--primary)] uppercase tracking-widest border-b border-gray-800 pb-4 hover:border-[var(--primary)] transition-all"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-8 py-3 bg-[var(--primary)] text-black font-gaming font-bold uppercase tracking-widest clip-path-polygon"
                  style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  INITIATE CONTACT
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;