import './App.css'
import Home from "./Components/Pages/Home.jsx"
import About from "./Components/Pages/About.jsx"
import Header from './Components/Pages/Header.jsx'
import Experience from './Components/Pages/Experience.jsx';
import Education from './Components/Pages/Education.jsx';
import Skills from './Components/Pages/Skills.jsx';
import Projects from './Components/Pages/Projects.jsx';
import Contact from './Components/Pages/Contact.jsx'; // Imported Contact
import Footer from './Components/Pages/Footer.jsx';
import CustomCursor from './Components/Game/CustomCursor.jsx';
import StartScreen from './Components/Game/StartScreen.jsx';
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-[500] group"
          aria-label="Scroll to top"
        >
          {/* Main Button Construction */}
          <div className="relative flex items-center justify-center w-14 h-14 bg-black/80 backdrop-blur-md border border-[var(--primary)] text-[var(--primary)] shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_var(--primary)] transition-all duration-300"
            style={{ clipPath: "polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)" }}
          >
            {/* Internal Glow */}
            <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            {/* Bouncing Arrow */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="relative z-10"
            >
              <FaArrowUp size={20} />
            </motion.div>
          </div>

          {/* Thruster Flame Effect (Below button) */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full w-full h-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-2 h-4 bg-[var(--primary)] blur-[4px] animate-pulse"></div>
            <div className="absolute w-4 h-8 bg-[var(--primary)]/50 blur-[8px] animate-pulse"></div>
          </div>

          {/* Orbiting Ring */}
          <div className="absolute inset-[-4px] border border-[var(--primary)]/30 rounded-full w-[calc(100%+8px)] h-[calc(100%+8px)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-t-transparent border-l-transparent"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className={`min-h-screen w-full overflow-x-hidden cursor-none ${!gameStarted ? 'h-screen overflow-hidden' : ''}`}>
      <CustomCursor />

      <AnimatePresence>
        {!gameStarted && (
          <StartScreen onStart={() => setGameStarted(true)} />
        )}
      </AnimatePresence>

      <div className={gameStarted ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
        <Header />
        <main className="w-full">
          <Home />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;