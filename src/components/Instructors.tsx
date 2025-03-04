'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { optimizedTransition } from './shared/AnimationConfig'

const instructors = [
  {
    name: "Калоян (Cork)",
    role: "Adobe Premiere Pro Expert",
    image: "/img/cork.jpg",
    description: "Специалистът, който ще ви покаже как да овладеете Adobe Premiere Pro до съвършенство. С неговите уроци ще научите най-ефективните техники и трикове, използвани от професионалистите, за да създавате завладяващи видеа."
  },
  {
    name: "Радостин Георгиев",
    role: "After Effects Specialist",
    image: "/img/radonew.png",
    description: "Вашият експерт по After Effects. Той ще ви помогне да добавите динамични анимации, специални ефекти и професионален финес към вашите проекти."
  },
  {
    name: "Сава",
    role: "Short Form Content Expert",
    image: "/img/sava.png",
    description: "Специалист в монетизирането на кратко съдържание (short form content). Той ще ви покаже как да трансформирате вашето съдържание в печеливша машина и как да достигнете до широка аудитория."
  }
];

export default function Instructors() {
  return (
    <section className="relative -mt-16 pt-32 pb-24 overflow-hidden">
      {/* Background с фиксирани позиции */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A32] z-0" />
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#7D4CC3]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-1" />
        <div className="fixed top-1/2 right-0 w-[400px] h-[400px] bg-[#F4A836]/10 rounded-full blur-[100px] translate-x-1/2 z-1" />
        <div className="fixed top-1/3 left-0 w-[450px] h-[450px] bg-[#F4A836]/10 rounded-full blur-[100px] -translate-x-1/4 z-1" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        {/* Header с фиксирани стилове */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={optimizedTransition}
            className="text-4xl md:text-5xl font-bold mb-6 text-white !important"
          >
            За вашите инструктори
          </motion.h2>
          {/* <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...optimizedTransition, delay: 0.1 }}
            className="text-gray-300 !important text-lg"
          >
            Ние сме екип от опитни професионалисти, посветени на това да ви помогнем да постигнете изключителни резултати във видео обработката и създаването на съдържание.
          </motion.p> */}
        </div>

        {/* Instructors Grid с фиксирани стилове */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...optimizedTransition, delay: index * 0.1 }}
              className="bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 transition-optimized hardware-accelerated hover:border-[#7D4CC3]/50"
            >
              <div className="relative h-72 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white !important">{instructor.name}</h3>
              <p className="text-[#F4A836] !important font-medium mb-4">{instructor.role}</p>
              <p className="text-gray-400 !important leading-relaxed">
                {instructor.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA с фиксирани стилове */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={optimizedTransition}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl font-bold text-[#F4A836] !important mb-4">
            АЛГОРИТЪМЪТ НА YOUTUBE ЗАПОЧВА ДА ПРЕДПОЧИТА САМО ВИСОКОКАЧЕСТВЕНИ ВИДЕА, КОИТО ИЗИСКВАТ ВИСОКИ УМЕНИЯ!
          </p>
        </motion.div>
      </div>
    </section>
  )
} 