import React from "react";
import ParticlesContainer from "./Particle";
import homeBg from "../assets/home-bg.jpg"

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Particles Background */}
      <ParticlesContainer />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
        style={{
            backgroundImage: `url(${homeBg})`,
        }}
      ></div>

      {/* Hero Page Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-2xl text-white">
        Hero
      </div>
    </div>
  );
};

export default Hero;
