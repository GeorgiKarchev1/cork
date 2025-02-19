'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { optimizedTransition, optimizedVariants } from './shared/AnimationConfig'

const testimonials = [
  {
    name: "Nikola Nikolov",
    text: "Изключително съм доволен! Научих много неща само за седмица и малко. Coach call-овете дори няма да ги коментирам. Влезте и вижте сами ;D. Когато нещо не е ясно, винаги се намира някой, който да помогне. Взаимно се надъхваме и бутаме нагоре. Не забравяйте, че ако вие не искате да си помогнете, никой не може!",
    avatar: "/img/nikolanikolov.jpg"
  },
  {
    name: "Dimitar Yordanov",
    text: "В групата сьм от една седмица и за това кратко време успях да науча много неща, които значително подобриха начина ми на обработване. Определено си заслужава на 100% да се присъедините!",
    avatar: "/img/dm.jpg"
  },
  {
    name: "e.ge0rgiew",
    text: "Курсът е страхотен - за кратко време научаваш толкова много неща! Перфектен е за хора, които искат да се занимават с видеообработка и да изградят успешна стратегия за YouTube.",
    avatar: "/img/avatar43.jpg"
  },
  {
    name: "Geokio",
    text: "Считам, че това е НАЙ-ДОБРАТА група за всеки, който иска да се развие като едитр, стратегист и като цяло да научи много неща, сворзани с YouTube. Community-то е уникално - всеки втре е готов да се развива, да помага на другите и да споделя ценен опит. Строго препоръчвам!!",
    avatar: "/img/avatar4.jpg"
  },
  {
    name: "sinnervisuals",
    text: "Групата си заслужава! Всеки втре е на разположение, има asset-и които помагат и улесняват работата супер много, coaching call-овете тепрва започват, а програмата е доста силна. Препорьчвам ви да се орентирате докато е рано и да влизате!",
    avatar: "/img/sr.jpg"
  },
  {
    name: "Denis Raimov",
    text: "Изчаках да мине 1 месец откакто съм в тази \"общност\", за да си дам мнението. Реално това си е точно общност, има много повече от просто курс, който предстои да излезе. Само със закупуването на абонамент ще получите достъп до много ресурси, които ще ви избият абонамента многократно.",
    avatar: "/img/avatar1.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Оптимизирани градиентни орбове */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7D4CC3]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 hardware-accelerated" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#F4A836]/10 rounded-full blur-[100px] translate-x-1/2 hardware-accelerated" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#7D4CC3]/15 rounded-full blur-[100px] hardware-accelerated" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div 
          variants={optimizedVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={optimizedTransition}
          className="text-center mb-16 hardware-accelerated"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">Какво казват</span>
            <br />
            <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
              нашите ученици
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={optimizedVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1 
              }}
              className="bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-[#7D4CC3]/50 transition-optimized hardware-accelerated"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden hardware-accelerated">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-optimized"
                    sizes="48px"
                    quality={75}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-300">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
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
              className="bg-[#7D4CC3] px-8 py-4 rounded-lg text-white font-semibold shadow-[0_0_20px_rgba(125,76,195,0.3)] transition-optimized hover:shadow-[0_0_25px_rgba(125,76,195,0.4)]"
            >
              КЪМ КУРСА
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}