import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // High performance spring physics without triggering React component re-renders
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const crosshairSpringConfig = { stiffness: 600, damping: 30, mass: 0.35 };
    const cursorX = useSpring(mouseX, crosshairSpringConfig);
    const cursorY = useSpring(mouseY, crosshairSpringConfig);

    const dotSpringConfig = { stiffness: 350, damping: 25, mass: 0.45 };
    const dotX = useSpring(mouseX, dotSpringConfig);
    const dotY = useSpring(mouseY, dotSpringConfig);

    useEffect(() => {
        // Disable custom mouse cursor on touch-only devices
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            if (e.target && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button'))) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updateMousePosition, { passive: true });
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.documentElement.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Cursor (Crosshair) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[11000] mix-blend-difference will-change-transform"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="12" cy="12" r="8" stroke="#00f2ff" strokeWidth="1.5" className="opacity-80" />
                    <path d="M12 4V8M12 16V20M4 12H8M16 12H20" stroke="#00f2ff" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="2" fill="#ff0055" className={`${isHovering ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`} />
                </svg>
            </motion.div>

            {/* Trailing Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[var(--primary)] rounded-full pointer-events-none z-[10999] will-change-transform"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};

export default CustomCursor;
