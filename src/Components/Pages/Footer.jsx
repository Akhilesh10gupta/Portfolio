import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [likeCount, setLikeCount] = useState(() => {
    if (typeof window !== "undefined") {
      const savedLikes = localStorage.getItem("portfolioLikes");
      return savedLikes ? parseInt(savedLikes) : 5;
    }
    return 0;
  });

  const [liked, setLiked] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolioLiked") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("portfolioLikes", likeCount.toString());
    localStorage.setItem("portfolioLiked", liked.toString());
  }, [likeCount, liked]);

  const handleLike = () => {
    if (!liked) {
      setLikeCount((prevCount) => prevCount + 1);
      setLiked(true);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/akhilesh-gupta-826067228/", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/akhilesh10gupta", icon: <FaGithub /> },
    { name: "Email", url: "mailto:gakhilesh946@gmail.com", icon: <FaEnvelope /> },
  ];

  return (
    <footer className="relative bg-[#02020a] border-t border-[var(--primary)]/30 py-12 overflow-hidden">
      {/* Retro Grid Floor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">

        {/* Game Over / Credits Header */}
        <h3 className="text-2xl font-gaming text-gray-400 mb-8 tracking-[0.2em] animate-pulse">
          // END OF TRANSMISSION
        </h3>

        {/* GG Button */}
        <motion.button
          onClick={handleLike}
          disabled={liked}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative mb-12 px-8 py-4 ${liked ? "bg-green-500/20 border-green-500 text-green-400" : "bg-[var(--primary)]/10 border-[var(--primary)] text-[var(--primary)]"} border-2 rounded-xl transition-all duration-300 backdrop-blur-md`}
        >
          <div className="flex items-center gap-3">
            <div className={`text-2xl ${liked ? "animate-bounce" : "group-hover:animate-pulse"}`}>
              {liked ? "🏆" : "👾"}
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-mono opacity-80">{liked ? "ACHIEVEMENT UNLOCKED" : "SEND COMMENDATION"}</span>
              <span className="text-2xl font-gaming font-bold">{liked ? "GG WP!" : "DROP A GG"}</span>
            </div>
          </div>

          {/* Particle Effects on Click would go here */}
        </motion.button>

        {/* Social Mainframe Connections */}
        <div className="flex gap-6 mb-12">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-[var(--secondary)] hover:shadow-[0_0_15px_var(--secondary)] transition-all duration-300 relative group"
              whileHover={{ y: -5 }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[var(--secondary)]">
                ESTABLISH LINK
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-gray-600 font-mono text-xs">
          <p className="mb-2">
            SYSTEM STATUS: <span className="text-green-500">OPTIMAL</span> | SERVER: <span className="text-blue-500">EARTH-1</span>
          </p>
          <p>
            &copy; {new Date().getFullYear()} AKHILESH GUPTA | DESIGNED IN NEON CITY
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
