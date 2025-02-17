'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Star {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const withoutFeatures = [
  "Случайни видеа в YouTube, без структура.",
  "Не знаете откъде да започнете.",
  "Липса на основни умения.",
  "Липса на индустриални знания.",
  "Без общност и обратна връзка."
];

const withFeatures = [
  "Подробни уроци за ключови умения.",
  "Основи за дълготраен успех.",
  "Индустриални прозрения и работни процеси.",
  "Проектни файлове за незабавен старт.",
  "Стъпка по стъпка обучителен път.",
  "Общност за подкрепа и обратна връзка."
];

export default function Comparison() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(newStars);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#7D4CC3]/20 rounded-full blur-[120px] translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#F4A836]/10 rounded-full blur-[100px] -translate-x-1/4" />
        
        {/* Animated Stars */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">Без Агенцията vs.</span>
            <br />
            <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
              С Агенцията
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Without Agency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A32]/50 backdrop-blur-sm rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">Без Агенцията:</h3>
            <div className="space-y-4">
              {withoutFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                    <span className="text-gray-600">✕</span>
                  </div>
                  <span className="text-gray-400">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - With Agency */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F4A836]/10 to-[#E08E2B]/10 backdrop-blur-sm rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
              С Агенцията:
            </h3>
            <div className="space-y-4">
              {withFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#F4A836] flex items-center justify-center">
                    <span className="text-[#F4A836]">✓</span>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 