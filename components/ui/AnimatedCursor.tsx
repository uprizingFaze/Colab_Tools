"use client"

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCursor() {
  const isClient = typeof window === 'object';
  const x = useMotionValue(isClient && window.matchMedia("(min-width: 768px)").matches ? 250 : 50);
  const y = useMotionValue(600);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        x.set(250);
      } else {
        x.set(50);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [x, isClient]);

  return (
    <motion.div
      initial={{ x: x.get(), y: y.get() }}
      animate={{ 
        x: [x.get(), 450, 450, x.get(), x.get()], 
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