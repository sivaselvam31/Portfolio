import React from "react";
import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center pt-36 lg:pt-0 md:pl-[clamp(1rem,5vw,4rem)] order-1">
      {/* Hello Label */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 font-semibold tracking-widest text-base md:text-lg uppercase mb-2"
      >
        <span>👋</span>
        <p className="text-transparent bg-clip-text bg-linear-to-r  from-purple-500 via-blue-300 to-blue-500">
          HELLO, I'M
        </p>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="font-black tracking-tight text-purple-600 leading-none"
        style={{
          fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
        }}
      >
        sivaselvam
      </motion.h1>

      {/* Tagline */}
      {/* <motion.h2
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-5 text-white font-semibold leading-relaxed"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.7rem)",
              }}
            >
              Crafting Digital Experiences that{" "}
              <span className="text-purple-400">Inspire</span>
            </motion.h2> */}

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-6 text-gray-400 leading-relaxed max-w-xl indent-8 text-justify"
      >
        I'm a passionate Full Stack Developer who loves turning complex problems
        into simple, beautiful and intuitive solutions.
      </motion.p>

      {/* CTA */}
      <div className="m-4">
        <CTAButtons />
      </div>
    </div>
  );
};

export default Intro;
