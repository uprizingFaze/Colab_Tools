"use client"
// AnimatedText.tsx
import { motion } from "framer-motion";

const pointerVariants = {
  initial: { x: "-200%", y: "80%" },
  animate: { x: ["-200%", "50%", "-200%"], y: "80%" },
};

export default function AnimatedText() {
  return (
    <div className="text-center mt-10">
      <h1 className="md:text-8xl text-5xl font-bold gradient-text">
        Colabora. Sin límites. Sin demoras.
      </h1>
      <p className="text-xl md:text-3xl text-zinc-500 dark:text-gray-400 mt-8">
        Edita, codifica, colabora y crea juntos en tiempo real
        <br />
        con nuestra <motion.span
          initial={{ backgroundSize: "0% 100%" }}
          animate={{ backgroundSize: ["0% 100%", "100% 100%", "0% 100%"] }}
          transition={{ duration: 5.2, ease: "linear", delay: 0.5, repeat: Infinity }}
          style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left center", display: "inline" }}
          className="relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-white"
        >
          plataforma
          <motion.img
            src="/cursors/cursor_1.svg"
            alt="Pointer"
            width="50"
            height="50"
            variants={pointerVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 5.2, ease: "linear", delay: 0.5, repeat: Infinity }}
            className="absolute bottom-0 right-0"
          />
        </motion.span> integral
      </p>
    </div>
  );
}