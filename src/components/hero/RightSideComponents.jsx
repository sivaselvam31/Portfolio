import React from "react";
import { motion } from "framer-motion";

const RightSideComponents = () => {
  return (
    <div className="relative flex items-center justify-start order-2 min-h-80 lg:min-h-screen">
      {/* Earth */}
      <motion.img
        src="/earth.png"
        alt="Earth"
        className="absolute w-full md:w-3/4 lg:w-full object-contain opacity-45 -right-1 md:right-4 lg:-right-10"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          filter: "drop-shadow(0 0 60px rgba(40,80,255,0.35))",
        }}
      />

      {/* Orbit Ring */}

      <motion.img
        src="/Orbit_ring.png"
        alt="Orbit Ring"
        className="absolute object-cover
        w-80 h-56 bottom-[18%] right-1
        xs:w-80 xs:h-72 xs:bottom-[10%] xs:right-3
        mobile:w-96 mobile:h-80 mobile:bottom-[5%] mobile:right-2.5
        md:w-full md:h-full md:bottom-8 md:-right-12
        lg:w-full lg:h-[75%] lg:bottom-28 lg:-right-6 lg:opacity-70 lg:-rotate-0.5
        "

      />

      {/* Astronaut */}
      <motion.img
        src="/astronaut.png"
        alt="Astronaut"
        className="relative z-10 w-full object-contain -left-10 md:-right-4 lg:-left-32"
        animate={{
          x: [-20, 0, -20],
          y: ["-14px", "14px", "-14px"],
          rotate: [-1, 1.5, -1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default RightSideComponents;
