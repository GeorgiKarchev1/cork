'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Dot {
  top: number;
  left: number;
  duration: number;
}

const features = [
  {
    icon: "✨",
    title: "Научете се да използвате всяка ключова функция в Premiere Pro и разкрийте напредналите техники, които професионалистите използват."
  },
  {
    icon: "📊",
    title: "Почувствайте се като истински експерт, когато всяко видео, което обработвате, привлича хиляди гледания, харесвания и споделяния в социалните мрежи."
  },
  {
    icon: "😊",
    title: "Как бихте се чувствали, ако можехте да усвоите тайните на вайръл видеомонтиране с помощта на Kорк? Нямаше ли това да трансформира живота ви за дни?"
  },
  {
    icon: "💰",
    title: "Вашите клиенти започват да ви плащат по $1000... $2000... дори $5000 на месец, защото не могат да се наситят на резултатите, които им осигурявате, и не искат да рискуват да ви изгубят."
  },
  {
    icon: "⏰",
    title: "Само за часове можете да преобразувате големи количества сурови видеоклипове в професионално изглеждащи и кинематографични творения."
  },
  {
    icon: "🏆",
    title: "Качвате готовото видео и веднага виждате как десетки или стотици нови абонати се присъединяват към YouTube канала ви."
  }
]

export default function Features() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 20 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 5
    }));
    setDots(newDots);
  }, []);

  return (
    <section id="features" className="relative -mt-16 pt-12 pb-24 overflow-hidden">
      {/* Fancy Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7D4CC3]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#F4A836]/10 rounded-full blur-[100px] translate-x-1/2" />
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#F4A836]/10 rounded-full blur-[100px] -translate-x-1/4" />
        
        {/* Обновен градиент за по-плавен преход */}
        <div className="absolute inset-0 bg-[#0A0A32]" />
      </div>

      <div className="container relative mx-auto px-4 pt-12">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-300"
        >
          Какво ще научите?
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800/50 hover:border-[#7D4CC3]/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <span className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </span>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Dots */}
        <div className="absolute inset-0 pointer-events-none">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#7D4CC3]/20 rounded-full"
              style={{
                top: `${dot.top}%`,
                left: `${dot.left}%`,
                animation: `float ${dot.duration}s infinite`
              }}
            />
          ))}
        </div>

        <div className="text-center mt-12">
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
              КЪМ КУРСА
            </motion.button>
          </a>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
        }
      `}</style>
    </section>
  )
} 