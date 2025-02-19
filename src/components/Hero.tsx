'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { fadeInUp, optimizedTransition, optimizedVariants } from '../components/shared/AnimationConfig'

interface Star {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

interface Particle {
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  duration: number;
}

export default function Hero() {
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));

    // Generate particles with initial and target positions
    const newParticles = Array.from({ length: 15 }, () => ({
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 10
    }));

    setStars(newStars);
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen pt-14 xs:pt-16 sm:pt-20 lg:pt-24 flex flex-col items-center justify-start xs:justify-center px-3 xs:px-4 pb-6 xs:pb-8 sm:pb-16 overflow-hidden">
      {/* Background Elements - фиксирана позиция */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Градиентни орбове - fixed размери и позиции */}
        <div className="fixed top-1/4 left-0 w-[200px] xs:w-[300px] sm:w-[600px] h-[200px] xs:h-[300px] sm:h-[600px] bg-[#7D4CC3]/20 rounded-full blur-[60px] xs:blur-[80px] sm:blur-[120px] -translate-x-1/2 z-0" />
        <div className="fixed bottom-1/4 right-0 w-[150px] xs:w-[250px] sm:w-[500px] h-[150px] xs:h-[250px] sm:h-[500px] bg-[#F4A836]/10 rounded-full blur-[40px] xs:blur-[60px] sm:blur-[100px] translate-x-1/4 z-0" />
        
        {/* Stars and Particles remain the same but with z-index */}
        <div className="absolute inset-0 z-1">
          {/* Animated Stars - Оптимизирани */}
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white hardware-accelerated"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          ))}

          {/* Floating Particles - Оптимизирани */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-[#7D4CC3]/30 rounded-full hardware-accelerated"
                initial={{ x: particle.initialX, y: particle.initialY }}
                animate={{
                  x: particle.targetX,
                  y: particle.targetY
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content - добавен explicit z-index и background */}
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto mt-4 xs:mt-0 z-10">
        {/* Client avatars */}
        <motion.div 
          variants={optimizedVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center mb-4 xs:mb-6 sm:mb-8 hardware-accelerated z-20"
        >
          <div className="flex -space-x-1 xs:-space-x-1.5 sm:-space-x-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div 
                key={i} 
                className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#7D4CC3]/20 overflow-hidden backdrop-blur-sm"
              >
                <Image
                  src={`/img/avatar${i + 1}.jpg`}
                  alt={`Client ${i + 1}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="ml-2 px-2 py-0.5 xs:py-1 bg-[#141414]/50 rounded-full border border-gray-800/50 text-gray-300 backdrop-blur-sm">
            <span className="text-xs xs:text-sm sm:text-base font-semibold">150+ човека</span>
          </div>
        </motion.div>

        {/* Main heading - фиксирани стилове */}
        <motion.div 
          variants={optimizedVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-center max-w-4xl backdrop-blur-sm hardware-accelerated px-2 xs:px-4 z-20"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-300 !important">Новата ера на</span>
            <br />
            <span>
              <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text !important">видео обработката</span>
              <span className="text-white !important"> в България започва тук</span>
            </span>
          </h1>
          
          <p className="text-gray-300 !important text-sm xs:text-base sm:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Независимо дали се опитвате да изградите свой собствен YouTube канал, да изкарвате пари от видеообработка, или сте фрийлансър, "Агенцията" ще ви издигне на следващото ниво.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center z-20">
            <a 
              href="https://whop.com/the-agency-bg/?trackingLinkRoute=course"
              target="_blank"
              rel="noopener noreferrer"
              className="hardware-accelerated"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={optimizedTransition}
                className="bg-[#7D4CC3] !important px-8 py-3 rounded-lg text-white text-base font-semibold shadow-[0_0_20px_rgba(125,76,195,0.3)] transition-optimized hover:shadow-[0_0_25px_rgba(125,76,195,0.4)] hardware-accelerated"
              >
                КЪМ КУРСА
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}