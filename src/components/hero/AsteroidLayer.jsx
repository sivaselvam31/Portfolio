import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ASTEROIDS } from "../../constants/const";


export const AsteroidLayer = () => {
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [visibleAsteroids, setVisibleAsteroids] = useState(ASTEROIDS);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      
      // Mobile (< 640px): 50% size, only 3 asteroids
      if (w < 640) {
        setSizeMultiplier(0.5);
        setVisibleAsteroids(ASTEROIDS.filter(ast => [1, 5, 7].includes(ast.id)));
      }
      // Tablet (640px - 1024px): 70% size, 5 asteroids
      else if (w < 1024) {
        setSizeMultiplier(0.7);
        setVisibleAsteroids(ASTEROIDS.filter(ast => ![3, 4].includes(ast.id)));
      }
      // Desktop (>= 1024px): 100% size, all asteroids
      else {
        setSizeMultiplier(1);
        setVisibleAsteroids(ASTEROIDS);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
      {visibleAsteroids.map((ast) => (
        <motion.img
          key={ast.id}
          src="/asteroid.png"
          alt=""
          className="absolute object-contain select-none"
          style={{
            width: ast.w * sizeMultiplier,
            height: ast.w * sizeMultiplier,
            top: ast.top,
            left: ast.left,
            opacity: ast.opacity,
            filter: `blur(${ast.blur}px)`,
          }}
          animate={{
            y: ['-12px', '12px', '-12px'],
            rotate: [-ast.rotRange / 2, ast.rotRange / 2, -ast.rotRange / 2],
          }}
          transition={{
            duration: ast.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: ast.delay,
          }}
        />
      ))}
    </div>
  );
};
