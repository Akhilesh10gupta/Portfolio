import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const StartScreen = ({ onStart }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            {/* Background Grid Animation */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

            <div className="relative z-10 flex flex-col items-center max-w-2xl w-full px-8">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-gaming font-bold text-white mb-8 tracking-wider glitch-text relative text-center">
                    <span className="relative z-10">SYSTEM_INIT</span>
                    <span className="absolute top-0 left-1 text-[var(--secondary)] opacity-50 -z-10 animate-pulse">SYSTEM_INIT</span>
                    <span className="absolute top-0 -left-1 text-[var(--primary)] opacity-50 -z-10 animate-pulse">SYSTEM_INIT</span>
                </h1>

                <div className="w-full h-2 bg-gray-900 border border-gray-700 rounded-full mb-4 relative overflow-hidden">
                    <motion.div
                        className="h-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]"
                        style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                    />
                </div>

                <div className="flex justify-between w-full text-xs font-mono text-[var(--primary)] mb-12">
                    <span>LOADING ASSETS...</span>
                    <span>{Math.min(Math.round(loadingProgress), 100)}%</span>
                </div>

                <AnimatePresence>
                    {loadingProgress >= 100 && (
                        <motion.button
                            onClick={onStart}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255,255,255)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-3 sm:px-12 sm:py-4 bg-transparent border-2 border-white text-white font-gaming text-base sm:text-xl tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <span className="flex items-center gap-4">
                                <FaPlay className="text-xs group-hover:text-black" />
                                PRESS START
                                <FaPlay className="text-xs group-hover:text-black rotate-180" />
                            </span>
                            {/* Corner bits */}
                            <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-white"></div>
                            <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-white"></div>
                            <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-white"></div>
                            <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-white"></div>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer info */}
            <div className="absolute bottom-8 text-gray-600 font-mono text-xs">
                © 2026 AKHILESH GUPTA | SECURE CONNECTION ESTABLISHED
            </div>
        </motion.div>
    );
};

export default StartScreen;
