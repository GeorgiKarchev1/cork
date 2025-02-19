'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Star {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

interface Particle {
  x: number;
  y: number;
}

const lectures = [
  {
    title: "Adobe Premiere Начинаещи",
    level: "Level 0",
    color: "border-white/20"
  },
  {
    title: "Техники на обработка за напреднали",
    level: "Level 1",
    color: "border-white/20"
  },
  {
    title: "Short Form MasterClass (Как да правите пари)",
    level: "Level 2",
    color: "border-white/20"
  },
  {
    title: "After Effects за Начинаещи & Напреднали",
    level: "Level 3",
    color: "border-white/20"
  }
]

const bonuses = [
  {
    title: "Как да използваме Музика и Звукови ефекти",
    bonus: "Bonus 1",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Как да намериш клиенти и да печелиш пари",
    bonus: "Bonus 2",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Формулата за ВАЙРЪЛ видео",
    bonus: "Bonus 3",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Coach Call-ове с най-добрите в сферата",
    bonus: "Bonus 4",
    color: "from-indigo-500 to-indigo-600"
  }
]

function generateStars(count: number, seed = 1): Star[] {
  const pseudoRandom = (seed: number) => {
    let value = seed;
    return () => {
      value = (value * 16807) % 2147483647;
      return (value - 1) / 2147483646;
    };
  };

  const random = pseudoRandom(seed);
  
  return Array.from({ length: count }, () => ({
    top: random() * 100,
    left: random() * 100,
    size: random() * 2 + 1,
    duration: random() * 3 + 2,
    delay: random() * 2
  }));
}

export default function Curriculum() {
  const [stars] = useState(() => generateStars(30, 12345));
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Оптимизирани частици с по-малък брой и по-кратки анимации
    const newParticles = Array.from({ length: 10 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="curriculum" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Оптимизирани градиентни орбове */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#7D4CC3]/20 rounded-full blur-[120px] translate-x-1/2 hardware-accelerated" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#F4A836]/10 rounded-full blur-[100px] -translate-x-1/4 hardware-accelerated" />
        
        {/* Оптимизирани звезди */}
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
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16 hardware-accelerated"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">Съдържание</span>
            <br />
            {/* <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
              програма
            </span> */}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Course Structure */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 sm:text-left text-center">Основни нива</h3>
            {lectures.map((lecture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1 
                }}
                className="bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-6 flex sm:flex-row flex-col gap-4 justify-between items-center group hover:bg-[#1a1a1a]/50 transition-optimized hardware-accelerated"
              >
                <span className="text-gray-300 text-center sm:text-left">{lecture.title}</span>
                <span className={`
                  text-sm text-gray-300 px-4 py-1.5 rounded-full 
                  border ${lecture.color}
                  backdrop-blur-sm
                  transition-optimized
                  group-hover:border-white/30
                  group-hover:text-white
                  whitespace-nowrap
                `}>
                  {lecture.level}
                </span>
              </motion.div>
            ))}

            {/* Бонуси с оптимизирани анимации */}
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3,
                  delay: (index + lectures.length) * 0.1 
                }}
                className="bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-6 flex sm:flex-row flex-col gap-4 justify-between items-center group hover:bg-[#1a1a1a]/50 transition-optimized hardware-accelerated"
              >
                <span className="text-gray-300 text-center sm:text-left">{bonus.title}</span>
                <span className={`
                  text-sm px-4 py-1.5 rounded-full 
                  bg-gradient-to-r ${bonus.color}
                  transition-optimized
                  whitespace-nowrap
                `}>
                  {bonus.bonus}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative hardware-accelerated"
          >
            <div className="bg-[#141414]/50 backdrop-blur-sm rounded-3xl p-4 border border-gray-800/50 transition-optimized">
              <Image
                src="/img/curriculum-preview.jpg"
                alt="Curriculum Preview"
                width={600}
                height={400}
                className="rounded-2xl w-full"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 text-sm transition-optimized">
                Структурирано обучение
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-300 text-lg mb-4 sm:text-left text-center">
                Програма с всичко от обработка на видео за начинаещи до напреднали и всичко около монетизирането на вашите умения.
              </p>
              <div className="text-center">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 