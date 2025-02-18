'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
    setPrevScrollPos(currentScrollPos)
  }, [prevScrollPos])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    
    const throttledScroll = () => {
      if (timeoutId) return
      
      timeoutId = setTimeout(() => {
        handleScroll()
        timeoutId = undefined
      }, 100)
    }

    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = window.innerWidth < 768 ? 80 : 96
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }, [])

  return (
    <nav className={`fixed w-full z-50 bg-[#0A0A33]/90 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="block">
            <Image
              src="/img/agency.png"
              alt="Agency Logo"
              width={200}
              height={60}
              className="w-24 sm:w-32 md:w-48 h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-14">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-200 hover:text-white transition text-base xl:text-lg font-semibold whitespace-nowrap"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-200 hover:text-white transition text-base xl:text-lg font-semibold whitespace-nowrap"
            >
              Съдържание
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-200 hover:text-white transition text-base xl:text-lg font-semibold whitespace-nowrap"
            >
              Цени
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-200 hover:text-white transition text-base xl:text-lg font-semibold whitespace-nowrap"
            >
              Успехи
            </button>
          </div>

          {/* CTA Button */}
          <a 
            href="https://whop.com/discover/the-agency-bg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 lg:px-8 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition text-base xl:text-lg font-semibold shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
          >
            Запишете се сега
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-all duration-300 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 sm:w-6 h-4 sm:h-5 flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-white transform transition-all duration-300 ease-out origin-left ${
                isMenuOpen ? 'rotate-45 translate-x-px' : 'rotate-0'
              }`} />
              <span className={`w-full h-[2px] bg-white transition-all duration-200 ${
                isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
              }`} />
              <span className={`w-full h-[2px] bg-white transform transition-all duration-300 ease-out origin-left ${
                isMenuOpen ? '-rotate-45 translate-x-px' : 'rotate-0'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu с оптимизирани анимации */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out transform-gpu ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            willChange: 'transform, opacity, max-height',
            transform: 'translateZ(0)',
          }}
        >
          <div className="flex flex-col space-y-3 sm:space-y-4 py-3 sm:py-4 px-3 sm:px-4">
            {/* Оптимизирани бутони в менюто */}
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-200 hover:text-white transition-colors text-base sm:text-lg font-semibold transform-gpu hover:translate-x-2 duration-200"
              style={{ transform: 'translateZ(0)' }}
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-200 hover:text-white transition-colors text-base sm:text-lg font-semibold transform-gpu hover:translate-x-2 duration-200"
              style={{ transform: 'translateZ(0)' }}
            >
              Съдържание
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-200 hover:text-white transition-colors text-base sm:text-lg font-semibold transform-gpu hover:translate-x-2 duration-200"
              style={{ transform: 'translateZ(0)' }}
            >
              Цени
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-200 hover:text-white transition-colors text-base sm:text-lg font-semibold transform-gpu hover:translate-x-2 duration-200"
              style={{ transform: 'translateZ(0)' }}
            >
              Успехи
            </button>
            <a 
              href="https://whop.com/discover/the-agency-bg/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors text-base sm:text-lg font-semibold shadow-lg hover:shadow-amber-500/20 text-center transform-gpu"
              style={{ transform: 'translateZ(0)' }}
            >
              Запишете се сега
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 