import { motion } from "framer-motion";
import ParticlesContainer from "./Particle";
import { AsteroidLayer } from "./hero/AsteroidLayer";
import Intro from "./hero/Intro";
import RightSideComponents from "./hero/RightSideComponents";
import { TechStackCard } from "./hero/TechStackCard";

const Hero = () => {
  return (
    <section className="relative min-h-dvh overflow-visible bg-[#03030f]">
      {/* ================= BACKGROUND LAYERS ================= */}
      <ParticlesContainer />
      <AsteroidLayer />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 min-h-screen">
        {/* Responsive Layout */}
        <div className="relative grid min-h-dvh grid-cols-1 lg:grid-cols-2 md:top-12 inset-1">
          {/* LEFT SIDE */}
          <Intro />

          {/* RIGHT SIDE */}
          <RightSideComponents />
        </div>
      </div>

      {/* ================= FLOATING COMPONENT ================= */}
      <div className="hidden md:block absolute md:bottom-0 lg:bottom-8 right-6 z-30">
        <TechStackCard />
      </div>
    </section>
  );
};

export default Hero;
