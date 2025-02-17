'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[#0A0A32]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7D4CC3]/20 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A836]/20 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">Успехите на нашите</span>
            <br />
            <span className="bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text">
              студенти
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#141414]/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-[#7D4CC3]/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-[#F4A836]/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <h3 className="text-gray-200 font-semibold text-lg">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-300 flex-grow">{testimonial.text}</p>
              <div className="flex items-center justify-end mt-4 pt-2 border-t border-gray-800/30">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-[#F4A836]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(244,168,54,0.2)] hover:shadow-[0_0_40px_rgba(244,168,54,0.3)] transition-all duration-300"
          >
            <video
              className="w-full h-full object-cover"
              controls
              poster="/img/video-testimonial-1.jpg"
            >
              <source src="/img/video1111.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Second video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(244,168,54,0.2)] hover:shadow-[0_0_40px_rgba(244,168,54,0.3)] transition-all duration-300"
          >
            <video
              className="w-full h-full object-cover"
              controls
              poster="/img/video-testimonial-2.jpg"
            >
              <source src="/img/video222.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Third testimonial */}
          <motion.div
            key="video-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(244,168,54,0.2)] hover:shadow-[0_0_40px_rgba(244,168,54,0.3)] transition-all duration-300"
          >
            <video
              className="w-full h-full object-cover"
              controls
              poster="/img/video-testimonial-3.jpg"
            >
              <source src="/img/rek.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
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
    </section>
  )
}