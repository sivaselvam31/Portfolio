import React from "react";
import { motion } from "framer-motion";

export const CTAButtons = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <button className="relative overflow-hidden px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-blue-400 text-white font-medium shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all flex items-center justify-center gap-2 group cursor-pointer z-20">
        View My Work{" "}
        <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform z-20">
          ↗
        </span>
      </button>
      <button className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer z-20">
        Let's Connect{" "}
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
      </button>
    </motion.div>
  );
};
