// Създаваме конфигурационен файл за анимации
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5,
    ease: "easeOut",
    // Намаляваме натоварването при мобилни устройства
    reducedMotion: "user"
  }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const optimizedTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  duration: 0.3,
  ease: "easeOut"
};

export const optimizedVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: optimizedTransition 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: optimizedTransition
  }
}; 