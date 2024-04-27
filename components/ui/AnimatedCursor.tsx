"use client"

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const isClient = typeof window === 'object';
  const [isLargeScreen, setIsLargeScreen] = useState(isClient && window.matchMedia("(min-width: 768px)").matches);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  const x = useMotionValue(isLargeScreen ? 250 : 50);
  const y = useMotionValue(600);

  return (
    <motion.div
      initial={{ x: x.get(), y: y.get() }}
      animate={{ 
        x: isLargeScreen ? [250, 450, 450, 250, 250] : [50, 100, 100, 50, 50], 
        y: isLargeScreen ? [600, 600, 200, 200, 600] : [200, 200, 100, 100, 200] 
      }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        pointerEvents: "none",
        x,
        y
      }}
    >
      <img src="/cursors/cursor_1.svg" alt="Cursor"  style={{ width: "40px", height: "40px" }} />
      <p className="text-white rounded-md px-2 bg-fuchsia-900 z-50">Afor</p>
    </motion.div>
  );
}