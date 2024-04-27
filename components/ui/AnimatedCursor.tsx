"use client"

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const isClient = typeof window === 'object';
  const [initialX, setInitialX] = useState(isClient && window.matchMedia("(min-width: 768px)").matches ? 250 : 50);
  const x = useMotionValue(initialX);
  const y = useMotionValue(600);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      const newInitialX = window.matchMedia("(min-width: 768px)").matches ? 250 : 50;
      setInitialX(newInitialX);
      x.set(newInitialX);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [x, isClient]);

  return (
    <motion.div
      initial={{ x: initialX, y: y.get() }}
      animate={{ 
        x: [initialX, 450, 450, initialX, initialX], 
        y: [600, 600, 200, 200, 600] 
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