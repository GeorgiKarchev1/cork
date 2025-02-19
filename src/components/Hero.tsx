'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { optimizedTransition, optimizedVariants } from '../components/shared/AnimationConfig'

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
    <section className="relative min-h-screen pt-20 xs:pt-24 sm:pt-28 lg:pt-32 flex flex-col items-center justify-start px-3 xs:px-4 pb-8 xs:pb-12 sm:pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Оптимизирани градиентни орбове за малки екрани */}
        <div className="fixed top-1/4 left-0 w-[150px] xs:w-[250px] sm:w-[400px] lg:w-[600px] h-[150px] xs:h-[250px] sm:h-[400px] lg:h-[600px] bg-[#7D4CC3]/20 rounded-full blur-[40px] xs:blur-[60px] sm:blur-[80px] lg:blur-[120px] -translate-x-1/2 z-0" />
        <div className="fixed bottom-1/4 right-0 w-[100px] xs:w-[200px] sm:w-[300px] lg:w-[500px] h-[100px] xs:h-[200px] sm:h-[300px] lg:h-[500px] bg-[#F4A836]/10 rounded-full blur-[30px] xs:blur-[40px] sm:blur-[60px] lg:blur-[100px] translate-x-1/4 z-0" />
        
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

      {/* Content Container - Оптимизиран за малки екрани */}
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto mt-0 xs:mt-2 sm:mt-4 z-10">
        {/* Client Avatars - Оптимизиран размер */}
        <motion.div 
          variants={optimizedVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center mb-3 xs:mb-4 sm:mb-6 lg:mb-8 hardware-accelerated z-20"
        >
          <div className="flex -space-x-1 xs:-space-x-1.5 sm:-space-x-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div 
                key={i} 
                className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-[#7D4CC3]/20 overflow-hidden backdrop-blur-sm"
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
          <div className="ml-2 px-2 py-0.5 bg-[#141414]/50 rounded-full border border-gray-800/50 text-gray-300 backdrop-blur-sm">
            <span className="text-[10px] xs:text-xs sm:text-sm lg:text-base font-semibold">150+ човека</span>
          </div>
        </motion.div>

        {/* Main Heading - Оптимизирани размери на текста */}
        <motion.div 
          variants={optimizedVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-center max-w-4xl backdrop-blur-sm hardware-accelerated px-2 xs:px-4 z-20"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4 lg:mb-6 leading-tight">
            <span className="text-gray-300">Новата ера на</span>
            <br />
            <span>
              <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">видео обработката</span>
              <span className="text-white"> в България започва тук</span>
            </span>
          </h1>
          
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-3 xs:mb-4 sm:mb-6 lg:mb-8 max-w-[90%] xs:max-w-2xl mx-auto leading-relaxed">
            Независимо дали се опитвате да изградите свой собствен YouTube канал, да изкарвате пари от видеообработка, или сте фрийлансър, "Агенцията" ще ви издигне на следващото ниво.
          </p>
          
          {/* Video Section - Оптимизиран контейнер */}
          <motion.div
            variants={optimizedVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="w-full max-w-[90%] xs:max-w-[95%] sm:max-w-[800px] mt-4 xs:mt-6 sm:mt-8 lg:mt-12 mx-auto z-20"
          >
            <div className="relative aspect-video rounded-xl xs:rounded-2xl overflow-hidden shadow-2xl bg-[#141414]/50 backdrop-blur-sm border border-gray-800/50">
              <video
                controls
                className="w-full h-full object-cover"
                preload="none"
                playsInline
                poster="/img/video-poster.jpg"
                controlsList="nodownload"
              >
                <source src="/img/korkfinal.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button - Оптимизиран размер */}
        <div className="flex justify-center mt-4 xs:mt-6 sm:mt-8 lg:mt-12 z-20">
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
              className="bg-[#7D4CC3] px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg text-white text-sm xs:text-base font-semibold shadow-[0_0_20px_rgba(125,76,195,0.3)] transition-optimized hover:shadow-[0_0_25px_rgba(125,76,195,0.4)] hardware-accelerated"
            >
              КЪМ КУРСА
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}