import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Cursor (Crosshair) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[11000] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="12" cy="12" r="8" stroke="#00f2ff" strokeWidth="1.5" className="opacity-80" />
                    <path d="M12 4V8M12 16V20M4 12H8M16 12H20" stroke="#00f2ff" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="2" fill="#ff0055" className={`${isHovering ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                </svg>
            </motion.div>

            {/* Trailing Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[var(--primary)] rounded-full pointer-events-none z-[10999]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
