'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 96; // height of the navbar (h-24 = 96px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A33]/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Left */}
          <Link href="/" className="block">
            <Image
              src="/img/agency.png"
              alt="Agency Logo"
              width={200}
              height={60}
              className="w-48 h-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-14">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-200 hover:text-white transition text-lg font-semibold"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-200 hover:text-white transition text-lg font-semibold"
            >
              Съдържание
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-200 hover:text-white transition text-lg font-semibold"
            >
              Цени
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-200 hover:text-white transition text-lg font-semibold"
            >
              Успехи
            </button>
          </div>

          {/* CTA Button - Right */}
          <a 
            href="https://whop.com/discover/the-agency-bg/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition text-lg font-semibold shadow-lg hover:shadow-amber-500/20"
          >
            Запишете се сега
          </a>
        </div>
      </div>
    </nav>
  )
} 