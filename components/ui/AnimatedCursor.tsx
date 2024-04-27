"use client"

import { motion } from "framer-motion";

export default function AnimatedCursor() {
  return (
    <motion.div
      initial={{ x: 50, y: 400 }}
      animate={{ x: 100, y: 500 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        pointerEvents: "none",
      }}
    >
      <img src="/cursors/cursor_1.svg" alt="Cursor"  style={{ width: "40px", height: "40px" }} />
      <p className="text-white rounded-md px-2 bg-fuchsia-600 z-0">Afor</p>
    </motion.div>
  );
}