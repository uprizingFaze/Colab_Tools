"use client"

import { motion } from "framer-motion";

const pointerVariants = {
  initial: { x: "-0%", y: "80%" },
  animate: { x: ["-0%", "100%", "-0%"], y: "80%" },
};

export default function AnimatedText() {
  return (
    <div className="text-center mt-10">
      <h1 className="md:text-8xl text-5xl font-bold gradient-text">
        Colabora. Sin límites. Sin demoras.
      </h1>
      <div className="text-xl md:text-3xl text-zinc-500 dark:text-gray-400 mt-8">
        Edita, codifica, colabora y crea juntos en tiempo real
        <br />
        con nuestra <motion.span
          initial={{ backgroundSize: "0% 100%" }}
          animate={{ backgroundSize: ["0% 100%", "100% 100%", "0% 100%"] }}
          transition={{ duration: 5.2, ease: "linear", delay: 0.5, repeat: Infinity }}
          style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left center", display: "inline" }}
          className="relative inline-block pb-1 px-1  bg-gradient-to-r from-green-700 to-green-600 text-black dark:text-white"
        >
          plataforma
          <motion.span
            variants={pointerVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 5.2, ease: "linear", delay: 0.5, repeat: Infinity }}
            className="absolute bottom-0 right-0 flex items-center"
          >
            <img
              src="/cursors/cursor_2.svg"
              alt="Pointer"
              width="30"
              height="30"
            />
            <span className="ml-2 px-2 text-base text-white rounded-md bg-green-900">ElRincondelDev</span>
          </motion.span>
        </motion.span> integral
      </div>
    </div>
  );
}