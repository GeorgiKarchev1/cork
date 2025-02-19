'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Star {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const faqItems = [
  {
    question: "Защо \"Агенцията\" е различна?",
    answer: "Нашият приоритет е да ви научим как да използвате уменията си за видео обработка, за да изградите стабилен и печеливш източник на доходи, чрез доказани и ефективни методи."
  },
  {
    question: "Подходяща ли е тази общност за начинаещи, или е необходимо предварително опит?",
    answer: "Общността приветства хора на всяко ниво. Независимо дали сте начинаещ или имате опит, ще намерите ресурси, съобразени с вашите нужди, които ще ви помогнат да монетизирате уменията си."
  },
  {
    question: "Колко време ще отнеме, за да започна да печеля пари от уменията си за видео обработка?",
    answer: "Това зависи от вашите настоящи умения и отдаденост. Много от нашите ученици започват да виждат резултати в рамките на няколко седмици, като прилагат нашите техники последователно. Трябва наистина да сте отдадени за да се получи както всяко едно начинание."
  }
];

export default function FAQ() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 20 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(newStars);
  }, []);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#7D4CC3]/20 rounded-full blur-[120px] translate-x-1/2 hardware-accelerated" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#F4A836]/10 rounded-full blur-[100px] -translate-x-1/4 hardware-accelerated" />
        
        {/* Animated Stars */}
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
            <span className="text-gray-300">Често задавани</span>
            <br />
            <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
              въпроси
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1 
              }}
              className="bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-[#7D4CC3]/50 transition-optimized hardware-accelerated"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
                {item.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mt-16 hardware-accelerated"
        >
          <a 
            href="https://whop.com/the-agency-bg/?trackingLinkRoute=course"
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
              ЗАПОЧНИ СЕГА
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 