'use client'
import { motion, useMotionValue, useTransform, animate, useMotionTemplate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Star {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const benefits = [
  {
    title: "Agency Ultimate Preset Pack",
    value: "100 лв.",
    highlight: false
  },
  {
    title: "Седмични Coach Call-ове",
    value: "БЕЗЦЕННО",
    highlight: true
  },
  {
    title: "Революционен за вас курс по обработка и стратегии",
    value: "2,000+ лв.",
    highlight: false
  },
  {
    title: "Как да намирате клиенти и оценявате труда си",
    value: "500+ лв.",
    highlight: false
  },
  {
    title: "Формулата за ВАЙРЪЛ видео",
    value: "1,000+ лв.",
    highlight: false
  },
  {
    title: "Общество от професионалисти",
    value: "БЕЗЦЕННО",
    highlight: true
  },
  {
    title: (
      <div className="flex items-center gap-4">
        <span>Безплатен 30 минутен 1:1 Coach Call с мен</span>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414]/70 backdrop-blur-md rounded-full border border-[#7D4CC3]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-300">
            <span className="text-[#F4A836] font-bold">0</span>
            <span className="mx-0.5">/</span>
            <span className="text-gray-400">15</span>
          </span>
        </div>
      </div>
    ),
    value: "1,000+ лв.",
    highlight: false
  }
]

export default function Pricing() {
  const [stars, setStars] = useState<Star[]>([]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest).toLocaleString());
  const displayValue = useMotionTemplate`${rounded} лв.`;
  
  useEffect(() => {
    const animation = animate(count, 3890, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count]);

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
    <section id="pricing" className="relative py-24 overflow-hidden">
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
            <span className="text-gray-300">Стойност от </span>
            <motion.span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
              {displayValue}
            </motion.span>
          </h2>
          
          <div className="flex flex-col items-center gap-4">
            <span className="text-3xl text-gray-400 line-through opacity-50">3,890 лв.</span>
            
            <div className="flex items-center gap-4">
              <span className="text-2xl text-gray-300">Само за</span>
              <div className="flex items-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">60 лв</span>
                <span className="text-xl text-gray-400 ml-2">/ месец</span>
              </div>
              <span className="text-2xl text-gray-400">или</span>
              <div className="flex items-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">600 лв</span>
                <span className="text-xl text-gray-400 ml-2">/ година</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex justify-between items-center bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-gray-800/50 hover:border-[#7D4CC3]/50 transition-all duration-300"
            >
              <span className="text-gray-300 text-lg">{benefit.title}</span>
              <span className={`
                px-4 py-2 rounded-xl
                ${benefit.highlight 
                  ? 'bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-white'
                  : 'bg-[#1a1a1a]/50 text-gray-300'}
                font-semibold
              `}>
                {benefit.value}
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a 
              href="https://whop.com/discover/the-agency-bg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#7D4CC3] px-8 py-4 rounded-lg text-white font-semibold shadow-[0_0_20px_rgba(125,76,195,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(125,76,195,0.4)]"
              >
                ЗАПОЧНИ СЕГА
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 