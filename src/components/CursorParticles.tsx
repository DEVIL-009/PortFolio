import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorParticles = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Performance tuning:
  // 1. Softer spring (less jitter)
  // 2. Single layer (less GPU work)
  // 3. Low opacity (better visibility of text)
  const springConfig = { damping: 40, stiffness: 200, mass: 1 }; // Smoother, less "bouncy"

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Strict mobile/performance check
    const checkMobile = () => {
      try {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        return isMobile || prefersReducedMotion;
      } catch (e) {
        return false;
      }
    };

    if (checkMobile()) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Center a 400px circle
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* 
            Optimized Glow:
            - Single layer for performance
            - Lower blur for GPU efficiency
            - Very low opacity (0.15) to not wash out text
            - No mix-blend-mode to avoid contrast issues
        */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px]"
        style={{
          x: springX,
          y: springY,
          willChange: "transform", // Hint for GPU acceleration
        }}
      />
    </div>
  );
};

export default CursorParticles;
