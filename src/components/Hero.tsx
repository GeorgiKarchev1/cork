'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { fadeInUp } from '../components/shared/AnimationConfig'

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Existing gradient orbs */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#7D4CC3]/20 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#F4A836]/10 rounded-full blur-[100px] translate-x-1/4" />
        
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

      {/* Content */}
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
        {/* Client avatars */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center mb-8 hardware-accelerated"
          transition={{ duration: 0.5 }}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div 
                key={i} 
                className="w-10 h-10 rounded-full border-2 border-[#7D4CC3]/20 overflow-hidden backdrop-blur-sm"
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
          <div className="ml-2 px-3 py-1 bg-[#141414]/50 rounded-full border border-gray-800/50 text-gray-300 backdrop-blur-sm">
            <span className="font-semibold">150+ човека</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-4xl backdrop-blur-sm hardware-accelerated"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">Готови ли сте да</span>
            <br />
            <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">вдигнете нивото?</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Независимо дали се опитвате да изградите свой собствен YouTube канал, да изкарвате пари от видеообработка, или сте фрийлансър, "Агенцията" ще ви издигне на следващото ниво.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://whop.com/discover/the-agency-bg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hardware-accelerated"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-[#7D4CC3] px-8 py-4 rounded-lg text-white font-semibold shadow-[0_0_20px_rgba(125,76,195,0.3)] transition-optimized hover:shadow-[0_0_25px_rgba(125,76,195,0.4)]"
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