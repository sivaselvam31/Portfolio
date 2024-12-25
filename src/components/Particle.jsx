import React from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const ParticlesContainer = () => {
  const customInit = async (engine) => {
    // This adds the preset to tsParticles
    await loadStarsPreset(engine);
  };

  const options = {
    preset: "stars",
    particles: {
      size: {
        value: 2, //Size of the particles
        random: { enable: true, minimumValue: 1 }, // Random sizes
      },
    },
    color: {
      value: ["#ffffff", "#ffcc00", "#66ccff"], // Add color variety to the stars
    },
    move: {
      enable: true,
      speed: 0.5, // Slow movement for a calm effect
      direction: "none",
      outMode: "out",
    },
    background: {
      color: "#000009", // Dark blue background
    },
       
  };

  return <Particles options={options} init={customInit} />;
};

export default ParticlesContainer;
