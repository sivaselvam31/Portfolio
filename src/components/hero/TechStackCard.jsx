import React from "react";
import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";
import { TECH_ICONS as ICONS } from "../../constants/const";
import { useState, useEffect } from "react";



export const TechStackCard = () => {
  const [iconSize, setIconSize] = useState(18);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setIconSize(20);
      else if (w >= 425) setIconSize(16);
      else if (w >= 375) setIconSize(14);
      else setIconSize(12);
    };

    update(); // run once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update); // cleanup
  }, []);

  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
      <p
        className="mb-3 font- font-medium text-[rgba(255,255,255,0.55)] tracking-widest uppercase"
        style={{
          fontSize: "clamp(0.60rem, 1.5vw, 0.75rem)",
        }}
      >
        Tech Stack
      </p>

      <div className="flex gap-2 items-center">
        {ICONS.map(({ icon, color, label }) => (
          <motion.div
            key={label}
            title={label}
            whileHover={{ scale: 1.15, y: -2 }}
            className="p-2 rounded-xl bg-black/30 flex items-center justify-center"
            style={{
              color,
              transition: "color 0.2s",
              fontSize: `${iconSize}px`,
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* ··· more indicator */}
        <motion.div
          whileHover={{ scale: 1.15, y: -2 }}
          className={`p-1 md:p-2 rounded-lg bg-black/30 text-[rgba(255,255,255,0.4)] flex items-center justify-center cursor-pointer text-{${iconSize}px}`}
        >
          <BsThreeDots />
        </motion.div>
      </div>
    </div>
  );
};
